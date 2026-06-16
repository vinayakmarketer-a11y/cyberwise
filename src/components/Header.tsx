import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, PhoneCall } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenInquiry: (courseId?: string) => void;
}

export default function Header({ darkMode, setDarkMode, onOpenInquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Careers", href: "#careers" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-purple-100 dark:border-purple-950"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Branding */}
          <a id="nav-logo" href="#home" className="flex items-center gap-2 group">
            <Logo size={42} showText={true} className="group-hover:scale-[1.01] transition-transform duration-300" />
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`navlink-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Core Header Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Dark Mode Switcher */}
            <button
              id="theme-toggle-desktop"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle theme mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-purple-600" />}
            </button>

            {/* Quick Contact Accent */}
            <a
              id="phone-cta-link"
              href="tel:+9190575638"
              className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:opacity-85 transition-opacity"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>+91 9544 33 22 11</span>
            </a>

            {/* Main Apply Button */}
            <button
              id="header-apply-cta"
              onClick={() => onOpenInquiry()}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md shadow-purple-500/15 hover:shadow-purple-500/25 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              id="theme-toggle-mobile"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle theme mode mobile"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-purple-600" />}
            </button>

            {/* Hamburger button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-150 dark:hover:bg-slate-900 transition-colors"
              aria-label="Open mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden absolute top-[100%] left-0 right-0 p-4 bg-white dark:bg-slate-950 border-b border-purple-100 dark:border-purple-950 shadow-xl transition-all duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-navlink-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <hr className="my-2 border-slate-100 dark:border-slate-900" />
            <div className="flex flex-col gap-3 p-2">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Inquiries & Admissions</span>
                <span className="font-semibold text-purple-600">+91 9544 33 22 11</span>
              </div>
              <button
                id="mobile-drawer-apply-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 rounded-xl text-center font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg active:scale-95 transition-transform"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
