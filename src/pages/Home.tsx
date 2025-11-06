import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function Home() {
  useEffect(() => {
    document.title =
      'SL Mortgages – Expert Mortgage & Protection Advice in the UK'
    const meta =
      document.querySelector('meta[name="description"]') ||
      document.createElement('meta')
    ;(meta as HTMLMetaElement).name = 'description'
    ;(meta as HTMLMetaElement).content =
      "Looking for clear, hassle-free mortgage advice? I'm here to help! As a dedicated Mortgage & Protection Advisor, I'm passionate about making the process simple and stress-free for you."
    if (!document.head.contains(meta)) document.head.appendChild(meta)
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section
        className='relative hero-gradient text-white py-8 md:py-10 overflow-hidden'
        aria-label='Mortgage and protection hero section'
      >
        <div className='absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent pointer-events-none'></div>

        <div className='relative z-10 max-w-3xl mx-auto px-4 text-center'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2 leading-snug'>
            Expert Mortgage & Protection Advice in the UK
          </h1>
          <p className='text-sm md:text-base mb-4 text-blue-light max-w-xl mx-auto leading-relaxed'>
            Looking for clear, hassle-free mortgage advice? I’m here to help —
            guiding you from our first meeting to completion in plain,
            easy-to-understand language.
          </p>
          <Link to='/appointment'>
            <Button variant='primary' size='md'>
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section
        className='py-8 md:py-10 bg-white'
        aria-labelledby='services-heading'
      >
        <div className='max-w-5xl mx-auto px-4'>
          <h2
            id='services-heading'
            className='text-2xl md:text-3xl font-bold text-center mb-6 text-text-navy'
          >
            Our Services
          </h2>

          <div className='grid md:grid-cols-2 gap-6'>
            <article className='p-5 rounded-lg shadow-sm border border-gray-100'>
              <h3 className='text-xl font-semibold mb-3 text-primary-orange'>
                Mortgages
              </h3>
              <ul className='list-disc list-inside text-text-light space-y-0.5'>
                <li>First-time buyers & Home movers</li>
                <li>Government schemes (Shared Ownership, Right to Buy)</li>
                <li>
                  Remortgages & Buy-to-let (Ltd Company, HMO, Holiday lets)
                </li>
                <li>Debt consolidation</li>
                <li>Commercial & unregulated mortgages (referrals)</li>
              </ul>
            </article>

            <article className='p-5 rounded-lg shadow-sm border border-gray-100'>
              <h3 className='text-xl font-semibold mb-3 text-primary-orange'>
                Protection Products
              </h3>
              <ul className='list-disc list-inside text-text-light space-y-0.5'>
                <li>Life cover / Mortgage protection</li>
                <li>Critical illness (incl. enhanced cancer options)</li>
                <li>Income protection (1–5 yrs or full-term)</li>
                <li>Accident & Sickness Multi-cover from £10</li>
                <li>Global treatment & second medical opinion</li>
                <li>Home, Private Medical & Commercial insurance</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className='bg-blue-light py-8 md:py-10 border-t border-gray-200'
        aria-label='Call to action'
      >
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-3 text-blue-dark'>
            Ready to Get Started?
          </h2>
          <p className='text-base text-text-dark mb-5'>
            Whether you’re a first-time buyer or remortgaging, I’ll help you
            secure the right deal and protection for your future.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Link to='/quotation'>
              <Button variant='primary'>Request a Quote</Button>
            </Link>
            <Link to='/appointment'>
              <Button variant='secondary'>Book Appointment</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
