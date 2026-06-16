import React, { useState, useEffect } from "react";
import { 
  Phone, Mail, MapPin, Sparkles, Send, CheckCircle2, Navigation, 
  Trash2, ArrowRight, Instagram, Linkedin, MessageCircle 
} from "lucide-react";
import { COURSES_DATA } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: ""
  });

  const [formInquiries, setFormInquiries] = useState<any[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Load active inquiries from localStorage for interactive display
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cyberwise_contact_leads");
      if (stored) {
        setFormInquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Simple validations
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage("Please complete all required fields (Name, Phone, and Email address).");
      return;
    }

    const newInquiry = {
      ...formData,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "Received"
    };

    const updated = [newInquiry, ...formInquiries];
    setFormInquiries(updated);
    localStorage.setItem("cyberwise_contact_leads", JSON.stringify(updated));

    // Reset Form & show success State
    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "",
      message: ""
    });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const clearInquiries = () => {
    setFormInquiries([]);
    localStorage.removeItem("cyberwise_contact_leads");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50 relative">
      
      {/* Visual background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-purple-600 dark:text-purple-400">
            Admissions and General Guidance
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Schedule a Free Strategy Consultation
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-300">
            Have questions about digital courses, fees, weekend scheduling or career shifts? Submit your info. One of our experts will reach out to schedule an offline or phone counseling session.
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info & map location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
                Our Digital Marketing School Info:
              </h3>
              
              <div className="space-y-4.5 text-slate-600 dark:text-slate-300">
                
                {/* Physical address block */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-800 dark:text-slate-200">Campus Location</span>
                    <span className="text-xs sm:text-sm">
                      CyberWise Skillsversity, Angadippuram, Perinthalmanna, Malappuram district, Kerala, India - 679321
                    </span>
                  </div>
                </div>

                {/* Direct Phone Lines */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-800 dark:text-slate-200">Admission Helplines</span>
                    <a href="tel:+919544332211" className="block text-xs sm:text-sm hover:text-purple-600 font-mono font-medium">
                      +91 9544 33 22 11
                    </a>
                    <a href="tel:+9190575638" className="block text-xs sm:text-sm hover:text-purple-600 font-mono font-medium mt-0.5">
                      +91 9544 44 11 00 (Secondary Office)
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-800 dark:text-slate-200">Email Address</span>
                    <a href="mailto:info@cyberwiseskills.com" className="block text-xs sm:text-sm hover:text-purple-600 font-mono font-medium">
                      info@cyberwiseskills.com
                    </a>
                    <a href="mailto:vinayakmarketer@gmail.com" className="block text-xs sm:text-sm hover:text-purple-600 font-mono font-medium mt-0.5">
                      vinayakmarketer@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map integration layout */}
            <div className="space-y-3.5">
              <span className="block text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5" />
                Find Us On Google Maps:
              </span>
              
              <div className="overflow-hidden rounded-3xl border border-purple-100 dark:border-purple-950/85 bg-white shadow-sm h-64 relative">
                {/* Embedded google map iframe for Perinthalmanna Angadippuram */}
                <iframe
                  id="google-maps-embed"
                  title="Google Map Location of CyberWise Skillsversity"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m1s0x3ba7ced36fcfb8cd%3A0x7d6c6e7fae4bde0!2sAngadippuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1718428400000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Lead Submission Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl border border-purple-150 dark:border-purple-950 bg-white dark:bg-slate-950 shadow-md space-y-6">
              <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Submit Counselor Inquiry
              </h3>

              <form id="admission-contact-form" onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                    />
                  </div>
                </div>

                {/* Row 2: Email and Course Track */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. rahul@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Course Interested In
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                    >
                      <option value="">-- Choose Course Specialization --</option>
                      {COURSES_DATA.map((course) => (
                        <option key={course.id} value={course.title}>
                          {course.title}
                        </option>
                      ))}
                      <option value="General Advice">General Career Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Message Text area */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Detailed Message & Career Goals
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about yourself (e.g., student, entrepreneur, freelancer) and what you expect from this training..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                  />
                </div>

                {/* Error Banner if any */}
                {errorMessage && (
                  <div className="p-3.5 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-100 text-xs font-semibold rounded-xl">
                    {errorMessage}
                  </div>
                )}

                {/* Success Toast banner */}
                {isSubmitted && (
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-950 text-xs rounded-xl flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-500" />
                    <div>
                      <strong className="block font-bold">Inquiry Sent Successfully!</strong>
                      <span>Our admissions representative will contact you via WhatsApp / email within 24 hours.</span>
                    </div>
                  </div>
                )}

                {/* Submit button */}
                <button
                  id="lead-submit-btn"
                  type="submit"
                  className="w-full py-4 text-xs font-extrabold uppercase bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl shadow cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Request Callback
                </button>

              </form>

              {/* LocalStorage Leads Visual Feedback Module */}
              {formInquiries.length > 0 && (
                <div className="pt-6 border-t border-purple-100 dark:border-purple-950">
                  <div className="flex items-center justify-between mb-4">
                    <span className="block text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      My Submission History ({formInquiries.length})
                    </span>
                    <button
                      onClick={clearInquiries}
                      className="inline-flex items-center gap-1 text-[10px] text-red-500 font-semibold hover:underline"
                    >
                      <Trash2 className="w-3 h-3" />
                      Clear History
                    </button>
                  </div>

                  <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                    {formInquiries.map((inq) => (
                      <div
                        key={inq.id}
                        className="p-3.5 rounded-xl bg-purple-500/5 dark:bg-purple-400/5 border border-purple-500/10 dark:border-purple-400/10 flex items-center justify-between gap-3 text-xs"
                      >
                        <div>
                          <strong className="block font-bold text-slate-800 dark:text-slate-200">
                            {inq.name}
                          </strong>
                          <span className="block text-[10px] text-slate-500">
                            Course: {inq.course || "General Consultation"} • {inq.date}
                          </span>
                        </div>
                        
                        <span className="px-2.5 py-1 text-[9px] font-extrabold text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-950/40 rounded-full">
                          {inq.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
