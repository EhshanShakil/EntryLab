import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Database,
  Globe,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Star,
  ChevronRight,
} from 'lucide-react';
import { memories } from '../data/memories';

const stats = [
  { label: 'Projects Completed', value: '1,200+' },
  { label: 'Happy Clients', value: '350+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Years of Experience', value: '5+' },
];

const featuredMemories = memories.filter((m) => m.featured).slice(0, 4);

export default function HomePage() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-warm-500/5 rounded-full blur-3xl" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Your Trusted Data Partner
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight">
                Powering{' '}
                <span className="gradient-text">Data</span>,<br />
                Celebrating{' '}
                <span className="gradient-text">Memories</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed">
                EntryLab delivers professional web research, data entry, and data processing services with unmatched accuracy and speed. Explore our journey through the memories we've created.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1 group"
                >
                  Explore Our Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  Get in Touch
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right - Featured Memory Grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in delay-300">
              {featuredMemories.map((memory, i) => (
                <Link
                  key={memory.id}
                  to="/gallery"
                  className={`group relative rounded-2xl overflow-hidden ${
                    i === 0 ? 'row-span-2' : ''
                  } ${i === 0 ? 'h-full' : 'h-48'}`}
                  style={{ animationDelay: `${(i + 1) * 150}ms` }}
                >
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-sm font-medium truncate">{memory.title}</p>
                    <p className="text-white/60 text-xs">{memory.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-500">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary-500/20 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-bold font-display gradient-text">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary-400 font-medium text-sm tracking-wider uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
              Our Core{' '}
              <span className="gradient-text">Services</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              We specialize in transforming raw data into valuable business assets with precision and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: 'Data Entry',
                desc: 'High-volume, accurate data entry services with quick turnaround and 99.9% accuracy guarantee.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Globe,
                title: 'Web Research',
                desc: 'Comprehensive online research to gather accurate, up-to-date information for your business.',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: Shield,
                title: 'Data Processing',
                desc: 'Transform raw data into structured, meaningful information ready for analysis and decisions.',
                color: 'from-orange-500 to-red-500',
              },
              {
                icon: Zap,
                title: 'Data Cleansing',
                desc: 'Clean, validate, and standardize your data for consistency and accuracy across all records.',
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: Users,
                title: 'Lead Generation',
                desc: 'Find and compile qualified leads with verified contact information for your sales team.',
                color: 'from-indigo-500 to-blue-500',
              },
              {
                icon: Star,
                title: 'Market Research',
                desc: 'In-depth market analysis to help you understand trends, competition, and customer behavior.',
                color: 'from-amber-500 to-orange-500',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary-500/20 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium group transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Memory Gallery Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary-400 font-medium text-sm tracking-wider uppercase mb-3">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display">
              Cherished{' '}
              <span className="gradient-text">Memories</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Every project, every celebration, every milestone — we capture the moments that make EntryLab special.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {memories.slice(0, 8).map((memory, i) => (
              <Link
                key={memory.id}
                to="/gallery"
                className={`group relative rounded-2xl overflow-hidden ${
                  i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-square'
                }`}
              >
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm">{memory.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-primary-300 bg-primary-500/20 px-2 py-0.5 rounded-full">
                      {memory.category}
                    </span>
                    <span className="text-xs text-white/50">{memory.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1 group"
            >
              Explore All Memories
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary-400 font-medium text-sm tracking-wider uppercase mb-3">
                Why EntryLab
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold font-display">
                Why Clients{' '}
                <span className="gradient-text">Trust Us</span>
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                With years of experience and a passionate team, we deliver data services that exceed expectations. Our commitment to accuracy, speed, and client satisfaction sets us apart.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  '99.9% data accuracy guarantee',
                  '24/7 dedicated support team',
                  'Fast turnaround times',
                  'Secure & confidential data handling',
                  'Flexible & scalable solutions',
                  'Competitive pricing',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                      alt="Team collaboration"
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                      alt="Success celebration"
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop"
                      alt="Modern office"
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=300&fit=crop"
                      alt="Team outing"
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary-500 to-accent-500 text-white p-6 rounded-2xl shadow-xl shadow-primary-500/25">
                <div className="text-3xl font-bold font-display">5+</div>
                <div className="text-sm text-white/80">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-12 sm:p-16 rounded-3xl bg-gradient-to-br from-primary-600/20 via-accent-600/20 to-warm-500/10 border border-white/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold font-display">
                Ready to Start Your{' '}
                <span className="gradient-text">Project?</span>
              </h2>
              <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                Let's discuss how EntryLab can help you with your data entry, web research, and data processing needs.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1"
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
