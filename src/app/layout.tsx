import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Outfit, Gloock } from "next/font/google";

export const metadata: Metadata = {
  title:
    "L'art du Pain - Panadería Francesa en Honduras | Lo artesanal es lo nuestro",
  description:
    "L'art du Pain - Panadería francesa artesanal en San Pedro Sula, Honduras desde 2014. Lo artesanal es lo nuestro. Descubre nuestros panes, pasteles y dulces hechos con amor y tradición francesa.",
  keywords: [
    "panadería francesa",
    "pan artesanal",
    "pasteles",
    "dulces",
    "L'art du Pain",
    "panadería artesanal",
    "San Pedro Sula",
    "Honduras",
    "panadería Honduras",
  ],
  authors: [{ name: "L'art du Pain" }],
  creator: "L'art du Pain",
  publisher: "L'art du Pain",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "L'art du Pain - Panadería Francesa en Honduras",
    description:
      "Lo artesanal es lo nuestro desde 2014. Panadería francesa con tradición y calidad en San Pedro Sula, Honduras.",
    type: "website",
    locale: "es_HN",
  },
  twitter: {
    card: "summary_large_image",
    title: "L'art du Pain - Panadería Francesa en Honduras",
    description:
      "Lo artesanal es lo nuestro desde 2014 - San Pedro Sula, Honduras",
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

const gloock = Gloock({
  subsets: ["latin"],
  variable: "--font-gloock",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${outfit.variable} ${gloock.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
