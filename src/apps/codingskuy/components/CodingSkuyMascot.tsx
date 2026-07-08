/* CodingSkuy mascot SVG character — blue robot/character with funny expression */

type MascotVariant = "wave" | "think" | "code" | "celebrate" | "sleep" | "idea";

interface MascotProps {
  variant?: MascotVariant;
  size?: number;
  className?: string;
}

export function CodingSkuyMascot({ variant = "wave", size = 120, className = "" }: MascotProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Body */}
      <ellipse cx="60" cy="80" rx="28" ry="24" fill="#1a3a8f" />
      {/* Body shine */}
      <ellipse cx="50" cy="72" rx="8" ry="5" fill="#2563eb" opacity="0.5" />

      {/* Head */}
      <circle cx="60" cy="50" r="28" fill="#2563eb" />
      {/* Head shine */}
      <ellipse cx="50" cy="38" rx="8" ry="5" fill="#60a5fa" opacity="0.6" />

      {/* Antenna */}
      <rect x="58" y="20" width="4" height="10" rx="2" fill="#60a5fa" />
      <circle cx="60" cy="18" r="4" fill="#ffd700" />
      <circle cx="60" cy="18" r="2" fill="#ff6b35" />

      {variant === "wave" && (
        <>
          {/* Eyes — happy */}
          <ellipse cx="50" cy="46" rx="5" ry="6" fill="white" />
          <circle cx="51" cy="47" r="3" fill="#0d1117" />
          <circle cx="52" cy="46" r="1" fill="white" />
          <ellipse cx="70" cy="46" rx="5" ry="6" fill="white" />
          <circle cx="71" cy="47" r="3" fill="#0d1117" />
          <circle cx="72" cy="46" r="1" fill="white" />
          {/* Smile */}
          <path d="M50 58 Q60 66 70 58" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Cheeks */}
          <ellipse cx="45" cy="56" rx="5" ry="3" fill="#ff6b35" opacity="0.5" />
          <ellipse cx="75" cy="56" rx="5" ry="3" fill="#ff6b35" opacity="0.5" />
          {/* Wave arm */}
          <path d="M88 72 Q100 55 95 45" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="95" cy="44" r="5" fill="#2563eb" />
          {/* Other arm */}
          <path d="M32 72 Q20 80 22 88" stroke="#1a3a8f" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* Legs */}
          <rect x="46" y="100" width="10" height="14" rx="5" fill="#1a3a8f" />
          <rect x="64" y="100" width="10" height="14" rx="5" fill="#1a3a8f" />
        </>
      )}

      {variant === "code" && (
        <>
          {/* Eyes — focused */}
          <ellipse cx="50" cy="46" rx="5" ry="5" fill="white" />
          <circle cx="50" cy="47" r="3" fill="#0d1117" />
          <ellipse cx="70" cy="46" rx="5" ry="5" fill="white" />
          <circle cx="70" cy="47" r="3" fill="#0d1117" />
          {/* Glasses */}
          <rect x="43" y="41" width="14" height="10" rx="4" stroke="#ffd700" strokeWidth="2" fill="none" />
          <rect x="63" y="41" width="14" height="10" rx="4" stroke="#ffd700" strokeWidth="2" fill="none" />
          <line x1="57" y1="46" x2="63" y2="46" stroke="#ffd700" strokeWidth="2" />
          {/* Neutral mouth */}
          <path d="M52 60 Q60 62 68 60" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Arms holding laptop */}
          <path d="M32 75 Q18 80 18 90" stroke="#1a3a8f" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M88 75 Q102 80 102 90" stroke="#1a3a8f" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* Laptop */}
          <rect x="20" y="90" width="80" height="20" rx="4" fill="#0d1629" />
          <rect x="22" y="92" width="76" height="16" rx="3" fill="#0a0e1a" />
          <text x="30" y="104" fontFamily="monospace" fontSize="7" fill="#00d4ff">&gt;_</text>
          {/* Legs */}
          <rect x="46" y="100" width="10" height="14" rx="5" fill="#1a3a8f" />
          <rect x="64" y="100" width="10" height="14" rx="5" fill="#1a3a8f" />
        </>
      )}

      {variant === "celebrate" && (
        <>
          {/* Eyes — excited */}
          <text x="42" y="52" fontSize="12" fill="#ffd700">★</text>
          <text x="62" y="52" fontSize="12" fill="#ffd700">★</text>
          {/* Big smile */}
          <path d="M46 58 Q60 72 74 58" stroke="#ff6b35" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Arms up */}
          <path d="M32 72 Q15 55 18 42" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M88 72 Q105 55 102 42" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* Confetti */}
          <rect x="10" y="30" width="6" height="6" rx="1" fill="#ffd700" transform="rotate(20 10 30)" />
          <rect x="100" y="25" width="5" height="5" rx="1" fill="#ff6b35" transform="rotate(-15 100 25)" />
          <circle cx="20" cy="20" r="3" fill="#8b5cf6" />
          <circle cx="100" cy="35" r="3" fill="#00d4ff" />
          {/* Legs */}
          <rect x="46" y="100" width="10" height="14" rx="5" fill="#1a3a8f" />
          <rect x="64" y="100" width="10" height="14" rx="5" fill="#1a3a8f" />
        </>
      )}

      {variant === "think" && (
        <>
          {/* Eyes — one squinted */}
          <ellipse cx="50" cy="46" rx="5" ry="5" fill="white" />
          <circle cx="50" cy="47" r="3" fill="#0d1117" />
          <line x1="63" y1="43" x2="77" y2="43" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
          {/* Thinking mouth */}
          <path d="M50 59 Q60 57 68 61" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Thought bubble */}
          <circle cx="96" cy="30" r="12" fill="#0d1629" stroke="#3d8bff" strokeWidth="1.5" />
          <circle cx="88" cy="44" r="4" fill="#0d1629" stroke="#3d8bff" strokeWidth="1.5" />
          <circle cx="85" cy="52" r="2.5" fill="#0d1629" stroke="#3d8bff" strokeWidth="1.5" />
          <text x="90" y="35" fontSize="10" fill="#ffd700">?</text>
          {/* Hand on chin */}
          <path d="M32 75 Q22 78 20 72" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="20" cy="72" r="5" fill="#2563eb" />
          {/* Legs */}
          <rect x="46" y="100" width="10" height="14" rx="5" fill="#1a3a8f" />
          <rect x="64" y="100" width="10" height="14" rx="5" fill="#1a3a8f" />
        </>
      )}

      {variant === "idea" && (
        <>
          {/* Eyes — bright */}
          <ellipse cx="50" cy="46" rx="5" ry="6" fill="white" />
          <circle cx="51" cy="46" r="3.5" fill="#0d1117" />
          <circle cx="52" cy="44" r="1.2" fill="white" />
          <ellipse cx="70" cy="46" rx="5" ry="6" fill="white" />
          <circle cx="71" cy="46" r="3.5" fill="#0d1117" />
          <circle cx="72" cy="44" r="1.2" fill="white" />
          {/* Big smile */}
          <path d="M50 58 Q60 68 70 58" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Light bulb above */}
          <circle cx="60" cy="10" r="8" fill="#ffd700" opacity="0.9" />
          <rect x="57" y="16" width="6" height="4" rx="1" fill="#ff6b35" />
          {/* Rays */}
          <line x1="60" y1="0" x2="60" y2="-4" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
          <line x1="48" y1="4" x2="45" y2="1" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
          <line x1="72" y1="4" x2="75" y2="1" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
          {/* Arms up */}
          <path d="M32 72 Q25 60 30 50" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M88 72 Q95 60 90 50" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* Legs */}
          <rect x="46" y="100" width="10" height="14" rx="5" fill="#1a3a8f" />
          <rect x="64" y="100" width="10" height="14" rx="5" fill="#1a3a8f" />
        </>
      )}

      {variant === "sleep" && (
        <>
          {/* Closed eyes */}
          <path d="M44 46 Q50 42 56 46" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M64 46 Q70 42 76 46" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Smile */}
          <path d="M52 58 Q60 64 68 58" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Zzz */}
          <text x="82" y="36" fontSize="8" fill="#a78bfa" fontWeight="700">z</text>
          <text x="90" y="28" fontSize="10" fill="#a78bfa" fontWeight="700">z</text>
          <text x="100" y="20" fontSize="12" fill="#a78bfa" fontWeight="700">Z</text>
          {/* Arms down */}
          <path d="M32 80 Q25 90 28 96" stroke="#1a3a8f" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M88 80 Q95 90 92 96" stroke="#1a3a8f" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* Legs */}
          <rect x="46" y="100" width="10" height="14" rx="5" fill="#1a3a8f" />
          <rect x="64" y="100" width="10" height="14" rx="5" fill="#1a3a8f" />
        </>
      )}
    </svg>
  );
}

