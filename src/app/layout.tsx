import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieBanner from "../components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suzy Brito Advocacia - Especialista em Juros Abusivos",
  description:
    "Advocacia especializada em revisão de contratos bancários e combate a juros abusivos. Proteja seus direitos contra práticas abusivas de instituições financeiras.",
  keywords:
    "juros abusivos, revisão contratual, direito bancário, advocacia, Suzy Brito",
  authors: [{ name: "Suzy Brito Advocacia" }],
  creator: "Suzy Brito Advocacia",
  publisher: "Suzy Brito Advocacia",
  icons: {
    icon: "/icone-suzy-brito-advocacia.png",
    shortcut: "/icone-suzy-brito-advocacia.png",
    apple: "/icone-suzy-brito-advocacia.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://suzibrito.adv.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Suzy Brito Advocacia - Especialista em Juros Abusivos",
    description:
      "Advocacia especializada em revisão de contratos bancários e combate a juros abusivos.",
    url: "https://suzibrito.adv.br",
    siteName: "Suzy Brito Advocacia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/icone-suzy-brito-advocacia.png",
        width: 512,
        height: 512,
        alt: "Suzy Brito Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suzy Brito Advocacia - Especialista em Juros Abusivos",
    description:
      "Advocacia especializada em revisão de contratos bancários e combate a juros abusivos.",
    images: ["/icone-suzy-brito-advocacia.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-gray-900`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
