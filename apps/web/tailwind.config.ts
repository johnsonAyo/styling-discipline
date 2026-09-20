import type { Config } from "tailwindcss";
import preset from "@sd/tokens/tailwind-preset";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  presets: [preset as unknown as Config],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
