import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, Share2, Edit3, TrendingUp, Mail, BarChart3, Cpu, Globe,
  BookOpen, Clock, Layers, Sparkles, Filter, Check, ArrowRight, ChevronDown, ChevronUp
} from "lucide-react";
import { COURSES_DATA, Course } from "../types";

// Helper component to resolve icons dynamically
const CourseIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "Search":
      return <Search className={className} />;
    case "Share2":
      return <Share2 className={className} />;
    case "Edit3":
      return <Edit3 className={className} />;
    case "TrendingUp":
      return <TrendingUp className={className} />;
    case "Mail":
      return <Mail className={className} />;
    case "BarChart3":
      return <BarChart3 className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "Globe":
      return <Globe className={className} />;
    default:
      return <BookOpen className={className} />;
  }
};

interface CoursesProps {
  onOpenInquiry: (courseId?: string) => void;
}

export default function Courses({ onOpenInquiry }: CoursesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  // Gather unique skill tags across all courses for filtration
  const allSkills = Array.from(
    new Set(COURSES_DATA.flatMap((c) => c.skillsAcquired))
  ).slice(0, 10); // Take top 10 unique skills to avoid visual clutter

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag 
      ? course.skillsAcquired.includes(selectedTag) 
      : true;

    return matchesSearch && matchesTag;
  });

  const toggleExpand = (id: string) => {
    if (expandedCourseId === id) {
      setExpandedCourseId(null);
    } else {
      setExpandedCourseId(id);
    }
  };

  return (
    <section id="courses" className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Column */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-purple-600 dark:text-purple-400">
            Professional Certification Courses
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Digital Marketing Curriculum
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300">
            Whether you want standard social reach optimization, advanced paid campaign strategies, or co-pilot AI productivity workflows, we contain your perfect track.
          </p>
        </div>

        {/* Search and Filters Hub */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Realtime Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                id="course-search-input"
                type="text"
                placeholder="Search modules (e.g. Google Ads, SEO, Analytics, ChatGPT...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 max-w-none text-sm transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-purple-600 hover:opacity-85"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Results Counter Badge */}
            <div className="flex items-center justify-center px-4 py-2 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-100 dark:border-purple-900 text-xs font-bold text-purple-700 dark:text-purple-300">
              {filteredCourses.length} Courses Found
            </div>
          </div>

          {/* Quick Filter Tags Scrollbar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1">
              <Filter className="w-3 w-3" />
              Filter Tag:
            </span>
            <button
              id="filter-tag-all"
              onClick={() => setSelectedTag(null)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedTag === null
                  ? "bg-purple-600 text-white"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-purple-50 dark:hover:bg-purple-950/20"
              }`}
            >
              Show All
            </button>
            {allSkills.map((skill) => (
              <button
                key={skill}
                id={`filter-tag-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setSelectedTag(skill === selectedTag ? null : skill)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  skill === selectedTag
                    ? "bg-purple-600 text-white"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-purple-50 dark:hover:bg-purple-950/20"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Responsive Grid */}
        <div id="courses-grid-view" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => {
              const isExpanded = expandedCourseId === course.id;
              
              return (
                <motion.div
                  key={course.id}
                  id={`course-card-${course.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl border border-purple-50 dark:border-purple-950 bg-white dark:bg-slate-900/50 p-6 shadow-sm overflow-hidden flex flex-col justify-between glass-card-hover group"
                >
                  <div>
                    {/* Header: Course icon & duration badge */}
                    <div className="flex justify-between items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CourseIcon name={course.iconName} className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col items-end gap-1 font-mono text-[11px] font-semibold text-slate-400 text-right">
                        <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30 px-2 py-1 rounded-lg">
                          <Clock className="w-3 h-3" />
                          {course.duration}
                        </span>
                        <span className="text-slate-500">
                          {course.modulesCount} Core Modules
                        </span>
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white mb-2 leading-snug">
                      {course.title}
                    </h3>

                    {/* Slogan details */}
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-3">
                      {course.shortDescription}
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {course.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] sm:text-[11px] font-medium font-mono text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 px-2.5 py-1 rounded-lg border border-slate-100 dark:border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Dropdown Details Section with Smooth Animation */}
                  <div className="border-t border-purple-50 dark:border-purple-950/50 pt-4 mt-auto">
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pb-4 space-y-4"
                      >
                        <hr className="border-purple-50 dark:border-purple-950" />
                        
                        {/* High level syllabus description */}
                        <div>
                          <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                            Module Outline
                          </span>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            {course.detailedDescription}
                          </p>
                        </div>

                        {/* Outcomes ticks */}
                        <div>
                          <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                            Target Career Outcomes
                          </span>
                          <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                            {course.outcomes.map((out, oIdx) => (
                              <li key={oIdx} className="flex gap-2 items-start">
                                <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <span>{out}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Direct sub-module format badge */}
                        <div className="flex items-center gap-1 bg-purple-500/5 dark:bg-purple-400/5 border border-purple-500/10 dark:border-purple-400/10 p-2.5 rounded-xl text-[11px] text-purple-700 dark:text-purple-300">
                          <Sparkles className="w-3.5 h-3.5 text-purple-500 animate-pulse" />
                          <span><strong>Format:</strong> {course.learningFormat}</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Bottom buttons row */}
                    <div className="flex gap-2 justify-between items-center">
                      <button
                        id={`btn-expand-${course.id}`}
                        onClick={() => toggleExpand(course.id)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 hover:underline cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            Less Info <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            Syllabus & Details <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      <button
                        id={`btn-apply-course-${course.id}`}
                        onClick={() => onOpenInquiry(course.id)}
                        className="px-4 py-2 text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl shadow-sm cursor-pointer transition-all duration-200"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Non-Results Empty state */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <Layers className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
            <h4 className="font-display font-bold text-lg text-slate-800 dark:text-white">
              No Training Course Found
            </h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
              Try search keywords like "SEO", "Ads", or reset all active tag filter matrices above.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTag(null);
              }}
              className="mt-4 px-4 py-2 bg-purple-50 dark:bg-purple-950 text-purple-600 text-xs font-bold rounded-xl"
            >
              Reset Search
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
