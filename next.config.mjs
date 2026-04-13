//  @type {import('next').NextConfig} 
const nextConfig = {
   allowedDevOrigins: ['192.168.88.35'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
