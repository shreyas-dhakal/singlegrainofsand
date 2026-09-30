import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the old Tilda URLs working.
  async redirects() {
    return [
      { source: "/page73230727.html", destination: "/portfolio", permanent: true },
      { source: "/testimonials", destination: "/#kind-words", permanent: true },
    ];
  },
};

export default nextConfig;
