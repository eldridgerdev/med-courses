import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "medbridgeuploads.s3.amazonaws.com",
        port: "",
      },
    ],
  },
  // @TODO: Temporary until landing page is built
  async redirects() {
    return [
      {
        source: "/",
        destination: "/courses",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
