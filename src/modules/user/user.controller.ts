import type { Request, Response, NextFunction } from "express";
import { userService } from "./user.service";
import { Messages } from "../../constants/messages";

export const userController = {
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  },

  async listUsers(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.listUsers();
      res.json(users);
    } catch (err) {
      next(err);
    }
  },

  async getUserByName(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userService.getUserByName(req.params.name);
      if (!user) {
        return res.status(404).json({ error: Messages.ERROR.USER_NOT_FOUND });
      }
      return res.json(user);
    } catch (err) {
      next(err);
    }
  },

  async updateUserByName(req: Request, res: Response, next: NextFunction) {
    try {
      const updated = await userService.updateUserByName(req.params.name, req.body);
      if (!updated) {
        return res.status(404).json({ error: Messages.ERROR.USER_NOT_FOUND });
      }
      res.json(updated);
    } catch (err) {
      next(err);
    }
  },
};
