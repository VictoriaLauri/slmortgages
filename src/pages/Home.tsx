import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function Home() {
  useEffect(() => {
    document.title = 'Svetlana Latiseva Mortgages'
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

        <div className='relative z-10 max-w-4xl mx-auto px-4 text-center'>
          <h1 className='text-2xl md:text-4xl font-bold mb-2 leading-snug max-w-none'>
            Expert Mortgage & Protection Advice in the UK
          </h1>
          <p className='text-sm md:text-base mb-4 text-blue-light max-w-4xl mx-auto leading-relaxed'>
            Looking for clear, hassle-free mortgage advice? I'm here to help! As
            a dedicated Mortgage & Protection Advisor, I'm passionate about
            making the process simple and stress-free for you. From our very
            first meeting to the final completion, I'll guide you every step of
            the way, explaining everything in plain, easy-to-understand
            language.
          </p>
          <p className='text-sm md:text-base mb-4 text-blue-light max-w-4xl mx-auto leading-relaxed'>
            Whether you're a first-time buyer, remortgaging, or looking for
            protection solutions, I’ll find the most competitive products
            tailored to your circumstances. Get in touch today for fast,
            friendly, and no-obligation advice.
          </p>
          <Link to='/appointment'>
            <Button variant='primary' size='md'>
              Book Free Virtual Consultation
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
            What I Can Help You With
          </h2>

          <div className='grid md:grid-cols-2 gap-6'>
          <article className='p-5 rounded-lg shadow-sm border border-gray-100'>
  <h3 className='text-xl font-semibold mb-3 text-primary-orange'>
    Mortgages
  </h3>

  <h4 className='text-md font-semibold text-text-navy mb-1'>Residential</h4>
  <ul className='list-disc list-inside text-text-light space-y-0.5 mb-3'>
    <li>First-time buyers, Home movers & Second residential</li>
    <li>Government schemes incl. Shared Ownership (purchase/staircasing) & Right to Buy/Acquire</li>
    <li>Remortgages</li>
  </ul>

  <h4 className='text-md font-semibold text-text-navy mb-1'>Buy to Let & Specialist</h4>
  <ul className='list-disc list-inside text-text-light space-y-0.5'>
    <li>Buy to Let (Personal or Limited Company incl. residential BTL, HMO, Holiday Lets)</li>
    <li>Debt consolidation</li>
    <li>Commercial & unregulated mortgages (referrals)</li>
  </ul>
</article>

<article className='p-5 rounded-lg shadow-sm border border-gray-100'>
  <h3 className='text-xl font-semibold mb-3 text-primary-orange'>
    Protection Products
  </h3>

  <h4 className='text-md font-semibold text-text-navy mb-1'>Core Protection</h4>
  <ul className='list-disc list-inside text-text-light space-y-0.5 mb-3'>
    <li>Life Cover (dependants or mortgage)</li>
    <li>Critical Illness Cover (incl. upgraded cancer options)</li>
    <li>Income Protection (1–5 years or full-term)</li>
  </ul>

  <h4 className='text-md font-semibold text-text-navy mb-1'>Additional Cover</h4>
  <ul className='list-disc list-inside text-text-light space-y-0.5'>
    <li>Accident & Sickness Multi-cover from £10</li>
    <li>Global Treatment & Second Medical Opinion from £3</li>
    <li>Home Insurance (Buildings, Contents & Landlord)</li>
    <li>Private Medical Insurance (referrals)</li>
    <li>Commercial Insurance (referrals)</li>
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
            Whether you’re a first-time buyer, a buy-to-let investor or simply remortgaging, I’ll help you secure the right deal for you and protection for your future.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Link to='/mortgage-protection-advice'>
              <Button variant='primary'>Explore My Services</Button>
            </Link>
            <Link to='/contact'>
              <Button variant='secondary'>Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
