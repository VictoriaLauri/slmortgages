import { useEffect } from 'react'

export default function BookAppointment() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    // Auto-resize iframe to remove dead space
    const interval = setInterval(() => {
      const iframe = document.querySelector(
        '.calendly-inline-widget iframe'
      ) as HTMLIFrameElement
      if (iframe && iframe.style.height !== 'auto') {
        iframe.style.height =
          iframe.contentWindow?.document.body.scrollHeight + 'px'
      }
    }, 300)

    return () => {
      clearInterval(interval)
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-light/40 to-white px-4 py-12'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-3xl font-bold text-blue-dark text-center mb-4'>
          Book an Appointment
        </h1>

        <p className='text-center text-text-light max-w-xl mx-auto mb-8'>
          Choose a suitable time below.
        </p>

        <div
          className='calendly-inline-widget bg-white rounded-lg shadow-xl p-4 md:p-6'
          data-url='https://calendly.com/s-latiseva-slmortgages/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=14213e&primary_color=c4490f'
          style={{ minWidth: '320px', height: '750px', overflow: 'hidden' }}
        ></div>
      </div>
    </div>
  )
}
