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
          To exercise these rights, contact us at <a href="mailto:sam@openhouseai.ie">sam@openhouseai.ie</a>.
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
          at <a href="mailto:sam@openhouseai.ie">sam@openhouseai.ie</a>. We will endeavour to
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
        preserving the parties&apos; original intent.
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
          <p>General Enquiries: <a href="mailto:sam@openhouseai.ie">sam@openhouseai.ie</a></p>
          <p>Website: <a href="https://openhouseai.ie">https://openhouseai.ie</a></p>
        </div>
      </>
    ),
  },
];
