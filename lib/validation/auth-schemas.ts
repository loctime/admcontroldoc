import { z } from "zod"

// Schema para login
export const loginSchema = z.object({
  email: z.string().min(1, "El email es obligatorio").email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  rememberMe: z.boolean().optional(),
})

// Schema para registro
export const registerSchema = z.object({
  email: z.string().min(1, "El email es obligatorio").email("Email inválido"),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "La contraseña debe contener al menos una mayúscula, una minúscula y un número",
    ),
  confirmPassword: z.string(),
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  company: z.string().optional(),
  acceptTerms: z.boolean().refine((val) => val === true, "Debes aceptar los términos y condiciones"),
})

// Validar que las contraseñas coincidan
export const registerSchemaWithPasswordMatch = registerSchema.refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
})

// Schema para recuperar contraseña
export const forgotPasswordSchema = z.object({
  email: z.string().min(1, "El email es obligatorio").email("Email inválido"),
})

// Schema para cambiar contraseña
export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "La contraseña actual es obligatoria"),
  newPassword: z
    .string()
    .min(8, "La nueva contraseña debe tener al menos 8 caracteres")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "La contraseña debe contener al menos una mayúscula, una minúscula y un número",
    ),
  confirmNewPassword: z.string(),
})

export const changePasswordSchemaWithMatch = changePasswordSchema.refine(
  (data) => data.newPassword === data.confirmNewPassword,
  {
    message: "Las contraseñas no coinciden",
    path: ["confirmNewPassword"],
  },
)

// Tipos TypeScript derivados de los schemas
export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchemaWithPasswordMatch>
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
export type ChangePasswordFormData = z.infer<typeof changePasswordSchemaWithMatch>
