import { ArrowRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * CASE STUDY CARDS — Image-first design
 * Each card has a visual preview area at top (renders gradient until a real
 * photo is provided). To add photos:
 *   1. Drop files into /public/work/
 *   2. Set the imgSrc field on the matching case study object below
 * To link the brief PDF:
 *   1. Drop the PDF into /public/briefs/
 *   2. Set the briefPdf field on the matching object
 */
const caseStudies = [
  {
    id: 'nestle-campaign',
    title: "Nestlé × Dr. Reddy's — New Tomorrow",
    company: "Nestlé India · Dr. Reddy's",
    metric: '4,800+',
    metricLabel: 'Attendees',
    outcome: '4 cities · Pan-India · Co-branded healthcare activation',
    skills: ['Campaign Strategy', 'Event Production', 'Multi-Brand', 'Social Media'],
    gradient: 'from-amber-600/30 via-orange-700/20 to-zinc-900',
    accentFrom: 'from-amber-500',
    accentTo: 'to-orange-500',
    // imgSrc: '/work/nestle-new-tomorrow.jpg',
    // briefPdf: '/briefs/nestle-new-tomorrow-brief.pdf',
  },
  {
    id: 'conestoga-promo',
    title: 'Conestoga College — Promo Film',
    company: 'Conestoga College, Ontario 🇨🇦',
    metric: '4',
    metricLabel: 'Platform cuts',
    outcome: 'Script · Film · Edit · YouTube, Instagram, Web, Email',
    skills: ['Video Production', 'Adobe Premiere', 'Content Strategy', 'Multi-Platform'],
    gradient: 'from-blue-700/30 via-cyan-800/20 to-zinc-900',
    accentFrom: 'from-blue-500',
    accentTo: 'to-cyan-500',
    // imgSrc: '/work/conestoga-film-still.jpg',
    // briefPdf: '/briefs/conestoga-brief.pdf',
  },
  {
    id: 'ford-bronco',
    title: 'Ford Bronco — Magazine Ad',
    company: 'Ford Motor Company',
    metric: '1',
    metricLabel: 'Full-page national ad',
    outcome: 'Print-ready · Brand-compliant · Press-delivered',
    skills: ['Creative Direction', 'Adobe Illustrator', 'Brand Design', 'Print'],
    gradient: 'from-zinc-600/30 via-zinc-700/20 to-zinc-900',
    accentFrom: 'from-zinc-400',
    accentTo: 'to-zinc-600',
    // imgSrc: '/work/ford-bronco-ad.jpg',
    // briefPdf: '/briefs/ford-bronco-brief.pdf',
  },
]

export default function CaseStudies() {
  return (
    <section id="work" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-amber-500 uppercase tracking-[0.2em] mb-4">
            Featured Projects
          </p>
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-5 tracking-tight">
            Signature Events
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Three campaigns. Three different briefs.
            <br className="hidden sm:block" />
            Click any card to read the full strategy and results.
          </p>
        </div>

        {/* Case Study Cards — image-first */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_24px_64px_rgba(245,158,11,0.10)] flex flex-col"
            >
              {/* ── VISUAL PREVIEW AREA ── */}
              {/* Replace the gradient div with an <img> once you have event photos */}
              <Link to={`/case-study/${study.id}`} className="block relative overflow-hidden">
                {study.imgSrc ? (
                  <img
                    src={study.imgSrc}
                    alt={study.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className={`w-full h-52 bg-gradient-to-br ${study.gradient} flex items-end p-6 group-hover:brightness-110 transition-all duration-300`}
                  >
                    {/* Big metric as visual anchor */}
                    <div className="flex items-end gap-2">
                      <span className="text-6xl font-bold text-white/90 leading-none tracking-tight">
                        {study.metric}
                      </span>
                      <span className="text-sm text-white/50 pb-1 max-w-[90px] leading-tight">
                        {study.metricLabel}
                      </span>
                    </div>
                  </div>
                )}
                {/* Gradient accent bar at bottom of image */}
                <div className={`h-0.5 bg-gradient-to-r ${study.accentFrom} ${study.accentTo}`} />
              </Link>

              {/* ── TEXT CONTENT ── */}
              <div className="p-7 flex flex-col flex-1">
                {/* Company */}
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                  {study.company}
                </p>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {study.title}
                </h3>

                {/* One-line outcome */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                  {study.outcome}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-zinc-900/80 border border-zinc-800 rounded-full text-xs text-zinc-400 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTAs — View + optionally Download */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/50">
                  <Link
                    to={`/case-study/${study.id}`}
                    className="flex items-center gap-1.5 text-amber-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200"
                  >
                    Case study
                    <ArrowRight size={14} />
                  </Link>

                  {study.briefPdf && (
                    <a
                      href={study.briefPdf}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="ml-auto flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 text-xs font-medium transition-colors duration-200"
                    >
                      <Download size={13} />
                      Brief
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

