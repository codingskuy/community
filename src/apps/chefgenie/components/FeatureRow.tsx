import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { PhoneMockup } from "./PhoneMockup";

interface FeatureRowProps {
  label: string;
  labelIcon: React.ElementType;
  headline: string;
  desc: string;
  bullets: string[];
  phoneSrc: string;
  phoneAlt: string;
  phoneRight?: boolean;
  phoneRotate?: number;
  accent?: string;
  secondPhone?: { src: string; alt: string; rotate?: number };
}

export function FeatureRow({
  label,
  labelIcon,
  headline,
  desc,
  bullets,
  phoneSrc,
  phoneAlt,
  phoneRight = false,
  phoneRotate = -4,
  accent = "#ff5c28",
  secondPhone,
}: FeatureRowProps) {
  const phoneBlock = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-center gap-4 lg:gap-8"
    >
      {secondPhone && (
        <div className="w-[170px] lg:w-[190px] mt-12 opacity-60">
          <PhoneMockup
            src={secondPhone.src}
            alt={secondPhone.alt}
            rotate={secondPhone.rotate ?? 4}
            glow={false}
          />
        </div>
      )}
      <div className="w-[230px] lg:w-[260px]">
        <PhoneMockup src={phoneSrc} alt={phoneAlt} rotate={phoneRotate} glowColor={accent} />
      </div>
    </motion.div>
  );

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      className="space-y-6"
    >
      <SectionLabel icon={labelIcon} label={label} />
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight"
        dangerouslySetInnerHTML={{ __html: headline }}
      />
      <p className="text-base text-slate-600 dark:text-white/40 leading-relaxed max-w-md">{desc}</p>
      <ul className="space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: accent }}
            />
            <span className="text-sm text-slate-700 dark:text-white/60">{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      {phoneRight ? (
        <>{textBlock}{phoneBlock}</>
      ) : (
        <>{phoneBlock}{textBlock}</>
      )}
    </div>
  );
}
