import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import WhyChooseUs from "./components/WhyChooseUs";
import CareerRoadmap from "./components/CareerRoadmap";
import Testimonials from "./components/Testimonials";
import BlogFAQ from "./components/BlogFAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CourseInquiryModal from "./components/CourseInquiryModal";
import { Sparkles, Calendar, BookOpen, AlertCircle, ArrowUp } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize Dark Mode state based on system settings or localStorage
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("cyberwise_theme");
      if (savedTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Update DOM when darkMode changes
  const handleToggleTheme = (val: boolean) => {
    setDarkMode(val);
    try {
      if (val) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("cyberwise_theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("cyberwise_theme", "light");
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Scroll to Top trigger monitor
  useEffect(() => {
    const handleScrollMonitor = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScrollMonitor);
    return () => window.removeEventListener("scroll", handleScrollMonitor);
  }, []);

  const handleOpenInquiry = (courseId?: string) => {
    if (courseId) {
      setSelectedCourseId(courseId);
    } else {
      setSelectedCourseId(null);
    }
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 relative">
      
      {/* Top Banner Accent informing of active enrollments */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-2 px-4 text-center text-xs font-semibold relative z-50 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin-slow" />
        <span>Admissions Open for July 2026 Batches in Angadippuram! Grab 15% Early Bird Discount.</span>
        <a 
          href="#contact" 
          className="underline text-yellow-300 hover:text-white transition-colors flex items-center gap-0.5 ml-1"
        >
          Book Seat Now
        </a>
      </div>

      {/* Header element */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={handleToggleTheme} 
        onOpenInquiry={handleOpenInquiry} 
      />

      {/* Hero Block */}
      <Hero 
        onOpenInquiry={handleOpenInquiry} 
      />

      {/* School Brand / About */}
      <About />

      {/* Course specialisation cards */}
      <Courses onOpenInquiry={handleOpenInquiry} />

      {/* Core values block */}
      <WhyChooseUs />

      {/* Growth charts and roadmap step maps */}
      <CareerRoadmap />

      {/* Student rating reviews */}
      <Testimonials />

      {/* FAQ Accordions & Blogs */}
      <BlogFAQ />

      {/* Admissions newsletter & Google Maps details */}
      <ContactForm />

      {/* High-fidelity Brand Footer */}
      <Footer />

      {/* WhatsApp Floating dialog trigger clicker */}
      <WhatsAppButton />

      {/* Course Inquiry Overlay Form */}
      <CourseInquiryModal 
        isOpen={inquiryOpen} 
        onClose={() => setInquiryOpen(false)} 
        preSelectedCourseId={selectedCourseId} 
      />

      {/* Scroll TO TOP anchor */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-slate-900 border border-slate-800 text-white hover:bg-purple-600 shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
