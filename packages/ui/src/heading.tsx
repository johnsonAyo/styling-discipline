import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva(
  "text-balance font-semibold tracking-tight text-fg",
  {
    variants: {
      size: {
        "1": "text-xl leading-7",
        "2": "text-2xl leading-8 sm:text-3xl sm:leading-9",
        "3": "text-3xl leading-9 sm:text-4xl sm:leading-tight",
        "4": "text-4xl leading-none sm:text-5xl lg:text-6xl",
      },
      tone: {
        neutral: "text-fg",
        muted: "text-muted",
        brand: "text-brand",
        success: "text-success",
        warning: "text-warning",
        danger: "text-danger",
        info: "text-info",
      },
    },
    defaultVariants: {
      size: "2",
      tone: "neutral",
    },
  },
);

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "className">,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4";
}

export function Heading({
  as: Comp = "h2",
  size,
  tone,
  ...props
}: HeadingProps) {
  return <Comp className={headingVariants({ size, tone })} {...props} />;
}

export { headingVariants };
