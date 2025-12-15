import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gunakan mode standalone untuk SSR, bukan static export
  output: 'standalone', // Ini akan memastikan aplikasi berjalan sebagai server-rendered app
  trailingSlash: false,
  images: {
    unoptimized: false, // Biarkan gambar dioptimalkan oleh Next.js
  },
};

export default nextConfig;
