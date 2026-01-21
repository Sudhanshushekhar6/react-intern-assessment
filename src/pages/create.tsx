
import CreateForm from "../components/create/create-form";
import type { CreateRecipeFormData } from "../components/create/create-form";
import { useRecipesStore } from "../store/recipes";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
  const addRecipe = useRecipesStore((s) => s.addRecipe);
  const navigate = useNavigate();

  const handleSubmit = (data: CreateRecipeFormData) => {
    addRecipe({
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description,
      ingredients: data.ingredients, // ✅ FIXED
    });

    alert("Recipe created successfully");
    navigate("/");
  };

  return (
    <div className="p-4 animate-in fade-in">
      <CreateForm onSubmit={handleSubmit} />
    </div>
  );
}
