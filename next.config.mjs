/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname:"assets.capcons.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname:"placehold.co",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
