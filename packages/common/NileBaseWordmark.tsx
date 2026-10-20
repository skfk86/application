import { useId } from 'react'

export const NileBaseWordmark = ({ className }: { className?: string }) => {
  const id = useId()
  const grad = `${id}-nb-grad`

  return (
    <svg
      viewBox="0 0 520 112"
      fill="none"
      width={124}
      height={27}
      className={className}
      aria-label="NileBase Logo"
      role="img"
    >
      <defs>
        <linearGradient id={grad} x1="8" y1="0" x2="104" y2="112" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2DD4BF" />
          <stop offset="1" stopColor="#0E7490" />
        </linearGradient>
      </defs>
      <rect width="112" height="112" rx="28" fill={`url(#${grad})`} />
      <path
        d="M32 78V30L80 78V30"
        stroke="#fff"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 94q8-8 16 0t16 0 16 0 16 0"
        stroke="#fff"
        strokeOpacity=".65"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <text
        x="140"
        y="78"
        fontFamily="Inter, Segoe UI, Arial, sans-serif"
        fontSize="68"
        fontWeight="700"
        fill="currentColor"
      >
        NileBase
      </text>
    </svg>
  )
}
