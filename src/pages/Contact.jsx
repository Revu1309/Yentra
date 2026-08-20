import React, { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import GlassCard from '../components/ui/GlassCard.jsx';
import GlowButton from '../components/ui/GlowButton.jsx';
import { companyInfo } from '../data/company.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    budget: '$10k - $25k',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate sending message
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Web Development',
        budget: '$10k - $25k',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="flex justify-center mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-neon">
            ↳ SYSTEM / CONTACT
          </span>
        </div>
        <h1 className="text-[clamp(4rem,9vw,10rem)] font-display font-black text-white tracking-tighter uppercase leading-[0.85] mb-12">
          DIGITAL <br />
          <span className="text-neon">ADVANTAGE.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl font-mono text-foreground/60 leading-relaxed uppercase">
          Tell us about your project, timeline, and goals. Our engineering leaders will respond within 24 hours with a preliminary technical assessment.
        </p>
      </div>

      {/* Main Grid: Form Left, Contact Info & Map Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28">
        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <GlassCard className="p-8 sm:p-12" glowColor="none" hoverEffect={false}>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tighter mb-4">
              SEND US A MESSAGE
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/60 mb-8">
              Fill out the form below or connect instantly via WhatsApp.
            </p>

            {status === 'success' ? (
              <div className="p-8 bg-transparent border border-neon text-center space-y-4 animate-fade-up">
                <div className="w-16 h-16 bg-neon text-black mx-auto flex items-center justify-center text-3xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-display font-black uppercase text-white tracking-tighter">
                  MESSAGE RECEIVED
                </h3>
                <p className="font-mono text-sm uppercase text-foreground/80 max-w-md mx-auto">
                  Thank you for contacting Yentra. One of our lead technical directors is reviewing your inquiry and will contact you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-transparent border border-white/20 hover:border-neon hover:text-neon text-xs font-mono uppercase tracking-widest text-white transition-colors mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-foreground/70 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-none bg-white/5 border border-white/10 focus:border-neon focus:outline-none text-white text-sm transition-all font-mono placeholder:text-white/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-foreground/70 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-none bg-white/5 border border-white/10 focus:border-neon focus:outline-none text-white text-sm transition-all font-mono placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-foreground/70 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-none bg-white/5 border border-white/10 focus:border-neon focus:outline-none text-white text-sm transition-all font-mono placeholder:text-white/20"
                    />
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-foreground/70 mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-none bg-white/5 border border-white/10 focus:border-neon focus:outline-none text-white text-sm transition-all font-mono [&>option]:bg-background [&>option]:text-foreground"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Web Applications">Web Applications</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="SEO Optimization">SEO Optimization</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="AI Integration">AI Integration</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-widest text-foreground/70 mb-2">
                    Project Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-none bg-white/5 border border-white/10 focus:border-neon focus:outline-none text-white text-sm transition-all font-mono [&>option]:bg-background [&>option]:text-foreground"
                  >
                    <option value="Under $10k">Under $10k</option>
                    <option value="$10k - $25k">$10k — $25k</option>
                    <option value="$25k - $50k">$25k — $50k</option>
                    <option value="$50k - $100k">$50k — $100k</option>
                    <option value="$100k+">$100k+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-widest text-foreground/70 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your objectives, current challenges, and desired timeline..."
                    className="w-full px-4 py-3 rounded-none bg-white/5 border border-white/10 focus:border-neon focus:outline-none text-white text-sm transition-all font-mono resize-none placeholder:text-white/20"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <GlowButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {status === 'submitting' ? 'Sending Message...' : 'Submit Project Inquiry →'}
                  </GlowButton>
                </div>
              </form>
            )}
          </GlassCard>
        </div>

        {/* Contact Info & Direct Channels Column */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct WhatsApp Box */}
          <GlassCard className="p-8 border-neon" glowColor="none">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-neon flex items-center justify-center text-black">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-black text-white text-xl uppercase tracking-tighter">
                  INSTANT WHATSAPP
                </h3>
                <p className="font-mono text-xs uppercase text-foreground/60">
                  Typical response: under 15 mins
                </p>
              </div>
            </div>
            <p className="font-mono text-xs uppercase text-foreground/75 mb-6 leading-relaxed">
              Need immediate technical answers? Chat directly with our engineering triage desk on WhatsApp.
            </p>
            <a
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-neon hover:bg-white text-black font-mono text-xs font-bold tracking-widest uppercase transition-all"
            >
              <span>OPEN WHATSAPP →</span>
            </a>
          </GlassCard>

          {/* Contact Details List */}
          <GlassCard className="p-8 space-y-6" glowColor="none">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon block mb-2">
                ↳ Phone Number
              </span>
              <a
                href={`tel:${companyInfo.phone}`}
                className="text-2xl font-display font-black text-white hover:text-neon transition-colors uppercase tracking-tighter"
              >
                {companyInfo.phone}
              </a>
              <p className="font-mono text-xs text-foreground/60 mt-1 uppercase">Mon — Fri, 9:00 AM — 6:00 PM</p>
            </div>

            <div className="border-t border-white/5 pt-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-coral block mb-2">
                ↳ Email Address
              </span>
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-2xl font-display font-black text-white hover:text-coral transition-colors uppercase tracking-tighter"
              >
                {companyInfo.email}
              </a>
              <p className="font-mono text-xs text-foreground/60 mt-1 uppercase">For proposals & inquiries</p>
            </div>

            <div className="border-t border-white/5 pt-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon block mb-2">
                ↳ Headquarters
              </span>
              <p className="text-xl font-display font-black text-white uppercase tracking-tighter">
                {companyInfo.address.line1}
              </p>
              <p className="font-mono text-xs text-foreground/60 mt-1 uppercase">{companyInfo.address.line2}</p>
            </div>

            {/* Social Icons Strip */}
            <div className="border-t border-white/5 pt-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground/60 block mb-4">
                ↳ Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={companyInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-transparent border border-white/20 hover:border-neon hover:text-neon flex items-center justify-center text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.67a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6z"/>
                  </svg>
                </a>
                <a
                  href={companyInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-transparent border border-white/20 hover:border-coral hover:text-coral flex items-center justify-center text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={companyInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-transparent border border-white/20 hover:border-neon hover:text-neon flex items-center justify-center text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
                  </svg>
                </a>
                <a
                  href={companyInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-10 h-10 bg-transparent border border-white/20 hover:border-coral hover:text-coral flex items-center justify-center text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </GlassCard>

          {/* Embedded Google Map */}
          <div className="rounded-3xl overflow-hidden border border-white/10 h-64 shadow-xl">
            <iframe
              title="Yentra Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.087799566373!2d-122.39801832356515!3d37.78912387198188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858062828b6d21%3A0x6b772412e617d5c9!2sHoward%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1711200000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
