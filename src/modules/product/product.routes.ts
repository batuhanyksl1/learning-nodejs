import { Router } from "express";
import { productController } from "./product.controller";
import { validate } from "../../middlewares/validate.middleware";
import { createProductSchema, updateProductSchema } from "./product.validator";

const router = Router();

router.post("/", validate(createProductSchema), productController.createProduct);
router.get("/", productController.listProducts);
router.get("/:id", productController.getProductById);
router.put("/:id", validate(updateProductSchema), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

export default router;
