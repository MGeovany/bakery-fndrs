import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "L'art du Pain - Panadería Francesa | Lo artesanal es lo nuestro",
  description:
    "L'art du Pain - Panadería francesa artesanal desde 2014. Lo artesanal es lo nuestro. Descubre nuestros panes, pasteles y dulces hechos con amor y tradición francesa.",
  keywords: [
    "panadería francesa",
    "pan artesanal",
    "pasteles",
    "dulces",
    "L'art du Pain",
    "panadería artesanal",
  ],
  authors: [{ name: "L'art du Pain" }],
  creator: "L'art du Pain",
  publisher: "L'art du Pain",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "L'art du Pain - Panadería Francesa",
    description:
      "Lo artesanal es lo nuestro desde 2014. Panadería francesa con tradición y calidad.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "L'art du Pain - Panadería Francesa",
    description: "Lo artesanal es lo nuestro desde 2014",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
