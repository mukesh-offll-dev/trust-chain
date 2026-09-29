import { useScrollAnimation } from '../hooks/useScrollAnimation'

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6L12 2z" />
      </svg>
    ),
    label: 'Trustless Security',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.102" />
      </svg>
    ),
    label: 'Decentralized',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Tamper-Proof',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    label: 'Fully Transparent',
  },
]

export default function Introduction() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-24 relative">
      <div className="glow-line mx-auto max-w-6xl mb-16 opacity-30" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="animate-on-scroll text-center mb-16">
          <span className="text-xs font-mono font-medium text-cyan-500 tracking-widest uppercase">About the Project</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            What is <span className="text-gradient">Trust Chain</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-on-scroll space-y-5 text-slate-300 leading-relaxed">
            <p>
              <span className="text-white font-semibold">Trust Chain</span> is a blockchain-based secure platform proposed for{' '}
              <span className="text-cyan-400 font-medium">Smart India Hackathon 2026</span> under Problem Statement ID{' '}
              <span className="font-mono text-cyan-400">26125</span>.
            </p>
            <p>
              The platform aims to solve critical challenges in digital identity management and asset governance by leveraging the immutability and transparency of blockchain technology — eliminating centralized points of failure and building a foundation of verifiable trust.
            </p>
            <p>
              Designed with government and enterprise use cases in mind, Trust Chain proposes a unified layer for identity verification, granular access control, digital asset ownership, and an unalterable audit trail — all without relying on any single trusted authority.
            </p>
            <div className="pt-2 flex items-center gap-2 p-3 rounded-lg border border-amber-500/20 bg-amber-500/5">
              <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs text-amber-400/80">
                This is a <strong className="text-amber-400">prototype concept</strong> submitted for SIH 2026. No system is operational.
              </span>
            </div>
          </div>

          {/* Pillars grid */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map(({ icon, label }) => (
              <div
                key={label}
                className="card-border rounded-xl p-5 flex flex-col items-center gap-3 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-cyan-400">{icon}</span>
                <span className="text-sm font-medium text-slate-200">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
