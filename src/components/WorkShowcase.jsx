import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * WORK SHOWCASE — inline "show not tell" panels.
 * Everything a recruiter needs is visible without clicking a single link.
 *
 * To add a photo: set imgSrc to your Cloudinary URL, e.g.
 *   imgSrc: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/f_auto,q_auto,w_1200/events/nestle-stage.jpg'
 */
const showcases = [
  {
    id: 'nestle-campaign',
    link: '/case-study/nestle-campaign',
    client: "Nestlé India × Dr. Reddy's",
    campaign: '"New Tomorrow" Campaign',
    year: '2022',
    category: 'Multi-City Brand Activation · FMCG + Pharma',
    scope: 'Mumbai · Delhi · Bangalore · Hyderabad',
    gradient: 'from-amber-600/25 via-orange-900/20 to-zinc-900',
    accentColor: 'text-amber-400',
    heroBg: 'bg-gradient-to-br from-amber-600/25 via-orange-800/15 to-zinc-900',
    metrics: [
      { value: '4,800+', label: 'HCPs Reached' },
      { value: '4', label: 'Cities in 6 wks' },
      { value: '96%', label: 'NPS Score' },
      { value: '300%', label: 'Social Impressions' },
    ],
    bullets: [
      'Created a unified co-brand identity used across stage, print, and social — resolved approval conflicts between two multinationals before they started',
      'Built a city-by-city production bible: venue specs, A/V riders, run-of-show, brand compliance checklist — each local team executed independently without breaking consistency',
      'Designed a 3-phase social loop: KOL doctor teasers → live branded coverage → post-event LinkedIn thought leadership',
      'Programme: evidence-based agenda, moderated clinical panel, hands-on product stations — engineered for HCP credibility, not just brand spectacle',
    ],
    outcome: '4 cities on brand. On schedule. Zero client escalations.',
    // imgSrc: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/f_auto,q_auto,w_1200/events/nestle-new-tomorrow.jpg',
  },
  {
    id: 'conestoga-promo',
    link: '/case-study/conestoga-promo',
    client: 'Conestoga College',
    campaign: 'Institutional Promo Film',
    year: '2023',
    category: 'Video Production · Higher Education',
    scope: 'Kitchener, Ontario 🇨🇦',
    gradient: 'from-blue-700/20 via-cyan-900/15 to-zinc-900',
    accentColor: 'text-blue-400',
    heroBg: 'bg-gradient-to-br from-blue-700/25 via-cyan-800/15 to-zinc-900',
    metrics: [
      { value: '4', label: 'Platform cuts' },
      { value: '1', label: 'Shoot day' },
      { value: '100%', label: 'Solo production' },
      { value: '3', label: 'Mins flagship cut' },
    ],
    bullets: [
      'Solo end-to-end production: wrote the script, planned every shot, filmed on location, took through full post-production in Adobe Premiere Pro',
      'Brief: authentic, not over-polished — engineered to convert international prospective students who can smell institutional PR',
      'One shoot day yielded four platform-optimised cuts: YouTube (3-min), Instagram Reel (30-sec), website hero (60-sec), email thumbnail',
      "Delivered a reusable b-roll library, caption pack, and platform-specific thumbnail set for the college's ongoing social use",
    ],
    outcome: 'Script to four live platforms. Delivered by one person.',
    // imgSrc: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/f_auto,q_auto,w_1200/events/conestoga-shoot-day.jpg',
  },
  {
    id: 'ford-bronco',
    link: '/case-study/ford-bronco',
    client: 'Ford Motor Company',
    campaign: 'Bronco Magazine Ad',
    year: '2024',
    category: 'Creative Direction · Print & Digital',
    scope: 'Toronto, Ontario 🇨🇦',
    gradient: 'from-zinc-600/20 via-zinc-800/15 to-zinc-900',
    accentColor: 'text-zinc-300',
    heroBg: 'bg-gradient-to-br from-zinc-600/30 via-zinc-700/15 to-zinc-900',
    metrics: [
      { value: '1', label: 'Full-page national ad' },
      { value: '3', label: 'Digital banner sizes' },
      { value: '100%', label: 'Adobe suite' },
      { value: '0', label: 'Brand non-compliances' },
    ],
    bullets: [
      "Brief: translate the Bronco's off-road personality into print within Ford's strict brand standards — no agency safety net, just the Adobe suite",
      'Built the full layout in Illustrator with brand-compliant type, colour, and image treatment; retouched hero image in Photoshop for press',
      'Delivered print-ready CMYK PDF to press spec + a 3-size digital banner suite (300×250, 728×90, 160×600) from the same master file',
      "First Canadian brand project — learned how Ford Canada's agency-brand approval process works and navigated it cleanly",
    ],
    outcome: 'Press-delivered. Brand-compliant. First Canadian campaign.',
    // imgSrc: 'https://res.cloudinary.com/YOUR_CLOUD/image/upload/f_auto,q_auto,w_1200/events/ford-bronco-ad-mockup.jpg',
  },
]

