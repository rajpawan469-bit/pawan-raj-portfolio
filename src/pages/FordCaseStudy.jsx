import { ArrowLeft, Download, ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * CREATIVE GALLERY
 * Drop the actual ad files into /public/work/ and update src: null below.
 * e.g. src: '/work/ford-bronco-fullpage-ad.jpg'
 */
const creatives = [
  { label: 'Full-Page Magazine Ad — Final', src: null, span: 'col-span-2 row-span-2' },
  { label: 'Digital Banner — 300×250', src: null },
  { label: 'Digital Banner — 728×90', src: null },
  { label: 'Brand Style Reference', src: null },
  { label: 'Print Proof Sheet', src: null },
]

function CreativeGallery() {
  return (
    <div className="py-16 px-6 lg:px-12 border-b border-zinc-900 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-[0.2em] mb-1">Creative Work</p>
            <h2 className="text-2xl font-semibold text-white">Ad Creatives & Deliverables</h2>
          </div>
          <a
            href="/briefs/ford-bronco-brief.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-800 border border-zinc-700 text-white rounded-full text-sm font-medium hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-200"
          >
            <Download size={14} />
            Download Creative Brief
          </a>
        </div>

        {/* Grid — feature the hero ad */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 auto-rows-[160px]">
          {creatives.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 ${item.span || ''}`}
            >
              {item.src ? (
                <img src={item.src} alt={item.label} className="w-full h-full object-contain p-4" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
                  <ImageIcon size={20} className="text-zinc-700" />
                  <p className="text-zinc-600 text-xs text-center leading-tight">{item.label}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-zinc-700 text-xs mt-4 text-center">
          Drop ad files into /public/work/ and update src fields above to display the creatives.
        </p>
      </div>
    </div>
  )
}

export default function FordCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-14">

      {/* Hero */}
      <div className="bg-gradient-to-b from-zinc-800/20 via-[#0a0a0a] to-[#0a0a0a] py-24 px-6 lg:px-12 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-12 transition-smooth"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-800 border border-zinc-700 rounded-full text-sm text-zinc-300 font-medium mb-6">
            Creative Direction · Print Design · Adobe Suite
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Ford Bronco
            <br />
            <span className="text-zinc-400">Magazine Ad</span>
          </h1>

          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
            A full-page print ad — Ford brand standards, Bronco attitude, built entirely in the
            Adobe suite.
          </p>
        </div>
      </div>

      <CreativeGallery />

      {/* Content — 3-section story */}
      <div className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* The Campaign */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-8">The Campaign</h2>
            <div className="pawan-card space-y-5">
              <p className="text-zinc-200 text-lg leading-relaxed">
                The brief was a creative direction challenge: a full-page magazine advertisement for
                the Ford Bronco that captured what the vehicle actually stands for — rugged,
                adventurous, freedom-oriented — while working within Ford's strict global brand
                guidelines. No going off-script. Every type choice, colour value, and image
                treatment had to be defensible against Ford's standards documentation.
              </p>
              <p className="text-zinc-200 text-lg leading-relaxed">
                This was freelance work commissioned in Toronto in 2024, demonstrating my ability to
                handle automotive brand creative — a category where the visual standards are
                notoriously precise and the margin for error is zero. The deliverable was print-ready
                CMYK artwork plus a digital banner adaptation.
              </p>
            </div>
          </div>

          {/* What I Did */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-8">What I Did</h2>
            <div className="pawan-card">
              <p className="text-zinc-200 text-lg leading-relaxed">
                I started by studying Ford's global brand identity system — not just the logo usage
                rules, but the visual language principles that make a Ford ad feel like a Ford ad:
                the typography hierarchy, the way imagery is cropped, the balance between negative
                space and vehicle presence. The Bronco specifically has its own sub-identity within
                Ford — more rugged, more wilderness-forward — so the strategic challenge was working
                within the Ford brand while leaning into that Bronco character. Conceptually, I
                wanted the ad to feel like a dare — an invitation to trade the predictable for
                something with more terrain. The headline, the image selection, the layout geometry
                all pointed toward that single idea. I worked in Adobe Illustrator for all layout
                and type work, with Photoshop for image treatment and compositing. The final print
                file was delivered at full bleed with proper crop marks, embedded colour profiles,
                and CMYK values in spec. The digital banner cut-down followed the same visual logic,
                adapted for web dimensions.
              </p>
            </div>
          </div>

          {/* What It Achieved */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-8">What It Achieved</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { value: '100%', label: 'Ford global brand guideline compliance — zero revision requests on standards' },
                { value: '2', label: 'Deliverables from one brief: full-page print + digital banner adaptation' },
                { value: 'Print', label: 'Magazine-ready CMYK artwork with full bleed, crop marks, and embedded profiles' },
                { value: 'Adobe', label: 'Illustrator + Photoshop — full production in-house, no external production house' },
              ].map((stat, i) => (
                <div key={i} className="pawan-card">
                  <div className="text-4xl font-semibold text-zinc-300 mb-2">{stat.value}</div>
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
            to="/case-study/nestle-campaign"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black rounded-full text-sm font-semibold hover:bg-amber-400 transition-smooth"
          >
            ← See Nestlé Campaign
          </Link>
        </div>
      </div>
    </div>
  )
}
