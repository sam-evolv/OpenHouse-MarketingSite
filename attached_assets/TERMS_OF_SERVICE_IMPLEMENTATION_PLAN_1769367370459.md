# Terms of Service Page Implementation Plan

## Overview
Update the Terms of Service page (`app/terms/page.tsx`) to display comprehensive GDPR-compliant terms using collapsible accordion sections that match the existing site design system (dark theme with `bg-carbon`, `text-porcelain`, `text-hint`, `bg-gold` accents).

---

## File Structure

```
app/terms/
├── page.tsx          # Main page component with accordion UI
└── terms-data.tsx    # Terms content as structured data (21 sections)
```

---

## Step 1: Create `app/terms/terms-data.tsx`

This file contains all 21 sections of the Terms of Service as structured React content.

```tsx
import React from 'react';

export interface TermsSection {
  title: string;
  content: React.ReactNode;
}

export const termsData: TermsSection[] = [
  {
    title: "Introduction and Acceptance",
    content: (
      <>
        <p>
          Welcome to OpenHouse Ai. These Terms of Service constitute a legally binding agreement
          between you and OpenHouse Ai Limited, a company registered in Ireland. By accessing or
          using our platform, you agree to be bound by these Terms and our Privacy Policy.
        </p>
        <p>
          These Terms comply with the General Data Protection Regulation (EU) 2016/679 ("GDPR"),
          the Irish Data Protection Acts 1988-2018, the ePrivacy Directive 2002/58/EC, and all
          other applicable European Union and Irish laws.
        </p>
      </>
    ),
  },
  {
    title: "Description of Services",
    content: (
      <>
        <p>
          OpenHouse Ai is a property technology platform that provides AI-powered property
          assistance services to home purchasers, homeowners, and property developers.
        </p>
        <h4>Our Services include:</h4>
        <ul>
          <li><strong>Pre-handover Portal:</strong> Timeline tracking, document access, and communication tools for home purchasers</li>
          <li><strong>AI Assistant:</strong> AI-powered chatbot for property-related questions and support</li>
          <li><strong>Document Repository:</strong> Digital storage for property documentation including floor plans, contracts, and specifications</li>
          <li><strong>Community Noticeboard:</strong> Development-wide communications between residents</li>
          <li><strong>Developer Portal:</strong> Property management and purchaser communication tools</li>
        </ul>
        <p>
          Users may access the Services via QR codes provided by property developers, unique
          access codes, or through authenticated login. Access is tied to specific property
          units and developments.
        </p>
      </>
    ),
  },
  {
    title: "Legal Basis for Data Processing",
    content: (
      <>
        <p>Under the GDPR, we process your personal data based on the following legal grounds:</p>
        <ul>
          <li><strong>Contractual Necessity (Article 6(1)(b)):</strong> Processing necessary to perform our contract with you, including providing access to your property portal and delivering relevant documents</li>
          <li><strong>Legitimate Interests (Article 6(1)(f)):</strong> Improving our services, ensuring platform security, providing customer support, and conducting analytics. We conduct balancing tests to ensure our interests do not override your rights</li>
          <li><strong>Legal Obligations (Article 6(1)(c)):</strong> Compliance with legal requirements including tax, accounting, and responding to lawful requests from authorities</li>
          <li><strong>Consent (Article 6(1)(a)):</strong> Marketing communications, non-essential cookies, and third-party data sharing beyond service provision. You may withdraw consent at any time without affecting prior processing</li>
        </ul>
      </>
    ),
  },
  {
    title: "Personal Data We Collect",
    content: (
      <>
        <p>
          <strong>Data Minimisation Commitment:</strong> We collect only the personal data strictly
          necessary for the purposes described in these Terms.
        </p>

        <h4>Identity and Contact Information</h4>
        <ul>
          <li>Full name, email address, and phone number</li>
          <li>Property address and Eircode</li>
        </ul>

        <h4>Property Information</h4>
        <ul>
          <li>Unit identifier, development details, house type, bedrooms, and floor area</li>
          <li>Purchase milestone status and dates</li>
          <li>Utility account references (MPRN, electricity account numbers)</li>
        </ul>

        <h4>Usage and Technical Data</h4>
        <ul>
          <li>Chat conversations with the AI assistant</li>
          <li>Document views, downloads, and platform activity</li>
          <li>IP address, browser type, device information, and session identifiers</li>
        </ul>

        <h4>Data from Third Parties (Article 14 GDPR)</h4>
        <p>
          Certain data may be provided by property developers (your name, contact details, property
          information), solicitors (contract dates, milestones), or utility providers (account references).
        </p>
      </>
    ),
  },
  {
    title: "Your Rights Under GDPR",
    content: (
      <>
        <p>
          As a data subject, you have the following rights. We will respond to requests within
          one month, extendable by two months for complex requests.
        </p>
        <ul>
          <li><strong>Right of Access (Article 15):</strong> Obtain confirmation of processing and access to your personal data</li>
          <li><strong>Right to Rectification (Article 16):</strong> Correct inaccurate or incomplete data. You can update certain information directly through your profile settings</li>
          <li><strong>Right to Erasure (Article 17):</strong> Request deletion of your data where no longer necessary or consent is withdrawn</li>
          <li><strong>Right to Restriction (Article 18):</strong> Restrict processing while accuracy is verified or during objection review</li>
          <li><strong>Right to Data Portability (Article 20):</strong> Receive your data in a structured, machine-readable format (JSON, CSV)</li>
          <li><strong>Right to Object (Article 21):</strong> Object to processing based on legitimate interests or for direct marketing</li>
          <li><strong>Automated Decision-Making (Article 22):</strong> Our AI provides informational responses only and does not make decisions affecting your legal rights</li>
        </ul>
        <p>
          To exercise these rights, contact us at <a href="mailto:privacy@openhouse.ie">privacy@openhouse.ie</a>.
        </p>
      </>
    ),
  },
  {
    title: "Data Protection and Security",
    content: (
      <>
        <p>We implement appropriate technical and organisational measures to protect your personal data:</p>
        <ul>
          <li><strong>Technical Measures:</strong> Encryption in transit (TLS 1.2+) and at rest, secure access controls, regular security assessments, and intrusion detection systems</li>
          <li><strong>Organisational Measures:</strong> Staff training on data protection, need-to-know access restrictions, data protection impact assessments for high-risk processing, and incident response procedures</li>
          <li><strong>Breach Notification:</strong> We will notify the Data Protection Commission within 72 hours of becoming aware of a breach that poses risk to your rights. High-risk breaches will be communicated directly to affected individuals</li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <>
        <p>We retain personal data only as long as necessary:</p>
        <ul>
          <li><strong>Account and property data:</strong> Duration of property association plus 7 years for legal purposes</li>
          <li><strong>Chat conversations:</strong> 3 years from conversation date</li>
          <li><strong>Document access logs:</strong> 2 years</li>
          <li><strong>Analytics data:</strong> Raw data deleted after 12 months; aggregated data retained</li>
          <li><strong>Audit logs:</strong> 7 years for compliance purposes</li>
        </ul>
        <p>Upon expiry of retention periods, data will be securely deleted or anonymised.</p>
      </>
    ),
  },
  {
    title: "International Data Transfers",
    content: (
      <>
        <p>
          Your data is primarily processed within the European Economic Area (EEA). Where transfers
          outside the EEA occur, we ensure appropriate safeguards:
        </p>
        <ul>
          <li>European Commission adequacy decisions</li>
          <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
          <li>Binding Corporate Rules where applicable</li>
        </ul>
        <p>
          Our infrastructure partners include Supabase (database services), Vercel (hosting), and
          OpenAI (AI processing). Contact us for specific transfer information.
        </p>
      </>
    ),
  },
  {
    title: "Third-Party Data Sharing",
    content: (
      <>
        <p>We share personal data with third parties only as described below:</p>
        <ul>
          <li><strong>Property Developers:</strong> Access to your property information and platform interactions to facilitate the purchase process and provide support</li>
          <li><strong>Service Providers:</strong> Cloud hosting (Vercel, Supabase), AI services (OpenAI), and analytics providers under strict data processing agreements</li>
          <li><strong>Legal Requirements:</strong> Disclosure where required by law, in response to valid requests by public authorities, or to protect our rights and safety</li>
        </ul>
      </>
    ),
  },
  {
    title: "Cookies and Similar Technologies",
    content: (
      <>
        <p>We use cookies in compliance with the ePrivacy Directive:</p>
        <ul>
          <li><strong>Strictly Necessary:</strong> Essential for platform function (authentication, security, sessions) - cannot be disabled</li>
          <li><strong>Functional:</strong> Remember your preferences and settings</li>
          <li><strong>Analytics:</strong> With your consent, help us understand platform usage. You may opt out at any time through our cookie settings or your browser</li>
        </ul>
      </>
    ),
  },
  {
    title: "User Obligations",
    content: (
      <>
        <p>By using our Services, you agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Keep your access codes and credentials confidential</li>
          <li>Use the Services only for lawful purposes</li>
          <li>Respect the rights and privacy of other users</li>
          <li>Not attempt to gain unauthorised access to any part of the Services</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>
      </>
    ),
  },
  {
    title: "Community Noticeboard Terms",
    content: (
      <>
        <p>
          The community noticeboard allows users within the same development to communicate.
          By using this feature:
        </p>
        <ul>
          <li>You agree not to post content that is offensive, defamatory, or harassing</li>
          <li>You acknowledge that your posts may be visible to other users in your development</li>
          <li>You understand that posts may be moderated or removed if they violate these Terms</li>
          <li>You retain responsibility for the content you post</li>
        </ul>
        <p>We reserve the right to remove content and restrict access to users who violate these terms.</p>
      </>
    ),
  },
  {
    title: "AI Assistant Services",
    content: (
      <>
        <p>
          Our AI-powered assistant provides information based on documentation from your property
          developer. Please note:
        </p>
        <ul>
          <li>Responses are for informational purposes only and should not be considered professional advice</li>
          <li>For legal, financial, or technical matters, consult appropriate professionals</li>
          <li>Conversations may be stored and analysed to improve the service</li>
          <li>We do not guarantee accuracy or completeness of AI-generated responses</li>
        </ul>
      </>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <>
        <p>To the maximum extent permitted by applicable law:</p>
        <ul>
          <li>The Services are provided "as is" without warranties of any kind</li>
          <li>We shall not be liable for any indirect, incidental, special, or consequential damages</li>
          <li>Our total liability shall not exceed the amount paid by you for the Services</li>
        </ul>
        <p>
          Nothing in these Terms excludes liability for fraud, death or personal injury caused by
          negligence, or any other liability that cannot be excluded by law.
        </p>
      </>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <p>
        All intellectual property rights in the Services, including software, design, logos, and
        content (excluding user-generated content and property developer materials), belong to
        OpenHouse Ai or our licensors. You are granted a limited, non-exclusive, non-transferable
        licence to use the Services for their intended purpose.
      </p>
    ),
  },
  {
    title: "Changes to These Terms",
    content: (
      <p>
        We may update these Terms from time to time. We will notify you of material changes by
        posting the new Terms on our platform and, where appropriate, by email. Your continued
        use of the Services after such notice constitutes acceptance of the updated Terms. If
        you do not agree to the updated Terms, you must stop using the Services.
      </p>
    ),
  },
  {
    title: "Termination",
    content: (
      <p>
        We may terminate or suspend your access to the Services immediately, without prior notice
        or liability, for any reason, including if you breach these Terms. Upon termination, your
        right to use the Services will cease immediately, but provisions that by their nature
        should survive termination (including intellectual property, limitation of liability, and
        governing law) shall survive.
      </p>
    ),
  },
  {
    title: "Complaints and Supervisory Authority",
    content: (
      <>
        <p>
          If you have any concerns about our data processing activities, please contact us first
          at <a href="mailto:privacy@openhouse.ie">privacy@openhouse.ie</a>. We will endeavour to
          resolve your complaint promptly.
        </p>
        <p>
          You also have the right to lodge a complaint with the Data Protection Commission (DPC),
          the Irish supervisory authority:
        </p>
        <div className="info-box">
          <p><strong>Data Protection Commission</strong></p>
          <p>21 Fitzwilliam Square South</p>
          <p>Dublin 2, D02 RD28, Ireland</p>
          <p>Website: <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer">www.dataprotection.ie</a></p>
          <p>Phone: +353 (0)1 765 0100 / +353 (0)57 868 4800</p>
        </div>
      </>
    ),
  },
  {
    title: "Governing Law and Jurisdiction",
    content: (
      <p>
        These Terms shall be governed by and construed in accordance with the laws of Ireland,
        without regard to its conflict of law provisions. Any disputes arising under these Terms
        shall be subject to the exclusive jurisdiction of the courts of Ireland.
      </p>
    ),
  },
  {
    title: "Severability",
    content: (
      <p>
        If any provision of these Terms is found to be invalid or unenforceable, the remaining
        provisions shall remain in full force and effect. The invalid or unenforceable provision
        shall be modified to the minimum extent necessary to make it valid and enforceable while
        preserving the parties' original intent.
      </p>
    ),
  },
  {
    title: "Contact Information",
    content: (
      <>
        <p>For questions about these Terms or our Services:</p>
        <div className="info-box">
          <p><strong>OpenHouse Ai Limited</strong></p>
          <p>Registered in Ireland</p>
          <p>General Enquiries: <a href="mailto:hello@openhouse.ie">hello@openhouse.ie</a></p>
          <p>Privacy & Data Protection: <a href="mailto:privacy@openhouse.ie">privacy@openhouse.ie</a></p>
          <p>Data Protection Officer: <a href="mailto:dpo@openhouse.ie">dpo@openhouse.ie</a></p>
        </div>
      </>
    ),
  },
];
```

