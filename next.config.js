/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    minimumCacheTTL: 60,
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['www.barrattlondonmena.com', 'www.google.com', 'www.barratthomes.co.uk', 'dfl6m0l15t52.cloudfront.net'],
  },

}

module.exports = nextConfig
