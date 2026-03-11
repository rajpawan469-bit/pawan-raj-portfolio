import { CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Brief',
    description:
      'Deep-dive into your goals, audience profile, brand standards, and budget constraints. The brief defines everything that follows.',
    deliverable: 'Event Brief + Goal Alignment',
  },
  {
    number: '02',
    title: 'Concept & Strategy',
    description:
      'Build the event experience from scratch — theme, format, attendee journey, and how live experience integrates with digital amplification.',
    deliverable: 'Creative Concept Deck',
  },
  {
    number: '03',
    title: 'Logistics & Production',
    description:
      'Venue sourcing, vendor negotiation, budget management, AV planning, branded merchandise, and every pre-event production detail locked in.',
    deliverable: 'Master Event Plan + Budget',
  },
  {
    number: '04',
    title: 'On-Site Execution',
    description:
      'Real-time event management: run-sheet ownership, team coordination, vendor management, and invisible crisis resolution — guests see only the experience.',
    deliverable: 'Flawless Live Event',
  },
  {
    number: '05',
    title: 'Post-Event Analytics',
    description:
      'Attendance data, social performance, ROI documentation, and strategic learnings — because the event doesn\'t end when the lights go down.',
    deliverable: 'Post-Event Report + ROI',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 lg:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold text-amber-500 uppercase tracking-[0.2em] mb-4">
            How I Work
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight text-white">
            The Process
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Every great event follows a proven system.
            <br className="hidden sm:block" />
            Here's how we go from brief to standing ovation.
          </p>
        </div>

        {/* Steps — vertical on mobile, horizontal on lg */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-11 left-[calc(10%+48px)] right-[calc(10%+48px)] h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent pointer-events-none" />

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <div className="relative z-10 w-[88px] h-[88px] rounded-full bg-zinc-900 border-2 border-zinc-800 flex flex-col items-center justify-center mb-6 flex-shrink-0 hover:border-amber-500/40 transition-colors duration-300">
                  <span className="text-amber-400 text-3xl font-bold leading-none">
                    {step.number}
                  </span>
                </div>

                {/* Step title */}
                <h3 className="text-base font-semibold text-white mb-3 leading-snug px-2">
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="text-zinc-500 text-sm leading-relaxed mb-5 px-2 flex-1">
                  {step.description}
                </p>

                {/* Deliverable */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/8 border border-amber-500/20 rounded-full">
                  <CheckCircle size={11} className="text-amber-400 flex-shrink-0" />
                  <span className="text-amber-400/80 text-xs font-medium leading-tight">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-zinc-600 text-sm mt-16 max-w-xl mx-auto leading-relaxed">
          7 years of applying this system — from 200-person healthcare conferences
          to 4,800+ attendee multi-city brand campaigns across India and Canada.
        </p>
      </div>
    </section>
  )
}
