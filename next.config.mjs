/** @type {import('next').NextConfig} */
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

const nextConfig = withNextra({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sin1.contabostorage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
});

export default nextConfig;
