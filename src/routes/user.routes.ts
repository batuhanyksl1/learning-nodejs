import { Router } from "express";
import * as userController from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import {
  createUserSchema,
  registerSchema,
  loginSchema,
} from "../schemas/user.schema";
import { authenticateToken } from "../middlewares/auth.middleware";

const router = Router();

router.post(
  "/create-user",
  validate(createUserSchema),
  userController.createUser
);
router.get("/users", userController.listUsers);
router.get("/users/:name", userController.getUserByName);
router.post("/update-user/:name", userController.updateUserByName);

router.post("/register", validate(registerSchema), userController.register);
router.post("/login", validate(loginSchema), userController.login);
router.get("/profile", authenticateToken, userController.profile);

export default router;
