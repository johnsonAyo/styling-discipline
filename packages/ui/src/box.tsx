import * as React from "react";
import { cn } from "./lib/cn";
import { spaceClasses, type SpaceProps } from "./lib/scales";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, SpaceProps {
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "aside" | "nav";
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, as: Comp = "div", gap, p, px, py, pt, pb, m, mx, my, ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(...spaceClasses({ gap, p, px, py, pt, pb, m, mx, my }), className)}
      {...props}
    />
  )
);
Box.displayName = "Box";
