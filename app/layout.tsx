import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hanchennz.github.io/bloom/"),
  title: "Bloom — Remember the people who matter most",
  description: "A private relationship companion for keeping in touch with the friends and family who matter most.",
  openGraph: {
    title: "Bloom — Good relationships grow with care",
    description: "Remember the friends and family who matter most.",
    images: ["og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom — Good relationships grow with care",
    description: "Remember the friends and family who matter most.",
    images: ["og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
