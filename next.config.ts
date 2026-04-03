import type { NextConfig } from "next";

// Check if we are running the build on GitHub (production)
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Use the folder name on GitHub, but leave it blank for local testing
  basePath: isProd ? "/dhanwaan-website" : "",

  // Generate a fully static site to the /out folder
  output: "export",

  // Required when exporting and using <Image>
  images: {
    unoptimized: true,
  },

  // Hostinger/Apache serves folder-based routes best with a trailing slash
  trailingSlash: true,
};

export default nextConfig;