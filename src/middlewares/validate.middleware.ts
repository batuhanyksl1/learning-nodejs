import type { Request, Response, NextFunction } from "express";
import type { ZodTypeAny } from "zod";
import { HttpError } from "../utils/httpError";

export const validate = (schema: ZodTypeAny) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const { fieldErrors, formErrors } = result.error.flatten();
      return next(
        new HttpError(400, "Validation failed", {
          fieldErrors,
          formErrors,
        })
      );
    }

    req.body = result.data;
    next();
  };
};
