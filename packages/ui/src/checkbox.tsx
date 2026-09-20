import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const checkboxVariants = cva(
  "peer shrink-0 border border-border bg-bg accent-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      tone: {
        brand: "accent-brand",
        success: "accent-success",
        danger: "accent-danger",
        neutral: "accent-fg",
      },
      size: {
        "1": "h-3.5 w-3.5",
        "2": "h-4 w-4",
        "3": "h-5 w-5",
        "4": "h-6 w-6",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-sdsm",
        lg: "rounded-sdmd",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      tone: "brand",
      size: "2",
      radius: "sm",
    },
  }
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    VariantProps<typeof checkboxVariants> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, tone, size, radius, ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      className={cn(checkboxVariants({ tone, size, radius }), className)}
      {...props}
    />
  )
);
Checkbox.displayName = "Checkbox";

export { checkboxVariants };
