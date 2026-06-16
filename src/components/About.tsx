import React from "react";
import { motion } from "motion/react";
import { Compass, Target, ShieldCheck, Heart, ArrowUpRight } from "lucide-react";

export default function About() {
  const principles = [
    {
      title: "Our Vision",
      accent: "To become Kerala's most trusted digital marketing education platform.",
      description: "Establishing standard and future-focused digital structures where graduates transform into world-class digital marketers, brand innovators, and self-sufficient business operators.",
      icon: Compass,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Our Mission",
      accent: "To provide industry-relevant digital marketing education through practical learning.",
      description: "By integrating students directly into production ad-campaign sets, SEO indexing matrices, and providing premium co-pilot training with modern AI productivity systems.",
      icon: Target,
      color: "from-indigo-600 to-purple-800"
    }
  ];

  const comparisons = [
    {
      factor: "Theory vs Action",
      academic: "75% Lecture notes, general textbook outlines",
      cyberwise: "85% Computer lab training, real brand budgets",
    },
    {
      factor: "Campaign Access",
      academic: "Screen grabs, read-only modules",
      cyberwise: "Direct login into active Google & Meta client panels",
    },
    {
      factor: "AI Integration",
      academic: "Acre-wide guidelines forbidding tools",
      cyberwise: "Intensive training using advanced prompts to create & optimize",
    },
    {
      factor: "Trainer Authority",
      academic: "Standard professors without campaign expertise",
      cyberwise: "Active strategists backed by CyberWise Info Solutions",
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-purple-600 dark:text-purple-400">
            About CyberWise Skillsversity
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bridging the Gap and Creating Digital Leaders
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300">
            We are more than just a training workshop. Backed by the active business consulting resources of{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">CyberWise Info Solutions</span>, 
            we engineer high-income digital careers.
          </p>
        </div>

        {/* Detailed Description Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-white">
              Why Kerala's Future Marketers Join Us
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              CyberWise Skillsversity is a premier Digital Marketing Training Institute in Malappuram dedicated to creating industry-ready digital professionals.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We provide practical, career-oriented education that bridges the gap between academic learning and real-world digital marketing requirements. Our mission is to empower students with modern marketing skills, hands-on experience, and professional confidence required to thrive in today's digital economy.
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white dark:bg-slate-950 rounded-2xl border border-purple-50 dark:border-purple-950 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-semibold text-sm text-slate-800 dark:text-slate-200">Agency Powered</span>
                  <span className="text-xs text-slate-500">Live Client Data Access</span>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-950 rounded-2xl border border-purple-50 dark:border-purple-950 flex items-start gap-3">
                <Heart className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-semibold text-sm text-slate-800 dark:text-slate-200">Kerala Native</span>
                  <span className="text-xs text-slate-500">Local SEO Expertise</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((pr, idx) => {
                const IconComp = pr.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-purple-50 dark:border-purple-950 shadow-sm relative group hover:border-purple-200 dark:hover:border-purple-900 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pr.color} flex items-center justify-center text-white mb-4 shadow`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                      {pr.title}
                    </h4>
                    <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2 leading-snug">
                      {pr.accent}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                      {pr.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Traditional vs CyberWise Comparison Table */}
        <div id="comparison-block" className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h4 className="font-display font-extrabold text-xl sm:text-2xl text-slate-800 dark:text-white">
              The Learning Comparison
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Why our hands-on agency program yields much better outcomes
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-purple-100 dark:border-purple-950 shadow-sm bg-white dark:bg-slate-950">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-purple-50/50 dark:bg-purple-950/20 border-b border-purple-100 dark:border-purple-950">
                    <th className="p-4 font-display font-bold text-sm text-slate-900 dark:text-white">Key Factor</th>
                    <th className="p-4 font-display font-medium text-sm text-slate-500 dark:text-slate-400">Traditional Classrooms</th>
                    <th className="p-4 font-display font-bold text-sm text-purple-600 dark:text-purple-400">CyberWise Skillsversity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-50 dark:divide-purple-950">
                  {comparisons.map((c, i) => (
                    <tr key={i} className="hover:bg-purple-50/10 transition-colors">
                      <td className="p-4 text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {c.factor}
                      </td>
                      <td className="p-4 text-xs text-slate-500 dark:text-slate-400 line-through">
                        {c.academic}
                      </td>
                      <td className="p-4 text-xs font-medium text-purple-700 dark:text-purple-300">
                        {c.cyberwise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
