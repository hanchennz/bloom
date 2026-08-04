import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? "/bloom" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/bloom/" : "",
};

export default nextConfig;
