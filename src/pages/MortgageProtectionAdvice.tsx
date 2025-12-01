import { ArrowLeft } from 'lucide-react'
import { ReactNode, useId, useState } from 'react'
import {
  FaBriefcase,
  FaBuilding,
  FaBusinessTime,
  FaExchangeAlt,
  FaGlobe,
  FaHandHoldingUsd,
  FaHeartbeat,
  FaHome,
  FaHouseUser,
  FaKey,
  FaPiggyBank,
  FaShieldAlt,
  FaStethoscope,
  FaUserMd,
  FaUserShield,
  FaUserTie,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PartnerMarquee from '../components/layout/PartnerMarquee'
import { usePartnerLogos } from '../lib/hooks/usePartnerLogos'

interface CardProps {
  id: number
  title: string
  icon: JSX.Element
  children: ReactNode
  openCard: number | null
  setOpenCard: (id: number | null) => void
}

function ExpandableCard({
  id,
  title,
  icon,
  children,
  openCard,
  setOpenCard,
}: CardProps) {
  const open = openCard === id
  const contentId = useId()

  const toggleCard = () => {
    setOpenCard(open ? null : id)
  }

  return (
    <div
      className='
        border border-gray-100 rounded-lg shadow-sm p-5 bg-white
        hover:shadow-md hover:border-primary-orange-muted
        transition-all text-center flex flex-col items-center
      '
    >
      {/* Icon */}
      <div className='mb-3 text-primary-orange-muted'>
        {icon &&
          (icon as any).type &&
          (icon as any).type({
            className: 'text-3xl text-primary-orange-muted',
          })}
      </div>

      {/* Title */}
      <h3 className='text-lg font-semibold text-text-navy mb-2 line-clamp-2'>
        {title}
      </h3>

      {/* Preview / full content */}
      <div
        id={contentId}
        className={`
          text-sm text-text-light leading-relaxed space-y-3 mb-3
          transition-all duration-300
          ${open ? '' : 'line-clamp-2'}
        `}
        aria-hidden={!open}
      >
        {children}
      </div>

      {/* Accessible toggle */}
      <button
        type='button'
        onClick={toggleCard}
        className='
          mt-auto text-primary-orange-muted text-sm font-medium 
          inline-flex items-center gap-1 focus:outline-none 
          focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded
        '
        aria-expanded={open}
        aria-controls={contentId}
      >
        {open ? 'Show less' : 'Learn more'}
        <span
          className={`
            inline-block transform transition-transform duration-300
            ${open ? 'rotate-180' : ''}
          `}
          aria-hidden='true'
        >
          ▼
        </span>
      </button>
    </div>
  )
}

export default function MortgageProtectionAdvice() {
  const logos = usePartnerLogos()

  // ⭐ Global accordion state (only ONE open across ENTIRE PAGE)
  const [openCard, setOpenCard] = useState<number | null>(null)

  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-blue-light/40 to-white pt-10 md:pt-12'>
      {/* Back Button */}
      <div className='max-w-5xl mx-auto mb-6 px-4'>
        <Link
          to='/'
          className='
            inline-flex items-center gap-2 text-teal-dark 
            hover:text-teal-darker focus:outline-none 
            focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded
          '
        >
          <ArrowLeft size={20} />
          <span className='text-sm md:text-base font-medium'>Back</span>
        </Link>
      </div>

      {/* Header */}
      <div className='max-w-5xl mx-auto text-center mb-14 px-4'>
        <h1 className='text-3xl md:text-4xl font-semibold text-orange mb-4'>
          Mortgage & Protection Advice
        </h1>
        <p className='text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto'>
          Clear, friendly and personalised guidance covering mortgages,
          protection, insurance, and business protection — explained simply and
          tailored to your circumstances.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className='max-w-5xl mx-auto px-4 space-y-20 pb-20'>
        {/* ===================== MORTGAGES ===================== */}
        <section>
          <h2 className='text-2xl md:text-3xl font-semibold text-teal-dark mb-6'>
            Mortgages
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <ExpandableCard
              id={1}
              icon={<FaHome />}
              title='First-Time Buyers, Home Movers & Second Residential'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Help with getting a mortgage whether it’s your first home,
                you’re moving, or buying another property. I guide you through
                every step so you know exactly what to expect.
              </p>
            </ExpandableCard>

            <ExpandableCard
              id={2}
              icon={<FaKey />}
              title='Government Schemes (Shared Ownership, Staircasing, Right to Buy/Acquire, First Homes, Lifetime ISA)'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Support is available through government schemes designed to make
                buying a home easier. These include options to purchase a share
                of a property and increase your ownership later, buy the home
                you currently rent from a housing association/council, or
                benefit from government contributions towards your deposit
                through schemes like the Lifetime ISA.
              </p>
            </ExpandableCard>

            <ExpandableCard
              id={3}
              icon={<FaExchangeAlt />}
              title='Remortgages (Including Equity Release)'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Switch your current mortgage to save money, fix your rate, or
                release funds for things like home improvements, buying
                additional property and etc.
              </p>
            </ExpandableCard>

            <ExpandableCard
              id={4}
              icon={<FaBuilding />}
              title='Buy-to-Let (Personal or Limited Company)'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Advice for anyone wanting to invest in rental properties—
                whether a normal rental, HMO (House of Multiply Occupancy -
                rented by room), or holiday let (services accommodation or
                Airbnb)
              </p>
            </ExpandableCard>

            <ExpandableCard
              id={5}
              icon={<FaPiggyBank />}
              title='Debt Consolidation Mortgages'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Helps combine your existing debts into one monthly payment
                through your mortgage (only if suitable for your situation).
              </p>
            </ExpandableCard>

            <ExpandableCard
              id={6}
              icon={<FaBusinessTime />}
              title='Commercial, 2nd Charge & Unregulated Mortgages (Referrals)'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Introductions to specialists for business or non-standard
                property finance.
              </p>
            </ExpandableCard>
          </div>
        </section>

        {/* Divider */}
        <div className='border-b border-gray-300' />

        {/* ===================== PROTECTION ===================== */}

        <section>
          <h2 className='text-2xl md:text-3xl font-semibold text-teal-dark mb-6'>
            Protection Products
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <ExpandableCard
              id={7}
              icon={<FaShieldAlt />}
              title='Life Cover'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Life insurance is designed to protect the people you care about
                most. If you pass away, it provides a lump-sum payment that can
                help your family stay financially secure during a very difficult
                time. It ensures that your loved ones are not left with
                financial pressure when they need support the most.
              </p>

              <p>Two main types:</p>
              <p>
                Family Protection – Gives financial support to your dependants,
                helping with living costs such as rent/mortgage, bills, and
                daily expenses.
              </p>
              <p>
                Mortgage Protection – Pays off your mortgage so your family can
                keep the home.
              </p>

              <p>Life insurance payouts are typically used to:</p>
              <ul className='list-disc list-inside space-y-1'>
                <li>Clear a mortgage or contribute to rent</li>
                <li>Cover household bills and living costs</li>
                <li>Provide financial stability for your family</li>
              </ul>
            </ExpandableCard>

            <ExpandableCard
              id={8}
              icon={<FaHeartbeat />}
              title='Critical Illness Cover (Including Optional Children Cover)'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Critical Illness Cover pays a tax-free lump sum if you’re
                diagnosed with a serious medical condition listed in your
                policy.
              </p>

              <p>This money can help you:</p>
              <ul className='list-disc list-inside space-y-1'>
                <li>Manage bills</li>
                <li>Pay for treatment</li>
                <li>Make lifestyle adjustments while you focus on recovery</li>
                <li>
                  Reduce work hours or take time off to recover (you can use the
                  money however you need)
                </li>
              </ul>

              <p>Types of cover:</p>
              <p>
                Insurers offer different levels of Critical Illness Cover, from
                standard plans covering the most common serious illnesses to
                enhanced options with broader protection. Some plans also
                include optional children’s cover.
              </p>
            </ExpandableCard>

            <ExpandableCard
              id={9}
              icon={<FaUserShield />}
              title='Income Protection'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Provides a monthly tax-free income of up to 60% of your salary
                if you’re unable to work due to illness or injury. You can
                choose different benefit terms—1, 2, or 5 years, or cover that
                continues until retirement if you’re unable (never ever) to
                return to work. The best option depends on your profession,
                budget, and how long you’d want financial support during a
                difficult time.
              </p>

              <p>
                Income Protection benefits can be used for anything you need,
                including:
              </p>
              <ul className='list-disc list-inside space-y-1'>
                <li>Mortgage or rent payments</li>
                <li>Household bills</li>
                <li>Other personal expenses</li>
              </ul>
            </ExpandableCard>

            <ExpandableCard
              id={10}
              icon={<FaStethoscope />}
              title='Accident & Sickness Multicover for Adults and Kids'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                For adults and kids (*from £10 for adults and from £6 for kids)
              </p>
              <p>
                A low-cost cover that pays out if you experience an accident or
                hospitalization. Payments are made when a qualifying event
                occurs—such as a broken bone (with hospital confirmation)—
                providing financial support during challenging times.
              </p>

              <p>These payouts can be used for anything you need:</p>
              <ul className='list-disc list-inside space-y-1'>
                <li>Mortgage or rent payments</li>
                <li>Household bills</li>
                <li>Additional expenses</li>
              </ul>

              <p>*Prices are correct as per November 2025</p>
            </ExpandableCard>

            <ExpandableCard
              id={11}
              icon={<FaGlobe />}
              title='Global Treatment'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>(*from £3)</p>

              <p>
                If clients or their children were to become seriously ill, they
                would want the option to be treated at the best hospitals in the
                world by leading medical experts. That’s what Global Treatment
                offers.
              </p>

              <p>Main features:</p>
              <ul className='list-disc list-inside space-y-1'>
                <li>
                  Available as an add-on for £3 to Critical Illness+, Life
                  Insurance+, and Income Protection
                </li>
                <li>
                  Access to worldwide treatment options alongside UK-based care
                </li>
                <li>
                  Covers treatment, flights, and accommodation up to £2m per
                  policy (or £1m per year)
                </li>
              </ul>

              <p>*Prices are correct as per November 2025</p>
            </ExpandableCard>

            <ExpandableCard
              id={12}
              icon={<FaHouseUser />}
              title='Home Insurance (Buildings, Contents, Landlord)'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Home insurance protects your property and belongings against
                damage, theft, and unexpected events. This applies whether
                you’re a homeowner or a tenant.
              </p>

              <p>
                For landlords, cover can include rent guarantee, legal
                protection, and insurance for building/landlord-owned contents.
              </p>
            </ExpandableCard>

            <ExpandableCard
              id={13}
              icon={<FaUserMd />}
              title='Private Medical Insurance (Referrals)'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Introductions to experts who can help you get faster access to
                private healthcare. Packages vary by provider.
              </p>
            </ExpandableCard>

            <ExpandableCard
              id={14}
              icon={<FaHandHoldingUsd />}
              title='Commercial Insurance (Referrals)'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Referrals to trusted partners offering a wide range of business
                insurance solutions tailored to your needs.
              </p>
            </ExpandableCard>
          </div>
        </section>

        {/* Divider */}
        <div className='border-b border-gray-300' />

        {/* ===================== BUSINESS PROTECTION ===================== */}
        <section>
          <h2 className='text-2xl md:text-3xl font-semibold text-teal-dark mb-6'>
            Business Protection
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <ExpandableCard
              id={15}
              icon={<FaBriefcase />}
              title='Overview'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Helps safeguard the long-term financial stability of the
                business during challenging circumstances, ensuring operations
                continue as usual through a range of tailored protection
                options:
              </p>
            </ExpandableCard>

            <ExpandableCard
              id={16}
              icon={<FaBriefcase />}
              title='Relevant Life Plans'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                A tax-efficient way for a business to provide life cover for
                directors or employees.
              </p>
            </ExpandableCard>

            <ExpandableCard
              id={17}
              icon={<FaUserTie />}
              title='Key Person Cover'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Protects your business financially if an important employee or
                director becomes critically ill or passes away.
              </p>
            </ExpandableCard>

            <ExpandableCard
              id={18}
              icon={<FaHandHoldingUsd />}
              title='Shareholder & Partnership Protection'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Helps remaining business owners buy back shares if a partner
                dies or becomes seriously ill—keeping control of the business in
                the right hands.
              </p>
            </ExpandableCard>

            <ExpandableCard
              id={19}
              icon={<FaBusinessTime />}
              title='Business Loan Protection'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                Ensures business loans can still be repaid if the person
                responsible for them becomes ill or dies.
              </p>
            </ExpandableCard>

            <ExpandableCard
              id={20}
              icon={<FaBusinessTime />}
              title='Business Income Protection'
              openCard={openCard}
              setOpenCard={setOpenCard}
            >
              <p>
                It is designed to provide the business with a financial support
                to help cover the costs of sick pay, as well as employer pension
                and national insurance costs while an employee is off due to
                long-term sickness.
              </p>
            </ExpandableCard>
          </div>
        </section>

        {/* CTA */}
        <div className='text-center pt-6'>
          <Link
            to='/book-appointment'
            className='
              inline-block bg-orange-600 text-white font-semibold px-8 py-4 
              rounded-lg shadow-md hover:bg-orange-700 transition
            '
          >
            Book an Appointment
          </Link>
          <p className='mt-4 text-gray-700 text-sm md:text-base'>
            I'm here to help you every step of the way. Feel free to get in
            touch.
          </p>
        </div>
      </div>

      {/* PARTNER LOGOS */}
      <section className='bg-blue-light py-8 md:py-10 border-t border-gray-200'>
        <div className='max-w-5xl mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-3 text-blue-dark'>
            Trusted Lender Partners
          </h2>
          <p className='text-base text-text-dark mb-6 max-w-3xl mx-auto'>
            I have access to a wide panel of lenders, helping me find the right
            mortgage solution tailored to your individual circumstances.
          </p>
          <PartnerMarquee logos={logos} speed={150} />
        </div>
      </section>
    </div>
  )
}
