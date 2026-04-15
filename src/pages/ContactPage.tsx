import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageSquare,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', service: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-400 font-medium text-sm tracking-wider uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display">
            Contact{' '}
            <span className="gradient-text">Us</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Need a quote? We'd love to hear from you. Reach out and let's discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-display mb-6">
                  Let's Start a{' '}
                  <span className="gradient-text">Conversation</span>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Whether you need data entry services, web research, or any data processing solution — we're here to help. Reach out via any of the channels below or fill out the form.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="mailto:shaki.entrylab@gmail.com"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary-500/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Email Us</h3>
                    <p className="text-primary-400 text-sm mt-0.5">shaki.entrylab@gmail.com</p>
                    <p className="text-slate-500 text-xs mt-1">We reply within 24 hours</p>
                  </div>
                </a>

                <a
                  href="tel:+8801736761569"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary-500/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Call Us</h3>
                    <p className="text-primary-400 text-sm mt-0.5">+880 1736-761569</p>
                    <p className="text-slate-500 text-xs mt-1">Sat-Thu, 9AM - 6PM (BST)</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Visit Us</h3>
                    <p className="text-slate-400 text-sm mt-0.5">Dhaka, Bangladesh</p>
                    <p className="text-slate-500 text-xs mt-1">By appointment only</p>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <Clock className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Quick Response</p>
                  <p className="text-slate-500 text-xs mt-0.5">Within 24 hours</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <MessageSquare className="w-5 h-5 text-accent-400 mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Free Consultation</p>
                  <p className="text-slate-500 text-xs mt-0.5">No commitment</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/5">
                {submitted ? (
                  <div className="text-center py-16 animate-scale-in">
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400 text-sm">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Send us a Message</h3>
                      <p className="text-slate-500 text-sm">Fill out the form below and we'll get back to you soon.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-sm appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-slate-900">Select a service</option>
                        <option value="data-entry" className="bg-slate-900">Data Entry</option>
                        <option value="data-processing" className="bg-slate-900">Data Processing</option>
                        <option value="data-cleansing" className="bg-slate-900">Data Cleansing</option>
                        <option value="web-research" className="bg-slate-900">Web Research</option>
                        <option value="web-scraping" className="bg-slate-900">Web Scraping</option>
                        <option value="market-research" className="bg-slate-900">Market Research</option>
                        <option value="other" className="bg-slate-900">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5 group"
                    >
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-white/5 h-[300px] sm:h-[400px] relative">
            <iframe
              title="EntryLab Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.27889935!3d23.780573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563b5e22e4b0!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10">
              <p className="text-white font-semibold text-sm">EntryLab</p>
              <p className="text-slate-400 text-xs">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
