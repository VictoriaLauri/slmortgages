import { Link } from 'react-router-dom'
import calendarImg from '../assets/images/calendar_img_02.jpg'
import { Button } from '../components/ui'

// Calendly URL with styling params
const CALENDLY_URL =
  'https://calendly.com/s-latiseva-slmortgages/30min?hide_event_type_details=1&hide_gdpr_banner=1'

export default function BookAppointment() {
  return (
    <div className='min-h-screen bg-linear-to-b from-blue-light/40 to-white'>
      <div className='max-w-4xl mx-auto px-4 py-8'>
        {/* ---------------- HERO SECTION ---------------- */}
        <div className='text-center mb-8'>
          <img
            src={calendarImg}
            alt='Calendar and stationery on a desk'
            className='w-full max-h-48 md:max-h-64 object-cover object-[center_60%] rounded-xl shadow-lg mb-4'
          />

          <h1 className='text-3xl md:text-4xl font-bold text-blue-dark mb-2'>
            Book a Virtual Appointment
          </h1>

          <p className='text-text-light mb-2'>
            Choose a time that suits you and let's make your next move simple,
            clear, and stress-free. Whether you're buying, remortgaging or
            exploring protection options, I'm here to help you every step of the
            way.
          </p>
          <p className='text-text-light mb-2'>
            Our initial consultation is completely fee free and includes
            my services presentation, data protection overview, affordability
            assessment, and a discussion of your personal circumstances and
            goals. Protection consultations, as well as conveyancing and survey quotations, are provided fee free for clients.
          </p>
          <p className='text-text-light'>
          Broker fees may apply if you proceed with a mortgage or remortgage application and will be fully discussed during your first consultation. Fees range from £0 to £1,250 depending on your circumstances and the services required. Most product transfers are fee-free.
          </p>
        </div>

        {/* ---------------- WHAT TO EXPECT ---------------- */}
        <div className='grid md:grid-cols-3 gap-4 mb-6'>
          <div className='p-4 rounded-xl bg-white shadow-md border border-blue-light/20 text-center'>
            <h3 className='font-semibold text-blue-dark mb-2'>
              Clear Guidance
            </h3>
            <p className='text-sm text-text-light'>
              Straightforward advice tailored to your needs.
            </p>
          </div>

          <div className='p-4 rounded-xl bg-white shadow-md border border-blue-light/20 text-center'>
            <h3 className='font-semibold text-blue-dark mb-2'>No Pressure</h3>
            <p className='text-sm text-text-light'>
              A friendly, no-obligation conversation to explore your options.
            </p>
          </div>

          <div className='p-4 rounded-xl bg-white shadow-md border border-blue-light/20 text-center'>
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
          className='w-full h-px bg-blue-light/30 mb-4'
          aria-hidden='true'
        ></div>

        

        {/* ---------------- CALENDLY WIDGET ---------------- */}
        <div
          id='calendar'
          className='bg-white rounded-2xl shadow-xl overflow-hidden scroll-mt-4'
        >
          <iframe
            src={CALENDLY_URL}
            title='Schedule a virtual appointment with Svetlana Latiseva'
            className='w-full h-[630px] md:h-[750px]'
            frameBorder='0'
          />
        </div>
      </div>

      {/* ---------------- CTA SECTION ---------------- */}
      <section
        className='bg-blue-light py-6 md:py-8 border-t border-gray-200'
        aria-label='Alternative contact options'
      >
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-2 text-blue-dark'>
            Prefer a Different Way to Connect?
          </h2>
          <p className='text-base text-text-dark mb-4'>
            If the calendar doesn't suit, feel free to drop me a message or
            explore what I can help you with. I'm always happy to hear from you.
          </p>
          <div className='flex flex-col sm:flex-row gap-2 justify-center'>
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
