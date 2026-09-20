import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const labelVariants = cva("font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", {
  variants: {
    size: {
        "1": "h-sd1 px-2 text-sd1",
        "2": "h-sd2 px-3 text-sd2",
        "3": "h-sd3 px-3.5 text-sd3",
        "4": "h-sd4 px-4 text-sd4",
      },
    tone: {
      neutral: "text-fg",
      muted: "text-muted",
      brand: "text-brand",
      danger: "text-danger",
    },
  },
  defaultVariants: {
    size: "1",
    tone: "neutral",
  },
});

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}

export function Label({ className, size, tone, ...props }: LabelProps) {
  return <label className={cn(labelVariants({ size, tone }), className)} {...props} />;
}

export { labelVariants };
