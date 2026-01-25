import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - OpenHouse Ai",
  description: "Terms of Service for the OpenHouse Ai Property Portal. GDPR compliant terms covering data processing, user rights, and service usage.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
