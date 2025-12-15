import { userRepository } from "./user.repository";
import type { CreateUserInput, UpdateUserInput, IUser } from "./user.types";

export const userService = {
  async createUser(data: CreateUserInput): Promise<IUser> {
    return userRepository.create(data);
  },

  async listUsers(): Promise<IUser[]> {
    return userRepository.findAll();
  },

  async getUserByName(name: string): Promise<IUser | null> {
    return userRepository.findByName(name);
  },

  async getUserById(id: string): Promise<IUser | null> {
    return userRepository.findById(id);
  },

  async updateUserByName(name: string, data: UpdateUserInput): Promise<IUser | null> {
    return userRepository.updateByName(name, data);
  },

  async deleteUser(id: string): Promise<IUser | null> {
    return userRepository.deleteById(id);
  },
};
