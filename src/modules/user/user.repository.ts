import { User } from "./user.model";
import type { CreateUserInput, UpdateUserInput, IUser } from "./user.types";

export const userRepository = {
  async create(data: CreateUserInput): Promise<IUser> {
    return User.create(data);
  },

  async findAll(): Promise<IUser[]> {
    return User.find();
  },

  async findById(id: string): Promise<IUser | null> {
    return User.findById(id);
  },

  async findByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email });
  },

  async findByEmailWithPassword(email: string): Promise<IUser | null> {
    return User.findOne({ email }).select("+password");
  },

  async findByName(name: string): Promise<IUser | null> {
    return User.findOne({ name });
  },

  async updateByName(name: string, data: UpdateUserInput): Promise<IUser | null> {
    const user = await User.findOne({ name }).select("__v");
    return User.findOneAndUpdate(
      { name, __v: (user?.__v ?? 0) + 1 },
      data,
      { new: true }
    );
  },

  async updateById(id: string, data: UpdateUserInput): Promise<IUser | null> {
    return User.findByIdAndUpdate(id, data, { new: true });
  },

  async deleteById(id: string): Promise<IUser | null> {
    return User.findByIdAndDelete(id);
  },
};
