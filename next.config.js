/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "placekitten.com",
      process.env.NEXT_PUBLIC_API_URL,
      process.env.NEXT_PUBLIC_IMAGE_URL,
      "*",
    ],
  },
};

module.exports = nextConfig;
