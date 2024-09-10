import type { Metadata } from "next";
import { DotGothic16 } from "next/font/google";
import "./globals.css";

const DotGothic = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-DotGothic16",
})

export const metadata: Metadata = {
  title: "Fuwapachi!",
  description: "現在工事中",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${DotGothic.variable} font-DotGothic16`}>
        {children}
      </body>
    </html>
  );
}
