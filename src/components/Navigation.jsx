import { Menu, X, Download } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navLinks = [
    { href: '#gallery', label: 'Events' },
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (href) => {
    setIsOpen(false)
    if (href.startsWith('#') && !isHomePage) {
      window.location.href = '/' + href
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-14">
          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-amber-400 transition-smooth"
          >
            Pawan Raj
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHomePage ? link.href : '/' + link.href}
                className="text-sm text-zinc-400 hover:text-white transition-smooth font-normal"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/pawan-raj-resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500 text-black rounded-full text-sm font-semibold hover:bg-amber-400 transition-smooth"
            >
              <Download size={13} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-zinc-800/50 transition-smooth"
          >
            {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-zinc-800/50">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHomePage ? link.href : '/' + link.href}
                onClick={() => handleNavClick(link.href)}
                className="block px-4 py-2.5 text-zinc-300 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-smooth text-sm font-normal"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-4">
              <a
                href="/pawan-raj-resume.pdf"
                download
                className="flex items-center justify-center gap-2 py-2.5 bg-amber-500 text-black rounded-full text-sm font-semibold hover:bg-amber-400 transition-smooth"
              >
                <Download size={13} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
