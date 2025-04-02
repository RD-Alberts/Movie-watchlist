import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

/**
 * Props for the reusable PrimaryButton component.
 *
 * Extends native <button> attributes and adds custom styling options.
 */
type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Optional icon component from lucide-react */
  icon?: LucideIcon;

  /** The visible button label */
  label: string;

  /** Predefined button style variants */
  variant?:
    | "default"
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "outline"
    | "ghost"
    | "loading";

  /** Whether the button is in a loading state */
  isLoading?: boolean;
};

/**
 * A reusable, stylable button component that supports variants, optional icons, and loading states.
 *
 * @example
 * <PrimaryButton
 *   label="Submit"
 *   icon={Check}
 *   variant="success"
 *   onClick={handleSubmit}
 *   isLoading={true}
 * />
 */
export const PrimaryButton = ({
  icon: Icon,
  label,
  variant = "default",
  isLoading = false,
  ...rest
}: PrimaryButtonProps) => {
  // Base layout and transition styles for all buttons
  const baseStyles =
    "flex items-center gap-2 text-white px-4 py-2 rounded shadow transition disabled:opacity-50";

  // Tailwind utility classes for each variant
  const variantStyles = {
    default: "bg-default hover:bg-default-hover text-default-content",
    primary: "bg-primary hover:bg-primary-hover text-primary-content",
    success: "bg-success hover:bg-success-hover text-success-content",
    info: "bg-info hover:bg-info-hover text-info-content",
    warning: "bg-warning hover:bg-warning-hover text-warning-content",
    danger: "bg-danger hover:bg-danger-hover text-danger-content",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-100",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-800 shadow-none",
    loading: "bg-gray-300 text-gray-600 cursor-not-allowed",
  };

  return (
    <button
      {...rest}
      className={`${baseStyles} ${variantStyles[variant]}`}
      disabled={isLoading || rest.disabled} // Disable the button if loading or already disabled
    >
      {/* Display a loading spinner if the button is in a loading state */}
      {isLoading ? (
        <svg
          className="animate-spin w-5 h-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            opacity="0.3"
          />
          <path
            fill="currentColor"
            d="M4 12a8 8 0 1 1 8 8 8 8 0 0 1-8-8Zm2 0a6 6 0 1 0 6-6 6 6 0 0 0-6 6Z"
          />
        </svg>
      ) : (
        // If not loading, render the icon (if present)
        Icon && <Icon className="w-5 h-5" />
      )}

      {/* Button label */}
      {isLoading ? "Loading..." : label}
    </button>
  );
};
