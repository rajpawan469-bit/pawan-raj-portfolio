import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * EVENT GALLERY
 * Replace `imgSrc` paths with real event photos from the Wix site — drop the
 * image files into /public/events/ and uncomment the matching imgSrc line.
 * The tile renders the gradient until a photo is supplied; swaps instantly once added.
 */
const events = [
  {
    client: "Nestlé × Dr. Reddy's",
    campaign: 'New Tomorrow Campaign',
    stat: '4,800+',
    statLabel: 'Healthcare Professionals',
    scope: 'Mumbai · Delhi · Bangalore · Hyderabad',
    type: 'Multi-City Brand Activation',
    year: '2022',
    gradient: 'from-amber-950 via-orange-950/80 to-zinc-950/20',
    accentBorder: 'hover:border-amber-500/50',
    link: '/case-study/nestle-campaign',
    featured: true, // spans 2 of 3 columns
    // imgSrc: '/events/nestle-new-tomorrow.jpg',
  },
  {
    client: 'Abbott Healthcare',
    campaign: 'HCP Professional Summit',
    stat: '500+',
    statLabel: 'Professionals',
    scope: 'Mumbai, India',
    type: 'Medical Conference',
    year: '2021',
    gradient: 'from-blue-950 via-cyan-950/80 to-zinc-950/20',
    accentBorder: 'hover:border-blue-500/50',
    link: '#experience',
    // imgSrc: '/events/abbott-summit.jpg',
  },
  {
    client: "Hershey's India",
    campaign: 'Brand Activation Tour',
    stat: '3',
    statLabel: 'City Roadshow',
    scope: 'Pan-India',
    type: 'Consumer Activation',
    year: '2020',
    gradient: 'from-rose-950 via-pink-950/80 to-zinc-950/20',
    accentBorder: 'hover:border-rose-500/50',
    link: '#experience',
    // imgSrc: '/events/hersheys-activation.jpg',
  },
  {
    client: 'ICICI Bank',
    campaign: 'Corporate Conference Series',
    stat: '₹2Cr+',
    statLabel: 'Budget Managed',
    scope: 'Mumbai + Outstation',
    type: 'Financial Services Event',
    year: '2018–2022',
    gradient: 'from-violet-950 via-purple-950/80 to-zinc-950/20',
    accentBorder: 'hover:border-violet-500/50',
    link: '#experience',
    // imgSrc: '/events/icici-conference.jpg',
  },
  {
    client: 'Conestoga College',
    campaign: 'Institutional Promo Film',
    stat: '4',
    statLabel: 'Platform Cuts',
    scope: 'Kitchener, Ontario 🇨🇦',
    type: 'Video Production',
    year: '2023',
    gradient: 'from-teal-950 via-emerald-950/80 to-zinc-950/20',
    accentBorder: 'hover:border-teal-500/50',
    link: '/case-study/conestoga-promo',
    // imgSrc: '/events/conestoga-film-still.jpg',
  },
  {
    client: 'Ford Motor Company',
    campaign: 'Bronco Magazine Ad',
    stat: '1',
    statLabel: 'Full-Page National Ad',
    scope: 'Toronto, Ontario 🇨🇦',
    type: 'Creative Direction · Print',
    year: '2024',
    gradient: 'from-zinc-800 via-zinc-900/80 to-zinc-950/20',
    accentBorder: 'hover:border-zinc-400/40',
    link: '/case-study/ford-bronco',
    // imgSrc: '/events/ford-bronco-ad.jpg',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 lg:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-amber-500 uppercase tracking-[0.2em] mb-4">
            Portfolio at a Glance
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight text-white">
            The Events
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            6 years. 12+ brands. 8 cities.
            <br className="hidden sm:block" />
            Here's the breadth of the work.
          </p>
        </div>

        {/* Grid — auto-fit columns, featured tile spans 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {events.map((event, idx) => (
            <EventTile key={idx} event={event} />
          ))}
        </div>

        {/* Bottom nudge */}
        <p className="text-center text-zinc-600 text-sm mt-10">
          Scroll down for the full breakdown of each campaign ↓
        </p>
      </div>
    </section>
  )
}

function EventTile({ event }) {
  const isLinked = event.link.startsWith('/case-study')
  const Wrapper = isLinked ? Link : 'a'
  const wrapperProps = isLinked
    ? { to: event.link }
    : { href: event.link }

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative rounded-3xl overflow-hidden border border-zinc-800/60 ${event.accentBorder} transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_24px_64px_rgba(0,0,0,0.6)] block ${event.featured ? 'lg:col-span-2' : ''}`}
      style={
        event.imgSrc
          ? {
              backgroundImage: `url(${event.imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {/* Background gradient (hidden when real photo is present) */}
      {!event.imgSrc && (
        <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient}`} />
      )}

      {/* Dark scrim — ensures text readable over any photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-transparent" />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjEiLz48L3N2Zz4=')]" />

      {/* Content */}
      <div className={`relative z-10 p-7 flex flex-col justify-between ${event.featured ? 'min-h-72 lg:min-h-80' : 'min-h-60'}`}>

        {/* Top row: type badge + year */}
        <div className="flex items-start justify-between gap-3">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-[11px] text-white/70 font-medium leading-none">
            {event.type}
          </span>
          <span className="text-xs text-white/30 font-medium flex-shrink-0">{event.year}</span>
        </div>

        {/* Bottom: big stat + client + scope + CTA */}
        <div>
          {/* Big metric — the visual anchor */}
          <div className="flex items-end gap-2.5 mb-4">
            <span className={`font-bold text-white leading-none tracking-tight ${event.featured ? 'text-6xl lg:text-8xl' : 'text-5xl lg:text-6xl'}`}>
              {event.stat}
            </span>
            <span className="text-sm text-white/50 pb-1 max-w-[110px] leading-tight">
              {event.statLabel}
            </span>
          </div>

          <p className="text-white font-semibold text-lg leading-snug mb-0.5">{event.client}</p>
          <p className="text-amber-400/70 text-xs font-medium mb-1">{event.campaign}</p>
          <p className="text-white/40 text-sm mb-4">{event.scope}</p>

          {/* CTA — only shows when card is interactive */}
          {isLinked && (
            <div className="inline-flex items-center gap-1.5 text-amber-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Full case study
              <ArrowUpRight size={14} />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
