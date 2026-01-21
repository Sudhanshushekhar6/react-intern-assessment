import RecipeList from "../components/recipes/recipe-list";
import { useRecipesStore } from "../store/recipes";

export default function ArchivePage() {
  const { archivedRecipes, deleteRecipe, unarchiveRecipe } =
    useRecipesStore();


  const handleDelete = (id: string) => {
    const ok = window.confirm(
      "Are you sure you want to permanently delete this recipe?"
    );
    if (ok) {
      deleteRecipe(id);
      alert("Recipe deleted successfully");
    }
  };

  const handleUnarchive = (id: string) => {
    unarchiveRecipe(id);
    alert("Recipe moved back to Home");
  };

  if (archivedRecipes.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-gray-500 animate-in fade-in">
      <p className="text-5xl">📦</p>
      <p className="text-lg font-medium">No archived recipes</p>
    </div>
  );
}


 
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        Archived Recipes
      </h2>

      <RecipeList
        recipes={archivedRecipes}
        onDelete={handleDelete}
        onUnarchive={handleUnarchive}
      />
    </div>
  );
}
