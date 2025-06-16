// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [
      'media.wtwco.com',
      'cf-images.us-east-1.prod.boltdns.net',
      'www.wtwco.com',
    ],
    dangerouslyAllowSVG: true,
    unoptimized: true, // Required for static export
  },
  // Ensure all pages are included in the export
  trailingSlash: true,
};

module.exports = nextConfig;
