'use client';

import { useState } from 'react';
import { Container } from "@/components/ui/container";
import { termsData } from './terms-data';

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
  const [openSections, setOpenSections] = useState<number[]>([0]);

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
        <h1 className="text-display-md font-bold text-porcelain mb-2">
          Terms of Service
        </h1>
        <p className="text-hint mb-6">
          Last updated: January 25, 2026
        </p>

        <p className="text-hint leading-relaxed mb-8">
          Please read these terms carefully before using OpenHouse Ai. These Terms comply with
          the GDPR, Irish Data Protection Acts, and all applicable EU regulations.
        </p>

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

        <div className="space-y-3">
          {termsData.map((section, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg overflow-hidden bg-slate/20"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate/30 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gold w-8">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-porcelain">{section.title}</span>
                </span>
                <ChevronIcon isOpen={openSections.includes(index)} />
              </button>

              {openSections.includes(index) && (
                <div className="px-6 pb-6 pt-2 border-t border-white/5">
                  <div className="pl-12 terms-content">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl border border-gold/20 bg-gold/5">
          <h3 className="font-semibold text-porcelain mb-2">Questions about these terms?</h3>
          <p className="text-hint text-sm mb-4">
            If you have any questions about our Terms of Service, please contact us.
          </p>
          <a href="mailto:sam@openhouseai.ie" className="text-gold hover:text-gold/80 font-medium">
            sam@openhouseai.ie
          </a>
        </div>
      </Container>
    </div>
  );
}
