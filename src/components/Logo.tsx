import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  textColor?: string;
  logoColor?: string;
  showText?: boolean;
}

export default function Logo({
  className = "",
  size = 40,
  logoColor = "text-white",
  textColor = "text-slate-900 dark:text-white",
  showText = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 select-none filter drop-shadow-[0_4px_12px_rgba(139,92,246,0.15)]"
      >
        <defs>
          {/* Main satin/metallic purple gradient background */}
          <linearGradient id="satinBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e0854" />
            <stop offset="30%" stopColor="#120224" />
            <stop offset="70%" stopColor="#080012" />
            <stop offset="100%" stopColor="#3d0c6e" />
          </linearGradient>

          {/* Core glowing border gradient */}
          <linearGradient id="glowingBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>

          {/* Premium diagonal satin fold highlight */}
          <linearGradient id="satinHighlight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="40%" stopColor="#ec4899" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="100%" stopColor="#3b0764" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Squircle Background Frame */}
        <rect
          x="10"
          y="10"
          width="180"
          height="180"
          rx="48"
          fill="url(#satinBg)"
          stroke="url(#glowingBorder)"
          strokeWidth="4"
        />

        {/* Simulated Organic Satin Waves/Folds for Premium Depth */}
        <path
          d="M 14,90 Q 70,60 110,130 T 186,110 L 186,186 L 14,186 Z"
          fill="url(#satinHighlight)"
          opacity="0.85"
          style={{ mixBlendMode: "screen" }}
        />
        <path
          d="M 14,14 L 186,14 L 186,110 Q 130,40 70,120 T 14,90 Z"
          fill="#c084fc"
          opacity="0.04"
          style={{ mixBlendMode: "overlay" }}
        />

        {/* Ambient Light Speckles / Glow in the background */}
        <circle cx="150" cy="50" r="35" fill="#a855f7" opacity="0.15" filter="blur(20px)" />
        <circle cx="50" cy="150" r="40" fill="#6366f1" opacity="0.12" filter="blur(25px)" />

        {/* 
          High-fidelity EXACT Custom Monogram (C + W + I) Brand Mark Group
          The 'C' wraps majestically on the left, and the 'W' nests beautifully inside.
          The ending stroke of 'W' serves as an 'i' with a perfectly aligned slanted dot above it.
        */}
        <g 
          stroke="white" 
          strokeWidth="17.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        >
          {/* Circular open 'C' shape precisely aligned to matching proportions */}
          <path
            d="M 112,68 A 33,33 0 1, 0 112,132"
          />

          {/* Angled Futuristic 'W' shape connected lines */}
          <path
            d="M 88,96 L 105,130 L 122,96 L 139,130 L 154,101"
            className="transition-all duration-300"
          />
        </g>

        {/* Perfect slanted parallelogram for the 'i' dot directly over the rightmost leg of W */}
        <polygon
          points="156,83 167.5,83 173,73 161.5,73"
          fill="white"
        />
      </svg>

      {showText && (
        <div className="leading-none flex flex-col justify-center">
          <span className={`block font-sans font-extrabold text-lg sm:text-xl tracking-tight ${textColor} transition-colors uppercase`}>
            CyberWise
          </span>
          <span className="block text-[10px] tracking-widest font-mono font-black text-purple-600 dark:text-purple-400 uppercase mt-0.5">
            Skillsversity
          </span>
        </div>
      )}
    </div>
  );
}
