import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cn } from "../../lib/utils"

interface AccessibleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  ariaLabel?: string
  srText?: string
}

const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ className, variant = "primary", size = "md", loading, disabled, children, ariaLabel, srText, ...props }, ref) => {
    const baseClasses = `
      inline-flex items-center justify-center font-semibold transition-all duration-200 
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-black
      disabled:opacity-50 disabled:cursor-not-allowed
      hover:transform hover:scale-105 active:scale-95
    `

    const variants = {
      primary: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg",
      secondary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600",
      outline:
        "border-2 border-cyan-500/50 hover:border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300",
    }

    const sizes = {
      sm: "px-4 py-2 text-sm rounded-md min-h-[36px]",
      md: "px-6 py-3 text-base rounded-lg min-h-[44px]",
      lg: "px-8 py-4 text-lg rounded-lg min-h-[52px]",
    }

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        aria-busy={loading}
        {...props}
      >
        {loading && (
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
        )}
        {children}
        {srText && <span className="sr-only">{srText}</span>}
      </button>
    )
  },
)

AccessibleButton.displayName = "AccessibleButton"

export default AccessibleButton
