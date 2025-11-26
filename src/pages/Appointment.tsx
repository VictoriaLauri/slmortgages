import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function BookAppointment() {
  useEffect(() => {
    const scriptId = 'calendly-widget-script'

    // Prevent duplicate script injection (React Strict Mode double-mounts)
    if (document.getElementById(scriptId)) return

    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    // Don't remove on unmount — Calendly manages its own cleanup
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-light/40 to-white'>
      <div className='max-w-4xl mx-auto px-4 py-12'>
        {/* ---------------- HERO SECTION ---------------- */}
        <div className='text-center mb-12'>
          <img
            src='/assets/images/calendar_img_02.jpg'
            alt='Calendar and stationery on a desk'
            className='w-full max-h-56 md:max-h-72 object-cover object-[center_60%] rounded-xl shadow-lg mb-6'
          />

          <h1 className='text-3xl md:text-4xl font-bold text-blue-dark mb-3'>
            Book a Virtual Appointment
          </h1>

          <p className='text-text-light max-w-2xl mx-auto'>
            Choose a time that suits you and let's make your next move simple,
            clear, and stress-free. Whether you're buying, remortgaging or
            exploring protection options, I'm here to help you every step of the
            way.
          </p>
        </div>

        {/* ---------------- WHAT TO EXPECT ---------------- */}
        <div className='grid md:grid-cols-3 gap-6 mb-14'>
          <div className='p-5 rounded-xl bg-white shadow-md border border-blue-light/20 text-center'>
            <h3 className='font-semibold text-blue-dark mb-2'>
              Clear Guidance
            </h3>
            <p className='text-sm text-text-light'>
              Straightforward advice tailored to your needs.
            </p>
          </div>

          <div className='p-5 rounded-xl bg-white shadow-md border border-blue-light/20 text-center'>
            <h3 className='font-semibold text-blue-dark mb-2'>No Pressure</h3>
            <p className='text-sm text-text-light'>
              A friendly, no-obligation conversation to explore your options.
            </p>
          </div>

          <div className='p-5 rounded-xl bg-white shadow-md border border-blue-light/20 text-center'>
            <h3 className='font-semibold text-blue-dark mb-2'>
              Smooth Process
            </h3>
            <p className='text-sm text-text-light'>
              Support from first chat to completion.
            </p>
          </div>
        </div>

        {/* ---------------- DIVIDER ---------------- */}
        <div
          className='w-full h-px bg-blue-light/30 mb-10'
          aria-hidden='true'
        ></div>

        {/* ---------------- CALENDLY WIDGET ---------------- */}
        <div className='bg-white rounded-xl shadow-xl overflow-hidden p-4 md:p-6'>
          <div
            className='calendly-inline-widget h-[520px] md:h-[700px]'
            data-url='https://calendly.com/s-latiseva-slmortgages/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=14213e&primary_color=c4490f'
            style={{ minWidth: '280px' }}
          ></div>
        </div>
      </div>

      {/* ---------------- CTA SECTION ---------------- */}
      <section
        className='bg-blue-light py-10 md:py-12 border-t border-gray-200'
        aria-label='Alternative contact options'
      >
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-3 text-blue-dark'>
            Prefer a Different Way to Connect?
          </h2>
          <p className='text-base text-text-dark mb-5'>
            If the calendar doesn't suit, feel free to drop me a message or
            explore what I can help you with. I'm always happy to hear from you.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Link to='/contact'>
              <Button variant='primary' size='lg'>
                Get in Touch
              </Button>
            </Link>
            <Link to='/mortgage-protection-advice'>
              <Button variant='secondary' size='lg'>
                Explore My Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
