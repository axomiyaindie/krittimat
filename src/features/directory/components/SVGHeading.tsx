export default function SVGHeading({ text = 'Krittimat', size = 64, className = '' }) {
  return (
    <svg
      viewBox="0 0 500 100" // 💡 Widened the bounding area so long strings or filters won't truncate
      className={`w-full max-w-[450px] h-auto overflow-visible ${className}`} // 🔄 Responsive viewport scaling layout
      xmlns="http://www.w3.org/2000/svg"
      aria-label={text}
    >
      <defs>
        {/* Core Identity Linear Gradient Matrix Definition */}
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0078D4" />
          <stop offset="60%" stopColor="#005A9E" />
          <stop offset="100%" stopColor="#50E6FF" />
        </linearGradient>

        {/* Dynamic Shadow Glow Shader Matrix Filter definition */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <text
        x="50%"
        y="50%" // 🔄 True perfect vertical alignment centering offset point
        textAnchor="middle"
        dominantBaseline="central" // 🔄 Upgraded for cross-browser text rendering precision
        fontFamily="'Space Grotesk', system-ui, -apple-system, sans-serif" // Added fallback font sets
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
