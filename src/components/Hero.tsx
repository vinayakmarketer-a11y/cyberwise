import React from "react";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, Sparkles, TrendingUp, Compass, Target, Users } from "lucide-react";
import { STATS } from "../types";

interface HeroProps {
  onOpenInquiry: (courseId?: string) => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  const features = [
    "Industry Expert Trainers",
    "Live Projects",
    "Placement Assistance",
    "Industry Certifications",
    "Practical Training"
  ];

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden purple-mesh-glow"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-purple-400/25 dark:bg-purple-900/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-400/20 dark:bg-indigo-900/15 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Core Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Institute Association Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-700 dark:text-purple-300"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Powered by CyberWise Info Solutions</span>
            </motion.div>

            {/* Core Display Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-300">Digital Marketing</span> Expert
            </motion.h1>

            {/* Subheadline description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Master SEO, Social Media Marketing, Content Creation, PPC Advertising, Email Marketing, Web Analytics, and AI Marketing through hands-on practical training and live client campaigns with CyberWise Skillsversity in Angadippuram, Perinthalmanna.
            </motion.p>

            {/* Feature Check Grid (Vertical on mobile, horizontal scroll/wrap on desktop) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 pt-2"
            >
              {features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{feat}</span>
                </div>
              ))}
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <button
                id="hero-apply-btn"
                onClick={() => onOpenInquiry()}
                className="px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 transform hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                Apply Online Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Column - Premium Technology-Inspired Visual Interface */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[460px] mx-auto lg:max-w-none"
            >
              {/* Main floating graphic frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-indigo-600/10 rounded-3xl border border-white/20 dark:border-white/5 backdrop-blur-3xl shadow-2xl p-6 flex flex-col justify-between overflow-hidden animate-float">
                
                {/* Header widget */}
                <div className="flex items-center justify-between border-b border-purple-100/50 dark:border-purple-900/50 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest text-slate-500 dark:text-slate-300">
                    Active Campaign Hub
                  </span>
                </div>

                {/* Growth and engagement curves mock */}
                <div className="flex-1 py-4 flex flex-col justify-center space-y-4">
                  <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-950/50 border border-purple-50 dark:border-purple-900/40 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <span className="block text-xs text-slate-500 dark:text-slate-400">Total Search Impressions</span>
                        <span className="font-display font-bold text-lg text-slate-900 dark:text-white">184.2K</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded-lg">
                      +24.8%
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-950/50 border border-purple-50 dark:border-purple-900/40 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center">
                        <Target className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <span className="block text-xs text-slate-500 dark:text-slate-400">Lead Conversion Rate</span>
                        <span className="font-display font-bold text-lg text-slate-900 dark:text-white">4.85%</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-purple-600 bg-purple-50 dark:bg-purple-950/40 px-2 py-1 rounded-lg">
                      Outperform
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-slate-950/50 border border-purple-50 dark:border-purple-900/40 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-950 flex items-center justify-center">
                        <Users className="w-5 h-5 text-violet-600" />
                      </div>
                      <div>
                        <span className="block text-xs text-slate-500 dark:text-slate-400">Social Reach Growth</span>
                        <span className="font-display font-bold text-lg text-slate-900 dark:text-white">85.4K</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 dark:bg-indigo-950/40 px-2 py-1 rounded-lg">
                      Viral
                    </span>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="flex justify-between items-center text-[11px] font-mono text-purple-700 dark:text-purple-300">
                  <span>Angadippuram, Kerala</span>
                  <span>v2026.1</span>
                </div>
              </div>

              {/* Backing decorative shapes */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce" />
              <div className="absolute -z-10 -top-6 -right-6 w-24 h-24 bg-indigo-500/10 rounded-2xl rotate-45" />
            </motion.div>
          </div>

        </div>

        {/* Statistics Subsection Banner */}
        <div id="statistics-banner" className="mt-20 lg:mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl border border-purple-100 dark:border-purple-950/80 p-8 rounded-3xl shadow-sm">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center space-y-1.5 border-r border-purple-50 last:border-r-0 dark:border-purple-950"
              >
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-indigo-600 dark:from-purple-400 dark:to-indigo-300">
                  {stat.value}
                </div>
                <div className="font-semibold text-sm text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {stat.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
