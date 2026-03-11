import { Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#work', label: 'Signature Events' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="py-16 px-6 lg:px-12 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="text-white font-semibold text-lg mb-2">Pawan Raj</p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Senior Event Marketing Manager &amp; Brand Strategist.
              <br />Toronto, Ontario 🇨🇦
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.15em] mb-4">Quick Links</p>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 text-sm hover:text-amber-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.15em] mb-4">Get In Touch</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:pawanr3092@gmail.com"
                className="inline-flex items-center gap-2 text-zinc-400 text-sm hover:text-amber-400 transition-colors duration-200"
              >
                <Mail size={14} />
                pawanr3092@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/pawanraj30"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-400 text-sm hover:text-amber-400 transition-colors duration-200"
              >
                <Linkedin size={14} />
                linkedin.com/in/pawanraj30
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-700">
            &copy; {currentYear} Pawan Raj. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">
            Built with React · Vite · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
