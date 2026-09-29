import { useScrollAnimation } from '../hooks/useScrollAnimation'

const features = [
  {
    id: 1,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Decentralized Identity',
    tag: 'DID / Self-Sovereign Identity',
    description:
      'Users will own and control their digital identities without relying on any central authority. Cryptographic credentials enable privacy-preserving verification across services.',
    points: ['Self-sovereign identity model', 'Cryptographic key-based authentication', 'No central identity registry'],
    color: 'from-cyan-500/10 to-cyan-500/0',
    accent: 'border-cyan-500/20 hover:border-cyan-500/50',
    iconColor: 'text-cyan-400',
    tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  {
    id: 2,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Smart Access Control',
    tag: 'Role-Based Access Control',
    description:
      'Granular, policy-driven access management enforced on-chain. Smart contracts will govern who can access what — with no possibility of unauthorized privilege escalation.',
    points: ['On-chain policy enforcement', 'Role-based permission hierarchies', 'Automated smart-contract gates'],
    color: 'from-blue-500/10 to-blue-500/0',
    accent: 'border-blue-500/20 hover:border-blue-500/50',
    iconColor: 'text-blue-400',
    tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    id: 3,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Digital Asset Management',
    tag: 'Tokenized Ownership',
    description:
      'Secure, verifiable ownership of digital assets recorded immutably on the blockchain. Transfer, verify, and manage assets with full provenance history and tamper-proof records.',
    points: ['Immutable ownership records', 'Verifiable asset provenance', 'Trustless transfer protocols'],
    color: 'from-violet-500/10 to-violet-500/0',
    accent: 'border-violet-500/20 hover:border-violet-500/50',
    iconColor: 'text-violet-400',
    tagColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  },
  {
    id: 4,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Blockchain Audit Trail',
    tag: 'Immutable Ledger',
    description:
      'Every action, access event, and transaction is recorded on an append-only blockchain ledger. Provides regulators, auditors, and administrators with a fully transparent, tamper-proof history.',
    points: ['Append-only event log', 'Cryptographically verifiable entries', 'Real-time compliance reporting'],
    color: 'from-emerald-500/10 to-emerald-500/0',
    accent: 'border-emerald-500/20 hover:border-emerald-500/50',
    iconColor: 'text-emerald-400',
    tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useScrollAnimation(index * 100)
  return (
    <div
      ref={ref}
      className={`animate-on-scroll relative rounded-2xl border p-7 bg-gradient-to-b ${feature.color} ${feature.accent} transition-all duration-300 hover:-translate-y-1.5 group`}
    >
      {/* Planned badge */}
      <span className={`absolute top-4 right-4 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${feature.tagColor}`}>
        PLANNED
      </span>

      <div className={`mb-4 ${feature.iconColor}`}>{feature.icon}</div>

      <span className={`text-xs font-mono font-medium px-2 py-0.5 rounded border ${feature.tagColor} mb-3 inline-block`}>
        {feature.tag}
      </span>

      <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-5">{feature.description}</p>

      <ul className="space-y-2">
        {feature.points.map(point => (
          <li key={point} className="flex items-start gap-2 text-xs text-slate-400">
            <svg className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${feature.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Features() {
  const headingRef = useScrollAnimation()

  return (
    <section id="features" className="py-24 relative">
      <div className="glow-line mx-auto max-w-6xl mb-16 opacity-30" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headingRef} className="animate-on-scroll text-center mb-16">
          <span className="text-xs font-mono font-medium text-cyan-500 tracking-widest uppercase">Core Capabilities</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Planned <span className="text-gradient">Features</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
            The following capabilities are <strong className="text-slate-300">proposed for development</strong>. None are currently operational.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
