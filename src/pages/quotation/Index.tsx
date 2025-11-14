import {
  FaClipboardList,
  FaExchangeAlt,
  FaHome,
  FaRedoAlt,
  FaSignOutAlt,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui'

export default function QuotationLanding() {
  const options = [
    {
      title: 'Purchase',
      desc: 'Quote for purchasing a residential property.',
      path: '/quotation/purchase',
      icon: <FaHome className='text-3xl text-primary-orange-muted' />,
    },
    {
      title: 'Sale & Purchase',
      desc: 'For clients who are selling and buying at the same time.',
      path: '/quotation/sale-and-purchase',
      icon: <FaExchangeAlt className='text-3xl text-primary-orange-muted' />,
    },
    {
      title: 'Sale',
      desc: 'Quote for selling your current property.',
      path: '/quotation/sale',
      icon: <FaSignOutAlt className='text-3xl text-primary-orange-muted' />,
    },
    {
      title: 'Remortgage',
      desc: 'Quote for remortgaging your home.',
      path: '/quotation/remortgage',
      icon: <FaRedoAlt className='text-3xl text-primary-orange-muted' />,
    },
    {
      title: 'Survey',
      desc: 'Request a quote for RICS Level 2 or Level 3 survey.',
      path: '/quotation/survey',
      icon: <FaClipboardList className='text-3xl text-primary-orange-muted' />,
    },
  ]

  return (
    <main className='bg-white'>
      {/* HEADER */}
      <section className='py-8 md:py-10'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h1 className='text-2xl md:text-3xl font-bold text-text-navy mb-4'>
            Get a Conveyancing or Survey Quote
          </h1>
          <p className='text-text-light max-w-2xl mx-auto leading-relaxed'>
            Choose the option that best matches your situation. Each form is
            tailored to provide the most accurate quotation based on the details
            you provide.
          </p>
        </div>
      </section>

      {/* OPTIONS */}
      <section className='py-8 md:py-10'>
        <div className='max-w-5xl mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6'>
            {options.map((opt) => (
              <Link
                key={opt.title}
                to={opt.path}
                className='
                  border border-gray-100 rounded-lg shadow-sm p-5
                  hover:shadow-md hover:border-primary-orange-muted
                  transition-all bg-white
                  aspect-auto xl:aspect-square
                  flex flex-col justify-center items-center text-center
                '
              >
                <div className='mb-3'>{opt.icon}</div>

                <h3 className='text-lg font-semibold text-text-navy mb-2'>
                  {opt.title}
                </h3>
                <p className='text-sm text-text-light leading-snug'>
                  {opt.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Prefer to talk */}
      <section
        className='bg-blue-light py-8 md:py-10 border-t border-gray-200'
        aria-label='Prefer to speak instead'
      >
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <h2 className='text-2xl md:3xl font-bold mb-3 text-blue-dark'>
            Prefer to Speak Directly?
          </h2>
          <p className='text-text-dark mb-5 max-w-xl mx-auto'>
            If you’d rather discuss your situation without filling out a form,
            simply contact me or book an appointment. I’ll gather all the
            required details during our call and guide you through the next
            steps.
          </p>

          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Link to='/appointment'>
              <Button variant='primary'>Book Appointment</Button>
            </Link>

            <a href='tel:07778906161'>
              <Button variant='secondary'>Get in Touch</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
