import { Link } from 'react-router-dom';
import {
  Keyboard,
  Cpu,
  Sparkles,
  Pickaxe,
  Globe,
  Code,
  ShoppingCart,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { services } from '../data/memories';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  keyboard: Keyboard,
  cpu: Cpu,
  sparkles: Sparkles,
  pickaxe: Pickaxe,
  globe: Globe,
  code: Code,
  'shopping-cart': ShoppingCart,
  'bar-chart': BarChart3,
};

const gradients = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-violet-500',
  'from-teal-500 to-cyan-500',
  'from-rose-500 to-pink-500',
  'from-amber-500 to-orange-500',
];

export default function ServicesPage() {
  const dataEntryServices = services.filter((s) => s.category === 'data-entry');
  const webResearchServices = services.filter((s) => s.category === 'web-research');

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-400 font-medium text-sm tracking-wider uppercase mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display">
            Our{' '}
            <span className="gradient-text">Services</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            Professional data entry, web research, and data processing services tailored to your business needs. We deliver accuracy and efficiency.
          </p>
        </div>
      </section>

      {/* Data Entry Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold font-display">Data Entry & Processing</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dataEntryServices.map((service, i) => {
              const Icon = iconMap[service.icon] || Cpu;
              return (
                <div
                  key={service.id}
                  className="group p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary-500/20 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-slate-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Web Research Services */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-8 bg-gradient-to-b from-accent-500 to-warm-500 rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold font-display">Web Research & Analysis</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {webResearchServices.map((service, i) => {
              const Icon = iconMap[service.icon] || Globe;
              return (
                <div
                  key={service.id}
                  className="group p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent-500/20 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[i + 4]} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-slate-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary-400 font-medium text-sm tracking-wider uppercase mb-3">
              How We Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display">
              Our{' '}
              <span className="gradient-text">Process</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Understand', desc: 'We analyze your requirements and data specifications thoroughly.' },
              { step: '02', title: 'Plan', desc: 'Create a detailed project plan with timelines and quality benchmarks.' },
              { step: '03', title: 'Execute', desc: 'Our skilled team processes your data with precision and care.' },
              { step: '04', title: 'Deliver', desc: 'Quality-checked output delivered on time with full support.' },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary-500/20 transition-colors group"
              >
                <div className="text-5xl font-bold font-display text-white/5 group-hover:text-primary-500/10 transition-colors absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-display">
            Need a Custom{' '}
            <span className="gradient-text">Solution?</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            We tailor our services to match your exact requirements. Let's discuss your project today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1 group"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
