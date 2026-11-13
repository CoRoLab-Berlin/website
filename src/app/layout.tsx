import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bht = localFont({
  src: [
    { path: "../../public/fonts/BHTCaseMicro-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/BHTCaseMicro-Italic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/BHTCaseMicro-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/BHTCaseMicro-BoldItalic.otf", weight: "700", style: "italic" },
  ],
  variable: "--font-bht",
});

export const metadata: Metadata = {
  title: { default: "CoRoLab – Compliant Robotics Lab", template: "%s · CoRoLab" },
  description: "Compliant Robotics Lab, Berliner Hochschule für Technik (BHT)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bht.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
