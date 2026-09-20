import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const textVariants = cva("", {
  variants: {
    size: {
      "1": "text-sd1",
      "2": "text-sd2",
      "3": "text-sd3",
      "4": "text-sd4",
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
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "2",
    tone: "neutral",
    weight: "regular",
  },
});

export interface TextProps extends VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div" | "label";
  className?: string;
  children?: React.ReactNode;
  id?: string;
  htmlFor?: string;
}

export function Text({ className, size, tone, weight, as = "p", children, id, htmlFor }: TextProps) {
  const classes = cn(textVariants({ size, tone, weight }), className);
  if (as === "span") return <span id={id} className={classes}>{children}</span>;
  if (as === "div") return <div id={id} className={classes}>{children}</div>;
  if (as === "label") return <label id={id} htmlFor={htmlFor} className={classes}>{children}</label>;
  return <p id={id} className={classes}>{children}</p>;
}

export { textVariants };
