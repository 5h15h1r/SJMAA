/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "vaave.s3.amazonaws.com" }],
    remotePatterns: [{ protocol: "https", hostname: "www.sjmaa.com" }],
  },
};

module.exports = nextConfig
