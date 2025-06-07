/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'media.wtwco.com', // Add this hostname
      'cf-images.us-east-1.prod.boltdns.net', // Add this hostname for the video thumbnail
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig; 