/** @type {import('next').NextConfig} */
const nextConfig = {};

// Hanya aktifkan static export di production
if (process.env.NODE_ENV === 'production') {
  Object.assign(nextConfig, {
    output: 'export', // ✅ resmi, bukan experimental
    trailingSlash: true,
    images: {
      unoptimized: true, // wajib untuk static export
    },
    // Next/font butuh assetPrefix yang valid (dimulai dg / atau URL absolut)
    // Untuk static export, kita gunakan root absolute path agar next/font bekerja
    assetPrefix: '/',
  });
}

module.exports = nextConfig;