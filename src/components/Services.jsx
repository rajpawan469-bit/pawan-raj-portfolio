import { Users, Zap, Heart, Rocket, Globe, Film } from 'lucide-react'

const services = [
  {
    Icon: Users,
    title: 'Corporate Conferences & Summits',
    description:
      'End-to-end production of multi-day corporate events — venues, AV, catering, run of show, and team management for 200–5,000+ attendees. Every detail owned, nothing delegated blindly.',
    tags: ['Venue Sourcing', 'AV & Tech', 'Run of Show', 'Team Coordination'],
  },
  {
    Icon: Zap,
    title: 'Brand Activations & Experiential',
    description:
      'Immersive live experiences that turn product stories into audience memories — roadshows, pop-ups, and multi-city campaign tours that build lasting brand equity.',
    tags: ['Experiential Design', 'Multi-City Rollout', 'Brand Storytelling'],
  },
  {
    Icon: Heart,
    title: 'Healthcare Professional Events',
    description:
      'Medical conferences and HCP engagement events with full pharma compliance awareness — designed for Abbott, Bharat Serum, and Dr. Reddy\'s professional audiences.',
    tags: ['HCP Engagement', 'Pharma Expertise', 'Compliance-Sensitive'],
  },
  {
    Icon: Rocket,
    title: 'Product Launch Events',
    description:
      'High-impact launch experiences engineered for day-one buzz, retail momentum, and social amplification — live and across digital channels simultaneously.',
    tags: ['Launch Strategy', 'Press Coordination', 'Social Amplification'],
  },
  {
    Icon: Globe,
    title: 'Multi-City Campaign Tours',
    description:
      'Managing logistics, vendors, and creative consistency across 4–8 cities simultaneously — zero compromise on brand standards, regardless of geography.',
    tags: ['8 Cities Covered', 'Vendor Networks', 'CAD $800K+ Managed'],
  },
  {
    Icon: Film,
    title: 'Event Content & Video Production',
    description:
      'Scripted, filmed, and edited event content for YouTube, Instagram, web, and email — full post-production from a single shoot. Delivered for Conestoga, Ford, and more.',
    tags: ['Adobe Premiere', 'Multi-Platform', 'Script to Screen'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 lg:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-amber-500 uppercase tracking-[0.2em] mb-4">
            What I Do
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight text-white">
            Services
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Full-stack event production and brand marketing.
            <br className="hidden sm:block" />
            From strategic brief to post-event report.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, description, tags }, idx) => (
            <div
              key={idx}
              className="group pawan-card flex flex-col gap-5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300 flex-shrink-0">
                <Icon size={22} className="text-amber-400" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/50">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
