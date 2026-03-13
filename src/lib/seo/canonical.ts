export const getCanonicalPath = (path: string) => {
  // Ensure the path starts with a slash and is properly formatted
  if (!path.startsWith('/')) {
    path = `/${path}`
  }
  
  // Base URL is https://www.gemservices.uk which is already set in layout.tsx via metadataBase
  // Next.js will resolve root-relative canonical alternates against the metadataBase
  return path
}
