import { asset } from "@/lib/assets";

// Plain <img>: the site is a static export and editors drop in files of any size.
export function Img({ src, alt = "", className = "" }: { src?: string; alt?: string; className?: string }) {
  if (!src) return <div className={`bg-ink-900 ${className}`} aria-hidden />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={asset(src)} alt={alt} loading="lazy" className={className} />;
}
