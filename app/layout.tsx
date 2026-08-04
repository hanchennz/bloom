import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://hanchennz.github.io/bloom/";
const socialImageUrl = `${siteUrl}bloom-social-card.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bloom — Remember the people who matter most",
  description: "A private relationship companion for keeping in touch with the friends and family who matter most.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    siteName: "Bloom",
    title: "Bloom — Good relationships grow with care",
    description: "Remember the friends and family who matter most.",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Bloom — Remember the people who matter most",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom — Good relationships grow with care",
    description: "Remember the friends and family who matter most.",
    images: [socialImageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
