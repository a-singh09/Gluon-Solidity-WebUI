/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: "/Gluon-Solidity-WebUI",
};

export default nextConfig;
