import NextImage, { ImageProps } from "next/image";

// The magic check happens exactly once here
const basePath = process.env.NODE_ENV === "production" ? "/dhanwaan-website" : "";

export default function CustomImage({ src, ...props }: ImageProps) {
  // If the src is a string (like "/dhan-logo-final.png"), add the basePath.
  // Otherwise (like if it's a static import), leave it alone.
  const updatedSrc = typeof src === "string" && src.startsWith("/") 
    ? `${basePath}${src}` 
    : src;

  return <NextImage src={updatedSrc} {...props} />;
}