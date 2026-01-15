import { Container } from "@/components/ui/container";
import { Mail, HelpCircle, Shield, Smartphone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenHouse AI Support",
  description: "Support and help for the OpenHouse AI homeowner app.",
};

export default function SupportPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-carbon">
      <Container className="max-w-4xl">
        <h1 className="text-display-md font-bold text-porcelain mb-4">
          OpenHouse AI Support
        </h1>
        <p className="text-body-lg text-hint mb-12">
          Help and support for homeowners using the OpenHouse AI app.
        </p>

        <section className="mb-12">
          <h2 className="text-heading-md font-bold text-porcelain mb-4 flex items-center gap-3">
            <Smartphone className="w-6 h-6 text-gold" />
            About the App
          </h2>
          <p className="text-hint leading-relaxed">
            OpenHouse AI is a property information portal for homeowners. Access is provided via a property-specific code issued by your property developer. The app allows you to view documents related to your home, read notices and updates, find local amenity information, and interact with an AI assistant for property-related queries.
          </p>
        </section>

        <section className="mb-12 p-6 rounded-xl border border-gold/20 bg-gold/5">
          <h2 className="text-heading-md font-bold text-porcelain mb-4 flex items-center gap-3">
            <Mail className="w-6 h-6 text-gold" />
            Contact Support
          </h2>
          <p className="text-hint mb-4">
            For support, please email us and include your property access code if available.
          </p>
          <a 
            href="mailto:support@openhouseai.ie" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-medium text-lg transition-colors"
          >
            support@openhouseai.ie
          </a>
        </section>

        <section className="mb-12">
          <h2 className="text-heading-md font-bold text-porcelain mb-4 flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-gold" />
            Common Support Topics
          </h2>
          <ul className="space-y-3 text-hint">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
              Trouble accessing the app with a property code
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
              Missing or incorrect documents
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
              Questions about local amenities or notices
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
              General app feedback or technical issues
            </li>
          </ul>
        </section>

        <section className="mb-12 p-6 rounded-xl border border-white/10 bg-slate/30">
          <h2 className="text-heading-md font-bold text-porcelain mb-4">
            App Review Information
          </h2>
          <div className="space-y-3 text-hint">
            <p>
              The OpenHouse AI app does not use usernames or passwords. Access is granted via a property-specific code provided by the property developer.
            </p>
            <p>
              No personal account creation is required to use the app. Codes are issued directly by property developers to homeowners upon handover.
            </p>
            <p>
              Demo access is available for App Review upon request. Please contact <a href="mailto:support@openhouseai.ie" className="text-gold hover:text-gold/80">support@openhouseai.ie</a> for reviewer access credentials.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-heading-md font-bold text-porcelain mb-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-gold" />
            Privacy & Data Handling
          </h2>
          <p className="text-hint leading-relaxed">
            OpenHouse AI does not display advertising or sell user data. Analytics are used solely to improve app performance and user experience. We do not collect unnecessary personal data. For full details, please refer to our <a href="/privacy" className="text-gold hover:text-gold/80">Privacy Policy</a>.
          </p>
        </section>
      </Container>
    </div>
  );
}
