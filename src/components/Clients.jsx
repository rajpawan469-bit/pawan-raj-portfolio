export default function Clients() {
  const clients = [
    'Nestlé',
    "Hershey's",
    'Abbott',
    'ICICI Bank',
    "Dr. Reddy's",
    'Bharat Petroleum',
    'Nuvoco',
    'Symphony',
    'Bharat Serum',
    'Conestoga College',
    'Ford',
    'Jyoti Interiors',
    // Duplicate set for seamless infinite loop
    'Nestlé',
    "Hershey's",
    'Abbott',
    'ICICI Bank',
    "Dr. Reddy's",
    'Bharat Petroleum',
    'Nuvoco',
    'Symphony',
    'Bharat Serum',
    'Conestoga College',
    'Ford',
    'Jyoti Interiors',
  ]

  return (
    <section className="py-20 bg-[#0a0a0a] border-y border-zinc-900 overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] font-medium">
            Brands &amp; Organizations Served
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-14 animate-marquee whitespace-nowrap">
          {clients.map((client, idx) => (
            <span
              key={idx}
              className="text-zinc-400 text-lg font-medium hover:text-amber-400 transition-colors duration-200 cursor-default flex-shrink-0"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
