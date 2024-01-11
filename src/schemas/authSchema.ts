import { z } from "zod";

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordSchema = z
  .object({
    password: z.string().min(6, {
      message: "Minimum 6 character is required",
    }),
    confirmPassword: z.string().min(6, {
      message: "Minimum 6 character is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password should be same!",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name is required",
    }),
    email: z.string().email({
      message: "Email is required",
    }),
    password: z.string().min(6, {
      message: "Minimum 6 character is required",
    }),
    confirmPassword: z.string().min(6, {
      message: "Minimum 6 character is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password should be same!",
    path: ["confirmPassword"],
  });
