/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    loader: "custom",
    loaderFile: "./src/loaders/cloudinary-loader.ts",
  },
  basePath: "/Gluon-Solidity-WebUI",
};

export default nextConfig;
