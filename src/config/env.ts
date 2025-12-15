import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.string().optional(),
  PORT: z.coerce.number().int().positive().default(3000),

  MONGO_URI: z.string().min(1, "MONGO_URI is required"),

  JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
  JWT_EXPIRES_IN: z.string().min(1).default("20m"),
});

export type Env = z.infer<typeof envSchema>;
let parsedEnv: Env;

try {
  parsedEnv = envSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("❌ Missing or invalid environment variables:");
    console.error(JSON.stringify(error.flatten(), null, 2));
    console.error(
      "Please create a .env file (see .env.example) before starting the server."
    );
    process.exit(1);
  }

  throw error;
}

export const env = parsedEnv;
