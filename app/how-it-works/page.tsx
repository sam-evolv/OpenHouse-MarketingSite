"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Upload,
  Cpu,
  Smartphone,
  BarChart3,
  MessageSquareX,
  Radar,
  ShieldCheck,
  LayoutDashboard,
  Check,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const getFadeInUp = (reducedMotion: boolean | null) => ({
  hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: reducedMotion ? 0 : 0.5, ease: easeOut }
  }
});

const getStaggerContainer = (reducedMotion: boolean | null) => ({
  hidden: { opacity: reducedMotion ? 1 : 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: reducedMotion ? 0 : 0.1, delayChildren: reducedMotion ? 0 : 0.2 }
  }
});

const getStaggerItem = (reducedMotion: boolean | null) => ({
  hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: reducedMotion ? 0 : 0.5, ease: easeOut }
  }
});

const journeySteps = [
  {
    icon: Upload,
    title: "Upload Documents",
    description: "Drawings, manuals, warranties, video tutorials — drop them in once"
  },
  {
    icon: Cpu,
    title: "AI Processes",
    description: "Every document becomes instantly searchable and answerable"
  },
  {
    icon: Smartphone,
    title: "Residents Activate",
    description: "One tap via NFC or QR. No apps to download. No passwords."
  },
  {
    icon: BarChart3,
    title: "You See Everything",
    description: "Questions, trends, acknowledgments — all in one dashboard"
  }
];

const toolCards = [
  {
    icon: MessageSquareX,
    title: "Slash After-Sales Burden",
    features: [
      "AI answers purchaser queries 24/7 — trained on your documents",
      "Embed video tutorials for heat pumps, thermostats, appliances",
      "Trigger seasonal notifications automatically"
    ],
    result: "Your team stops fielding repetitive calls."
  },
  {
    icon: Radar,
    title: "Early Warning System",
    features: [
      "AI analyses every question across your development",
      "Spots trends and recurring issues automatically",
      "Flags potential problems before they escalate"
    ],
    result: "Fix issues in week 2, not court in month 6."
  },
  {
    icon: ShieldCheck,
    title: "Legal Protection Built In",
    features: [
      'Mark any document or video as "Must Read"',
      "Purchasers prompted to acknowledge before continuing",
      "Every agreement logged with timestamp"
    ],
    result: 'When they say "nobody told me" — you have the receipt.'
  },
  {
    icon: LayoutDashboard,
    title: "Sales & Build Pipeline",
    features: [
      "Sales Pipeline — live status shared with agents and solicitors",
      "Kitchen Selection — auto-emails at contract signing",
      "Build Progress — BCMS, Homebond, snag dates updated live",
      "Smart Alerts — issues flagged, right person notified",
      "Weekly Briefings — Monday updates + analytics email"
    ],
    result: "Everyone sees the same truth. No chasing."
  }
];

const beforeItems = [
  "€30-50k on printed folders",
  "Weeks of manual collation",
  "Excel spreadsheets via email",
  "Repetitive calls for months",
  '"Nobody told me" disputes',
  "No insight post-handover",
  "Chasing agents for updates"
];

const afterItems = [
  "One-time digital setup",
  "Minutes to upload",
  "One live dashboard",
  "AI answers 24/7",
  "Timestamped acknowledgments",
  "Trend analysis & early warnings",
  "Everyone updates one system"
];

const exampleQuestions = [
  "What size is my living room?",
  "How do I adjust the heat pump?",
  "Is the boiler still under warranty?",
  "Where's the nearest GP?"
];

