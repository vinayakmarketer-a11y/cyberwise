import React, { useState } from "react";
import { 
  Mail, Send, CheckCircle2, Phone, MapPin, 
  Linkedin, Instagram, Facebook, ArrowUpRight 
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim()) return;
    setSuccess(true);
    setNewsEmail("");
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer columns split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: School Bio and Social links */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="flex items-center gap-2 group w-fit">
              <Logo size={42} showText={true} textColor="text-white" logoColor="text-purple-400" className="group-hover:scale-[1.01] transition-transform duration-300" />
            </a>

            <p className="text-xs leading-relaxed max-w-sm">
              We provide practical, career-oriented educational programs designed directly around actual marketing campaigns, SEO structures, and co-pilot machine tools to engineer successful global digital marketers.
            </p>

            {/* Social Links Row */}
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/cyberwise" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8.5 h-8.5 rounded-lg bg-slate-800 hover:bg-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/company/cyberwise" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8.5 h-8.5 rounded-lg bg-slate-800 hover:bg-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com/cyberwise" 
                target="_blank" 
                rel="noreferrer" 
                className="w-8.5 h-8.5 rounded-lg bg-slate-800 hover:bg-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links Map */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-purple-400 transition-colors block">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors block">About Us</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-purple-400 transition-colors block">Courses Catalog</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-purple-400 transition-colors block">Why Choose Us</a>
              </li>
              <li>
                <a href="#careers" className="hover:text-purple-400 transition-colors block">Career Horizons</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact quick information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Angadippuram, Perinthalmanna, Kerala, India</span>
              </li>
              <li className="flex gap-2 items-start">
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+919544332211" className="hover:text-purple-400 font-mono">+91 9544 33 22 11</a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@cyberwiseskills.com" className="hover:text-purple-400 font-mono break-all">info@cyberwiseskills.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription Box */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Newsletter Subscription
            </h4>
            <p className="text-xs">
              Subscribe to get exclusive modern AI prompt guides, SEO checklists, and local workshop schedules directly in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 h-[calc(100%-8px)] px-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>

              {success && (
                <div className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Footer bottom details row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} CyberWise Skillsversity. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Powered by: </span>
            <a 
              href="https://cyberwise.in" 
              target="_blank" 
              rel="noreferrer" 
              className="font-semibold text-purple-400 hover:underline inline-flex items-center gap-0.5"
            >
              CyberWise Info Solutions
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
