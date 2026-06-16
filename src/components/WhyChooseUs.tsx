import React from "react";
import { 
  BookOpen, Award, Sliders, FileSpreadsheet, Briefcase, CheckCircle2, DollarSign, Sparkles 
} from "lucide-react";
import { WHY_CHOOSE_DATA } from "../types";

// Dynamic resolver for icons
const IconHelper = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "BookOpen":
      return <BookOpen className={className} />;
    case "Award":
      return <Award className={className} />;
    case "Sliders":
      return <Sliders className={className} />;
    case "FileSpreadsheet":
      return <FileSpreadsheet className={className} />;
    case "Briefcase":
      return <Briefcase className={className} />;
    case "CheckCircle2":
      return <CheckCircle2 className={className} />;
    case "DollarSign":
      return <DollarSign className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    default:
      return <CheckCircle2 className={className} />;
  }
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-purple-600 dark:text-purple-400">
            Why Choose CyberWise Skillsversity?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Ultimate Launchpad for Modern Marketers
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300">
            We reject obsolete classroom modules. Here are the core values that ensure you walk away with career authority, high salaries, and entrepreneurial independence.
          </p>
        </div>

        {/* Features Card Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_DATA.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white dark:bg-slate-950 border border-purple-50 dark:border-purple-950 shadow-sm hover:border-purple-200 dark:hover:border-purple-900 duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Visual Icon Header wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-purple-100/50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 duration-300">
                  <IconHelper name={item.iconName} className="w-5 h-5" />
                </div>

                {/* Card Title */}
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Bullet Description */}
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Minimal decorative detail */}
              <div className="w-6 h-0.5 bg-purple-200 dark:bg-purple-900/60 group-hover:w-full duration-300 mt-5" />
            </div>
          ))}
        </div>

        {/* Real-time Lab Quality / Credentials micro banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-3xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-widest font-mono text-purple-300 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800">
              In-Demand Training Facilities
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight leading-snug">
              Equipped with State-of-the-Art Computer Systems & Active Fiber Connectivity
            </h3>
            <p className="text-xs text-purple-200 max-w-2xl">
              Our campus in Angadippuram, Perinthalmanna features modern technical facilities, dedicated individual desks, and offline lab coordinators assisting you.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-purple-50 text-purple-900 text-xs font-extrabold whitespace-nowrap shadow transform active:scale-95 transition-all text-center w-full lg:w-auto"
          >
            Visit Our Digital Campus
          </a>
        </div>

      </div>
    </section>
  );
}
