/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
      { hostname: 'github.com' },
      
    ],
  },
  experimental: {
    taint: true,
  },
}

export default config