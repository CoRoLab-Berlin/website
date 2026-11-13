import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { asset } from "@/lib/assets";

/** Renders editor-written markdown. Relative image/file paths get the site base path. */
export function Markdown({ children, className = "" }: { children: string; className?: string }) {
  if (!children) return null;
  return (
    <div className={`prose prose-invert prose-site max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        urlTransform={(url) => url}
        components={{
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
