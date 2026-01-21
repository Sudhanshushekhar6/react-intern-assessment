
import { useState } from "react";
import RecipeList from "../components/recipes/recipe-list";
import { useRecipesStore } from "../store/recipes";
import { Input } from "../components/ui/input";

const PAGE_SIZE = 3;

export default function HomePage() {
  const { recipes, deleteRecipe, archiveRecipe } = useRecipesStore();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  
  const handleDelete = (id: string) => {
    const ok = window.confirm("Are you sure you want to delete this recipe?");
    if (ok) {
      deleteRecipe(id);
      alert("Recipe deleted successfully");
    }
  };

  const handleArchive = (id: string) => {
    archiveRecipe(id);
    alert("Recipe archived");
  };

  const filtered = recipes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  
  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 animate-in fade-in">
        <p className="text-5xl">🍳</p>
        <p className="text-lg font-medium">No recipes found</p>
        <p className="text-sm">Click Create to add one</p>
      </div>
    );
  }


  return (
    <div className="space-y-6 p-4 animate-in fade-in">
      {}
      <Input
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {}
      <RecipeList
        recipes={paginated}
        onDelete={handleDelete}
        onArchive={handleArchive}
      />

      {}
      <div className="flex items-center justify-center gap-4">
        <button
          className="px-3 py-1 border rounded disabled:opacity-40 transition"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <span className="text-sm text-gray-500">
          Page {page}
        </span>

        <button
          className="px-3 py-1 border rounded disabled:opacity-40 transition"
          disabled={page * PAGE_SIZE >= filtered.length}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
