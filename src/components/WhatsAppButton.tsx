import React, { useState, useEffect } from "react";
import { MessageCircle, Sparkles } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltips briefly on initial load to prompt engagement
    const timer = setTimeout(() => setShowTooltip(true), 4000);
    const closeTimer = setTimeout(() => setShowTooltip(false), 9000);
    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, []);

  const whatsappUrl = "https://api.whatsapp.com/send?phone=919544332211&text=Hello%20CyberWise%20Skillsversity%2C%20I%20am%20interested%20in%20your%20practical%20Digital%20Marketing%20Training%20programs.%20Please%20share%20the%20admissions%20schedule.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip trigger bubble */}
      {showTooltip && (
        <div className="bg-slate-950 dark:bg-slate-900 text-white text-[11px] font-bold px-3 py-2 rounded-xl shadow-xl border border-purple-900/40 relative max-w-xs animate-float flex items-center gap-1.5 whitespace-nowrap">
          <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
          <span>Chat directly with admissions!</span>
          {/* Close tiny button */}
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-[9px] hover:text-purple-400 ml-1.5 font-extrabold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Actual button */}
      <a
        id="whatsapp-floating-trigger"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-500/15 hover:shadow-emerald-500/35 hover:scale-105 active:scale-95 transition-all duration-300 relative group cursor-pointer"
        aria-label="Direct Chat via WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        
        {/* Ring wave pulse */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping -z-10" />
      </a>
    </div>
  );
}
