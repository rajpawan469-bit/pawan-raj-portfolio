import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

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
