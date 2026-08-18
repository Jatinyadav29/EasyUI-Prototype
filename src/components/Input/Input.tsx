import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const inputVariants = cva(
  "w-full rounded-md border focus:outline-none shadow-sm transition-all duration-150 bg-white placeholder:text-gray-400",
  {
    variants: {
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
      },
      tone: {
        default:
          "border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400",
        error:
          "border-red-400 focus:ring-2 focus:ring-red-400 focus:border-red-400",
        success:
          "border-green-400 focus:ring-2 focus:ring-green-400 focus:border-green-400",
      },
      disabled: {
        true: "bg-gray-100 text-gray-400 cursor-not-allowed opacity-80",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      tone: "default",
      disabled: false,
    },
  },
);

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "disabled">,
    VariantProps<typeof inputVariants> {
  label?: string;
  hint?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      className,
      size = "md",
      tone = "default",
      disabled = false,
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const activeTone = error ? "error" : tone;
    const isDisabled = Boolean(disabled);

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          disabled={isDisabled}
          className={cn(
            inputVariants({ size, tone: activeTone, disabled: isDisabled }),
            className,
          )}
          {...props}
        />
        {error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : hint ? (
          <p className="text-sm text-gray-500">{hint}</p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
export { Input, inputVariants };
