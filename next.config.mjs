/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns:[
      {
        protocol :'https',
        hostname:'cdn.britannica.com',
        pathname:'/**',
      },
      {
        protocol: 'https',
          hostname: 'i.postimg.cc',   
        pathname: '/**',
        },
    ],
  },
};

export default nextConfig;
