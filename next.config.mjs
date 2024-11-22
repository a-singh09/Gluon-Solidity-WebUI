/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./src/loaders/cloudinary-loader.ts",
  },
};

export default nextConfig;
