

import RecipeCard from "./recipe-card";

import type { RecipeType } from "../../store/recipes";

interface Props {
  recipes: RecipeType[];
  onDelete: (id: string) => void;
  onArchive?: (id: string) => void;
  onUnarchive?: (id: string) => void;
}

export default function RecipeList({
  recipes,
  onDelete,
  onArchive,
  onUnarchive,
}: Props) {
  if (!recipes.length) {
    return <p className="text-gray-500">No recipes found.</p>;
  }

  return (
    <div className="space-y-4">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onDelete={() => onDelete(recipe.id)}
          onArchive={onArchive ? () => onArchive(recipe.id) : undefined}
          onUnarchive={onUnarchive ? () => onUnarchive(recipe.id) : undefined}
        />
      ))}
    </div>
  );
}
