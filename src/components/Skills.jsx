export default function Skills() {
  const marketingSkills = [
    'Event Design & Production',
    'Campaign Planning',
    'Brand Development',
    'Social Media Marketing',
    'Budgeting & Negotiation',
    'Venue & Vendor Sourcing',
    'Post-Event Analysis',
    'Audience Engagement',
    'Branded Merchandise',
    'Integrated Marketing',
    'Content Strategy',
    'ROI Reporting',
    'A/V Production',
    'Experiential Marketing',
  ]

  const toolSkills = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe Premiere Pro',
    'Google Analytics 4',
    'Cvent',
    'Tableau',
    'CRM Platforms',
    'Email Marketing',
    'Meta Ads Manager',
    'Microsoft Office 365',
    'Canva',
    'Social Media Platforms',
    'Project Management Tools',
  ]

  return (
    <section id="skills" className="py-32 px-6 lg:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-amber-500 uppercase tracking-[0.2em] mb-4">
            Toolkit
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight text-white">
            Skills
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Strategy meets execution. A full-stack event marketing toolkit
            <br className="hidden sm:block" />
            built across 7 years and two continents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Marketing & Events */}
          <div className="pawan-card">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white mb-1">Event Production & Strategy</h3>
              <p className="text-zinc-500 text-sm">Planning, execution, and brand marketing</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {marketingSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded-full text-sm font-medium hover:bg-amber-500/20 hover:border-amber-500/40 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="pawan-card">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white mb-1">Tools & Platforms</h3>
              <p className="text-zinc-500 text-sm">Software and technology stack</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {toolSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-zinc-900/80 border border-zinc-700/50 text-zinc-300 rounded-full text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-8 pawan-card">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { lang: 'English', level: 'Professional' },
                  { lang: 'Hindi', level: 'Native' },
                  { lang: 'Telugu', level: 'Native' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-white font-medium text-sm">{item.lang}</span>
                    <span className="text-zinc-600 text-xs">·</span>
                    <span className="text-zinc-400 text-xs">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
