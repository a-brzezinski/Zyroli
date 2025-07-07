import { z } from "zod";

export const emailSchema = z.string().email("Invalid email address");

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(100, "Password must be at most 100 characters long");

export const signUpSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(50, "Username must be at most 50 characters long"),
  email: emailSchema,
  password: passwordSchema,
});

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
export type SignInSchema = z.infer<typeof signInSchema>;
