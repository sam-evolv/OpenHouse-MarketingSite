import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollProvider } from "@/components/providers/ScrollProvider";
import { PrefetchProvider } from "@/components/providers/PrefetchProvider";
import { TransitionOverlay } from "@/components/TransitionOverlay";
import { RouteWipe } from "@/components/transitions/RouteWipe";
import { ProgressBar } from "@/components/transitions/ProgressBar";
import { RouteTransitionHandler } from "@/components/transitions/RouteTransitionHandler";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "OpenHouse AI - The AI Resident Assistant for Modern Developments",
  description:
    "Cut support requests, wow buyers, and give residents answers in seconds. One assistant that knows your development inside out.",
  keywords: [
    "property management",
    "AI assistant",
    "real estate",
    "resident portal",
    "smart building",
  ],
  authors: [{ name: "EvolvAi" }],
  openGraph: {
    title: "OpenHouse AI - AI Resident Assistant",
    description:
      "Cut support requests, wow buyers, and give residents answers in seconds.",
    url: "https://openhouse.ai",
    siteName: "OpenHouse AI",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "OpenHouse AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenHouse AI - AI Resident Assistant",
    description:
      "Cut support requests, wow buyers, and give residents answers in seconds.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
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
