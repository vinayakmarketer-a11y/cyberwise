import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Sparkles, MapPin, Phone } from "lucide-react";
import { COURSES_DATA } from "../types";

interface CourseInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCourseId?: string | null;
}

export default function CourseInquiryModal({ isOpen, onClose, preSelectedCourseId }: CourseInquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    urgency: "Immediate",
    notes: ""
  });

  const [completed, setCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setCompleted(false);
      setErrorMessage("");
      
      const foundCourse = COURSES_DATA.find((c) => c.id === preSelectedCourseId);
      setFormData({
        name: "",
        phone: "",
        email: "",
        course: foundCourse ? foundCourse.title : "",
        urgency: "Immediate",
        notes: ""
      });
    }
  }, [isOpen, preSelectedCourseId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.course) {
      setErrorMessage("Please complete all necessary parameters (Name, Phone, Email, and Course).");
      return;
    }

    // Capture Lead
    const newInquiry = {
      id: Date.now().toString(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      course: formData.course,
      message: `[Quick Popup] Urgency: ${formData.urgency}. Notes: ${formData.notes}`,
      date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "Received"
    };

    try {
      const stored = localStorage.getItem("cyberwise_contact_leads");
      const current = stored ? JSON.parse(stored) : [];
      localStorage.setItem("cyberwise_contact_leads", JSON.stringify([newInquiry, ...current]));
    } catch (err) {
      console.error(err);
    }

    setCompleted(true);
  };

  return (
    <div id="quick-inquiry-backpack" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      
      {/* Container Frame */}
      <div 
        id="quick-inquiry-modal"
        className="w-full max-w-lg bg-white dark:bg-slate-950 rounded-3xl border border-purple-100 dark:border-purple-900 shadow-2xl relative overflow-hidden"
      >
        {/* Header Ribbon gradient */}
        <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600" />
        
        {/* Close trigger absolute */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer"
          aria-label="Close dialog modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!completed ? (
            <div className="space-y-5">
              
              {/* Titles */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-purple-600 dark:text-purple-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 animate-spin-slow" />
                  Apply & Get Syllabus Guide
                </span>
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-950 dark:text-white">
                  Course Registration Inquiry
                </h3>
                <p className="text-xs text-slate-500">
                  Fill this form. Get details dynamically and lock details for recent batches.
                </p>
              </div>

              {/* Form trigger */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sandra Nair"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4.5 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                  />
                </div>

                {/* Grid layout for Email and phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9544332211"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sandra@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                    />
                  </div>
                </div>

                {/* Course Selection list */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Select Digital Marketing Track <span className="text-red-400">*</span>
                  </label>
                  <select
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4.5 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs text-slate-800 dark:text-slate-200"
                  >
                    <option value="">-- Choose Courses Program --</option>
                    {COURSES_DATA.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                    <option value="General Mastery">All-In-One Master Class Track</option>
                  </select>
                </div>

                {/* Grid for batch urgency and custom memo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Urgency / Priority
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs text-slate-800 dark:text-slate-200"
                    >
                      <option value="Immediate">Immediate / Next Batch</option>
                      <option value="Next Month">Within Next 30 Days</option>
                      <option value="Just Inquiring">Just exploring options</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Special Notes (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Weekend batches only"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                    />
                  </div>
                </div>

                {/* Error Block */}
                {errorMessage && (
                  <div className="p-3 bg-red-50 text-red-600 text-xs font-semibold rounded-xl">
                    {errorMessage}
                  </div>
                )}

                {/* Submit button inside modal */}
                <button
                  id="modal-submit-btn"
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs font-extrabold uppercase text-white rounded-xl shadow cursor-pointer transition-all flex items-center justify-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  Request Brochure & Call
                </button>

              </form>

            </div>
          ) : (
            // Success State Visual
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 rounded-full flex items-center justify-center mx-auto text-emerald-500 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                  Registration Successful!
                </h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Excellent! We've received your data. Your brochure access keys are activated, and our educational counselors in Angadippuram will ping you on WhatsApp shortly.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-500/5 dark:bg-purple-400/5 border border-purple-500/10 dark:border-purple-400/10 text-xs text-left max-w-sm mx-auto">
                <span className="block font-bold text-slate-800 dark:text-slate-200 mb-1">
                  What Happens Next?
                </span>
                <ul className="space-y-1 list-disc list-inside text-slate-600 dark:text-slate-400 text-[11px]">
                  <li>Digital Marketing master Syllabus sent on your Email</li>
                  <li>In-depth orientation counseling arranged</li>
                  <li>Offline session demo voucher generated</li>
                </ul>
              </div>

              {/* Keep Close link */}
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-5050 text-white font-bold text-xs rounded-xl shadow cursor-pointer transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
