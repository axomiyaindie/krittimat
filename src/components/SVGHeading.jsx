export default function SVGHeading({ text = 'Krittimat', size = 64, className = '' }) {
  return (
    <svg
      width="420"
      height="90"
      viewBox="0 0 420 90"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={text}
    >
      <defs>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0078D4" />
          <stop offset="60%" stopColor="#005A9E" />
          <stop offset="100%" stopColor="#50E6FF" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text
        x="50%"
        y="58%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize={size}
        fontWeight="700"
        fill="url(#textGrad)"
        filter="url(#glow)"
        letterSpacing="-1"
      >
        {text}
      </text>
    </svg>
  )
}
