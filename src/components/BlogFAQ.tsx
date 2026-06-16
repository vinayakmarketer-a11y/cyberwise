import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, ChevronUp, BookOpen, Clock, Eye, Sparkles, HelpCircle, ArrowUpRight 
} from "lucide-react";
import { FAQS_DATA, BLOGS_DATA } from "../types";

export default function BlogFAQ() {
  const [activeFaqId, setActiveFaqId] = useState<string | null>("faq-1");
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("all");

  const faqCategories = [
    { value: "all", label: "All Questions" },
    { value: "general", label: "General" },
    { value: "courses", label: "Syllabus" },
    { value: "careers", label: "Career & Job Jobs" },
    { value: "admissions", label: "Batches" }
  ];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    if (activeFaqCategory === "all") return true;
    return faq.category === activeFaqCategory;
  });

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <section id="faq-blog-hub" className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==================== BLOG PREVIEW SECTION ==================== */}
        <div id="blog-preview-section" className="mb-24">
          
          {/* Blog Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-mono font-bold text-purple-600 dark:text-purple-400">
                Skillsversity Blog & Industry Insights
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Latest from Digital Marketing Spheres
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full" />
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Stay ahead of digital algorithm updates with strategic tutorials, prompt libraries, and local conversion tips curated by CyberWise Info Solutions practitioners.
            </p>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS_DATA.map((post) => (
              <article
                key={post.id}
                className="group rounded-3xl border border-purple-50 dark:border-purple-950/80 bg-slate-50/50 dark:bg-slate-900/30 overflow-hidden flex flex-col justify-between hover:shadow-md duration-300"
              >
                <div>
                  {/* Blog Cover Image */}
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 duration-500"
                    />
                    {/* Category Chip overlays */}
                    <span className="absolute top-4 left-4 p-2.5 py-1 text-[10px] font-bold font-mono tracking-widest uppercase bg-purple-600 text-white rounded-lg leading-none shadow">
                      {post.category}
                    </span>
                  </div>

                  {/* Blog details */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer read link */}
                <div className="p-6 pt-0 border-t border-purple-50 dark:border-purple-950/40 mt-auto flex justify-between items-center text-xs">
                  <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400 font-medium">
                    <Eye className="w-3.5 h-3.5" />
                    {post.views}
                  </span>
                  
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400 group-hover:underline">
                    Read Article
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </article>
            ))}
          </div>

        </div>

        {/* ==================== FAQ ACCORDION SECTION ==================== */}
        <div id="faq-section" className="pt-8 space-y-12">
          
          {/* FAQ Headers */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 bg-purple-50 dark:bg-purple-950 px-2.5 py-1 rounded-xl">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              FAQ & Enrollment Inquiries
            </h3>
            <p className="text-xs text-slate-500">
              Find answers to all your common queries regarding course structure, student qualifications, tools, credentials, and classroom infrastructure.
            </p>
          </div>

          {/* Quick FAQ filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {faqCategories.map((cat) => (
              <button
                key={cat.value}
                id={`faq-filter-${cat.value}`}
                onClick={() => {
                  setActiveFaqCategory(cat.value);
                  setActiveFaqId(null); // Close active to avoid floating state mismatch
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeFaqCategory === cat.value
                    ? "bg-purple-600 text-white"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-purple-50 dark:hover:bg-purple-950/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion List container */}
          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = faq.id === activeFaqId;
              
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-purple-50 dark:border-purple-950 bg-slate-50/50 dark:bg-slate-900/10 overflow-hidden"
                >
                  <button
                    id={`faq-trigger-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-purple-50/40 dark:hover:bg-purple-950/10 cursor-pointer"
                  >
                    <span className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                    <span className="text-purple-600 flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-5 pt-0 border-t border-purple-50/50 dark:border-purple-950/50 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
