import { ArrowLeft, Download, ImageIcon, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * VIDEO + PHOTO SECTION
 * Video: replace videoId below with the actual YouTube video ID once uploaded.
 * Photos: drop files into /public/events/ and replace src: null entries.
 */
const VIDEO_ID = null // e.g. 'dQw4w9WgXcQ'

const photos = [
  { label: 'Campus Shoot Day', src: null },
  { label: 'Interview Setup', src: null },
  { label: 'Instagram Cut — Reel', src: null },
  { label: 'YouTube Thumbnail', src: null },
]

function MediaSection() {
  return (
    <div className="py-16 px-6 lg:px-12 border-b border-zinc-900 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold text-teal-400 uppercase tracking-[0.2em] mb-1">Media</p>
            <h2 className="text-2xl font-semibold text-white">Film & Production Stills</h2>
          </div>
          <a
            href="/briefs/conestoga-brief.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-800 border border-zinc-700 text-white rounded-full text-sm font-medium hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-200"
          >
            <Download size={14} />
            Download Project Brief
          </a>
        </div>

        {/* Video embed OR placeholder */}
        {VIDEO_ID ? (
          <div className="aspect-video rounded-2xl overflow-hidden mb-4">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}`}
              title="Conestoga College Promo Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="aspect-video rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
              <Play size={20} className="text-zinc-500 ml-0.5" />
            </div>
            <p className="text-zinc-600 text-sm">Promo film — add YouTube video ID to enable embed</p>
          </div>
        )}

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 aspect-square">
              {photo.src ? (
                <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-3">
                  <ImageIcon size={18} className="text-zinc-700" />
                  <p className="text-zinc-600 text-[11px] text-center leading-tight">{photo.label}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ConestogaCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-14">

      {/* Hero */}
      <div className="bg-gradient-to-b from-blue-950/20 via-[#0a0a0a] to-[#0a0a0a] py-24 px-6 lg:px-12 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-12 transition-smooth"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 font-medium mb-6">
            Video Production · Digital Campaign · Education
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Conestoga College
            <br />
            <span className="text-blue-400">Promotional Video</span>
          </h1>

          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
            Script to screen — a promotional film built for international students, delivered across
            four platform formats from a single shoot.
          </p>
        </div>
      </div>

      <MediaSection />

      {/* Content — 3-section story */}
      <div className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* The Campaign */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-8">The Campaign</h2>
            <div className="pawan-card space-y-5">
              <p className="text-zinc-200 text-lg leading-relaxed">
                Conestoga College's marketing team needed a promotional video that would actually
                work for their audience — largely international students evaluating Canadian colleges
                from abroad, often in completely different cultural contexts. Most college promo
                videos fail this test. They feature the same stock-shot campus footage, the same
                generic voiceover, the same interchangeable smiling students. The brief was to make
                something that felt specific to Conestoga.
              </p>
              <p className="text-zinc-200 text-lg leading-relaxed">
                This was my first major production role in Canada, taken on during my co-op
                placement in Fall 2023. I owned the entire project — from shaping the creative brief
                with the marketing team, through filming on campus, to delivering four separate
                platform-specific edits.
              </p>
            </div>
          </div>

          {/* What I Did */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-8">What I Did</h2>
            <div className="pawan-card">
              <p className="text-zinc-200 text-lg leading-relaxed">
                I started with discovery conversations with the marketing team and prospective
                student services to understand what questions international students actually have
                before they choose a college — career outcomes, day-to-day campus life, student
                community, how the city feels. The script came from those conversations, not from
                the college's existing marketing copy. I wanted the film to answer real questions,
                not repeat brand taglines. On shoot day, I planned and executed everything on
                location across Conestoga's Kitchener campus — directing talent, managing the shot
                list, and handling audio. In post-production I edited in Adobe Premiere Pro, colour
                graded to match the college's warm brand palette, and cut platform-specific versions:
                the full YouTube documentary cut, a 60-second Instagram Reels version in 9:16, a
                silent 16:9 autoplay loop for the website hero, and a motion thumbnail for email.
                Four different formats, one shoot day.
              </p>
            </div>
          </div>

          {/* What It Achieved */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-8">What It Achieved</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { value: '4', label: 'Platform-specific edits delivered from a single shoot day' },
                { value: '40%', label: 'Increase in webinar attendance rates through data-driven promotional campaigns across email, social, and partner channels' },
                { value: '🇨🇦', label: 'First Canadian production credit — Ontario education sector market entry' },
                { value: 'Live', label: 'Deployed across YouTube, Instagram, college website, and email channels' },
              ].map((stat, i) => (
                <div key={i} className="pawan-card">
                  <div className="text-4xl font-semibold text-blue-400 mb-2">{stat.value}</div>
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
            to="/case-study/ford-bronco"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black rounded-full text-sm font-semibold hover:bg-amber-400 transition-smooth"
          >
            Next: Ford Bronco Ad →
          </Link>
        </div>
      </div>
    </div>
  )
}
