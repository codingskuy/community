import { motion } from "motion/react";
import { useEffect, useState, useId, useRef } from "react";

interface PhoneMockupProps {
  src: string;
  alt: string;
  rotate?: number;
  scale?: number;
  className?: string;
  glow?: boolean;
  glowColor?: string;
  autoswipe?: boolean;
}

export function PhoneMockup({
  src,
  alt,
  rotate = 0,
  scale = 1,
  className = "",
  glow = true,
  glowColor = "#ff5c28",
  autoswipe = true,
}: PhoneMockupProps) {
  const uid = useId().replace(/:/g, "-");
  const clipId = `clip-${uid}`;
  const [imgLoaded, setImgLoaded] = useState(false);
  const [overflowY, setOverflowY] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgLoaded && imgRef.current) {
      const containerWidth = 254;
      const containerHeight = 540;
      const imgWidth = imgRef.current.naturalWidth;
      const imgHeight = imgRef.current.naturalHeight;

      if (imgWidth > 0) {
        const scaleFactor = containerWidth / imgWidth;
        const renderedHeight = imgHeight * scaleFactor;
        const diff = renderedHeight - containerHeight;
        if (diff > 10) {
          setOverflowY(diff);
        } else {
          setOverflowY(0);
        }
      }
    }
  }, [imgLoaded, src]);

  const duration = Math.max(5, overflowY / 40);

  return (
    <div
      className={`relative select-none ${className}`}
      style={{
        transform: `rotate(${rotate}deg) scale(${scale})`,
        filter: glow
          ? `drop-shadow(0 30px 90px ${glowColor}55) drop-shadow(0 0 40px ${glowColor}25)`
          : undefined,
      }}
    >
      <svg
        viewBox="0 0 280 572"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
        aria-label={alt}
      >
        <defs>
          <clipPath id={clipId}>
            <rect x="13" y="16" width="254" height="540" rx="37" ry="37" />
          </clipPath>
          <linearGradient id={`glare-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.08" />
            <stop offset="60%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="280" height="572" rx="52" ry="52" fill="#1c1c1e" />
        <rect x="3" y="3" width="274" height="566" rx="49" ry="49" fill="#000" stroke="#3a3a3c" strokeWidth="1.5" />
        <foreignObject x="13" y="16" width="254" height="540" clipPath={`url(#${clipId})`}>
          <div className="w-full h-full bg-black relative">
            <motion.img
              ref={imgRef}
              src={src}
              alt={alt}
              onLoad={() => setImgLoaded(true)}
              className="w-full h-auto block absolute top-0 left-0"
              animate={
                autoswipe && overflowY > 0
                  ? { y: [0, -overflowY - 5, 0] }
                  : { y: 0 }
              }
              transition={
                autoswipe && overflowY > 0
                  ? {
                      duration: duration,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      repeatDelay: 2,
                    }
                  : {}
              }
            />
          </div>
        </foreignObject>
        <rect x="100" y="26" width="80" height="24" rx="12" ry="12" fill="#000000" />
        <rect x="13" y="16" width="254" height="540" rx="37" ry="37" fill={`url(#glare-${uid})`} style={{ pointerEvents: "none" }} />
        <rect x="-1" y="148" width="3" height="42" rx="1.5" ry="1.5" fill="#2c2c2e" />
        <rect x="-1" y="208" width="3" height="70" rx="1.5" ry="1.5" fill="#2c2c2e" />
        <rect x="278" y="188" width="3" height="70" rx="1.5" ry="1.5" fill="#2c2c2e" />
        <rect x="105" y="546" width="70" height="5" rx="2.5" ry="2.5" fill="#3a3a3c" />
      </svg>
    </div>
  );
}
