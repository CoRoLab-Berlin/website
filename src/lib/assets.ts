const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Turns the image/file paths editors write in markdown ("images/foo.jpg",
 * "/images/foo.jpg") into a working URL, including the GitHub Pages base path.
 * External URLs and mailto:/tel: links are left alone.
 */
export function asset(path: string | undefined | null): string {
  if (!path) return "";
  if (/^([a-z]+:|\/\/|#)/i.test(path)) return path;
  return `${basePath}/${path.replace(/^\/+/, "")}`;
}
