import type { NextConfig } from "next";
const repoName = "web-ledialtechnologies";
const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",

  ...(!isDev && {
    basePath: `/${repoName}`,         // app lives at /<repoName>
    assetPrefix: `/${repoName}/`,     // make assets load from /<repoName>/_next
  }),
  
  images: {
    unoptimized: true,
    localPatterns: [
      { pathname: "/images/**" },
      // Allow cache-busting query strings like `?v=123`
      { pathname: "/images/**", search: "?v=*" },
    ],
  },
  distDir: "docs", 
};

export default nextConfig;
