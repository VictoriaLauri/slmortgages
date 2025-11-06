import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
    // Place your analytics or marketing script loader here if needed
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setShowBanner(false)
    // Ensure no tracking scripts are loaded
  }

  if (!showBanner) return null

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-[0_-2px_8px_rgba(0,0,0,0.5)] z-50 border-t-2 border-primary-orange-muted'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
        <p className='text-sm text-center md:text-left'>
          We use cookies to improve your experience and analyze traffic. You can
          accept or reject non-essential cookies.{' '}
          <a
            href='/privacy-policy'
            className='underline text-primary-orange-muted hover:text-primary-orange-dark'
          >
            Learn more
          </a>
        </p>
        <div className='flex gap-2'>
          <button
            onClick={handleReject}
            className='bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400'
          >
            Reject non-essential
          </button>
          <button
            onClick={handleAccept}
            className='bg-primary-orange-muted text-white px-6 py-2 rounded hover:bg-primary-orange-dark focus:outline-none focus:ring-2 focus:ring-primary-orange-muted'
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
