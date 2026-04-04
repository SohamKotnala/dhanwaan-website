import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Empty because we are hosting on a custom root domain (www.dhanwaanfinance.com)
  basePath: "",

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