interface LogoItem {
  src: string
  alt: string
}

interface PartnerMarqueeProps {
  logos: LogoItem[]
  speed?: number // optional - default speed
}

export default function PartnerMarquee({
  logos,
  speed = 35, // lower = slower
}: PartnerMarqueeProps) {
  // Render logo cards for one complete track
  const renderLogos = (keyPrefix: string) =>
    logos.map((logo, idx) => (
      <div
        key={`${keyPrefix}-${idx}`}
        className='flex shrink-0 items-center justify-center h-28 w-40 bg-white rounded-lg shadow-sm border border-gray-200 p-2'
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className='max-h-full max-w-full object-contain'
        />
      </div>
    ))

  return (
    <div className='relative w-full overflow-hidden py-10 bg-transparent'>
      {/* Two identical tracks, each with internal gap + trailing gap for seamless -50% loop */}
      <div
        className='flex items-center w-max animate-marquee'
        style={{ animationDuration: `${speed}s` }}
      >
        <div className='flex items-center gap-4 pr-4'>{renderLogos('a')}</div>
        <div className='flex items-center gap-4 pr-4' aria-hidden='true'>
          {renderLogos('b')}
        </div>
      </div>

      {/* Reduced motion support */}
      <style>
        {`
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none !important;
          }
        }
      `}
      </style>
    </div>
  )
}
