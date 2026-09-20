import * as React from "react";
import { cn } from "./lib/cn";
import { spaceClasses, type SpaceProps } from "./lib/scales";

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  baseline: "items-baseline",
  stretch: "items-stretch",
} as const;

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
} as const;

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement>, SpaceProps {
  direction?: "row" | "column";
  align?: keyof typeof alignMap;
  justify?: keyof typeof justifyMap;
  wrap?: boolean;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction = "row",
      align,
      justify,
      wrap,
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
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex",
        direction === "column" ? "flex-col" : "flex-row",
        wrap && "flex-wrap",
        align && alignMap[align],
        justify && justifyMap[justify],
        ...spaceClasses({ gap, p, px, py, pt, pb, m, mx, my }),
        className
      )}
      {...props}
    />
  )
);
Flex.displayName = "Flex";
