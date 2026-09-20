import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const selectVariants = cva(
  "flex w-full border bg-bg text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      tone: {
        neutral: "border-border",
        brand: "border-brand",
        danger: "border-danger",
      },
      size: {
        "1": "h-sd1 px-2 text-sd1",
        "2": "h-sd2 px-3 text-sd2",
        "3": "h-sd3 px-3.5 text-sd3",
        "4": "h-sd4 px-4 text-sd4",
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

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, tone, size, radius, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(selectVariants({ tone, size, radius }), className)}
      {...props}
    >
      {children}
    </select>
  )
);
Select.displayName = "Select";

export { selectVariants };
