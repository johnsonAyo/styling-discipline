import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";
import { spaceClasses, type SpaceProps } from "./lib/scales";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      "1": "max-w-2xl",
      "2": "max-w-4xl",
      "3": "max-w-6xl",
      "4": "max-w-7xl",
    },
    gutters: {
      true: "px-4 sm:px-6 lg:px-8",
      false: "px-0",
    },
  },
  defaultVariants: {
    size: "4",
    gutters: true,
  },
});

export interface ContainerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className">,
    VariantProps<typeof containerVariants>,
    SpaceProps {
  as?: "div" | "section" | "main" | "header" | "footer" | "nav";
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      as: Comp = "div",
      size,
      gutters,
      gap,
      p,
      px,
      py,
      pt,
      pb,
      m,
      mx,
      my,
      ...props
    },
    ref,
  ) => (
    <Comp
      ref={ref}
      className={cn(
        containerVariants({ size, gutters }),
        ...spaceClasses({ gap, p, px, py, pt, pb, m, mx, my }),
      )}
      {...props}
    />
  ),
);
Container.displayName = "Container";

export { containerVariants };
