import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DomiBGA | Entrega Libertad",
  description: "La revolución de entrega con 0% de comisión. Más rápido, más barato, más justo.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/herosection/vecteezy_a-parcel-delivery-worker-dressed-in-a-red-uniform-is-holding_24842634.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${syne.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
