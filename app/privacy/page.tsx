import { Container } from "@/components/ui/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - OpenHouse Ai",
  description: "Privacy Policy for the OpenHouse Ai Property Portal app.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-carbon">
      <Container className="max-w-4xl">
        <h1 className="text-display-md font-bold text-porcelain mb-2">
          Privacy Policy
        </h1>
        <p className="text-hint mb-10">
          Last updated: January 16, 2026
        </p>

        <div className="space-y-10">
          <p className="text-hint leading-relaxed">
            OpenHouse Ai ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application (the "Property Portal").
          </p>

          <section>
            <h2 className="text-heading-md font-bold text-porcelain mb-4">
              Information We Collect
            </h2>
            <p className="text-hint leading-relaxed mb-4">
              Our Property Portal app is designed with privacy in mind. We collect minimal information:
            </p>
            <ul className="space-y-3 text-hint">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong className="text-porcelain">Property Code:</strong> A unique code provided by your property developer to access property-specific information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong className="text-porcelain">Usage Data:</strong> Anonymous information about how you use the app, including features accessed and interactions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong className="text-porcelain">Device Information:</strong> Device type, operating system, and unique device identifiers for app functionality</span>
              </li>
            </ul>
            <p className="text-hint leading-relaxed mt-4 p-4 rounded-lg border border-gold/20 bg-gold/5">
              <strong className="text-porcelain">We do not collect your email address, phone number, or other personal contact information through the Property Portal app.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-heading-md font-bold text-porcelain mb-4">
              How We Use Your Information
            </h2>
            <p className="text-hint leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-3 text-hint">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span>Provide access to your property-specific information and documents</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span>Display relevant community notices and local information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span>Improve and personalize your app experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span>Maintain and improve app performance and security</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md font-bold text-porcelain mb-4">
              Data Sharing
            </h2>
            <p className="text-hint leading-relaxed mb-4">
              We do not sell your personal information. We may share limited information with:
            </p>
            <ul className="space-y-3 text-hint">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong className="text-porcelain">Service Providers:</strong> Third-party companies that help us operate our app (hosting, analytics) under strict confidentiality agreements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span><strong className="text-porcelain">Legal Requirements:</strong> When required by law or to protect our rights</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md font-bold text-porcelain mb-4">
              Third-Party Content
            </h2>
            <p className="text-hint leading-relaxed">
              Our app may display content from third-party services such as YouTube videos. These services have their own privacy policies, and we encourage you to review them. We do not control or have access to data collected by these third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md font-bold text-porcelain mb-4">
              Data Security
            </h2>
            <p className="text-hint leading-relaxed">
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. All data transmission is encrypted using industry-standard protocols.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md font-bold text-porcelain mb-4">
              Data Retention
            </h2>
            <p className="text-hint leading-relaxed">
              We retain usage data only for as long as necessary to provide and improve our services. You may request deletion of any data associated with your device at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md font-bold text-porcelain mb-4">
              Your Rights
            </h2>
            <p className="text-hint leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-3 text-hint">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span>Access information about the data we hold</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span>Request deletion of your data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span>Withdraw consent for data processing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span>Lodge a complaint with a data protection authority</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading-md font-bold text-porcelain mb-4">
              Children's Privacy
            </h2>
            <p className="text-hint leading-relaxed">
              Our app is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-heading-md font-bold text-porcelain mb-4">
              Changes to This Policy
            </h2>
            <p className="text-hint leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="p-6 rounded-xl border border-gold/20 bg-gold/5">
            <h2 className="text-heading-md font-bold text-porcelain mb-4">
              Contact Us
            </h2>
            <p className="text-hint leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="space-y-2 text-hint">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span>Email: <a href="mailto:sam@openhouseai.ie" className="text-gold hover:text-gold/80 transition-colors">sam@openhouseai.ie</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span>Website: <a href="https://openhouseai.ie" className="text-gold hover:text-gold/80 transition-colors">https://openhouseai.ie</a></span>
              </li>
            </ul>
          </section>
        </div>
      </Container>
    </div>
  );
}
