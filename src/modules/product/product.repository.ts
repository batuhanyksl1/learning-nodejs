import { Product } from "./product.model";
import type { CreateProductInput, UpdateProductInput, IProduct } from "./product.types";

export const productRepository = {
  async create(data: CreateProductInput): Promise<IProduct> {
    return Product.create(data);
  },

  async findAll(): Promise<IProduct[]> {
    return Product.find();
  },

  async findById(id: string): Promise<IProduct | null> {
    return Product.findById(id);
  },

  async findByCategory(category: string): Promise<IProduct[]> {
    return Product.find({ category });
  },

  async updateById(id: string, data: UpdateProductInput): Promise<IProduct | null> {
    return Product.findByIdAndUpdate(id, data, { new: true });
  },

  async deleteById(id: string): Promise<IProduct | null> {
    return Product.findByIdAndDelete(id);
  },
};
