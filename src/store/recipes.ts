import { create } from "zustand";
import { dummyData } from "../data";

export type Ingredient = {
  name: string;
  unit: string;
  quantity: number;
};

export type RecipeType = {
  id: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
};

interface RecipesState {
  recipes: RecipeType[];
  archivedRecipes: RecipeType[];
  addRecipe: (recipe: RecipeType) => void;
  deleteRecipe: (id: string) => void;
  archiveRecipe: (id: string) => void;
  unarchiveRecipe: (id: string) => void;
}

export const useRecipesStore = create<RecipesState>((set) => ({
  recipes: dummyData,
  archivedRecipes: [],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [recipe, ...state.recipes],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      archivedRecipes: state.archivedRecipes.filter((r) => r.id !== id),
    })),

  archiveRecipe: (id) =>
    set((state) => {
      const recipe = state.recipes.find((r) => r.id === id);
      if (!recipe) return state;
      return {
        recipes: state.recipes.filter((r) => r.id !== id),
        archivedRecipes: [recipe, ...state.archivedRecipes],
      };
    }),

  unarchiveRecipe: (id) =>
    set((state) => {
      const recipe = state.archivedRecipes.find((r) => r.id === id);
      if (!recipe) return state;
      return {
        archivedRecipes: state.archivedRecipes.filter((r) => r.id !== id),
        recipes: [recipe, ...state.recipes],
      };
    }),
}));
