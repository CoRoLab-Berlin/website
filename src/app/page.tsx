// Root: send visitors to their language. Static export → client-side redirect.
export default function Root() {
  const script = `
    var l=(navigator.language||'en').slice(0,2).toLowerCase();
    var t=(l==='de')?'de':'en';
    var b=${JSON.stringify(process.env.NEXT_PUBLIC_BASE_PATH ?? "")};
    location.replace(b+'/'+t+'/');`;
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <meta httpEquiv="refresh" content={`0;url=${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/en/`} />
      <p className="p-8">
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/en/`}>English</a> ·{" "}
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/de/`}>Deutsch</a>
      </p>
    </>
  );
}
