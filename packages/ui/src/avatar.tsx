import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/cn";

const avatarVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden bg-surface text-muted font-medium",
  {
    variants: {
      size: {
        "1": "h-sd1 px-2 text-sd1",
        "2": "h-sd2 px-3 text-sd2",
        "3": "h-sd3 px-3.5 text-sd3",
        "4": "h-sd4 px-4 text-sd4",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sdsm",
        md: "rounded-sdmd",
        lg: "rounded-sdlg",
        full: "rounded-full",
      },
      tone: {
        neutral: "bg-surface text-muted",
        brand: "bg-brand-soft text-brand",
        success: "bg-success-soft text-success",
        danger: "bg-danger-soft text-danger",
      },
    },
    defaultVariants: {
      size: "2",
      radius: "full",
      tone: "neutral",
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
}

export function Avatar({ className, size, radius, tone, src, alt, fallback, ...props }: AvatarProps) {
  return (
    <span className={cn(avatarVariants({ size, radius, tone }), className)} {...props}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt ?? ""} className="h-full w-full object-cover" />
      ) : (
        <span>{fallback ?? "?"}</span>
      )}
    </span>
  );
}

export { avatarVariants };
