import type { Request } from "express";

export interface RegisterInput {
  name: string;
  age: number;
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface JwtPayload {
  id: string;
  email: string;
}

export interface AuthRequest extends Request {
  user?: JwtPayload;
}

export interface LoginResponse {
  result: string;
  token: string;
  user: {
    id: string;
    name: string;
    age: number;
    email: string;
  };
}
