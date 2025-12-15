import type { Request, Response, NextFunction } from "express";
import type { ZodTypeAny } from "zod";
import { AppError } from "../errors/AppError";
import { Messages } from "../constants/messages";

export const validate = (schema: ZodTypeAny) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const { fieldErrors, formErrors } = result.error.flatten();
      return next(
        new AppError(400, Messages.ERROR.VALIDATION_FAILED, {
          fieldErrors,
          formErrors,
        })
      );
    }

    req.body = result.data;
    next();
  };
};