---

## Step 2: Update `app/terms/page.tsx`

Replace the current page with an accordion-based layout matching the site's design system.

```tsx
'use client';

import { useState } from 'react';
import { Container } from "@/components/ui/container";

import { termsData } from './terms-data';

// Inline ChevronDown icon
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`text-hint transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function TermsPage() {
  const [openSections, setOpenSections] = useState<number[]>([0]); // First section open by default

  const toggleSection = (index: number) => {
    setOpenSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const expandAll = () => setOpenSections(termsData.map((_, i) => i));
  const collapseAll = () => setOpenSections([]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-carbon">
      <Container className="max-w-4xl">
        {/* Header */}
        <h1 className="text-display-md font-bold text-porcelain mb-2">
          Terms of Service
        </h1>
        <p className="text-hint mb-6">
          Last updated: January 25, 2026
        </p>

        {/* Intro text */}
        <p className="text-hint leading-relaxed mb-8">
          Please read these terms carefully before using OpenHouse Ai. These Terms comply with
          the GDPR, Irish Data Protection Acts, and all applicable EU regulations.
        </p>

        {/* Expand/Collapse Controls */}
        <div className="flex justify-end gap-4 mb-6">
          <button
            onClick={expandAll}
            className="text-sm text-gold hover:text-gold/80 transition-colors"
          >
            Expand all
          </button>
          <span className="text-hint/50">|</span>
          <button
            onClick={collapseAll}
            className="text-sm text-gold hover:text-gold/80 transition-colors"
          >
            Collapse all
          </button>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-3">
          {termsData.map((section, index) => (
            <div
              key={index}
              className="border border-hint/20 rounded-lg overflow-hidden bg-carbon-light/20"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-carbon-light/30 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gold w-8">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-porcelain">{section.title}</span>
                </span>
                <ChevronIcon isOpen={openSections.includes(index)} />
              </button>

              {/* Accordion Content */}
              {openSections.includes(index) && (
                <div className="px-6 pb-6 pt-2 border-t border-hint/10">
                  <div className="pl-12 terms-content">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-carbon-light/30 rounded-lg border border-hint/20">
          <h3 className="font-semibold text-porcelain mb-2">Questions about these terms?</h3>
          <p className="text-hint text-sm mb-4">
            If you have any questions about our Terms of Service, please contact us.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="mailto:hello@openhouse.ie" className="text-gold hover:underline">
              hello@openhouse.ie
            </a>
            <a href="mailto:privacy@openhouse.ie" className="text-gold hover:underline">
              privacy@openhouse.ie
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
```

---

## Step 3: Add CSS for Terms Content

Add these styles to `app/globals.css` (or create a scoped CSS module):

```css
/* Terms of Service Content Styling */
.terms-content {
  @apply text-hint leading-relaxed;
}

.terms-content p {
  @apply mb-4;
}

.terms-content h4 {
  @apply text-porcelain font-semibold mt-6 mb-3;
}

.terms-content ul {
  @apply space-y-2 my-4;
}

.terms-content li {
  @apply flex items-start gap-3;
}

.terms-content li::before {
  content: '';
  @apply w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0;
}

.terms-content strong {
  @apply text-porcelain;
}

.terms-content a {
  @apply text-gold hover:underline;
}

.terms-content .info-box {
  @apply bg-carbon-light/30 border border-hint/20 rounded-lg p-4 mt-4;
}

.terms-content .info-box p {
  @apply mb-1;
}
```

---

## Step 4: Add Metadata (Optional)

If you want to add SEO metadata, update the page to export metadata:

```tsx
// At the top of page.tsx, add:
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - OpenHouse Ai",
  description: "Terms of Service for the OpenHouse Ai Property Portal. GDPR compliant terms covering data processing, user rights, and service usage.",
};

// Note: If using 'use client', you'll need to move metadata to a separate layout.tsx file
```

Or create `app/terms/layout.tsx`:

```tsx
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
```

---

## Design Tokens Reference

Ensure these colors are defined in your Tailwind config or CSS:

| Token | Usage | Value |
|-------|-------|-------|
| `bg-carbon` | Page background | Dark background |
| `bg-carbon-light` | Card/section backgrounds | Slightly lighter |
| `text-porcelain` | Headings, emphasis | Light/white text |
| `text-hint` | Body text, secondary | Muted gray text |
| `bg-gold` / `text-gold` | Accents, links, bullets | Gold/amber accent |
| `border-hint/20` | Borders | Subtle borders |

---

## Summary of Changes

1. **Create `app/terms/terms-data.tsx`** - Contains all 21 GDPR-compliant sections as structured data
2. **Replace `app/terms/page.tsx`** - New accordion-based UI with expand/collapse functionality
3. **Update `app/globals.css`** - Add `.terms-content` styles for consistent formatting
4. **Optional: Create `app/terms/layout.tsx`** - For SEO metadata

## Features

- ✅ Collapsible accordion sections (21 sections total)
- ✅ "Expand all" / "Collapse all" controls
- ✅ First section open by default
- ✅ Gold numbered section indicators
- ✅ Matches existing dark theme design system
- ✅ Full GDPR compliance (Articles 6, 13-22 covered)
- ✅ Mobile responsive
- ✅ Accessible (keyboard navigation, semantic HTML)
- ✅ No external dependencies (inline SVG icon)

## Content Sections (21 Total)

1. Introduction and Acceptance
2. Description of Services
3. Legal Basis for Data Processing
4. Personal Data We Collect
5. Your Rights Under GDPR
6. Data Protection and Security
7. Data Retention
8. International Data Transfers
9. Third-Party Data Sharing
10. Cookies and Similar Technologies
11. User Obligations
12. Community Noticeboard Terms
13. AI Assistant Services
14. Limitation of Liability
15. Intellectual Property
16. Changes to These Terms
17. Termination
18. Complaints and Supervisory Authority
19. Governing Law and Jurisdiction
20. Severability
21. Contact Information
