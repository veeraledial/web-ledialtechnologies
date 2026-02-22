import type { NextConfig } from "next";
const repoName = "web-ledialtechnologies";
const nextConfig: NextConfig = {
  output: "export",

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
    localPatterns: [
      { pathname: "/images/**" },
      // Allow cache-busting query strings like `?v=123`
      { pathname: "/images/**", search: "?v=*" },
    ],
  },
};

export default nextConfig;
