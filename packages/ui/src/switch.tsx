import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const switchTrack = cva(
  "relative inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
      },
      checked: {
        true: "",
        false: "bg-border",
      },
      tone: {
        brand: "",
        success: "",
        danger: "",
      },
    },
    compoundVariants: [
      { checked: true, tone: "brand", class: "bg-brand" },
      { checked: true, tone: "success", class: "bg-success" },
      { checked: true, tone: "danger", class: "bg-danger" },
    ],
    defaultVariants: {
      size: "md",
      tone: "brand",
      checked: false,
    },
  }
);

const switchThumb = cva(
  "pointer-events-none block rounded-full bg-bg shadow transition-transform",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      checked: {
        true: "",
        false: "translate-x-0.5",
      },
    },
    compoundVariants: [
      { size: "sm", checked: true, class: "translate-x-4" },
      { size: "md", checked: true, class: "translate-x-5" },
      { size: "lg", checked: true, class: "translate-x-7" },
    ],
    defaultVariants: {
      size: "md",
      checked: false,
    },
  }
);

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange">,
    Omit<VariantProps<typeof switchTrack>, "checked"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function Switch({
  className,
  size,
  tone,
  checked = false,
  onCheckedChange,
  disabled,
  ...props
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={cn(switchTrack({ size, tone, checked }), className)}
      onClick={() => onCheckedChange?.(!checked)}
      {...props}
    >
      <span className={cn(switchThumb({ size, checked }))} />
    </button>
  );
}
