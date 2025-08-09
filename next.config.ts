import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
        outputFileTracingIncludes: {
            '/server/**/*': ['./assets/**/*'],
        },
};

export default nextConfig;