export default function WorkShowcase() {
  return (
    <section id="work" className="py-32 px-6 lg:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-amber-500 uppercase tracking-[0.2em] mb-4">
            Deep Dives
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight text-white">
            The Work
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Strategy, execution, and results — all here.
            <br className="hidden sm:block" />
            No click required.
          </p>
        </div>

        {/* Showcase panels */}
        <div className="space-y-6">
          {showcases.map((item, idx) => (
            <ShowcasePanel key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ShowcasePanel({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="group bg-[#0f0f0f] border border-zinc-800/60 rounded-3xl overflow-hidden hover:border-zinc-700/60 transition-all duration-300">

      {/* Mobile: stacked. Desktop: side-by-side */}
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

        {/* ── VISUAL PANEL (left or right) ── */}
        <div className={`lg:w-[38%] flex-shrink-0 relative min-h-[260px] lg:min-h-[380px] ${item.heroBg} overflow-hidden`}>
          {item.imgSrc ? (
            <img
              src={item.imgSrc}
              alt={item.campaign}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : null}

          {/* Scrim — always present to ensure text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content over visual */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8">
            {/* Top: category badge */}
            <div>
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-[11px] text-white/70 font-medium">
                {item.category}
              </span>
            </div>

            {/* Bottom: metrics row */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {item.metrics.map((m, i) => (
                  <div key={i} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-3">
                    <div className={`text-2xl font-bold leading-none mb-1 ${item.accentColor}`}>
                      {m.value}
                    </div>
                    <div className="text-white/50 text-[11px] leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FACTS PANEL ── */}
        <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-xs font-semibold uppercase tracking-[0.15em] ${item.accentColor}`}>
                {item.client}
              </span>
              <span className="text-zinc-700">·</span>
              <span className="flex items-center gap-1 text-zinc-500 text-xs">
                <MapPin size={10} />
                {item.scope}
              </span>
              <span className="ml-auto text-zinc-600 text-xs font-medium">{item.year}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-snug">
              {item.campaign}
            </h3>
          </div>

          {/* What I did — bullets */}
          <div className="flex-1 mb-6">
            <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-[0.15em] mb-4">
              What I did
            </p>
            <ul className="space-y-3">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.accentColor.replace('text-', 'bg-')}`} />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome + link */}
          <div className="pt-6 border-t border-zinc-800/50 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-[0.15em] mb-1">
                Outcome
              </p>
              <p className="text-white font-semibold text-base leading-snug">
                {item.outcome}
              </p>
            </div>
            <Link
              to={item.link}
              className={`group/link inline-flex items-center gap-2 px-5 py-2.5 border rounded-full text-sm font-medium transition-all duration-200 flex-shrink-0 border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500`}
            >
              Full story
              <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
