"use client";

import * as React from "react";
import type { Radius, Size } from "./lib/scales";

type Appearance = "light" | "dark";

type ThemeConfig = {
  radius: Radius;
  size: Size;
  appearance: Appearance;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeConfig>({
  radius: "md",
  size: "2",
  appearance: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return React.useContext(ThemeContext);
}

export function ThemeProvider({
  children,
  radius = "md",
  size = "2",
  appearance: initialAppearance = "light",
  className,
}: Partial<Omit<ThemeConfig, "toggleTheme">> & {
  children: React.ReactNode;
  className?: string;
}) {
  const [appearance, setAppearance] = React.useState<Appearance>(initialAppearance);

  React.useEffect(() => {
    const saved = localStorage.getItem("sd-theme") as Appearance | null;
    if (saved === "light" || saved === "dark") {
      setAppearance(saved);
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", appearance === "dark");
    localStorage.setItem("sd-theme", appearance);
  }, [appearance]);

  const toggleTheme = React.useCallback(() => {
    setAppearance((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ radius, size, appearance, toggleTheme }}>
      <div className={className} data-radius={radius} data-size={size}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { appearance, toggleTheme } = useTheme();
  const isDark = appearance === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={
        className ||
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-elevated text-muted transition-colors hover:border-border-hover hover:text-fg focus-visible:outline-none focus-visible:shadow-sdfocus"
      }
    >
      {isDark ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill="none"
        >
          <path
            d="M10 3v2m0 10v2m7-7h-2M5 10H3m11.95-4.95-1.414 1.414M6.464 13.536 5.05 14.95m9.9 0-1.414-1.414M6.464 6.464 5.05 5.05M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill="none"
        >
          <path
            d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
