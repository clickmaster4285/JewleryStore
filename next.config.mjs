//  @type {import('next').NextConfig} 
const nextConfig = {
   allowedDevOrigins: ['192.168.88.35'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
