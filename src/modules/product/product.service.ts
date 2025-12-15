import { productRepository } from "./product.repository";
import type { CreateProductInput, UpdateProductInput, IProduct } from "./product.types";

export const productService = {
  async createProduct(data: CreateProductInput): Promise<IProduct> {
    return productRepository.create(data);
  },

  async listProducts(): Promise<IProduct[]> {
    return productRepository.findAll();
  },

  async getProductById(id: string): Promise<IProduct | null> {
    return productRepository.findById(id);
  },

  async getProductsByCategory(category: string): Promise<IProduct[]> {
    return productRepository.findByCategory(category);
  },

  async updateProduct(id: string, data: UpdateProductInput): Promise<IProduct | null> {
    return productRepository.updateById(id, data);
  },

  async deleteProduct(id: string): Promise<IProduct | null> {
    return productRepository.deleteById(id);
  },
};
