import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const cardVariants = cva("border text-fg transition-shadow duration-150", {
  variants: {
    tone: {
      neutral: "bg-bg border-border",
      brand: "bg-brand-soft border-border",
      success: "bg-success-soft border-success/20",
      warning: "bg-warning-soft border-warning/20",
      danger: "bg-danger-soft border-danger/20",
      info: "bg-info-soft border-info/20",
    },
    variant: {
      elevated: "shadow-sdmd",
      outline: "shadow-none",
      soft: "border-transparent shadow-none",
    },
    padding: {
      none: "p-0",
      sm: "p-3",
      md: "p-5",
      lg: "p-6",
      xl: "p-8",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sdsm",
      md: "rounded-sdlg",
      lg: "rounded-sdxl",
      full: "rounded-sdxl",
    },
  },
  defaultVariants: {
    tone: "neutral",
    variant: "outline",
    padding: "md",
    radius: "md",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ className, tone, variant, padding, radius, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ tone, variant, padding, radius }), className)} {...props} />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4 flex flex-col gap-1", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-sd4 font-semibold tracking-tight leading-tight", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sd2 text-muted", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-3", className)} {...props} />;
}

export { cardVariants };
