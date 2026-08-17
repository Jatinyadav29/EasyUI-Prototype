import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/libs/utils";

const tooltipVariants = cva(
  "absolute z-50 px-2.5 py-1 text-xs font-medium rounded-md shadow-md whitespace-nowrap transition-all duration-150 pointer-events-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100",
  {
    variants: {
      variant: {
        dark: "bg-neutral-900 text-white border border-neutral-800",
        light: "bg-white text-neutral-900 border border-neutral-200 shadow-sm",
      },
      position: {
        top: "-top-9 left-1/2 -translate-x-1/2",
        bottom: "-bottom-9 left-1/2 -translate-x-1/2",
        left: "-left-2 top-1/2 -translate-x-full -translate-y-1/2",
        right: "-right-2 top-1/2 translate-x-full -translate-y-1/2",
      },
    },
    defaultVariants: {
      variant: "dark",
      position: "top",
    },
  },
);

interface TooltipProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, "content">,
    VariantProps<typeof tooltipVariants> {
  content: React.ReactNode;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  variant = "dark",
  position = "top",
  className,
  ...props
}) => {
  return (
    <div className="relative inline-flex group items-center justify-center">
      {children}
      <div
        className={cn(tooltipVariants({ variant, position, className }))}
        role="tooltip"
        {...props}
      >
        {content}
      </div>
    </div>
  );
};

Tooltip.displayName = "tooltip";
export { Tooltip, tooltipVariants };
