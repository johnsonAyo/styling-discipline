import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const alertVariants = cva(
  "border px-4 py-3 text-sd2 tracking-tight shadow-sdxs",
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
        soft: "",
        outline: "bg-bg",
        solid: "border-transparent",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sdsm",
        md: "rounded-sdmd",
        lg: "rounded-sdlg",
        full: "rounded-sdlg",
      },
    },
    compoundVariants: [
      { tone: "brand", variant: "soft", class: "bg-brand-soft border-border text-fg" },
      { tone: "brand", variant: "outline", class: "border-border text-fg" },
      { tone: "brand", variant: "solid", class: "bg-brand text-brand-fg" },
      { tone: "neutral", variant: "soft", class: "bg-surface border-border text-fg" },
      { tone: "neutral", variant: "outline", class: "border-border text-fg" },
      { tone: "neutral", variant: "solid", class: "bg-fg text-bg" },
      { tone: "success", variant: "soft", class: "bg-success-soft border-success/20 text-success" },
      { tone: "success", variant: "outline", class: "border-success/40 text-success" },
      { tone: "success", variant: "solid", class: "bg-success text-success-fg" },
      { tone: "warning", variant: "soft", class: "bg-warning-soft border-warning/20 text-warning" },
      { tone: "warning", variant: "outline", class: "border-warning/40 text-warning" },
      { tone: "warning", variant: "solid", class: "bg-warning text-warning-fg" },
      { tone: "danger", variant: "soft", class: "bg-danger-soft border-danger/20 text-danger" },
      { tone: "danger", variant: "outline", class: "border-danger/40 text-danger" },
      { tone: "danger", variant: "solid", class: "bg-danger text-danger-fg" },
      { tone: "info", variant: "soft", class: "bg-info-soft border-info/20 text-info" },
      { tone: "info", variant: "outline", class: "border-info/40 text-info" },
      { tone: "info", variant: "solid", class: "bg-info text-info-fg" },
    ],
    defaultVariants: {
      tone: "info",
      variant: "soft",
      radius: "md",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export function Alert({ className, tone, variant, radius, ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ tone, variant, radius }), className)}
      {...props}
    />
  );
}

export { alertVariants };
