import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/images/**" },
      // Allow cache-busting query strings like `?v=123`
      { pathname: "/images/**", search: "?v=*" },
    ],
  },
};

export default nextConfig;
