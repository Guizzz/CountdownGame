import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
        outputFileTracingIncludes: {
            '/**': ['./assets/**/*'],
        },
};

export default nextConfig;