/* Decorative doodle elements */
export function DoodleBolt({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="#ffd700" stroke="#ff6b35" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

export function DoodleBracket({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <text x="0" y="26" fontFamily="JetBrains Mono, monospace" fontSize="28" fill="#00d4ff" opacity="0.7">{"{}"}</text>
    </svg>
  );
}

export function DoodleCode({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 20" fill="none" className={className}>
      <text x="0" y="18" fontFamily="JetBrains Mono, monospace" fontSize="18" fill="#8b5cf6" opacity="0.7">{"</>"}</text>
    </svg>
  );
}

export function DoodleSpark({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M10 0 L11.5 8 L20 10 L11.5 12 L10 20 L8.5 12 L0 10 L8.5 8 Z" fill="#00d4ff" opacity="0.8" />
    </svg>
  );
}

export function DoodleRocket({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
      <path d="M14 2 C14 2 20 8 20 16 L14 22 L8 16 C8 8 14 2 14 2Z" fill="#3d8bff" />
      <circle cx="14" cy="13" r="3" fill="white" opacity="0.8" />
      <path d="M8 16 L5 22 L8 20" fill="#ff6b35" />
      <path d="M20 16 L23 22 L20 20" fill="#ff6b35" />
      <path d="M11 22 L14 28 L17 22" fill="#ffd700" opacity="0.6" />
    </svg>
  );
}

export function DoodleBug({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="14" rx="6" ry="7" fill="#ef4444" />
      <ellipse cx="12" cy="14" rx="6" ry="7" fill="url(#bugStripe)" />
      <line x1="12" y1="7" x2="12" y2="21" stroke="#b91c1c" strokeWidth="1.5" />
      <circle cx="12" cy="8" r="4" fill="#fbbf24" />
      <circle cx="10" cy="7" r="1.2" fill="#0d1117" />
      <circle cx="14" cy="7" r="1.2" fill="#0d1117" />
      <line x1="6" y1="11" x2="2" y2="9" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="14" x2="2" y2="14" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="11" x2="22" y2="9" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="14" x2="22" y2="14" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleCursor({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <text x="0" y="16" fontFamily="JetBrains Mono, monospace" fontSize="16" fill="#00d4ff">_</text>
    </svg>
  );
}
