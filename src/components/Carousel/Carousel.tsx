import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/libs/utils";

const carouselVariants = cva(
  "relative w-full rounded-3xl transition-all duration-300 overflow-hidden flex flex-col justify-between border z-10",
  {
    variants: {
      variant: {
        light:
          "bg-[#FBFBF9] text-neutral-900 border-neutral-200/80 shadow-xl shadow-neutral-900/5 backdrop-blur-md",
        dark: "bg-[#07080d] text-white border-[#4169e1]/30 shadow-[0_0_25px_rgba(65,105,225,0.15)] hover:shadow-[0_0_35px_rgba(65,105,225,0.25)] hover:border-[#4169e1]/50",
      },
      size: {
        sm: "w-full max-w-sm p-5 space-y-4",
        md: "w-full max-w-md p-6 space-y-5",
        lg: "w-full max-w-lg p-8 space-y-6",
        xl: "w-full max-w-2xl p-10 space-y-6",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "md",
    },
  },
);

const backdropVariants = cva(
  "transition-opacity duration-300 flex items-center justify-center",
  {
    variants: {
      variant: {
        light: "bg-neutral-900/20 backdrop-blur-xs",
        dark: "bg-black/60 backdrop-blur-sm",
      },
      inline: {
        true: "relative w-full p-0 bg-transparent backdrop-blur-none",
        false: "fixed inset-0 z-40 p-4",
      },
    },
    defaultVariants: {
      variant: "light",
      inline: true,
    },
  },
);

interface CarouselProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof carouselVariants> {
  asChild?: boolean;
  isOpen?: boolean;
  inline?: boolean;
  title?: string;
  description?: string;
  onClose?: () => void;
  onDone?: () => void;
  doneText?: string;
  closeText?: string;
  children?: React.ReactNode;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      asChild = false,
      isOpen = true,
      inline = true,
      title,
      description,
      children,
      className,
      onClose,
      onDone,
      doneText = "Done",
      closeText = "Close",
      variant = "light",
      size,
      ...props
    },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = React.Children.toArray(children);

    if (!isOpen) return null;

    const handlePrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const Comp = asChild ? Slot : "div";

    return (
      <div className={cn(backdropVariants({ variant, inline }))}>
        {variant === "dark" && (
          <div className="absolute w-[400px] h-[400px] bg-[#4169e1] opacity-15 blur-[90px] rounded-full pointer-events-none" />
        )}
        <Comp
          ref={ref}
          className={cn(carouselVariants({ variant, size, className }))}
          {...props}
        >
          {(title || description || onClose) && (
            <div className="flex items-start justify-between gap-4 relative z-10">
              <div className="space-y-1">
                {title && (
                  <h3 className="text-xl font-semibold tracking-tight leading-none">
                    {title}
                  </h3>
                )}
                {description && (
                  <p
                    className={cn(
                      "text-xs leading-relaxed",
                      variant === "dark"
                        ? "text-slate-400"
                        : "text-neutral-500",
                    )}
                  >
                    {description}
                  </p>
                )}
              </div>

              {onClose && (
                <button
                  onClick={onClose}
                  className={cn(
                    "p-1.5 rounded-full transition-colors cursor-pointer",
                    variant === "dark"
                      ? "hover:bg-slate-800 text-slate-400 hover:text-white"
                      : "hover:bg-neutral-200/60 text-neutral-500 hover:text-neutral-900",
                  )}
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

          <div className="relative z-10 flex-1 my-2 overflow-hidden">
            {slides.length > 0 ? (
              <div className="transition-all duration-300">
                {slides[currentIndex]}
              </div>
            ) : (
              children
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-inherit relative z-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className={cn(
                    "p-2 rounded-xl border transition-all cursor-pointer active:scale-95",
                    variant === "dark"
                      ? "border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300"
                      : "border-neutral-200/80 bg-white/60 hover:bg-white text-neutral-700 shadow-2xs",
                  )}
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className={cn(
                    "p-2 rounded-xl border transition-all cursor-pointer active:scale-95",
                    variant === "dark"
                      ? "border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-300"
                      : "border-neutral-200/80 bg-white/60 hover:bg-white text-neutral-700 shadow-2xs",
                  )}
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {onClose && (
                <button
                  onClick={onClose}
                  className={cn(
                    "px-4 py-2 text-xs font-medium rounded-xl transition-all cursor-pointer",
                    variant === "dark"
                      ? "text-slate-400 hover:text-white hover:bg-slate-800/60"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50",
                  )}
                >
                  {closeText}
                </button>
              )}
              {onDone && (
                <button
                  onClick={onDone}
                  className={cn(
                    "px-4 py-2 text-xs font-semibold rounded-xl shadow-sm transition-all cursor-pointer",
                    variant === "dark"
                      ? "bg-[#4169e1] hover:bg-blue-600 text-white shadow-blue-500/20"
                      : "bg-neutral-900 hover:bg-neutral-800 text-white",
                  )}
                >
                  {doneText}
                </button>
              )}
            </div>
          </div>
        </Comp>
      </div>
    );
  },
);

Carousel.displayName = "Carousel";
export { Carousel, carouselVariants, backdropVariants };
