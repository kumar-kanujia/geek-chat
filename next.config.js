/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
        protocol: "https",
        pathname: "/f/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
