import { z } from "zod";
import { Messages } from "../../constants/messages";

export const registerSchema = z.object({
  name: z.string().min(2, Messages.VALIDATION.NAME_MIN_LENGTH),
  age: z.number().min(1, Messages.VALIDATION.AGE_MIN),
  email: z.string().email(Messages.VALIDATION.EMAIL_INVALID),
  password: z.string().min(6, Messages.VALIDATION.PASSWORD_MIN_LENGTH),
});

export const loginSchema = z.object({
  email: z.string().email(Messages.VALIDATION.EMAIL_INVALID),
  password: z.string().min(1, Messages.VALIDATION.PASSWORD_REQUIRED),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
export type LoginSchemaType = z.infer<typeof loginSchema>;
