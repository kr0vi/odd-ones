import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";
const InstrumentSerif = Instrument_Serif({
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Odd Ones - Never Follow The Herd",
  description:
    "A curated collection of brutalist and unconventional website designs that go against the norm. Explore unique web design inspiration.",
  keywords: [
    "brutalist websites",
    "web design",
    "design inspiration",
    "unconventional design",
    "website archive",
  ],
  authors: [{ name: "Krovi", url: "https://krovi.dev" }],
  creator: "Krovi",
  openGraph: {
    title: "Odd Ones - Website Design Inspiration",
    description: "A collection of sites which go against the norm",
    url: "https://oddones.vercel.app",
    siteName: "Odd Ones",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odd Ones - Website Design Inspiration",
    description: "A collection of sites which go against the norm",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`${InstrumentSerif.className}  antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
