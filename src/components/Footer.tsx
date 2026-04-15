import { Link } from 'react-router-dom';
import { Database, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-display text-white">
                Entry<span className="text-primary-400">Lab</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Powering Data, Celebrating Memories. Your trusted partner for web research, data entry, and data processing services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Memory Gallery', path: '/gallery' },
                { label: 'Our Services', path: '/services' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-primary-400 text-sm flex items-center gap-1 group transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {['Data Entry', 'Data Processing', 'Data Cleansing', 'Web Research', 'Web Scraping', 'Market Research'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-slate-400 hover:text-primary-400 text-sm transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:shaki.entrylab@gmail.com"
                  className="text-slate-400 hover:text-primary-400 text-sm flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary-500" />
                  shaki.entrylab@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801736761569"
                  className="text-slate-400 hover:text-primary-400 text-sm flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary-500" />
                  +880 1736-761569
                </a>
              </li>
              <li className="text-slate-400 text-sm flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} EntryLab. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Powering Data, Celebrating Memories
          </p>
        </div>
      </div>
    </footer>
  );
}
