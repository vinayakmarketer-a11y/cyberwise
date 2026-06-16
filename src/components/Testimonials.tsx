import React from "react";
import { Star, Quote, Sparkles, TrendingUp, Compass, Award } from "lucide-react";
import { TESTIMONIALS_DATA, SUCCESS_STORIES } from "../types";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-purple-600 dark:text-purple-400">
            Student Testimonials & Success Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved By Aspiring Kerala Professionals
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300">
            Real stories from our digital marketing graduates who transformed their careers. From non-technical backgrounds to skilled agency specialists.
          </p>
        </div>

        {/* Testimonials 6 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-950 border border-purple-50 dark:border-purple-950/60 shadow-sm relative group hover:border-purple-200 dark:hover:border-purple-900 duration-300 flex flex-col justify-between"
            >
              {/* Quotation floating icon */}
              <Quote className="absolute right-6 top-6 w-10 h-10 text-purple-100 dark:text-purple-950 group-hover:text-purple-200 duration-300 -z-0" />
              
              <div className="relative z-10 space-y-4">
                {/* Visual Rating Row */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Student Bio details */}
              <div className="flex items-center gap-3.5 border-t border-purple-50 dark:border-purple-950/60 pt-4 mt-6 relative z-10">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-purple-100 dark:border-purple-800"
                />
                <div>
                  <span className="block font-display font-bold text-sm text-slate-900 dark:text-white">
                    {item.name}
                  </span>
                  <span className="block text-[11px] text-slate-500 font-medium">
                    {item.role}, <strong className="text-purple-600 dark:text-purple-400">{item.company}</strong>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Student Placement Success Stories Section */}
        <div id="success-stories" className="space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-xl">
              <Sparkles className="w-3.5 h-3.5" />
              Recent Alumni Spotlights
            </span>
            <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">
              Success Stories of CyberWise Skillsversity Graduates
            </h3>
            <p className="text-xs text-slate-500">
              How students switched fields and scaled salaries dramatically
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SUCCESS_STORIES.map((sc) => (
              <div
                key={sc.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-950 border border-purple-50 dark:border-purple-950/80 shadow-sm relative overflow-hidden group hover:shadow-md duration-300 flex flex-col justify-between"
              >
                {/* Diagonal Highlight Badge for Salary Hike */}
                <div className="absolute top-0 right-0 p-3 bg-purple-600 text-white rounded-bl-2xl font-mono text-[10px] font-bold uppercase tracking-wider">
                  {sc.salaryHike}
                </div>

                <div className="space-y-4">
                  {/* Bio brief */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 text-white font-extrabold flex items-center justify-center text-sm">
                      {sc.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                        {sc.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-medium">
                        Background: {sc.previousRole}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                    "{sc.testimonial}"
                  </p>
                </div>

                {/* Outcome placement indicators */}
                <div className="mt-5 pt-4 border-t border-purple-50 dark:border-purple-950 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Placed Title
                    </span>
                    <span className="font-semibold text-xs text-slate-900 dark:text-white">
                      {sc.placedRole}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Company
                    </span>
                    <span className="font-semibold text-xs text-purple-600 dark:text-purple-400">
                      {sc.placedAt}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
