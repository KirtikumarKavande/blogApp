// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['api.slingacademy.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.slingacademy.com',
          pathname: '/public/**',
        },
      ],
    },
    // This setting ensures that the application handles any unexpected errors gracefully
    reactStrictMode: true,
  }
  
  export default nextConfig;