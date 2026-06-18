import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Luna Llena Unisex Beauty Salon · Main St, City of Orange NJ",
  description:
    "A unisex beauty salon on Main Street in the City of Orange, New Jersey. Cuts, color, blowouts, styling for everyone. Walk-ins welcome, appointments honored. Te ves bien bajo cualquier luz.",
  openGraph: {
    title: "Luna Llena Unisex Beauty Salon · Orange NJ",
    description:
      "Cuts, color, blowouts and styling for everyone, on Main Street in the City of Orange. Walk-ins welcome.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${serif.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=supreme@400,500,700,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="night-grain min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
