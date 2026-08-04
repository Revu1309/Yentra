import React from 'react';
import { useLocation } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard.jsx';
import CTABannerSection from '../components/home/CTABannerSection.jsx';

export default function Legal() {
  const { pathname } = useLocation();
  const isPrivacy = pathname === '/privacy';

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/30 mb-6">
            Legal Information
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-medium text-foreground tracking-tight mb-4">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
          </h1>
          <p className="text-sm text-foreground/60">
            Last Updated: August 1, 2026
          </p>
        </div>

        <GlassCard className="p-8 sm:p-12 space-y-8 text-foreground/80 leading-relaxed" glowColor="purple">
          {isPrivacy ? (
            <>
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                  1. Information We Collect
                </h2>
                <p className="text-sm">
                  We collect personal information that you voluntarily provide to us when expressing interest in obtaining information about our digital agency services, or when contacting us through our online inquiry forms. This includes your name, email address, phone number, and project details.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                  2. How We Use Your Information
                </h2>
                <p className="text-sm">
                  We use your information solely to respond to your project inquiries, deliver technical proposals, and manage client communications. We never sell, rent, or trade your personal data to third-party marketing companies.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-3">
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
                <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                  1. Acceptance of Terms
                </h2>
                <p className="text-sm">
                  By accessing the Yentra website or engaging our software engineering services, you agree to be bound by these Terms and Conditions.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                  2. Intellectual Property Ownership
                </h2>
                <p className="text-sm">
                  Upon full settlement of agreed invoices, clients retain 100% ownership of all custom source code, design assets, and intellectual property developed specifically for their project.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mb-3">
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
