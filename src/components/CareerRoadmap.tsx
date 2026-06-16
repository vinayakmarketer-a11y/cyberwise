import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, Search, Award, DollarSign, TrendingUp, CheckCircle, 
  Map, Sparkles, BookOpen, Layers, Briefcase, ChevronRight
} from "lucide-react";
import { CAREER_ROLES_DATA, CareerRole } from "../types";

export default function CareerRoadmap() {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const activeRole = CAREER_ROLES_DATA[selectedRoleIndex];

  const steps = [
    {
      stage: "Step 01",
      title: "Core Foundation",
      subtitle: "First 4 Weeks",
      desc: "Acquire keyword analysis models, master landing page visual grids, configure tracking pixels, and launch standard social media handles."
    },
    {
      stage: "Step 02",
      title: "Lab Case Studies",
      subtitle: "Middle Weeks",
      desc: "Audit real-time businesses, construct comprehensive SEM campaign checklists, design social headers, and draft drip triggers."
    },
    {
      stage: "Step 03",
      title: "Live Client Budgets",
      subtitle: "Practitioner Training",
      desc: "Deploy actual client ad budgets. Track client keyword rank progression, run A/B copy iterations, and audit bounce telemetry."
    },
    {
      stage: "Step 04",
      title: "Portfolio Building",
      subtitle: "Admissions End",
      desc: "Export real analytics campaign summaries, bundle client recommendation audits, and set up freelancing gigs on Upwork."
    },
    {
      stage: "Step 05",
      title: "Corporate Placement",
      subtitle: "Alumni Launch",
      desc: "Receive career advice, complete custom mock technical interviews, and match with leading agencies across Kochi, Calicut, and Bangalore."
    }
  ];

  return (
    <section id="careers" className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-purple-600 dark:text-purple-400">
            Career Opportunities & Roadmap
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            High-Income Career Horizons
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300">
            Digital marketers hold the leverage to work from anywhere, consult global enterprises, or launch self-sustained online agencies. Explore salary structures and your 5-stage transformation roadmap.
          </p>
        </div>

        {/* Career Specializations Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Column: Role Selector Grid */}
          <div className="lg:col-span-5 space-y-3">
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Select Specialization:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {CAREER_ROLES_DATA.map((item, idx) => (
                <button
                  key={idx}
                  id={`role-btn-${idx}`}
                  onClick={() => setSelectedRoleIndex(idx)}
                  className={`p-4 rounded-xl text-left border text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                    idx === selectedRoleIndex
                      ? "bg-purple-600 text-white border-purple-600 shadow-md"
                      : "bg-slate-50 border-slate-200 dark:bg-slate-900 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/20"
                  }`}
                >
                  <span className="font-display">{item.role}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Details Panel */}
          <div className="lg:col-span-7">
            <motion.div
              key={selectedRoleIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-3xl border border-purple-100 dark:border-purple-950 bg-gradient-to-br from-white to-purple-50/20 dark:from-slate-900/40 dark:to-purple-950/20 shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-[10px] font-bold text-purple-700 dark:text-purple-300 uppercase tracking-widest leading-none">
                    Career Profile
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-slate-900 dark:text-white mt-2 leading-tight">
                    {activeRole.role}
                  </h3>
                </div>
                {/* Growth indicator */}
                <div className="flex items-center gap-1 text-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1.5 rounded-xl font-mono text-xs font-bold w-fit">
                  <TrendingUp className="w-4 h-4" />
                  <span>{activeRole.growthRate} Growth</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeRole.description}
              </p>

              {/* LPA Salary Comparative Bar Chart */}
              <div id="salary-growth-chart" className="space-y-4">
                <span className="block text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Typical Salary Structure (India LPA):
                </span>
                
                <div className="space-y-3.5">
                  {/* Entry level segment */}
                  <div>
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="font-medium text-slate-600 dark:text-slate-300">Starting Wage (Fresher)</span>
                      <span className="font-bold font-mono text-purple-600 dark:text-purple-400">{activeRole.salaryEntry}</span>
                    </div>
                    {/* Visual Bar container */}
                    <div className="h-3 relative rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" style={{ width: "35%" }} />
                    </div>
                  </div>

                  {/* Senior level segment */}
                  <div>
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="font-medium text-slate-600 dark:text-slate-300">Senior Professional (3+ Years)</span>
                      <span className="font-bold font-mono text-indigo-600 dark:text-indigo-400">{activeRole.salaryExperienced}</span>
                    </div>
                    {/* Visual Bar container */}
                    <div className="h-3 relative rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-pulse-glow" style={{ width: "85%" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills breakdown tags */}
              <div className="pt-2">
                <span className="block text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">
                  Prerequisite Master Skills:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeRole.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-800 dark:text-slate-300 bg-white dark:bg-slate-950 px-3 py-1.5 rounded-xl border border-purple-50 dark:border-purple-900 shadow-sm"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-purple-500" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* 5-Stage Timelined Career Roadmap section */}
        <div id="interactive-roadmap" className="space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 bg-purple-50 dark:bg-purple-950 px-2.5 py-1 rounded-xl">
              <Map className="w-3.5 h-3.5" />
              Syllabus Flight Map
            </span>
            <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">
              The CyberWise Student Transformation Roadmap
            </h3>
            <p className="text-xs text-slate-500">
              Your step-by-step progress checklist from Day 01 to Professional Launch
            </p>
          </div>

          {/* Horizontal layout for Desktop / Vertical flow on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {steps.map((st, sIdx) => (
              <div 
                key={sIdx}
                className="relative bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-purple-50 dark:border-purple-950 shadow-sm hover:border-purple-200 dark:hover:border-purple-900 duration-300 flex flex-col justify-between"
              >
                {/* Horizontal line indicator */}
                {sIdx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[28px] left-[100%] w-[calc(100%-48px)] mr-1 h-0.5 bg-dashed border-t border-dashed border-purple-200 dark:border-purple-900 z-10" />
                )}

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="inline-block text-[10px] font-mono font-bold bg-purple-600 text-white px-2 py-0.5 rounded-md">
                      {st.stage}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {st.subtitle}
                    </span>
                  </div>

                  <h4 className="font-display font-extrabold text-sm sm:text-base text-slate-950 dark:text-white leading-snug">
                    {st.title}
                  </h4>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Prompt CTA card */}
          <div className="max-w-xl mx-auto p-6 bg-purple-50 dark:bg-purple-950/40 rounded-3xl border border-purple-100 dark:border-purple-900 text-center space-y-3.5 shadow-sm">
            <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto animate-pulse" />
            <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
              Unsure which Digital Role fits your background?
            </h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Our career advisors will run descriptive aptitude matrices with you to map your personality to SEO, Paid Ads, or Creative Content creation tracks.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-500 transition-colors shadow-sm"
            >
              Get Free Career Advisory Session
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
