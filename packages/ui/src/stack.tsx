import * as React from "react";
import { Flex, type FlexProps } from "./flex";

export interface StackProps extends Omit<FlexProps, "direction"> {}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ gap = "3", ...props }, ref) => <Flex ref={ref} direction="column" gap={gap} {...props} />
);
Stack.displayName = "Stack";
