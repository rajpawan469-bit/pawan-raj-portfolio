export default function Impact() {
  const stats = [
    {
      value: '7+',
      label: 'Years Experience',
      sub: 'India to Canada',
    },
    {
      value: '60+',
      label: 'Events Produced',
      sub: 'Conferences, activations & launches',
    },
    {
      value: '2,800+',
      label: 'Peak Attendees',
      sub: 'Across conferences & activations',
    },
    {
      value: '17+',
      label: 'Cities Covered',
      sub: 'Canada, EMEA & APAC regions',
    },
  ]

  return (
    <section className="py-20 px-6 lg:px-12 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-5xl sm:text-6xl font-semibold text-amber-400 mb-2 tracking-tight group-hover:text-amber-300 transition-colors duration-200">
                {stat.value}
              </div>
              <div className="text-white font-medium text-base sm:text-lg mb-1">
                {stat.label}
              </div>
              <div className="text-zinc-500 text-sm leading-snug">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
