import { Link } from 'react-router-dom'
import calendarImg from '../assets/images/calendar_img_02.jpg'
import { Button } from '../components/ui'

// Calendly URL with styling params
const CALENDLY_URL =
  'https://calendly.com/s-latiseva-slmortgages/30min?hide_event_type_details=1&hide_gdpr_banner=1'

export default function BookAppointment() {
  return (
    <div className='min-h-screen bg-linear-to-b from-blue-light/40 to-white'>
      <div className='max-w-4xl mx-auto px-4 py-12'>
        {/* ---------------- HERO SECTION ---------------- */}
        <div className='text-center mb-12'>
          <img
            src={calendarImg}
            alt='Calendar and stationery on a desk'
            className='w-full max-h-56 md:max-h-72 object-cover object-[center_60%] rounded-xl shadow-lg mb-6'
          />

          <h1 className='text-3xl md:text-4xl font-bold text-blue-dark mb-3'>
            Book a Virtual Appointment
          </h1>

          <p className='text-text-light'>
            Choose a time that suits you and let's make your next move simple,
            clear, and stress-free. Whether you're buying, remortgaging or
            exploring protection options, I'm here to help you every step of the
            way.
          </p>
          <p className='text-text-light'>
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
        <div className='grid md:grid-cols-3 gap-6 mb-8'>
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
          className='w-full h-px bg-blue-light/30 mb-6'
          aria-hidden='true'
        ></div>

        {/* ---------------- IMPORTANT INFORMATION (above calendar) ---------------- */}
        <section
          className='mb-10'
          aria-labelledby='important-info-heading'
        >
          <h2 id='important-info-heading' className='sr-only'>
            Important information about financial products
          </h2>

          <div className='rounded-xl border-2 border-amber-200 bg-amber-50/80 p-3 md:p-4 text-blue-dark'>
            <p className='font-semibold text-sm mb-1'>
              Important information
            </p>
            <p className='text-sm leading-snug mb-2'>
              Think carefully before securing other debts against your property.
              Your property may be repossessed if you do not keep up repayments
              on your mortgage.
            </p>

            <details className='group text-sm'>
              <summary className='cursor-pointer font-medium text-blue-dark underline decoration-blue-dark/40 underline-offset-2 hover:decoration-blue-dark focus:outline-none focus:ring-2 focus:ring-blue-dark focus:ring-offset-2 focus:ring-offset-amber-50 rounded'>
                Further regulatory information
              </summary>
              <div className='mt-2 space-y-1 pt-2 border-t border-amber-200/60 text-text-light'>
                <p>
                  Most buy to let and let to buy mortgages are not regulated by
                  the Financial Conduct Authority.
                </p>
                <p>
                  Commercial finance is not part of The Openwork Partnership and
                  is offered in our own right. Openwork Limited accepts no
                  responsibility for this aspect of our business. These products
                  and services are not regulated by the Financial Conduct
                  Authority.
                </p>
                <p>
                  Supreme Financial Solutions Limited is an appointed
                  representative of The Openwork Partnership, a trading style of
                  Openwork Limited which is authorised and regulated by the
                  Financial Conduct Authority.
                </p>
                <p>
                  The information on this website is for use of residents of the
                  United Kingdom only. No representations are made as to whether
                  the information is applicable or available in any other
                  country which may have access to it.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* ---------------- CALENDLY WIDGET ---------------- */}
        <div id='calendar' className='bg-white rounded-2xl shadow-xl overflow-hidden scroll-mt-4'>
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
