import Link from "next/link";
import { Img } from "./Img";

type Props = {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  external?: boolean;
  meta?: string;
  badge?: string;
};

/** Generic tile used for hardware, projects, work and teaching. */
export function Card({ title, description, image, href, external, meta, badge }: Props) {
  const inner = (
    <>
      {image && (
        <div className="relative aspect-[3/2] overflow-hidden bg-ink-900">
          <Img src={image} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        {(meta || badge) && (
          <p className="flex flex-wrap items-center gap-2 text-sm text-accent">
            {meta}
            {badge && <span className="rounded bg-yellow-500 px-2 py-0.5 text-xs font-semibold text-on-accent">{badge}</span>}
          </p>
        )}
        <h3 className="mt-1 text-lg font-semibold text-strong">{title}</h3>
        {description && <p className="mt-2 line-clamp-4 text-sm text-ink-300">{description}</p>}
      </div>
    </>
  );
  const cls =
    "group flex flex-col overflow-hidden rounded-xl border border-ink-800 bg-ink-900/60 transition hover:border-yellow-500/60";
  if (!href) return <div className={cls}>{inner}</div>;
  if (external)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function CardGrid({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}
