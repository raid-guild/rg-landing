import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/index.html",
        },
        {
          source: "/raid",
          destination: "/raid.html",
        },
        {
          source: "/404",
          destination: "/404.html",
        },
        {
          source: "/401",
          destination: "/401.html",
        },
      ],
    };
  },
};

export default nextConfig;
