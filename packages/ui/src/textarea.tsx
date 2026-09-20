import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const textareaVariants = cva(
  "flex min-h-[80px] w-full border bg-bg text-fg placeholder:text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      tone: {
        neutral: "border-border",
        brand: "border-brand",
        success: "border-success",
        warning: "border-warning",
        danger: "border-danger",
        info: "border-info",
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
        full: "rounded-sdlg",
      },
    },
    defaultVariants: {
      tone: "neutral",
      size: "2",
      radius: "md",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, tone, size, radius, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(textareaVariants({ tone, size, radius }), className)}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { textareaVariants };
