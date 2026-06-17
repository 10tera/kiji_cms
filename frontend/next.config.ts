import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

if (process.env.NODE_ENV === "development") {
  await initOpenNextCloudflareForDev();
}

const nextConfig: NextConfig = {};

export default nextConfig;
