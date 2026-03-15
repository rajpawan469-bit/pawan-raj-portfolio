import { ArrowLeft, Download, ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * PHOTO GALLERY — drop real event photos into /public/events/ then replace
 * the `src: null` entries below with the matching file paths.
 * e.g.  src: '/events/nestle-mumbai-stage.jpg'
 */
const photos = [
  { label: 'Stage Setup · Mumbai', src: null, span: 'col-span-2' },
  { label: 'HCP Delegates · Delhi', src: null },
  { label: 'Branded Collateral', src: null },
  { label: 'Social Content · Live Day', src: null },
  { label: 'Panel Session · Bangalore', src: null },
]

function PhotoGrid() {
  return (
    <div className="py-16 px-6 lg:px-12 border-b border-zinc-900 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold text-amber-500 uppercase tracking-[0.2em] mb-1">Campaign Gallery</p>
            <h2 className="text-2xl font-semibold text-white">Event Photography</h2>
          </div>
          <a
            href="/briefs/nestle-new-tomorrow-brief.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-800 border border-zinc-700 text-white rounded-full text-sm font-medium hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-200"
          >
            <Download size={14} />
            Download Campaign Brief
          </a>
        </div>

        {/* Photo grid — 3 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-[4/3] ${photo.span || ''}`}
            >
              {photo.src ? (
                <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
                  <ImageIcon size={20} className="text-zinc-700" />
                  <p className="text-zinc-600 text-xs text-center leading-tight">{photo.label}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-zinc-700 text-xs mt-4 text-center">
          Drop event photos into /public/events/ and update the src fields above to populate this gallery.
        </p>
      </div>
    </div>
  )
}

export default function NestleCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-14">

      {/* Hero */}
      <div className="bg-gradient-to-b from-amber-950/20 via-[#0a0a0a] to-[#0a0a0a] py-24 px-6 lg:px-12 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-12 transition-smooth"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm text-amber-400 font-medium mb-6">
            Event Marketing · Multi-City Campaign
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Nestlé × Dr. Reddy's
            <br />
            <span className="text-amber-400">"New Tomorrow" Campaign</span>
          </h1>

          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
            A multi-city co-branded activation across 4 Indian cities — 4,800 healthcare
            professionals, two global multinationals, one unified campaign identity.
          </p>
        </div>
      </div>

      <PhotoGrid />

      {/* Content — 3-section story */}
      <div className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* The Campaign */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-8">The Campaign</h2>
            <div className="pawan-card space-y-5">
              <p className="text-zinc-200 text-lg leading-relaxed">
                Nestlé India's Professional Nutrition division and Dr. Reddy's Pharmaceuticals came
                to us with a shared goal: reach healthcare professionals and nutrition specialists in
                four major cities and position both brands as thought leaders in patient wellness.
                The ask was ambitious — a co-branded event series running across Mumbai, Delhi,
                Bangalore, and Hyderabad within a 6-week production window.
              </p>
              <p className="text-zinc-200 text-lg leading-relaxed">
                The strategic challenge wasn't logistics. It was identity. Nestlé's warm,
                science-backed nutrition messaging and Dr. Reddy's clinical, evidence-led pharma
                voice are genuinely different brands. The campaign needed to honour both without
                diluting either — while still feeling like one coherent thing to the 4,800
                healthcare professionals who attended.
              </p>
            </div>
          </div>

          {/* What I Did */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-8">What I Did</h2>
            <div className="pawan-card">
              <p className="text-zinc-200 text-lg leading-relaxed">
                Before any event design began, I facilitated a joint session with both marketing
                teams to create a "campaign identity" that sat above either brand — the New Tomorrow
                visual language. Typography, colour, stage design, print collateral, social
                templates: everything was drawn from this shared system. It resolved most approval
                disputes before they started and gave the 4-city rollout a single visual coherence.
                From there, I worked with subject matter experts at both companies to build the
                programme itself: a 3-hour evidence-based agenda with a keynote on therapeutic
                nutrition, a moderated panel of clinical dieticians presenting real patient outcomes,
                and hands-on product stations. Healthcare professionals don't respond to brand
                spectacle — they respond to peer-led, credible, practically useful content. I
                designed the day around that. For production, I sourced and briefed local teams in
                each city, built a centralised production bible with venue specs, A/V riders,
                run-of-show templates, and brand compliance checklists — so each team could execute
                independently without breaking consistency. I ran the social strategy in parallel: a
                3-phase loop starting with KOL doctor teasers two weeks out, live branded event
                coverage on the day, and post-event thought leadership content via LinkedIn and
                email newsletters.
              </p>
            </div>
          </div>

          {/* What It Achieved */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-8">What It Achieved</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { value: '4,800+', label: 'Healthcare professionals reached across 4 cities in 6 weeks' },
                { value: '22%', label: 'Improvement in MQL-to-SQL conversion rates through refined lead scoring and post-event nurture workflows' },
                { value: '96%', label: 'Delegate satisfaction — post-event NPS survey across all cities' },
                { value: '4/4', label: 'Cities delivered on-brand and on-schedule with zero client escalations' },
              ].map((stat, i) => (
                <div key={i} className="pawan-card">
                  <div className="text-4xl font-semibold text-amber-400 mb-2">{stat.value}</div>
                  <p className="text-zinc-300 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer nav */}
      <div className="border-t border-zinc-900 py-12 px-6 lg:px-12 bg-zinc-950">
        <div className="max-w-4xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <Link
            to="/"
            className="text-zinc-400 hover:text-white text-sm flex items-center gap-2 transition-smooth"
          >
            <ArrowLeft size={15} />
            Back to Portfolio
          </Link>
          <Link
            to="/case-study/conestoga-promo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black rounded-full text-sm font-semibold hover:bg-amber-400 transition-smooth"
          >
            Next: Conestoga Promo Video →
          </Link>
        </div>
      </div>
    </div>
  )
}
