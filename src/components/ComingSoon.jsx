import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ComingSoon() {
  const ref = useScrollAnimation()

  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div ref={ref} className="animate-on-scroll">
          {/* Main badge */}
          <div className="inline-flex flex-col items-center gap-5 px-10 py-10 rounded-2xl border border-amber-500/30 bg-amber-500/5 shadow-xl shadow-amber-500/5">
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            {/* Badge text */}
            <div>
              <div className="text-xs font-mono font-bold text-amber-400 tracking-widest uppercase mb-2">
                Status
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-2">
                Under Construction
              </h3>
              <p className="text-2xl font-semibold text-amber-300/70">
                Coming Soon
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-amber-500/30" />

            {/* Description */}
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Trust Chain is currently in the <strong className="text-slate-300">design and proposal phase</strong> as part of SIH 2026. Development has not yet commenced. All features shown are planned capabilities.
            </p>

            {/* Progress bar */}
            <div className="w-full max-w-xs">
              <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                <span>Project Progress</span>
                <span className="text-amber-400 font-mono">Concept Stage</span>
              </div>
              <div className="h-1.5 rounded-full bg-navy-800 overflow-hidden">
                <div className="h-full w-[12%] rounded-full bg-gradient-to-r from-amber-500 to-amber-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
