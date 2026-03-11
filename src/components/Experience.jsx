import { MapPin } from 'lucide-react'

export default function Experience() {
  const experience = [
    {
      company: 'Independent Consultant',
      location: 'Toronto, Ontario',
      role: 'Brand & Event Marketing Consultant',
      period: 'Jan 2024 – Present',
      type: 'Full-time',
      narrative:
        "Since arriving in Canada I've been working directly with Toronto-area clients — directing the Ford Bronco print ad, building Jyoti Interiors' complete brand identity from scratch, and producing Conestoga College's promotional film end-to-end. Each project taught me something different about the Canadian market: how brands here communicate, what audiences expect, and where the creative standards sit. I track everything through GA4 and report results to clients with the same rigour I applied to campaigns in India.",
      outcomes: ['3 Canadian client projects', 'Ford · Jyoti Interiors · Conestoga', 'Immediate availability'],
    },
    {
      company: 'Conestoga College',
      location: 'Kitchener, Ontario',
      role: 'Marketing & Communications Specialist',
      period: 'Sep 2023 – Dec 2023',
      type: 'Co-op',
      narrative:
        "My first formal Canadian role. The college needed a promo film that would land with an international student audience — not another forgettable campus reel. I wrote the script, planned the shots, filmed on location, and took it through post-production in Premiere Pro myself. The brief was simple: make it feel real, not polished to the point of inauthenticity. We delivered four platform-specific cuts — YouTube, Instagram Reels, website hero, and email — from a single shoot.",
      outcomes: ['Script to final edit', 'YouTube · Instagram · Web · Email', 'Ontario education sector'],
    },
    {
      company: 'Events Marketing Agency',
      location: 'Mumbai / Pan-India',
      role: 'Senior Event Marketing Manager',
      period: '2019 – 2023',
      type: 'Full-time',
      narrative:
        "Five years producing events for some of the biggest names in Indian FMCG, pharma, and financial services — Nestlé, Abbott, Hershey's, ICICI, Nuvoco, Bharat Serum. The work ranged from intimate 200-person healthcare professional conferences to multi-city brand activations with thousands of attendees. I owned budgets up to ₹2Cr, coordinated vendor networks across 8 cities, and built the social strategy that ran alongside every live event. The Nestlé × Dr. Reddy's 'New Tomorrow' campaign across Mumbai, Delhi, Bangalore, and Hyderabad is the work I'm most proud of from this period.",
      outcomes: ["30+ events produced", "4,800+ attendees (Nestlé × Dr. Reddy's)", '98% client retention'],
    },
    {
      company: 'Events & Marketing',
      location: 'India',
      role: 'Event Coordinator & Marketing Associate',
      period: '2016 – 2019',
      type: 'Full-time',
      narrative:
        "Where I learned the craft. Started as a coordinator supporting senior managers on ICICI and Hershey's activations — handling venue logistics, vendor quotes, branded merchandise, and on-site operations. By Year 2 I was running events independently. Promoted to Senior Manager within three years. I discovered early that the best events are invisible in execution — the audience never sees the coordination, only the experience.",
      outcomes: ['Promoted to Senior in 3 years', 'First solo event by Year 2', 'FMCG · Pharma · Finance'],
    },
  ]

  return (
    <section id="experience" className="py-32 px-6 lg:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-amber-500 uppercase tracking-[0.2em] mb-4">
            Career Journey
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight text-white">
            Experience
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            India to Canada. Agency to in-house to independent.
            <br className="hidden sm:block" />
            <span className="text-white">7 years of events, not just plans.</span>
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 mb-20">
          {experience.map((exp, idx) => (
            <div key={idx} className="pawan-card">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-xl font-semibold text-white leading-tight">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="text-amber-400 font-semibold text-base">{exp.company}</span>
                    <span className="text-zinc-700">·</span>
                    <div className="flex items-center gap-1 text-zinc-500 text-sm">
                      <MapPin size={11} />
                      <span>{exp.location}</span>
                    </div>
                    <span className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded-full text-[11px] text-zinc-500 font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-zinc-500 font-medium whitespace-nowrap flex-shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Narrative — human first-person story */}
              <p className="text-zinc-300 text-base leading-relaxed mb-6">{exp.narrative}</p>

              {/* Outcome chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                {exp.outcomes.map((outcome, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-amber-500/8 border border-amber-500/20 text-amber-300 rounded-full text-xs font-medium"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="pawan-card">
              <div>
                <p className="text-amber-400 font-semibold mb-0.5">Conestoga College</p>
                <h4 className="text-xl font-semibold text-white mb-1">
                  Post-Graduate Certificate
                </h4>
                <p className="text-zinc-400 text-sm">Marketing Management</p>
                <p className="text-zinc-500 text-sm">Kitchener, Ontario 🇨🇦 · 2023 – 2024</p>
              </div>
            </div>
            <div className="pawan-card">
              <div>
                <p className="text-amber-400 font-semibold mb-0.5">Bachelor's Degree</p>
                <h4 className="text-xl font-semibold text-white mb-1">Business / Marketing</h4>
                <p className="text-zinc-400 text-sm">India · 2012 – 2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

