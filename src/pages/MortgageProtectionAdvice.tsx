import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import PartnersCarousel from '../components/layout/PartnerCarousel'

const partnersLogos = [
  { src: 'assets/logos/partners_logo_1.jpg', alt: 'Partner 1' },
  { src: 'assets/logos/partners_logo_2.jpg', alt: 'Partner 2' },
  { src: 'assets/logos/partners_logo_3.jpg', alt: 'Partner 3' },
  { src: 'assets/logos/partners_logo_4.jpg', alt: 'Partner 4' },
  { src: 'assets/logos/partners_logo_5.jpg', alt: 'Partner 5' },
]

export default function MortgageProtectionAdvice() {
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-blue-light/40 to-white pt-28 pb-16 px-4'>
      {/* Back Button */}
      <div className='max-w-5xl mx-auto mb-6'>
        <Link
          to='/'
          className='inline-flex items-center gap-2 text-teal-dark hover:text-teal-darker focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 focus:ring-offset-white rounded'
        >
          <ArrowLeft size={20} />
          <span className='text-sm md:text-base font-medium'>Back</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className='max-w-5xl mx-auto text-center mb-12'>
        <h1 className='text-3xl md:text-4xl font-semibold text-orange mb-4'>
          Mortgage & Protection Advice
        </h1>
        <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
          Clear, friendly and personalised guidance covering mortgages,
          protection, insurance, and business protection — explained simply and
          tailored to your circumstances.
        </p>
      </div>

      {/* Content Sections */}
      <div className='max-w-5xl mx-auto space-y-12'>
        {/* Mortgages */}
        <section className='bg-white/80 backdrop-blur-sm shadow-md rounded-xl p-6 md:p-8 border border-gray-200'>
          <h2 className='text-2xl md:text-3xl font-semibold text-teal-dark mb-4'>
            Mortgage Services
          </h2>
          <p className='text-gray-700 mb-4 leading-relaxed'>
            With access to a wide range of lenders and mortgage products, I
            offer personalised advice designed to match your financial goals and
            individual circumstances.
          </p>

          <ul className='text-gray-700 space-y-2 ml-4 list-disc'>
            <li>First-Time Buyer Mortgages</li>
            <li>Home Mover & Second Residential Mortgages</li>
            <li>Remortgages</li>
            <li>Shared Ownership, Staircasing & Right to Buy</li>
            <li>
              Buy-to-Let — personal name, limited company, HMO & holiday lets
            </li>
            <li>Debt Consolidation Mortgages</li>
            <li>Commercial & Unregulated Mortgages (referrals)</li>
          </ul>
        </section>

        {/* Protection */}
        <section className='bg-white/80 backdrop-blur-sm shadow-md rounded-xl p-6 md:p-8 border border-gray-200'>
          <h2 className='text-2xl md:text-3xl font-semibold text-teal-dark mb-4'>
            Protection & Insurance
          </h2>
          <p className='text-gray-700 mb-4 leading-relaxed'>
            Protection provides financial security for you and your family. I
            help you navigate a wide range of insurance products to ensure you
            have the right level of cover.
          </p>

          <ul className='text-gray-700 space-y-2 ml-4 list-disc'>
            <li>Life Cover (Family & Mortgage Protection)</li>
            <li>Critical Illness Cover (including upgraded options)</li>
            <li>Income Protection — short-term & full-term benefit</li>
            <li>Accident & Sickness Multi-Cover</li>
            <li>Global Treatment & Second Medical Opinion</li>
            <li>Home Insurance — Buildings, Contents & Landlord</li>
            <li>Private Medical Insurance (referrals)</li>
            <li>Commercial Insurance (referrals)</li>
          </ul>
        </section>

        {/* Business Protection */}
        <section className='bg-white/80 backdrop-blur-sm shadow-md rounded-xl p-6 md:p-8 border border-gray-200'>
          <h2 className='text-2xl md:text-3xl font-semibold text-teal-dark mb-4'>
            Business Protection
          </h2>
          <p className='text-gray-700 mb-4 leading-relaxed'>
            Business owners have unique responsibilities. I can help you
            understand the types of protection available to safeguard your
            company and its people.
          </p>

          <ul className='text-gray-700 space-y-2 ml-4 list-disc'>
            <li>Key Person Cover</li>
            <li>Business Loan Protection</li>
            <li>Shareholder & Partnership Protection</li>
            <li>Relevant Life Plans</li>
            <li>Income & Liability Protection for directors and contractors</li>
          </ul>
        </section>

        {/* CTA Section */}

        <div className='text-center mt-12'>
          <Link
            to='/book-appointment'
            className='inline-block bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-orange-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-dark'
          >
            Book an Appointment
          </Link>

          <p className='mt-4 text-gray-700 text-sm md:text-base font-family-body'>
            I'm here to help you every step of the way. Feel free to get in
            touch.
          </p>
        </div>
        <PartnersCarousel logos={partnersLogos} />
      </div>
    </div>
  )
}
