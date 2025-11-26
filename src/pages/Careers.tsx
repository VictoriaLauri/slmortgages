import { Link } from 'react-router-dom'
import CareersForm from '../components/forms/CareersForm'

export default function Careers() {
  return (
    <section className='bg-gradient-to-b from-blue-light/40 to-white py-10 px-4'>
      <div className='max-w-5xl mx-auto'>
        {/* Back Button */}
        <Link
          to='/'
          className='inline-block mb-6 text-sm font-medium text-teal underline hover:text-teal-dark'
        >
          ← Back to Homepage
        </Link>

        {/* ===================== HERO WITH DIAMONDS (UPDATED) ===================== */}
        <div className='relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-8 md:mt-0 mb-20 md:mb-24'>
          {/* LEFT SIDE: MAIN DIAMOND IMAGE WITH JOIN US OVERLAY */}
          {/* Size accounts for 45° rotation: diagonal = side × √2, so side = available_width × 0.7 */}
          <div className='relative w-[65vw] h-[65vw] max-w-72 max-h-72 md:w-80 md:h-80 md:max-w-none md:max-h-none'>
            {/* MAIN DIAMOND IMAGE */}
            <div
              className='relative w-full h-full rotate-45 rounded-xl overflow-hidden
                shadow-[0_20px_40px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.1)]'
            >
              <img
                src='/assets/images/slm_image_03.jpg'
                alt='Advisor working'
                className='w-full h-full object-cover -rotate-45 scale-170'
              />
            </div>

            {/* JOIN US DIAMOND – CENTERED ON MAIN DIAMOND */}
            <div
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-[50%] h-[50%] md:w-44 md:h-44 bg-gradient-to-br from-primary-orange-muted to-orange-600 text-white 
                  flex items-center justify-center text-base md:text-2xl font-bold
                  rotate-45 rounded-xl z-10
                  shadow-[0_15px_30px_rgba(0,0,0,0.4),0_5px_15px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.2)]'
            >
              <div className='-rotate-45'>Join Us!</div>
            </div>
          </div>

          {/* RIGHT SIDE: ROLE DIAMONDS IN MOSAIC LAYOUT */}
          <div className='relative grid grid-cols-2 gap-4 md:gap-6 self-center'>
            {/* Top Left: CHANGE Your Future */}
            <div
              className='w-32 h-32 md:w-36 md:h-36 bg-gradient-to-br from-white to-gray-50 text-primary-orange-muted font-bold 
                 flex items-center justify-center text-center text-sm md:text-base
                 rotate-45 rounded-xl
                 shadow-[0_15px_30px_rgba(0,0,0,0.25),0_5px_15px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.8)]'
            >
              <div className='-rotate-45 px-2'>CHANGE Your Future</div>
            </div>

            {/* Top Right: BECOME Financial Adviser */}
            <div
              className='w-32 h-32 md:w-36 md:h-36 bg-gradient-to-br from-white to-gray-50 text-teal font-semibold 
                 flex items-center justify-center text-center text-sm md:text-base
                 rotate-45 rounded-xl
                 shadow-[0_15px_30px_rgba(0,0,0,0.25),0_5px_15px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.8)]'
            >
              <div className='-rotate-45 px-2'>BECOME Financial Adviser</div>
            </div>

            {/* Bottom Left: BECOME Protection Adviser */}
            <div
              className='w-32 h-32 md:w-36 md:h-36 bg-gradient-to-br from-white to-gray-50 text-teal font-semibold 
                 flex items-center justify-center text-center text-sm md:text-base
                 rotate-45 rounded-xl
                 shadow-[0_15px_30px_rgba(0,0,0,0.25),0_5px_15px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.8)]'
            >
              <div className='-rotate-45 px-2'>BECOME Protection Adviser</div>
            </div>

            {/* Bottom Right: BECOME Mortgage Broker */}
            <div
              className='w-32 h-32 md:w-36 md:h-36 bg-gradient-to-br from-white to-gray-50 text-teal font-semibold 
                 flex items-center justify-center text-center text-sm md:text-base
                 rotate-45 rounded-xl
                 shadow-[0_15px_30px_rgba(0,0,0,0.25),0_5px_15px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.8)]'
            >
              <div className='-rotate-45 px-2'>BECOME Mortgage Broker</div>
            </div>
          </div>
        </div>

        {/* ===================== INTRO TEXT ===================== */}
        <h1 className='text-3xl md:text-4xl font-bold text-primary-orange-muted mb-4 text-center'>
          Career Opportunities
        </h1>

        <p className='text-text-dark leading-relaxed mb-10 max-w-3xl mx-auto text-center'>
          Whether you're new to the industry or already experienced, we welcome
          motivated individuals who want flexibility, strong earning potential,
          and a supportive team. Join a reputable, long-established financial
          network and build a rewarding career with clear opportunities for
          progression.
        </p>

        {/* ===================== BENEFITS SECTION ===================== */}
        <div className='bg-white shadow-lg rounded-xl p-6 md:p-8 mb-12'>
          <h2 className='text-2xl font-semibold text-teal mb-6'>
            Benefits For You When Joining Our Team:
          </h2>

          <div className='grid md:grid-cols-2 gap-6 md:gap-8'>
            {/* Left Column */}
            <ul className='space-y-3 text-text-dark'>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-5 h-5 text-primary-orange-muted flex-shrink-0 mt-0.5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>
                  Highly competitive commission structure offering significant
                  earning potential once fully established, with uncapped
                  income.
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-5 h-5 text-primary-orange-muted flex-shrink-0 mt-0.5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>Commission paid weekly</span>
              </li>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-5 h-5 text-primary-orange-muted flex-shrink-0 mt-0.5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>
                  As much support as you need (compliance, sales, process, etc.)
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-5 h-5 text-primary-orange-muted flex-shrink-0 mt-0.5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>
                  By joining us, you will be part of a busy and reputable team
                  driving our business and reputation forward
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-5 h-5 text-primary-orange-muted flex-shrink-0 mt-0.5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>Working remotely</span>
              </li>
            </ul>

            {/* Right Column */}
            <ul className='space-y-3 text-text-dark'>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-5 h-5 text-primary-orange-muted flex-shrink-0 mt-0.5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>Working hours are flexible to suit you</span>
              </li>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-5 h-5 text-primary-orange-muted flex-shrink-0 mt-0.5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>
                  By joining us, you will be part of one of UK's largest and
                  longest-established financial advice and investment companies
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-5 h-5 text-primary-orange-muted flex-shrink-0 mt-0.5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>
                  Amazing career opportunities (starting as a Protection
                  Advisor. You can expand your knowledge by studying mortgages,
                  actively recruit to become a manager, and even build your own
                  team. And if that's not enough, you can work towards becoming
                  a qualified Financial Advisor)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ===================== FORM CARD ===================== */}
        <div className='bg-white shadow-lg rounded-xl p-6 md:p-8'>
          <h2 className='text-2xl font-semibold text-teal mb-4'>
            Register Your Interest
          </h2>

          <p className='text-text-light mb-6'>
            Fill out the form below and upload your CV. We’ll be in touch to
            discuss current opportunities.
          </p>

          <CareersForm />
        </div>

        {/* CTA BUTTON */}
        <div className='text-center mt-10'>
          <Link to='/contact' className='btn-primary px-6 py-3 inline-block'>
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
