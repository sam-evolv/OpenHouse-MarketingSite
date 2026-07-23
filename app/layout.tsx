import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollProvider } from "@/components/providers/ScrollProvider";
import { PrefetchProvider } from "@/components/providers/PrefetchProvider";
import { TransitionOverlay } from "@/components/TransitionOverlay";
import { RouteWipe } from "@/components/transitions/RouteWipe";
import { ProgressBar } from "@/components/transitions/ProgressBar";
import { RouteTransitionHandler } from "@/components/transitions/RouteTransitionHandler";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-1P9FQGGQ7C";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// The human voice: used ONLY for homeowners' own words and one emotional
// line per chapter — never for product UI. Scarcity is what makes it read.
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://openhouseai.ie"),
  title: "OpenHouse Ai | A home that can explain itself",
  description:
    "OpenHouse turns approved house-type information into sourced homeowner answers and visible aftercare insight for property developers.",
  keywords: [
    "property development platform",
    "AI home assistant",
    "energy intelligence",
    "heat pump support",
    "home energy monitoring",
    "renewables installer software",
    "property technology",
  ],
  authors: [{ name: "EvolvAi" }],
  openGraph: {
    title:
      "OpenHouse Ai | A home that can explain itself",
    description:
      "One living record for each home, with sourced answers for homeowners and aftercare insight for property developers.",
    url: "https://openhouseai.ie",
    siteName: "OpenHouse Ai",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "OpenHouse Ai",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "OpenHouse Ai | A home that can explain itself",
    description:
      "One living record for each home, with sourced answers for homeowners and aftercare insight for property developers.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable} ${sourceSerif.variable}`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="font-sans">
        <PrefetchProvider>
          <ScrollProvider>
            <RouteTransitionHandler />
            <RouteWipe variant="left" />
            <ProgressBar />
            <TransitionOverlay />
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ScrollProvider>
        </PrefetchProvider>
      </body>
    </html>
  );
}
