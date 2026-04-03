import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a fully static site to the /out folder
  output: "export",

  // Required when exporting and using <Image>
  images: {
    unoptimized: true,
  },

  // 🔑 Hostinger/Apache serves folder-based routes best with a trailing slash
  // This makes /privacy-policy resolve to /privacy-policy/index.html
  trailingSlash: true,
};

export default nextConfig;
