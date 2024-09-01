import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import NavLeft from "@/components/NavLeft";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavTop from "@/components/NavTop";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "IRHQ",
  description: "Interactive React Hooks Quiz",
  icons: "/logo.svg",
  openGraph: {
    title: "IRHQ",
    description: "Interactive React Hooks Quiz",
    images: [
      "https://github.com/geniusLHS/interactive-react-hooks-quiz/blob/main/public/image/og.png?raw=true",
    ],
    url: "https://irhq.geniuslhs.com/",
    type: "website",
    siteName: "IRHQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="esf9ytGOvWiFwjel19LqLBiRCOz5e_Wn1gv8JEFQJPg"
        />
      </head>
      <body className="md:overflow-y-scroll">
        <ThemeProvider attribute="class">
          <NavTop />
          <div className="min-h-screen bg-zinc-50 px-4 py-4 font-sans dark:bg-zinc-900 lg:py-12">
            <div className="mx-auto w-full max-w-5xl">
              <div className="flex grid-cols-[10rem_1fr] flex-col lg:grid">
                <div>
                  <NavLeft />
                </div>
                <main className="prose mt-12 lg:mt-0 lg:px-5">{children}</main>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-36GT3655W9" />
    </html>
  );
}
