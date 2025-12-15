import { Router } from "express";
import { userController } from "./user.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createUserSchema, updateUserSchema } from "./user.validator";

const router = Router();

router.post("/", validate(createUserSchema), userController.createUser);
router.get("/", userController.listUsers);
router.get("/:name", userController.getUserByName);
router.put("/:name", validate(updateUserSchema), userController.updateUserByName);

export default router;
