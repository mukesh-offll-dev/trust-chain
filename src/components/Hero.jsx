export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-600/8 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-violet-600/6 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-32">
        {/* SIH badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-medium font-mono tracking-wider mb-8 animate-on-scroll visible">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-slow" />
          Smart India Hackathon 2026 · PS ID: 26125
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 animate-on-scroll visible" style={{ animationDelay: '0.1s' }}>
          <span className="text-white">Trust</span>
          <span className="text-gradient">Chain</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-light text-slate-300 max-w-3xl mx-auto mb-4 leading-snug animate-on-scroll visible" style={{ animationDelay: '0.2s' }}>
          Securing Identity.{' '}
          <span className="text-cyan-400 font-medium">Protecting Assets.</span>{' '}
          Building Trust.
        </p>

        <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto mb-12 animate-on-scroll visible" style={{ animationDelay: '0.3s' }}>
          A decentralized blockchain platform engineered for sovereign identity, transparent governance, and secure digital asset management.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll visible" style={{ animationDelay: '0.4s' }}>
          <a
            href="#about"
            className="px-7 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 hover:-translate-y-0.5"
          >
            Learn More
          </a>
          <a
            href="#features"
            className="px-7 py-3 rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            View Features
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 text-xs">
          <span>Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
