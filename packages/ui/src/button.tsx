import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium tracking-tight select-none",
    "transition-[background-color,border-color,box-shadow,transform,color] duration-150 ease-sd",
    "focus-visible:outline-none focus-visible:shadow-sdfocus",
    "disabled:pointer-events-none disabled:opacity-40",
    "active:scale-[0.98]",
  ].join(" "),
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
        solid: "shadow-sdsm border border-transparent",
        soft: "border border-transparent",
        surface: "border shadow-sdxs bg-bg",
        outline: "border bg-transparent shadow-none",
        ghost: "border border-transparent bg-transparent shadow-none",
        link: "border-0 bg-transparent shadow-none p-0 h-auto min-h-0 active:scale-100",
      },
      size: {
        "1": "h-sd1 px-2.5 text-sd1 rounded-sdsm",
        "2": "h-sd2 px-3.5 text-sd2 rounded-sdmd",
        "3": "h-sd3 px-4 text-sd3 rounded-sdmd",
        "4": "h-sd4 px-5 text-sd4 rounded-sdlg",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sdsm",
        md: "rounded-sdmd",
        lg: "rounded-sdlg",
        full: "rounded-full",
      },
      fullWidth: { true: "w-full", false: "" },
      highContrast: { true: "", false: "" },
    },
    compoundVariants: [
      // brand — near-black solid (Vercel)
      { tone: "brand", variant: "solid", class: "bg-brand text-brand-fg hover:bg-brand-hover" },
      { tone: "brand", variant: "soft", class: "bg-brand-soft text-fg hover:bg-surface-hover" },
      { tone: "brand", variant: "surface", class: "border-border text-fg hover:border-border-hover hover:bg-surface" },
      { tone: "brand", variant: "outline", class: "border-border text-fg hover:bg-surface hover:border-border-hover" },
      { tone: "brand", variant: "ghost", class: "text-fg hover:bg-surface" },
      { tone: "brand", variant: "link", class: "text-fg underline-offset-4 hover:underline" },
      // neutral
      { tone: "neutral", variant: "solid", class: "bg-fg text-bg hover:opacity-90" },
      { tone: "neutral", variant: "soft", class: "bg-surface text-fg hover:bg-surface-hover" },
      { tone: "neutral", variant: "surface", class: "border-border text-muted hover:text-fg hover:bg-surface" },
      { tone: "neutral", variant: "outline", class: "border-border text-muted hover:text-fg hover:bg-surface" },
      { tone: "neutral", variant: "ghost", class: "text-muted hover:text-fg hover:bg-surface" },
      { tone: "neutral", variant: "link", class: "text-muted hover:text-fg underline-offset-4 hover:underline" },
      // success
      { tone: "success", variant: "solid", class: "bg-success text-success-fg hover:brightness-110" },
      { tone: "success", variant: "soft", class: "bg-success-soft text-success hover:brightness-95" },
      { tone: "success", variant: "surface", class: "border-success/25 text-success hover:bg-success-soft" },
      { tone: "success", variant: "outline", class: "border-success/40 text-success hover:bg-success-soft" },
      { tone: "success", variant: "ghost", class: "text-success hover:bg-success-soft" },
      { tone: "success", variant: "link", class: "text-success underline-offset-4 hover:underline" },
      // warning
      { tone: "warning", variant: "solid", class: "bg-warning text-warning-fg hover:brightness-110" },
      { tone: "warning", variant: "soft", class: "bg-warning-soft text-warning hover:brightness-95" },
      { tone: "warning", variant: "surface", class: "border-warning/25 text-warning hover:bg-warning-soft" },
      { tone: "warning", variant: "outline", class: "border-warning/40 text-warning hover:bg-warning-soft" },
      { tone: "warning", variant: "ghost", class: "text-warning hover:bg-warning-soft" },
      { tone: "warning", variant: "link", class: "text-warning underline-offset-4 hover:underline" },
      // danger
      { tone: "danger", variant: "solid", class: "bg-danger text-danger-fg hover:brightness-110" },
      { tone: "danger", variant: "soft", class: "bg-danger-soft text-danger hover:brightness-95" },
      { tone: "danger", variant: "surface", class: "border-danger/25 text-danger hover:bg-danger-soft" },
      { tone: "danger", variant: "outline", class: "border-danger/40 text-danger hover:bg-danger-soft" },
      { tone: "danger", variant: "ghost", class: "text-danger hover:bg-danger-soft" },
      { tone: "danger", variant: "link", class: "text-danger underline-offset-4 hover:underline" },
      // info / accent
      { tone: "info", variant: "solid", class: "bg-info text-info-fg hover:brightness-110" },
      { tone: "info", variant: "soft", class: "bg-info-soft text-info hover:brightness-95" },
      { tone: "info", variant: "surface", class: "border-info/25 text-info hover:bg-info-soft" },
      { tone: "info", variant: "outline", class: "border-info/40 text-info hover:bg-info-soft" },
      { tone: "info", variant: "ghost", class: "text-info hover:bg-info-soft" },
      { tone: "info", variant: "link", class: "text-info underline-offset-4 hover:underline" },
    ],
    defaultVariants: {
      tone: "brand",
      variant: "solid",
      size: "2",
      radius: "md",
      fullWidth: false,
      highContrast: false,
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      tone,
      variant,
      size,
      radius,
      fullWidth,
      highContrast,
      loading,
      leftSection,
      rightSection,
      disabled,
      children,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        buttonVariants({ tone, variant, size, radius, fullWidth, highContrast }),
        className
      )}
      {...props}
    >
      {loading ? (
        <span
          aria-hidden
          className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-r-transparent opacity-80"
        />
      ) : (
        leftSection
      )}
      <span className="inline-flex items-center">{children}</span>
      {!loading && rightSection}
    </button>
  )
);
Button.displayName = "Button";

export { buttonVariants };
