import type { NextConfig } from "next";
const repoName = "web-ledialtechnologies";
const isDev = process.env.NODE_ENV === "development";
const basePath = !isDev ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",

  ...(!isDev && {
    basePath, // app lives at /<repoName>
    assetPrefix: `${basePath}/`, // make assets load from /<repoName>/_next
  }),
  
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

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
