import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

// Type ritual (E2): 2 voices.
// DISPLAY  — Boska (Fontshare): high-contrast fashion serif, editorial + warm.
// BODY/UI  — Switzer (Fontshare): clean modern grotesque.
// LABEL VOICE — tracked small-caps (set in CSS). Foundry: Fontshare.

export const metadata: Metadata = {
  metadataBase: new URL("https://luna-llena-beauty-salon.vercel.app"),
  title: "Luna Llena Unisex Beauty Salon · Main St, City of Orange NJ",
  description:
    "A warm beauty house on Main Street in the City of Orange, New Jersey. Cuts, color, braids, blowouts and styling for everyone. Te ves preciosa bajo esta luz.",
  openGraph: {
    title: "Luna Llena Unisex Beauty Salon · Orange NJ",
    description:
      "Cuts, color, braids, blowouts and styling for everyone, on Main Street in the City of Orange. Walk-ins welcome.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=boska@400,500,600,700&f[]=switzer@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="cocoa-grain min-h-screen">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
