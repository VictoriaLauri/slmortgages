import { useEffect } from 'react'

export default function GoogleReviews() {
  useEffect(() => {
    // Inject Elfsight script once
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    )

    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://elfsightcdn.com/platform.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className='w-full'>
      {/* Your exact Elfsight widget */}
      <div
        className='elfsight-app-e4b37396-e5d7-45b7-8a06-66294fff04cd'
        data-elfsight-app-lazy
      ></div>
    </div>
  )
}
