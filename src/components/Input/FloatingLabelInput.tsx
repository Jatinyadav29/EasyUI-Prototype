import React, { useState } from "react";
import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "w-full bg-transparent border-b border-gray-500 pb-2 pt-6 focus:outline-none transition-all",
  {
    variants: {
      size: {
        sm: "text-sm pt-4 pb-1",
        md: "text-base pt-6 pb-2",
        lg: "text-lg pt-7 pb-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface FloatingLabelProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
}

export const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelProps
>(
  (
    {
      label,
      size = "md",
      className,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const shrink = focused || Boolean(currentValue);

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          {...props}
          onChange={(e) => {
            if (!isControlled) {
              setInternalValue(e.target.value);
            }
            onChange?.(e);
          }}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          className={cn(inputVariants({ size }), className)}
        />
        {label && (
          <label
            className={cn(
              "absolute left-0 top-2 origin-left text-gray-500 pointer-events-none transform transition-all duration-150",
              shrink
                ? "-translate-y-4 scale-75 text-blue-500"
                : "translate-y-2 scale-100",
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

FloatingLabelInput.displayName = "FloatingLabelInput";
