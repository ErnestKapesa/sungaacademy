import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Don't write AGENTS.md / CLAUDE.md into the repo during `next dev`.
  agentRules: false,
};

export default nextConfig;
