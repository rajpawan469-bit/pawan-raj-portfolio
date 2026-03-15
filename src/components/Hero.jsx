import { ArrowRight } from 'lucide-react'

const eventTypes = [
  'Tradeshows',
  'Roadshows',
  'Webinars',
  'Hybrid & Virtual Events',
  'Social Media Marketing',
  'Email Marketing',
]

const heroStats = [
  { value: '60+', label: 'Events Produced' },
  { value: '2,800+', label: 'Peak Attendees' },
  { value: '17+', label: 'Cities Covered' },
  { value: 'CAD $800K+', label: 'Budget Managed' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 relative pt-24 overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-amber-600/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center space-y-8">

          {/* Status badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-zinc-900/80 border border-zinc-800/60 backdrop-blur-sm rounded-full">
            <span className="flex items-center gap-1.5 text-sm text-zinc-400">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse inline-block" />
              Toronto, Ontario 🇨🇦
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-sm text-amber-400 font-medium">Open to Work</span>
          </div>

          {/* Main Headline */}
          <div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[96px] font-semibold leading-[0.92] tracking-tight">
              <span className="text-white">The Person Behind The Moments</span>
              <br />
              <span className="text-amber-400">Brands Never Stop Talking About.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl mx-auto font-normal leading-relaxed">
            I turn budgets into experiences — conferences, activations, and campaigns{' '}
            <br className="hidden sm:block" />
            that don't just look good, they perform.
          </p>

          {/* Specialization chips */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto pt-2">
            {eventTypes.map((type, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-zinc-900/80 border border-zinc-800/60 text-zinc-400 rounded-full text-sm font-medium"
              >
                {type}
              </span>
            ))}
          </div>
          <p className="text-sm text-zinc-600">
            Industries: F&amp;B · Finance · SaaS · Medical &amp; Technology
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-amber-500 text-black rounded-full text-lg font-semibold hover:bg-amber-400 transition-smooth hover:scale-[1.02]"
            >
              See Signature Events
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent border-2 border-zinc-700 text-white rounded-full text-lg font-semibold hover:border-amber-500/50 hover:bg-zinc-900/50 transition-smooth hover:scale-[1.02]"
            >
              Book a Consultation
            </a>
          </div>

          {/* Trust signal numbers */}
          <div className="flex flex-wrap justify-center gap-10 pt-6 border-t border-zinc-900/80 max-w-2xl mx-auto">
            {heroStats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-amber-400">{stat.value}</span>
                <span className="text-xs text-zinc-500 font-medium tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
