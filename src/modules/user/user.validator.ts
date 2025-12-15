import { z } from "zod";
import { Messages } from "../../constants/messages";

export const createUserSchema = z.object({
  name: z.string().min(2, Messages.VALIDATION.NAME_MIN_LENGTH),
  age: z.number().min(1, Messages.VALIDATION.AGE_MIN),
  email: z.string().email(Messages.VALIDATION.EMAIL_INVALID),
  password: z.string().min(8, Messages.VALIDATION.PASSWORD_MIN_LENGTH),
});

export const updateUserSchema = z.object({
  name: z.string().min(2, Messages.VALIDATION.NAME_MIN_LENGTH).optional(),
  age: z.number().min(1, Messages.VALIDATION.AGE_MIN).optional(),
  email: z.string().email(Messages.VALIDATION.EMAIL_INVALID).optional(),
});

export type CreateUserSchemaType = z.infer<typeof createUserSchema>;
export type UpdateUserSchemaType = z.infer<typeof updateUserSchema>;
