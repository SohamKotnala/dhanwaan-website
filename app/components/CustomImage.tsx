import NextImage, { ImageProps } from "next/image";

export default function CustomImage({ src, ...props }: ImageProps) {
  // Empty string so it works perfectly on local and your custom domains
  const basePath = ""; 

  // If the src is a string (like "/dhan-logo-final.png"), it just keeps it as is.
  // Otherwise (like if it's a static import), leave it alone.
  const updatedSrc = typeof src === "string" && src.startsWith("/") 
    ? `${basePath}${src}` 
    : src;

  return <NextImage src={updatedSrc} {...props} />;
}