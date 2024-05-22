import { z } from "zod";

const orderValidationSchema = z.object({
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  productId: z.string().min(1, "Product ID is required"),
  price: z.number().min(0, "Price must be a non-negative number"),
  quantity: z.number().int().min(1, "Quantity must be a positive integer"),
});


export default orderValidationSchema;
