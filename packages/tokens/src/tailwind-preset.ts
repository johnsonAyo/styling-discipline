const spaces = {
  0: "var(--sd-space-0)",
  1: "var(--sd-space-1)",
  2: "var(--sd-space-2)",
  3: "var(--sd-space-3)",
  4: "var(--sd-space-4)",
  5: "var(--sd-space-5)",
  6: "var(--sd-space-6)",
  7: "var(--sd-space-7)",
  8: "var(--sd-space-8)",
  9: "var(--sd-space-9)",
} as const;

const preset = {
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--sd-bg)",
          elevated: "var(--sd-bg-elevated)",
        },
        fg: "var(--sd-fg)",
        muted: "var(--sd-muted)",
        border: {
          DEFAULT: "var(--sd-border)",
          hover: "var(--sd-border-hover)",
        },
        surface: {
          DEFAULT: "var(--sd-surface)",
          hover: "var(--sd-surface-hover)",
          active: "var(--sd-surface-active)",
        },
        brand: {
          DEFAULT: "var(--sd-brand)",
          fg: "var(--sd-brand-fg)",
          soft: "var(--sd-brand-soft)",
          hover: "var(--sd-brand-hover)",
        },
        accent: {
          DEFAULT: "var(--sd-accent)",
          soft: "var(--sd-accent-soft)",
        },
        success: {
          DEFAULT: "var(--sd-success)",
          fg: "var(--sd-success-fg)",
          soft: "var(--sd-success-soft)",
        },
        warning: {
          DEFAULT: "var(--sd-warning)",
          fg: "var(--sd-warning-fg)",
          soft: "var(--sd-warning-soft)",
        },
        danger: {
          DEFAULT: "var(--sd-danger)",
          fg: "var(--sd-danger-fg)",
          soft: "var(--sd-danger-soft)",
        },
        info: {
          DEFAULT: "var(--sd-info)",
          fg: "var(--sd-info-fg)",
          soft: "var(--sd-info-soft)",
        },
      },
      spacing: spaces,
      gap: spaces,
      borderRadius: {
        none: "var(--sd-radius-none)",
        sdsm: "var(--sd-radius-sm)",
        sdmd: "var(--sd-radius-md)",
        sdlg: "var(--sd-radius-lg)",
        sdxl: "var(--sd-radius-xl)",
        full: "var(--sd-radius-full)",
      },
      boxShadow: {
        sdxs: "var(--sd-shadow-xs)",
        sdsm: "var(--sd-shadow-sm)",
        sdmd: "var(--sd-shadow-md)",
        sdlg: "var(--sd-shadow-lg)",
        sdring: "var(--sd-shadow-ring)",
        sdfocus: "var(--sd-shadow-focus)",
      },
      fontFamily: {
        sans: ["var(--sd-font)"],
        mono: ["var(--sd-font-mono)"],
      },
      fontSize: {
        sd1: ["var(--sd-font-1)", { lineHeight: "1rem", letterSpacing: "var(--sd-tracking)" }],
        sd2: ["var(--sd-font-2)", { lineHeight: "1.25rem", letterSpacing: "var(--sd-tracking)" }],
        sd3: ["var(--sd-font-3)", { lineHeight: "1.5rem", letterSpacing: "var(--sd-tracking)" }],
        sd4: ["var(--sd-font-4)", { lineHeight: "1.5rem", letterSpacing: "var(--sd-tracking-tight)" }],
      },
      height: {
        sd1: "var(--sd-size-1)",
        sd2: "var(--sd-size-2)",
        sd3: "var(--sd-size-3)",
        sd4: "var(--sd-size-4)",
      },
      minHeight: {
        sd1: "var(--sd-size-1)",
        sd2: "var(--sd-size-2)",
        sd3: "var(--sd-size-3)",
        sd4: "var(--sd-size-4)",
      },
      transitionTimingFunction: {
        sd: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
    },
  },
};

export default preset;
