import { useState } from "react";
import { Button } from "../ui/button";
import type { RecipeType } from "../../store/recipes";
import RecipeDetailed from "./recipe-detailed";

interface Props {
  recipe: RecipeType;
  onDelete: () => void;
  onArchive?: () => void;
  onUnarchive?: () => void;
}

export default function RecipeCard({
  recipe,
  onDelete,
  onArchive,
  onUnarchive,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {}
      <div
        onClick={() => setOpen(true)}
        className="
          border rounded-xl p-4 space-y-2 cursor-pointer
          transition-all duration-300
          hover:shadow-lg hover:scale-[1.02]
          bg-white
        "
      >
        <h3 className="text-lg font-semibold text-gray-800">
          {recipe.title}
        </h3>

        <p className="text-sm text-gray-500">
          {recipe.description}
        </p>

        {}
        <div
          className="flex gap-2 pt-3 border-t mt-3"
          onClick={(e) => e.stopPropagation()}
        >
          {onArchive && (
            <Button onClick={onArchive}>Archive</Button>
          )}

          {onUnarchive && (
            <Button onClick={onUnarchive}>Unarchive</Button>
          )}

          <Button variant="destructive" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>

      {}
      {open && (
        <RecipeDetailed
          recipe={recipe}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
