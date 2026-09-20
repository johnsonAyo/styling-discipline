import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@sd/ui", "@sd/tokens"],
};

export default nextConfig;
