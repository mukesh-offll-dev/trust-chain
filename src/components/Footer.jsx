export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-cyan-500/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6L12 2z"
                  fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-bold text-sm">
                <span className="text-white">Trust</span>
                <span className="text-cyan-400">Chain</span>
              </span>
            </div>
            <p className="text-xs text-slate-600">Blockchain-based secure identity & asset platform</p>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="text-sm font-semibold text-slate-300">Team Hexatex</p>
            <p className="text-xs text-slate-500 mt-0.5">Smart India Hackathon 2026 · Problem Statement ID: 26125</p>
          </div>

          {/* Right */}
          <div className="text-xs text-slate-600 text-center md:text-right">
            <p>© {year} Team Hexatex. All rights reserved.</p>
            <p className="mt-0.5 text-slate-700">Concept stage — not in production.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
