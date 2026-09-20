import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const badgeVariants = cva(
  "inline-flex items-center font-medium tracking-tight whitespace-nowrap",
  {
    variants: {
      tone: {
        brand: "",
        neutral: "",
        success: "",
        warning: "",
        danger: "",
        info: "",
      },
      variant: {
        solid: "",
        soft: "",
        surface: "border bg-bg",
        outline: "border bg-transparent",
      },
      size: {
        "1": "h-5 px-1.5 text-sd1 rounded-sdsm",
        "2": "h-6 px-2 text-sd1 rounded-sdsm",
        "3": "h-7 px-2.5 text-sd2 rounded-sdmd",
        "4": "h-8 px-3 text-sd2 rounded-sdmd",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sdsm",
        md: "rounded-sdmd",
        lg: "rounded-sdlg",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      { tone: "brand", variant: "solid", class: "bg-brand text-brand-fg" },
      { tone: "brand", variant: "soft", class: "bg-brand-soft text-fg" },
      { tone: "brand", variant: "surface", class: "border-border text-fg" },
      { tone: "brand", variant: "outline", class: "border-border text-fg" },
      { tone: "neutral", variant: "solid", class: "bg-fg text-bg" },
      { tone: "neutral", variant: "soft", class: "bg-surface text-muted" },
      { tone: "neutral", variant: "surface", class: "border-border text-muted" },
      { tone: "neutral", variant: "outline", class: "border-border text-muted" },
      { tone: "success", variant: "solid", class: "bg-success text-success-fg" },
      { tone: "success", variant: "soft", class: "bg-success-soft text-success" },
      { tone: "success", variant: "surface", class: "border-success/25 text-success" },
      { tone: "success", variant: "outline", class: "border-success/40 text-success" },
      { tone: "warning", variant: "solid", class: "bg-warning text-warning-fg" },
      { tone: "warning", variant: "soft", class: "bg-warning-soft text-warning" },
      { tone: "warning", variant: "surface", class: "border-warning/25 text-warning" },
      { tone: "warning", variant: "outline", class: "border-warning/40 text-warning" },
      { tone: "danger", variant: "solid", class: "bg-danger text-danger-fg" },
      { tone: "danger", variant: "soft", class: "bg-danger-soft text-danger" },
      { tone: "danger", variant: "surface", class: "border-danger/25 text-danger" },
      { tone: "danger", variant: "outline", class: "border-danger/40 text-danger" },
      { tone: "info", variant: "solid", class: "bg-info text-info-fg" },
      { tone: "info", variant: "soft", class: "bg-info-soft text-info" },
      { tone: "info", variant: "surface", class: "border-info/25 text-info" },
      { tone: "info", variant: "outline", class: "border-info/40 text-info" },
    ],
    defaultVariants: {
      tone: "neutral",
      variant: "soft",
      size: "2",
      radius: "full",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, variant, size, radius, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ tone, variant, size, radius }), className)} {...props} />
  );
}

export { badgeVariants };
