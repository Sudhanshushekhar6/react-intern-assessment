import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";


const schema = z.object({
  title: z.string().min(3),
  description: z.string().min(5),
  ingredients: z.array(
    z.object({
      name: z.string().min(1),
      quantity: z.number().min(1),
      unit: z.string().min(1),
    })
  ),
});

export type CreateRecipeFormData = z.infer<typeof schema>;


export default function CreateForm({
  onSubmit,
}: {
  onSubmit: (data: CreateRecipeFormData) => void;
}) {
  const form = useForm<CreateRecipeFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      ingredients: [{ name: "", quantity: 1, unit: "nos" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "ingredients",
  });

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 max-w-xl mx-auto"
    >
      <h2 className="text-xl font-semibold">Add new recipe</h2>

      {}
      <div>
        <label className="text-sm font-medium">Recipe Title</label>
        <Input placeholder="Enter title" {...form.register("title")} />
      </div>

      {}
      <div>
        <label className="text-sm font-medium">Description</label>
        <Textarea
          placeholder="Enter description"
          {...form.register("description")}
        />
      </div>

      {}
      <div className="space-y-2">
        <label className="text-sm font-medium">Ingredients</label>

        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-center">
            <Input
              placeholder="Name"
              {...form.register(`ingredients.${index}.name`)}
            />

            <Input
              type="number"
              className="w-20"
              {...form.register(`ingredients.${index}.quantity`, {
                valueAsNumber: true,
              })}
            />

            <select
              className="border rounded px-2 py-1"
              {...form.register(`ingredients.${index}.unit`)}
            >
              <option value="nos">nos</option>
              <option value="ml">ml</option>
              <option value="g">g</option>
            </select>

            <Button
              type="button"
              variant="destructive"
              onClick={() => remove(index)}
            >
              X
            </Button>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={() =>
            append({ name: "", quantity: 1, unit: "nos" })
          }
        >
          + Add ingredient
        </Button>
      </div>

      <Button type="submit" className="w-full">
        Create Recipe
      </Button>
    </form>
  );
}
