import { z } from "zod";

const variantValidationSchema = z.object({
  type: z.string().min(1, "Type is required"),
  value: z.string().min(1, "Value is required"),
});

const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative("Quantity must be a non-negative integer"),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().nonnegative("Price must be a non-negative number"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string().min(1, "Tags must be non-empty strings")),
  variants: z.array(variantValidationSchema).nonempty("Variants are required"),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
