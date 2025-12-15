import type { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  age: number;
  email: string;
  password: string;
  createdAt: Date;
}

export interface CreateUserInput {
  name: string;
  age: number;
  email: string;
  password: string;
}

export interface UpdateUserInput {
  name?: string;
  age?: number;
  email?: string;
}

export interface UserResponse {
  id: string;
  name: string;
  age: number;
  email: string;
  createdAt: Date;
}
