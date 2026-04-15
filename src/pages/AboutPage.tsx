import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Clock,
} from 'lucide-react';
import { teamMembers } from '../data/memories';

const timeline = [
  { year: '2019', title: 'EntryLab Founded', desc: 'Started with a small team of 3 passionate data professionals.' },
  { year: '2020', title: 'First 100 Projects', desc: 'Reached our first milestone of 100 completed projects.' },
  { year: '2021', title: 'Team Expansion', desc: 'Grew to 20+ team members and expanded service offerings.' },
  { year: '2022', title: 'International Clients', desc: 'Started serving clients from USA, UK, and Australia.' },
  { year: '2023', title: 'New Office', desc: 'Moved to a modern, spacious office to accommodate our growing team.' },
  { year: '2024', title: '1000+ Projects', desc: 'Crossed the 1000+ project milestone with 99.9% accuracy.' },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-400 font-medium text-sm tracking-wider uppercase mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display">
            About{' '}
            <span className="gradient-text">EntryLab</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
            We're a dedicated team of data professionals committed to delivering accuracy, speed, and value in every project we handle.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To empower businesses worldwide with accurate, efficient, and affordable data services that drive growth and informed decision-making.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                desc: 'To become the most trusted data services partner globally, known for excellence in quality, innovation, and client satisfaction.',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: Heart,
                title: 'Our Values',
                desc: 'Accuracy, integrity, teamwork, and continuous improvement. We treat every project with the same dedication and attention to detail.',
                color: 'from-orange-500 to-red-500',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary-500/20 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary-400 font-medium text-sm tracking-wider uppercase mb-3">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
                From a Small Team to a{' '}
                <span className="gradient-text">Trusted Agency</span>
              </h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>
                  EntryLab was founded in 2019 with a simple mission: to provide businesses with reliable, accurate, and affordable data services. What started as a team of 3 passionate individuals in a small room has grown into a thriving agency with 50+ skilled professionals.
                </p>
                <p>
                  Over the years, we've had the privilege of working with hundreds of clients from around the world, handling everything from simple data entry tasks to complex web research and data mining projects.
                </p>
                <p>
                  But EntryLab is more than just work — it's a family. The memories we create together, from office celebrations to team outings, are what make this journey truly special. That's why we built this space to celebrate those moments.
                </p>
              </div>
              <div className="flex items-center gap-8 mt-8">
                {[
                  { icon: Users, label: '50+ Team', value: 'Members' },
                  { icon: Award, label: '99.9%', value: 'Accuracy' },
                  { icon: TrendingUp, label: '1200+', value: 'Projects' },
                  { icon: Clock, label: '5+', value: 'Years' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-5 h-5 text-primary-400 mx-auto mb-1" />
                    <div className="text-white font-bold text-lg">{stat.label}</div>
                    <div className="text-slate-500 text-xs">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                  alt="EntryLab team"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-500 to-accent-500 text-white p-6 rounded-2xl shadow-xl shadow-primary-500/25 hidden sm:block">
                <div className="text-3xl font-bold font-display">Since</div>
                <div className="text-lg text-white/80">2019</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary-400 font-medium text-sm tracking-wider uppercase mb-3">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display">
              Key{' '}
              <span className="gradient-text">Milestones</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-warm-500" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary-500 rounded-full -translate-x-1/2 ring-4 ring-slate-950 z-10" />

                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary-500/20 transition-colors inline-block">
                      <div className="text-primary-400 font-bold text-sm mb-1">{item.year}</div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary-400 font-medium text-sm tracking-wider uppercase mb-3">
              Our People
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display">
              Meet the{' '}
              <span className="gradient-text">Team</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              The talented individuals who make EntryLab great.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary-500/20 transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 ring-2 ring-white/10 group-hover:ring-primary-500/30 transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-white font-semibold">{member.name}</h3>
                <p className="text-primary-400 text-sm mt-1">{member.role}</p>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary-400 font-medium text-sm tracking-wider uppercase mb-3">
              Life at EntryLab
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display">
              Our{' '}
              <span className="gradient-text">Culture</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Collaborative Environment',
                desc: 'We believe in teamwork. Every project is a collaborative effort where everyone\'s ideas matter.',
                emoji: '🤝',
              },
              {
                title: 'Growth & Learning',
                desc: 'Regular training sessions and skill development programs keep our team at the cutting edge.',
                emoji: '📚',
              },
              {
                title: 'Work-Life Balance',
                desc: 'We value our team\'s well-being with flexible schedules and regular team outings.',
                emoji: '⚖️',
              },
              {
                title: 'Celebrate Together',
                desc: 'From project milestones to festivals, we celebrate every achievement as a family.',
                emoji: '🎉',
              },
              {
                title: 'Innovation First',
                desc: 'We encourage creative problem-solving and constantly improve our processes.',
                emoji: '💡',
              },
              {
                title: 'Open Communication',
                desc: 'Transparent, honest communication is the foundation of our workplace culture.',
                emoji: '💬',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary-500/20 transition-colors"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
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
            Want to Join Our{' '}
            <span className="gradient-text">Team?</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            We're always looking for talented individuals who share our passion for data and excellence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:-translate-y-1 group"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
