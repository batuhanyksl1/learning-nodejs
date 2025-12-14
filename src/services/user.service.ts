import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { env } from "../config/env";
import { HttpError } from "../utils/httpError";
import type {
  CreateUserInput,
  RegisterInput,
  LoginInput,
} from "../schemas/user.schema";

export async function createUser(data: CreateUserInput) {
  return await User.create(data);
}

export async function listUsers() {
  return await User.find();
}

export async function getUserByName(name: string) {
  return await User.findOne({ name }).select("__v");
}

export async function updateUserByName(name: string, data: unknown) {
  const user = await User.findOne({ name }).select("__v");

  return await User.findOneAndUpdate(
    { name, __v: (user?.__v ?? 0) + 1 },
    data as any,
    { new: true }
  );
}

export async function register(data: RegisterInput) {
  const { name, email, password, age } = data;

  const existing = await User.findOne({ email });
  if (existing) {
    throw new HttpError(400, "User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return await User.create({
    name,
    email,
    password: hashedPassword,
    age,
  });
}

export async function login(data: LoginInput) {
  const { email, password } = data;

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new HttpError(401, "Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new HttpError(401, "Invalid credentials");
  }

  const token = jwt.sign({ id: user._id, email: user.email }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  } as jwt.SignOptions);

  const userInfo = {
    id: user._id,
    name: user.name,
    age: user.age,
    email: user.email,
  };

  return {
    result: "success",
    token,
    user: userInfo,
  };
}
