import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/*": ["./prisma/dev.db"],
    "/catatan/**/*": ["./prisma/dev.db"],
  },
};

export default nextConfig;