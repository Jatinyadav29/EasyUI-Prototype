import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const layoutVariants = cva(
  "min-h-screen w-full flex flex-col justify-between font-sans antialiased transition-colors duration-200",
  {
    variants: {
      variant: {
        light: "bg-[#FBFBF9] text-neutral-900",
        dark: "bg-[#07080d] text-white",
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  },
);

export interface LayoutProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {
  brandName?: string;
  navLinks?: { label: string; href: string }[];
  footerText?: string;
  children?: React.ReactNode;
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  (
    {
      brandName = "EaseUi",
      navLinks = [
        { label: "Home", href: "#" },
        { label: "Components", href: "#" },
        { label: "Docs", href: "#" },
      ],
      footerText = "EaseUi Footer",
      variant = "dark",
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(layoutVariants({ variant, className }))}
        {...props}
      >
        <header
          className={cn(
            "w-full h-16 flex items-center justify-between px-6 border-b transition-colors",
            variant === "dark"
              ? "border-neutral-800 bg-[#07080d]/80 backdrop-blur-md"
              : "border-neutral-200/80 bg-white/80 backdrop-blur-md",
          )}
        >
          <span className="font-bold text-lg tracking-tight">{brandName}</span>
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={cn(
                  "transition-colors",
                  variant === "dark"
                    ? "text-neutral-400 hover:text-white"
                    : "text-neutral-600 hover:text-neutral-900",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <main className="flex-1 w-full max-w-6xl mx-auto p-6 flex flex-col justify-center items-center">
          {children || (
            <div className="text-center py-12">
              <p
                className={cn(
                  "text-sm font-medium",
                  variant === "dark" ? "text-neutral-400" : "text-neutral-500",
                )}
              >
                Body
              </p>
            </div>
          )}
        </main>

        <footer
          className={cn(
            "w-full py-4 text-center text-xs border-t transition-colors",
            variant === "dark"
              ? "border-neutral-800 text-neutral-500"
              : "border-neutral-200/80 text-neutral-400",
          )}
        >
          <p>{footerText}</p>
        </footer>
      </div>
    );
  },
);

Layout.displayName = "Layout";

export { Layout, layoutVariants };
