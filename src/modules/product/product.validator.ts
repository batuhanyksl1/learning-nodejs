import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2, "Product name must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.number().positive("Price must be positive"),
  category: z.string().min(2, "Category must be at least 2 characters"),
  stock: z.number().int().min(0, "Stock cannot be negative"),
});

export const updateProductSchema = z.object({
  name: z.string().min(2).optional(),
  description: z.string().min(10).optional(),
  price: z.number().positive().optional(),
  category: z.string().min(2).optional(),
  stock: z.number().int().min(0).optional(),
});

export type CreateProductSchemaType = z.infer<typeof createProductSchema>;
export type UpdateProductSchemaType = z.infer<typeof updateProductSchema>;
