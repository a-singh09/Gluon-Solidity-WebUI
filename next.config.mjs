/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: '/Gluon-Solidity-WebUI',
  images: {
    domains: ["res.cloudinary.com"],
    loader: "custom",
    loaderFile: "src/loaders/cloudinary-loader.ts",
  },
};

export default nextConfig;
