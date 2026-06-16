import { Link } from 'react-router-dom';

function ResumeIllustration() {
  return (
    <div className="relative animate-slide-left mt-4">
      {/* ── Main Resume Document ── */}
      <svg width="210" height="270" viewBox="0 0 210 270" fill="none" className="drop-shadow-lg">
        <rect x="5" y="5" width="200" height="260" rx="14" fill="rgba(45,43,61,0.04)" />
        <rect width="200" height="260" rx="14" fill="white" />
        {/* Avatar */}
        <circle cx="100" cy="38" r="20" fill="#EDEEF5" />
        <circle cx="100" cy="34" r="6" fill="#DDDEE8" />
        <path d="M88 48c0-5 5.4-7 12-7s12 2 12 7" fill="#DDDEE8" />
        {/* Name placeholder */}
        <rect x="60" y="68" width="80" height="8" rx="4" fill="#DDDEE8"
          className="[transform-box:fill-box] origin-left animate-line-draw [animation-delay:0.3s]" />
        {/* Subtitle */}
        <rect x="70" y="82" width="60" height="5" rx="2.5" fill="#EDEEF5"
          className="[transform-box:fill-box] origin-left animate-line-draw [animation-delay:0.45s]" />
        {/* Divider */}
        <line x1="24" y1="98" x2="176" y2="98" stroke="#EDEEF5" strokeWidth="1.5" />
        {/* Text lines */}
        <rect x="24" y="110" width="152" height="5" rx="2.5" fill="#EDEEF5"
          className="[transform-box:fill-box] origin-left animate-line-draw [animation-delay:0.5s]" />
        <rect x="24" y="122" width="120" height="5" rx="2.5" fill="#EDEEF5"
          className="[transform-box:fill-box] origin-left animate-line-draw [animation-delay:0.6s]" />
        <rect x="24" y="134" width="140" height="5" rx="2.5" fill="#EDEEF5"
          className="[transform-box:fill-box] origin-left animate-line-draw [animation-delay:0.7s]" />
        <rect x="24" y="146" width="100" height="5" rx="2.5" fill="#EDEEF5"
          className="[transform-box:fill-box] origin-left animate-line-draw [animation-delay:0.8s]" />
        {/* Section header */}
        <rect x="24" y="168" width="44" height="6" rx="3" fill="#DDDEE8"
          className="[transform-box:fill-box] origin-left animate-line-draw [animation-delay:0.9s]" />
        {/* Skill bars */}
        <rect x="24" y="184" width="120" height="8" rx="4" fill="#B8E8D0"
          className="[transform-box:fill-box] origin-left animate-bar-grow [animation-delay:1s]" />
        <rect x="24" y="198" width="90" height="8" rx="4" fill="#BDDCF5"
          className="[transform-box:fill-box] origin-left animate-bar-grow [animation-delay:1.15s]" />
        <rect x="24" y="212" width="140" height="8" rx="4" fill="#D5C6F0"
          className="[transform-box:fill-box] origin-left animate-bar-grow [animation-delay:1.3s]" />
        <rect x="24" y="226" width="70" height="8" rx="4" fill="#FCDAD1"
          className="[transform-box:fill-box] origin-left animate-bar-grow [animation-delay:1.45s]" />
        {/* Scan beam */}
        <rect x="10" y="0" width="180" height="3" rx="1.5" fill="rgba(124,106,232,0.35)"
          className="animate-scan-beam" />
      </svg>

      {/* ── Magnifying Glass — top right ── */}
      <div className="absolute -top-6 -right-14 animate-bounce-gentle">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <circle cx="30" cy="30" r="18" fill="rgba(124,106,232,0.08)" />
          <circle cx="30" cy="30" r="18" stroke="#7C6AE8" strokeWidth="3" fill="none" />
          <line x1="43" y1="43" x2="58" y2="58" stroke="#7C6AE8" strokeWidth="4" strokeLinecap="round" />
          {/* Sparkle in lens */}
          <circle cx="24" cy="24" r="3" fill="rgba(124,106,232,0.15)" />
        </svg>
      </div>

      {/* ── Score Ring — top left ── */}
      <div className="absolute -top-10 -left-14 animate-pop-in [animation-delay:0.5s]">
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" className="drop-shadow-md">
          <circle cx="44" cy="44" r="38" fill="white" />
          <circle cx="44" cy="44" r="30" fill="none" stroke="#EDEEF5" strokeWidth="5" />
          <circle cx="44" cy="44" r="30" fill="none" stroke="#5CC9A7" strokeWidth="5"
            strokeDasharray="188.5" strokeDashoffset="188.5" strokeLinecap="round"
            transform="rotate(-90 44 44)" className="animate-ring-fill" />
          {/* Checkmark inside */}
          <polyline points="35,44 41,50 54,37" fill="none" stroke="#5CC9A7" strokeWidth="3"
            strokeLinecap="round" strokeLinejoin="round"
            className="animate-pop-in [animation-delay:2s]" />
        </svg>
      </div>

      {/* ── Bar Chart Card — bottom left ── */}
      <div className="absolute -bottom-10 -left-20 animate-pop-in [animation-delay:0.7s]">
        <svg width="130" height="100" viewBox="0 0 130 100" fill="none" className="drop-shadow-md">
          <rect width="130" height="100" rx="12" fill="white" />
          {/* Mini chart icon */}
          <rect x="15" y="14" width="24" height="3" rx="1.5" fill="#DDDEE8" />
          <rect x="15" y="20" width="16" height="2" rx="1" fill="#EDEEF5" />
          {/* Bars */}
          <rect x="15" y="58" width="18" height="28" rx="4" fill="#B8E8D0"
            className="[transform-box:fill-box] origin-bottom [animation:bar-grow-y_0.8s_ease-out_1.2s_both]" />
          <rect x="39" y="42" width="18" height="44" rx="4" fill="#BDDCF5"
            className="[transform-box:fill-box] origin-bottom [animation:bar-grow-y_0.8s_ease-out_1.35s_both]" />
          <rect x="63" y="32" width="18" height="54" rx="4" fill="#D5C6F0"
            className="[transform-box:fill-box] origin-bottom [animation:bar-grow-y_0.8s_ease-out_1.5s_both]" />
          <rect x="87" y="48" width="18" height="38" rx="4" fill="#FCDAD1"
            className="[transform-box:fill-box] origin-bottom [animation:bar-grow-y_0.8s_ease-out_1.65s_both]" />
        </svg>
      </div>

      {/* ── AI Badge — bottom right ── */}
      <div className="absolute -bottom-6 -right-16 animate-pop-in [animation-delay:1s]">
        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" className="drop-shadow-md">
          <circle cx="34" cy="34" r="30" fill="white" />
          <circle cx="34" cy="34" r="26" fill="rgba(124,106,232,0.06)" />
          {/* Brain/AI icon */}
          <path d="M34 18c-4 0-7.5 2-9 5-2 0-4 1.5-4 4s1 3.5 2.5 4c-.5 1.5 0 3.5 1.5 4.5 0 2 1.5 4 4 4.5v4h10v-4c2.5-.5 4-2.5 4-4.5 1.5-1 2-3 1.5-4.5 1.5-.5 2.5-2 2.5-4s-2-4-4-4c-1.5-3-5-5-9-5z"
            fill="none" stroke="#7C6AE8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 30h8M30 34h6" stroke="#7C6AE8" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* ── Floating Sparkles ── */}
      <div className="absolute top-1/3 -right-24 animate-pulse-soft [animation-delay:1.5s]">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 2l2.5 8.5L25 14l-8.5 2.5L14 25l-2.5-8.5L3 14l8.5-2.5z"
            fill="#F5C26B" opacity="0.7" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 -right-20 animate-pulse-soft [animation-delay:2s]">
        <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
          <path d="M14 2l2.5 8.5L25 14l-8.5 2.5L14 25l-2.5-8.5L3 14l8.5-2.5z"
            fill="#7C6AE8" opacity="0.5" />
        </svg>
      </div>
      <div className="absolute top-2 left-8 animate-pulse-soft [animation-delay:0.8s]">
        <svg width="16" height="16" viewBox="0 0 28 28" fill="none">
          <path d="M14 2l2.5 8.5L25 14l-8.5 2.5L14 25l-2.5-8.5L3 14l8.5-2.5z"
            fill="#5CC9A7" opacity="0.6" />
        </svg>
      </div>

      {/* ── Small Checkmark Circles ── */}
      <div className="absolute top-16 -right-22 animate-pop-in [animation-delay:1.8s]">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" fill="#B8E8D0" />
          <polyline points="10,16 14,20 22,12" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-4 animate-pop-in [animation-delay:2.2s]">
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" fill="#BDDCF5" />
          <polyline points="10,16 14,20 22,12" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default function AuthLayout({ children, mode }) {
  const isLogin = mode === 'login';

  return (
    <div className="flex min-h-dvh w-full" id="auth-layout">
      {/* ─── Branding Panel ─── */}
      <aside className="hidden md:flex flex-col flex-none w-1/2 bg-lavender justify-between p-16 max-lg:p-9 relative overflow-hidden" id="auth-brand-panel">
        {/* Decorative background shapes */}
        <div className="absolute rounded-full z-[1] w-[140px] h-[140px] bg-mint -top-[60px] -right-[60px] opacity-45 animate-float-6" aria-hidden="true" />
        <div className="absolute rounded-full z-[1] w-[100px] h-[100px] bg-peach bottom-10 -left-10 opacity-50 animate-float-8 [animation-delay:1s]" aria-hidden="true" />
        <div className="absolute rounded-2xl z-[1] w-12 h-12 bg-sky top-[15%] right-[5%] rotate-[15deg] opacity-50 animate-float-7 [animation-delay:0.5s]" aria-hidden="true" />
        <div className="absolute rounded-full z-[1] w-[72px] h-[72px] bg-lemon -bottom-5 right-[15%] opacity-50 animate-float-9 [animation-delay:2s]" aria-hidden="true" />

        {/* Center Main Presentation Block (Innovative Typography + Free Floating SVG) */}
        <div className="relative z-[2] w-full flex flex-col items-center justify-center my-auto">
          {/* Typographic Lockup */}
          <div className="flex flex-col items-center mb-10 animate-fade-up">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 bg-heading text-lavender rounded-2xl flex items-center justify-center shadow-2xl -rotate-[8deg] transition-transform duration-300">
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="6" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
                  <rect x="10" y="4" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="2.5" fill="rgba(255,255,255,0.3)" />
                </svg>
              </div>
              <h1 className="text-[52px] max-lg:text-[40px] font-black text-heading tracking-[-0.04em] leading-none">
                ResumeAI
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-heading/15 rounded-full"></div>
              <p className="text-[14px] font-bold text-heading/40 tracking-[0.25em] uppercase">
                Smart Analyzer
              </p>
              <div className="h-px w-10 bg-heading/15 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <ResumeIllustration />
          </div>
        </div>
      </aside>

      {/* ─── Form Panel ─── */}
      <main className="flex-1 flex items-center max-md:items-start justify-center p-12 max-md:p-8 max-md:pt-15 bg-surface" id="auth-form-panel">
        <div className="w-full max-w-[440px] max-md:max-w-full animate-slide-right">
          {/* Mobile logo */}
          <div className="hidden max-md:flex items-center gap-2.5 mb-10 text-xl font-bold text-heading tracking-tight">
            <div className="w-10 h-10 bg-accent text-white rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="6" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="10" y="4" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="2" fill="rgba(124,106,232,0.15)" />
                <line x1="14" y1="10" x2="24" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="14" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="14" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span>ResumeAI</span>
          </div>

          {/* Header */}
          <header className="mb-9">
            <h2 className="text-[28px] max-md:text-2xl font-bold text-heading tracking-tight mb-2 leading-tight" id="auth-form-title">
              {isLogin ? 'Sign in to your account' : 'Create your account'}
            </h2>
            <p className="text-[15px] text-body">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <Link to={isLogin ? '/register' : '/login'} className="text-accent font-semibold no-underline transition-colors duration-200 hover:text-accent-hover hover:underline" id={isLogin ? 'go-to-register' : 'go-to-login'}>
                {isLogin ? 'Create one for free' : 'Sign in instead'}
              </Link>
            </p>
          </header>

          {/* Form content */}
          <div>{children}</div>

          {/* Footer */}
          <footer className="mt-8 text-center" id="auth-form-footer">
            <p className="text-[13px] text-muted leading-normal">
              By continuing, you agree to our{' '}
              <a href="#" className="text-accent font-semibold no-underline transition-colors duration-200 hover:text-accent-hover hover:underline">Terms of Service</a>{' '}
              and{' '}
              <a href="#" className="text-accent font-semibold no-underline transition-colors duration-200 hover:text-accent-hover hover:underline">Privacy Policy</a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
