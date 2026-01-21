import { Button } from "../ui/button";
import type { RecipeType } from "../../store/recipes";

export default function RecipeDetailed({
  recipe,
  onClose,
}: {
  recipe: RecipeType;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative animate-in fade-in zoom-in-95">
        
        {}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {}
        <h2 className="text-xl font-semibold">{recipe.title}</h2>
        <p className="text-sm text-gray-500 mt-1">
          {recipe.description}
        </p>

        {}
        <table className="w-full mt-4 border-collapse text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="py-2">Ingredient</th>
              <th>Quantity</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {recipe.ingredients.map((i, idx) => (
              <tr key={idx} className="border-b last:border-0">
                <td className="py-2">{i.name}</td>
                <td>{i.quantity}</td>
                <td>{i.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
