"use client";

import * as React from "react";
import type { Radius, Size } from "./lib/scales";

type ThemeConfig = {
  radius: Radius;
  size: Size;
  appearance: "light" | "dark";
};

const ThemeContext = React.createContext<ThemeConfig>({
  radius: "md",
  size: "2",
  appearance: "light",
});

export function useTheme() {
  return React.useContext(ThemeContext);
}

export function ThemeProvider({
  children,
  radius = "md",
  size = "2",
  appearance = "light",
  className,
}: Partial<ThemeConfig> & { children: React.ReactNode; className?: string }) {
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", appearance === "dark");
  }, [appearance]);

  return (
    <ThemeContext.Provider value={{ radius, size, appearance }}>
      <div className={className} data-radius={radius} data-size={size}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
