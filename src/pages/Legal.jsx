import React from 'react';
import { useLocation } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard.jsx';
import CTABannerSection from '../components/home/CTABannerSection.jsx';

export default function Legal() {
  const { pathname } = useLocation();
  const isPrivacy = pathname === '/privacy';

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-12">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neon">
              ↳ SYSTEM / LEGAL
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white uppercase tracking-tighter mb-4">
            {isPrivacy ? 'PRIVACY POLICY' : 'TERMS & CONDITIONS'}
          </h1>
          <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest">
            Last Updated: August 1, 2026
          </p>
        </div>

        <GlassCard className="p-8 sm:p-12 space-y-8 font-mono text-sm text-foreground/80 leading-relaxed uppercase" glowColor="none">
          {isPrivacy ? (
            <>
              <div>
                <h2 className="text-xl font-display font-black text-white uppercase tracking-tighter mb-3">
                  1. Information We Collect
                </h2>
                <p className="text-sm">
                  We collect personal information that you voluntarily provide to us when expressing interest in obtaining information about our digital agency services, or when contacting us through our online inquiry forms. This includes your name, email address, phone number, and project details.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-display font-black text-white uppercase tracking-tighter mb-3">
                  2. How We Use Your Information
                </h2>
                <p className="text-sm">
                  We use your information solely to respond to your project inquiries, deliver technical proposals, and manage client communications. We never sell, rent, or trade your personal data to third-party marketing companies.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-display font-black text-white uppercase tracking-tighter mb-3">
                  3. Data Security & Storage
                </h2>
                <p className="text-sm">
                  We implement industry-standard technical and organizational security measures to protect the confidentiality and integrity of your personal information.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2 className="text-xl font-display font-black text-white uppercase tracking-tighter mb-3">
                  1. Acceptance of Terms
                </h2>
                <p className="text-sm">
                  By accessing the Yentra website or engaging our software engineering services, you agree to be bound by these Terms and Conditions.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-display font-black text-white uppercase tracking-tighter mb-3">
                  2. Intellectual Property Ownership
                </h2>
                <p className="text-sm">
                  Upon full settlement of agreed invoices, clients retain 100% ownership of all custom source code, design assets, and intellectual property developed specifically for their project.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-display font-black text-white uppercase tracking-tighter mb-3">
                  3. Warranties & SLAs
                </h2>
                <p className="text-sm">
                  All custom software engineering deliverables are covered by our standard post-launch warranty and maintenance SLAs as specified in individual Statement of Work (SOW) agreements.
                </p>
              </div>
            </>
          )}
        </GlassCard>
      </div>

      <CTABannerSection />
    </div>
  );
}
