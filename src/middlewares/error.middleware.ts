import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError";
import { Messages } from "../constants/messages";
import { logger } from "../utils/logger";

export function errorMiddleware(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: err.message,
      details: err.details,
    });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      error: Messages.ERROR.VALIDATION_FAILED,
      details: err.flatten(),
    });
  }

  logger.error("Global error:", err);

  return res.status(500).json({ error: Messages.ERROR.INTERNAL_ERROR });
}
