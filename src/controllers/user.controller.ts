import type { Request, Response, NextFunction } from "express";
import type { AuthRequest } from "../middlewares/auth.middleware";
import * as userService from "../services/user.service";

export async function listUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await userService.listUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

export async function getUserByName(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await userService.getUserByName(req.params.name);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function updateUserByName(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const updated = await userService.updateUserByName(
      req.params.name,
      req.body
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newUser = await userService.register(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await userService.login(req.body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

export function profile(req: AuthRequest, res: Response) {
  res.json({
    message: "Protected content",
    user: req.user,
  });
}
