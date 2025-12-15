import jwt from "jsonwebtoken";
import { env } from "../../config/env";
import { AppError } from "../../errors/AppError";
import { Messages } from "../../constants/messages";
import { hashPassword, comparePassword } from "../../utils/hash";
import { userRepository } from "../user/user.repository";
import type { RegisterInput, LoginInput, LoginResponse } from "./auth.types";

export const authService = {
  async register(data: RegisterInput) {
    const { name, email, password, age } = data;

    const existing = await userRepository.findByEmail(email);
    if (existing) {
      throw new AppError(400, Messages.ERROR.USER_ALREADY_EXISTS);
    }

    const hashedPassword = await hashPassword(password);

    return userRepository.create({
      name,
      email,
      password: hashedPassword,
      age,
    });
  },

  async login(data: LoginInput): Promise<LoginResponse> {
    const { email, password } = data;

    const user = await userRepository.findByEmailWithPassword(email);
    if (!user) {
      throw new AppError(401, Messages.ERROR.INVALID_CREDENTIALS);
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      throw new AppError(401, Messages.ERROR.INVALID_CREDENTIALS);
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      env.JWT_SECRET,
      { expiresIn: env.JWT_EXPIRES_IN } as jwt.SignOptions
    );

    return {
      result: "success",
      token,
      user: {
        id: user._id.toString(),
        name: user.name,
        age: user.age,
        email: user.email,
      },
    };
  },
};
