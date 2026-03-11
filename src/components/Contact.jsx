import { Mail, Linkedin, Download, MapPin } from 'lucide-react'

export default function Contact() {
  const targetRoles = [
    'Event Marketing Manager',
    'Brand Marketing Manager',
    'Campaign Manager',
    'Marketing Specialist',
    'Experiential Marketing Manager',
  ]

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-zinc-950">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-semibold text-amber-500 uppercase tracking-[0.2em] mb-4">
          Let's Work Together
        </p>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight text-white">
          Plan Your Next
          <br />
          <span className="text-amber-400">Great Event.</span>
        </h2>

        {/* Location badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-zinc-800/50 rounded-full text-sm font-medium mb-8">
          <MapPin size={13} className="text-amber-400" />
          <span className="text-zinc-300">
            Based in Toronto, Ontario 🇨🇦 &nbsp;·&nbsp; Open Work Permit
          </span>
        </div>

        <p className="text-2xl sm:text-3xl text-zinc-400 mb-16 leading-relaxed max-w-2xl mx-auto">
          Available for event marketing roles and consulting briefs across Canada.
        </p>

        {/* Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 mb-16 text-left max-w-3xl mx-auto space-y-8">

          {/* Target Roles — pills */}
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.12em] mb-4">
              Open to roles in
            </p>
            <div className="flex flex-wrap gap-2">
              {targetRoles.map((role, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-amber-500/8 border border-amber-500/20 text-amber-300 rounded-full text-sm font-medium"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* What excites */}
          <div className="pt-6 border-t border-zinc-800/50">
            <p className="text-zinc-300 text-base leading-relaxed">
              I thrive on high-production events that become brand milestones — the kind where live
              experience and digital amplification are designed together from day one. Whether you're
              planning a national conference, a multi-city activation, or a product launch that needs
              to generate real business results, I bring full ownership of the brief from concept through
              post-event analytics.
            </p>
          </div>

          {/* Work authorization */}
          <div className="bg-amber-500/8 border border-amber-500/20 rounded-2xl p-4">
            <p className="text-amber-300 text-sm font-medium mb-1">🇨🇦 Work Authorization</p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Based in Toronto with valid Canadian work authorization. No sponsorship required.
              Available to start immediately.
            </p>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a
            href="mailto:pawanr3092@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-black rounded-full text-base font-semibold hover:bg-amber-400 transition-smooth hover:scale-[1.02]"
          >
            <Mail size={18} />
            pawanr3092@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/pawanraj30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-zinc-700 text-white rounded-full text-base font-semibold hover:border-zinc-500 hover:bg-zinc-900/50 transition-smooth hover:scale-[1.02]"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="/pawan-raj-resume.pdf"
            download
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-700 text-white rounded-full text-base font-semibold hover:bg-zinc-800 hover:border-zinc-600 transition-smooth hover:scale-[1.02]"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
