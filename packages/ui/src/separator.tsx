import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const separatorVariants = cva("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
    tone: {
      neutral: "bg-border",
      brand: "bg-brand",
      muted: "bg-muted/30",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    tone: "neutral",
  },
});

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {}

export function Separator({ className, orientation, tone, ...props }: SeparatorProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation ?? "horizontal"}
      className={cn(separatorVariants({ orientation, tone }), className)}
      {...props}
    />
  );
}

export { separatorVariants };
