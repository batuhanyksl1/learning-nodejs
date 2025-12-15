import type { Request, Response, NextFunction } from "express";
import { authService } from "./auth.service";
import type { AuthRequest } from "./auth.types";

export const authController = {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = await authService.register(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  },

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.login(req.body);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },

  profile(req: AuthRequest, res: Response) {
    res.json({
      message: "Protected content",
      user: req.user,
    });
  },
};
