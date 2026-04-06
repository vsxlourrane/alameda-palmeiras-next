/** @type {import('next').NextConfig} */
const nextConfig = {
  // Isso resolve os avisos de bloqueio de IP na sua rede local
  experimental: {
    allowedDevOrigins: ['192.168.56.1', 'localhost:3000'],
  },
  // Melhora a performance de carregamento de imagens externas se necessário
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;