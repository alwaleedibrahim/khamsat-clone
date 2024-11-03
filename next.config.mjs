import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "res.cloudinary.com",
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: "khamsat-api.vercel.app",
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: "localhost",
            port: '4500',
            pathname: '/**',
          }
        ],
    },
};

export default withNextIntl(nextConfig);