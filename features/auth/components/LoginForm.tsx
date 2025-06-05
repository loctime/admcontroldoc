"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock, ArrowRight, AlertCircle } from "lucide-react"
import { useAuth } from "../hooks/useAuth"
import { useForm } from "../../../hooks/useForm"
import { loginSchema, type LoginFormData } from "../../../lib/validation/auth-schemas"
import { useLanguage } from "../../../context/LanguageContext"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const { signInWithEmail, error, clearError } = useAuth()
  const { t } = useLanguage()
  const navigate = useNavigate()

  const validateLoginForm = (values: LoginFormData) => {
    try {
      loginSchema.parse(values)
      return {}
    } catch (error: any) {
      const fieldErrors: Partial<Record<keyof LoginFormData, string>> = {}
      error.errors?.forEach((err: any) => {
        if (err.path?.[0]) {
          fieldErrors[err.path[0] as keyof LoginFormData] = err.message
        }
      })
      return fieldErrors
    }
  }

  const handleLoginSubmit = async (values: LoginFormData) => {
    try {
      clearError()
      await signInWithEmail(values.email, values.password, values.rememberMe)
      navigate("/") // Redirigir al dashboard o página principal
    } catch (error) {
      // El error ya se maneja en el contexto
      console.error("Login failed:", error)
    }
  }

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: validateLoginForm,
    onSubmit: handleLoginSubmit,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    handleChange(name as keyof LoginFormData, type === "checkbox" ? checked : value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gray-900/50 rounded-2xl border border-cyan-500/20 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Iniciar Sesión
          </h1>
          <p className="text-gray-300">{t("login_subtitle")}</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center">
            <AlertCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              {t("login_email_label")}
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none transition-colors text-white ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-cyan-500/20 focus:border-cyan-500"
                }`}
                placeholder={t("login_email_placeholder")}
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
              />
            </div>
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-400" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              {t("login_password_label")}
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-12 py-3 bg-gray-800/50 border rounded-lg focus:outline-none transition-colors text-white ${
                  errors.password ? "border-red-500 focus:border-red-500" : "border-cyan-500/20 focus:border-cyan-500"
                }`}
                placeholder={t("login_password_placeholder")}
                aria-describedby={errors.password ? "password-error" : undefined}
                aria-invalid={!!errors.password}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                aria-label={showPassword ? t("login_password_hide") : t("login_password_show")}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <p id="password-error" className="mt-2 text-sm text-red-400" role="alert">
                {errors.password}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={values.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 text-cyan-500 bg-gray-800 border-cyan-500/20 rounded focus:ring-cyan-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-gray-300">{t("login_remember_me")}</span>
            </label>
            <Link
              to="/auth/forgot-password"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-1"
            >
              {t("login_forgot_password")}
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {t("login_loading")}

              </>
            ) : (
              <>
                {t("login_submit")}

                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-300">
            {t("login_no_account")} 
            <Link
              to="/auth/register"
              className="text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-1"
            >
              {t("login_register_here")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock, ArrowRight, AlertCircle } from "lucide-react"
import { useAuth } from "../hooks/useAuth"
import { useForm } from "../../../hooks/useForm"
import { loginSchema, type LoginFormData } from "../../../lib/validation/auth-schemas"
import { useLanguage } from "../../../context/LanguageContext"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const { signInWithEmail, error, clearError } = useAuth()
  const { t } = useLanguage()
  const navigate = useNavigate()

  const validateLoginForm = (values: LoginFormData) => {
    try {
      loginSchema.parse(values)
      return {}
    } catch (error: any) {
      const fieldErrors: Partial<Record<keyof LoginFormData, string>> = {}
      error.errors?.forEach((err: any) => {
        if (err.path?.[0]) {
          fieldErrors[err.path[0] as keyof LoginFormData] = err.message
        }
      })
      return fieldErrors
    }
  }

  const handleLoginSubmit = async (values: LoginFormData) => {
    try {
      clearError()
      await signInWithEmail(values.email, values.password, values.rememberMe)
      navigate("/") // Redirigir al dashboard o página principal
    } catch (error) {
      // El error ya se maneja en el contexto
      console.error("Login failed:", error)
    }
  }

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: validateLoginForm,
    onSubmit: handleLoginSubmit,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    handleChange(name as keyof LoginFormData, type === "checkbox" ? checked : value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gray-900/50 rounded-2xl border border-cyan-500/20 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Iniciar Sesión
          </h1>
          <p className="text-gray-300">Accede a tu cuenta de ControlDoc</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center">
            <AlertCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none transition-colors text-white ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-cyan-500/20 focus:border-cyan-500"
                }`}
                placeholder="tu@email.com"
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
              />
            </div>
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-red-400" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Contraseña *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-12 py-3 bg-gray-800/50 border rounded-lg focus:outline-none transition-colors text-white ${
                  errors.password ? "border-red-500 focus:border-red-500" : "border-cyan-500/20 focus:border-cyan-500"
                }`}
                placeholder="••••••••"
                aria-describedby={errors.password ? "password-error" : undefined}
                aria-invalid={!!errors.password}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <p id="password-error" className="mt-2 text-sm text-red-400" role="alert">
                {errors.password}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={values.rememberMe}
                onChange={handleInputChange}
                className="w-4 h-4 text-cyan-500 bg-gray-800 border-cyan-500/20 rounded focus:ring-cyan-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-gray-300">Recordarme</span>
            </label>
            <Link
              to="/auth/forgot-password"
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-1"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Iniciando sesión...
              </>
            ) : (
              <>
                Iniciar Sesión
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-300">
            ¿No tienes cuenta?{" "}
            <Link
              to="/auth/register"
              className="text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-1"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
