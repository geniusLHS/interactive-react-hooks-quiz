import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import NavLeft from "@/components/NavLeft";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavTop from "@/components/NavTop";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Interactive React Hooks Quiz",
  description: "퀴즈를 풀며 배우는 리액트 훅의 필수 개념",
  icons: "/logo.svg",
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
