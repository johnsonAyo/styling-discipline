import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const inputVariants = cva(
  [
    "flex w-full border bg-bg text-fg placeholder:text-muted",
    "transition-[border-color,box-shadow,background-color] duration-150 ease-sd",
    "focus-visible:outline-none focus-visible:shadow-sdfocus focus-visible:border-accent",
    "disabled:cursor-not-allowed disabled:opacity-40",
  ].join(" "),
  {
    variants: {
      tone: {
        neutral: "border-border hover:border-border-hover",
        brand: "border-border hover:border-border-hover",
        success: "border-success/40",
        warning: "border-warning/40",
        danger: "border-danger/40",
        info: "border-info/40",
      },
      size: {
        "1": "h-sd1 px-2 text-sd1 rounded-sdsm",
        "2": "h-sd2 px-3 text-sd2 rounded-sdmd",
        "3": "h-sd3 px-3.5 text-sd3 rounded-sdmd",
        "4": "h-sd4 px-4 text-sd4 rounded-sdlg",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sdsm",
        md: "rounded-sdmd",
        lg: "rounded-sdlg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      tone: "neutral",
      size: "2",
      radius: "md",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, tone, size, radius, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(inputVariants({ tone, size, radius }), className)}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { inputVariants };
