/**
 * Canonical URL utilities.
 *
 * metadataBase is set to https://www.gemservices.uk in layout.tsx,
 * so we only return root-relative paths here.
 */

export const getCanonicalPath = (path: string): string => {
  if (!path.startsWith('/')) {
    path = `/${path}`
  }
  // Strip trailing slash (except root)
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1)
  }
  return path
}

/**
 * For micro-location pages: determine whether content is unique enough
 * to self-canonical, or should canonical to the parent town+service page.
 *
 * Micro-location pages that use TownServiceLayout with parentTown are
 * essentially the same layout with location-specific data injected.
 * We self-canonical them because they contain unique LocalAreaContent
 * (micro-location character, property types, local features).
 */
export const getMicroLocationCanonical = (
  town: string,
  location: string,
  service: string
): string => {
  // Self-canonical — each micro-location page has unique content via
  // microLocationData (character, predominantProperties, localFeature)
  return getCanonicalPath(`/areas/${town}/${location}/${service}`)
}
