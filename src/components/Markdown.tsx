import { Children, isValidElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { asset } from "@/lib/assets";

const YT = /^https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/watch\?(?:.*&)?v=|youtu\.be\/)([\w-]{6,})/;

/** Renders editor-written markdown. Relative image/file paths get the site base path. */
export function Markdown({ children, className = "" }: { children: string; className?: string }) {
  if (!children) return null;
  return (
    <div className={`prose prose-invert prose-site max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        urlTransform={(url) => url}
        components={{
          // A YouTube link on a line of its own becomes an embedded video.
          p: ({ children }) => {
            const kids = Children.toArray(children);
            const only = kids.length === 1 ? kids[0] : null;
            const href = isValidElement(only) ? (only.props as { href?: string }).href : undefined;
            const id = href?.match(YT)?.[1];
            if (id)
              return (
                <div className="not-prose my-6 aspect-video overflow-hidden rounded-lg">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    title="YouTube video"
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              );
            return <p>{children}</p>;
          },
          // eslint-disable-next-line @next/next/no-img-element
          img: ({ src, alt }) => <img src={asset(typeof src === "string" ? src : "")} alt={alt ?? ""} loading="lazy" className="rounded-lg" />,
          a: ({ href, children }) => {
            const h = typeof href === "string" ? href : "";
            const ext = /^https?:/.test(h);
            return (
              <a href={asset(h)} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {children}
              </a>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
