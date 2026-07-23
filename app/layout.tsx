import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.openhouseai.ie"),
  title: {
    default: "OpenHouse AI | A home that can explain itself",
    template: "%s | OpenHouse AI",
  },
  description:
    "OpenHouse connects each house type’s plans, specifications, systems and approved documents to practical homeowner answers and developer insight.",
  keywords: [
    "property developer software",
    "homeowner handover",
    "property assistant",
    "home documents",
    "home energy intelligence",
    "Irish property technology",
  ],
  authors: [{ name: "OpenHouse AI" }],
  openGraph: {
    title: "A home that can explain itself",
    description:
      "Connect home-specific plans, systems and approved documents to practical homeowner answers and developer insight.",
    url: "https://www.openhouseai.ie",
    siteName: "OpenHouse AI",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "OpenHouse AI living home model",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A home that can explain itself",
    description:
      "Connect home-specific plans, systems and approved documents to practical homeowner answers and developer insight.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