export default function HowItWorksPage() {
  const prefersReducedMotion = useReducedMotion();
  
  const fadeInUp = getFadeInUp(prefersReducedMotion);
  const staggerContainer = getStaggerContainer(prefersReducedMotion);
  const staggerItem = getStaggerItem(prefersReducedMotion);

  return (
    <main className="bg-[#0b0c0f] min-h-screen pt-32 lg:pt-36">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: easeOut }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-gold/30 text-gold text-xs tracking-widest font-medium uppercase"
          >
            For Developers
          </motion.div>
          
          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1, ease: easeOut }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            See How It Works
          </motion.h1>
          
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease: easeOut }}
            className="mt-6 text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed"
          >
            One platform that replaces folders, spreadsheets, and phone calls. From document upload to live analytics in minutes.
          </motion.p>
        </div>
        
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-neutral-500 tracking-widest">SCROLL TO EXPLORE</span>
          <ChevronDown className={`w-5 h-5 text-neutral-500 ${prefersReducedMotion ? '' : 'motion-safe:animate-bounce'}`} />
        </motion.div>
      </section>

      {/* SECTION 2: THE SETUP */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <span className="text-gold text-xs tracking-widest font-medium uppercase">Getting Started</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Live in Minutes. Not Months.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative"
        >
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold/50 via-gold/30 to-gold/50" />
          
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={staggerItem}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-12 h-12 rounded-full bg-gold text-carbon flex items-center justify-center text-lg font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                {index + 1}
              </div>
              
              <div className="mt-6 w-16 h-16 rounded-2xl bg-[#12151b] border border-[#1e2531] flex items-center justify-center">
                <step.icon className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-400 max-w-[220px]">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20"
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#1e2531] shadow-2xl max-w-5xl mx-auto bg-[#0f1115]">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-[#12151b] to-[#0b0c0f]">
              <div className="text-center p-8">
                <LayoutDashboard className="w-16 h-16 text-gold/30 mx-auto mb-4" />
                <p className="text-neutral-500 text-sm">Developer Dashboard Preview</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-neutral-500">
            The Developer Dashboard — your single source of truth
          </p>
        </motion.div>
      </section>

      {/* SECTION 3: YOUR TOOLS */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <span className="text-gold text-xs tracking-widest font-medium uppercase">Developer Tools</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            One Dashboard. Everything You Need.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {toolCards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerItem}
              className="group relative bg-[#0f1115] rounded-2xl p-8 border border-[#1e2531] hover:border-gold/30 hover:shadow-[0_8px_32px_rgba(212,175,55,0.12)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <card.icon className="w-7 h-7 text-gold" />
              </div>
              
              <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
              
              <ul className="mt-4 space-y-3">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold/70 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-[#1e2531]">
                <p className="text-sm text-gold font-medium">{card.result}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 4: THE PURCHASER JOURNEY */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="text-gold text-xs tracking-widest font-medium uppercase">Purchaser Experience</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            A Premium Experience That Reflects Your Brand
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl">
            From the day they sign to the day they move in — and every day after.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-gold" />
          
          {/* Phase 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="relative pl-16 md:pl-24 pb-16"
          >
            <div className="absolute left-2 md:left-6 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <span className="text-xs text-gold tracking-widest font-medium uppercase">Phase 1</span>
                <h3 className="mt-2 text-2xl font-semibold text-white">Pre-Handover Portal</h3>
                <p className="mt-1 text-sm text-neutral-500">Contract to Keys</p>
                
                <p className="mt-4 text-neutral-300 max-w-lg">
                  As soon as contracts are signed, purchasers receive a unique code to their personal portal.
                </p>
                
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-gold/70 mt-0.5 flex-shrink-0" />
                    Watch their home being built — live progress updates
                  </li>
                  <li className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-gold/70 mt-0.5 flex-shrink-0" />
                    See important dates as they arise
                  </li>
                  <li className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-gold/70 mt-0.5 flex-shrink-0" />
                    Access FAQs and key documents
                  </li>
                  <li className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-gold/70 mt-0.5 flex-shrink-0" />
                    Feel informed on the biggest purchase of their life
                  </li>
                </ul>
                
                <div className="mt-6 p-4 rounded-xl bg-[#12151b] border border-[#1e2531]">
                  <p className="text-sm text-neutral-400 italic">
                    &ldquo;No more &apos;when will my house be ready?&apos; calls to your sales team.&rdquo;
                  </p>
                </div>
              </div>
              
              <div className="relative w-[280px] sm:w-[300px] mx-auto lg:mx-0">
                <div className="bg-neutral-900 rounded-[2.5rem] p-2 shadow-2xl border border-neutral-800">
                  <div className="bg-black rounded-[2.25rem] overflow-hidden aspect-[9/19.5] relative">
                    <img 
                      src="/images/app-portal.png" 
                      alt="Pre-Handover Portal showing build progress, key dates, and property details"
                      className="absolute top-0 left-0 w-full h-full object-cover object-top"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Keys Day Transition */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative pl-16 md:pl-24 py-8"
          >
            <div className="absolute left-1 md:left-5 w-6 h-6 rotate-45 bg-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]" />
            <p className="text-gold font-semibold">KEYS DAY — The portal transforms</p>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="relative pl-16 md:pl-24 pt-8"
          >
            <div className="absolute left-2 md:left-6 w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <span className="text-xs text-gold tracking-widest font-medium uppercase">Phase 2</span>
                <h3 className="mt-2 text-2xl font-semibold text-white">Property Assistant</h3>
                <p className="mt-1 text-sm text-neutral-500">Keys Onwards — Forever</p>
                
                <p className="mt-4 text-neutral-300 max-w-lg">
                  At handover, the AI assistant activates — trained on their specific home.
                </p>
                
                <p className="mt-6 text-sm text-neutral-400 font-medium">What they can ask:</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exampleQuestions.map((q) => (
                    <span
                      key={q}
                      className="inline-block px-4 py-2 rounded-full bg-[#12151b] border border-[#1e2531] text-sm text-neutral-300"
                    >
                      {q}
                    </span>
                  ))}
                </div>
                
                <p className="mt-6 text-sm text-neutral-400 font-medium">What they get:</p>
                <ul className="mt-3 space-y-3">
                  <li className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-gold/70 mt-0.5 flex-shrink-0" />
                    All documents and video tutorials in one place
                  </li>
                  <li className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-gold/70 mt-0.5 flex-shrink-0" />
                    Local area navigation via Google Maps
                  </li>
                  <li className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-gold/70 mt-0.5 flex-shrink-0" />
                    Community noticeboard for their development
                  </li>
                  <li className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="w-5 h-5 text-gold/70 mt-0.5 flex-shrink-0" />
                    Seasonal tips and developer updates
                  </li>
                </ul>
                
                <div className="mt-6 p-4 rounded-xl bg-[#12151b] border border-[#1e2531]">
                  <p className="text-sm text-neutral-400 italic">
                    &ldquo;No more Monday morning voicemails asking how the heat pump works.&rdquo;
                  </p>
                </div>
              </div>
              
              <div className="relative w-[280px] sm:w-[300px] mx-auto lg:mx-0">
                <div className="bg-neutral-900 rounded-[2.5rem] p-2 shadow-2xl border border-neutral-800">
                  <div className="bg-black rounded-[2.25rem] overflow-hidden aspect-[9/19.5] relative">
                    <img 
                      src="/images/app-assistant.png" 
                      alt="AI Property Assistant with chat interface and quick action buttons"
                      className="absolute top-0 left-0 w-full h-full object-cover object-top"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: THE TRANSFORMATION */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <span className="text-gold text-xs tracking-widest font-medium uppercase">The Result</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Replace Cost with Value
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Before Card */}
          <motion.div
            variants={staggerItem}
            className="bg-[#0b0c0f] rounded-2xl p-8 border border-[#1e2531]"
          >
            <p className="text-xs text-neutral-500 tracking-widest font-medium uppercase mb-8">Before OpenHouse Ai</p>
            <ul className="space-y-5">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400/70 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-400">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After Card */}
          <motion.div
            variants={staggerItem}
            className="bg-[#0f1115] rounded-2xl p-8 border border-gold/20 shadow-[0_8px_32px_rgba(212,175,55,0.12)]"
          >
            <p className="text-xs text-gold tracking-widest font-medium uppercase mb-8">With OpenHouse Ai</p>
            <ul className="space-y-5">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-2xl md:text-3xl font-semibold text-white text-center"
        >
          Turn your biggest admin headache into a competitive advantage.
        </motion.p>
      </section>

      {/* SECTION 6: CTA */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)]" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to See It in Action?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Book a 15-minute demo and see how OpenHouse Ai works for your next development.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-carbon h-12 px-8 text-base font-medium rounded-xl hover:bg-gold/90 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] active:scale-[0.98] shadow-sm border border-gold/20 transition-all duration-150"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-neutral-300 h-12 px-8 text-base font-medium rounded-xl border border-[#374151] hover:bg-white/5 hover:border-neutral-500 hover:text-white active:scale-[0.98] transition-all duration-150"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
