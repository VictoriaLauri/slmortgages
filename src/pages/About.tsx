import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../assets/images/profile.jpeg'
import GoogleReviews from '../components/features/GoogleReviews'
import { Button } from '../components/ui'

export default function About() {
  useEffect(() => {
    const meta =
      document.querySelector('meta[name="description"]') ||
      document.createElement('meta')
    ;(meta as HTMLMetaElement).name = 'description'
    ;(meta as HTMLMetaElement).content =
      'Learn about Svetlana’s journey into mortgage and protection advice, her professional approach, and motivation for helping people achieve financial security.'
    if (!document.head.contains(meta)) document.head.appendChild(meta)
  }, [])

  return (
    <main className='bg-white'>
      {/* ===========================
    ABOUT – Split Gradient (Improved Mobile Fix)
============================ */}

      <section className='relative pt-36 md:pt-32 pb-20 bg-gradient-to-b from-blue-light/40 to-white'>
        <div className='max-w-5xl mx-auto px-4 md:px-8'>
          {/* Floating Card */}
          <div className='relative bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100'>
            {/* Floating Image Card */}
            <div className='absolute -top-24 left-1/2 -translate-x-1/2 md:-top-20 md:left-12 md:translate-x-0'>
              <div className='w-48 h-48 md:w-48 md:h-48 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden'>
                <img
                  src={profileImg}
                  alt='Svetlana Latiseva – Mortgage & Protection Advisor'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* Text wrapper */}
            <div className='mt-20 md:ml-56 md:mt-0'>
              <h1 className='text-3xl md:text-4xl font-bold text-primary-orange mb-5 text-center md:text-left'>
                About Me
              </h1>

              <div className='text-text-light leading-relaxed space-y-4'>
                <p>
                  My journey into the world of mortgages and protection began
                  with a deep passion for helping people achieve financial
                  security and homeownership. Over the years, I've gained
                  extensive knowledge and hands-on experience, allowing me to
                  provide tailored advice that makes a meaningful difference.
                </p>

                <p>
                  I first moved to the UK from Latvia over fifteen years ago.
                  Those early years weren’t easy, but receiving the keys to my
                  first home helped me understand the sense of stability and
                  pride that homeownership brings.
                </p>

                <p>
                  Later, during maternity leave, I realised I wanted a career
                  that offered both purpose and flexibility. That’s when I
                  pursued a qualification as a Mortgage & Protection Advisor.
                </p>

                <p>
                  Today, I support clients with friendly, honest, and
                  personalised advice, whether you're buying your first home,
                  remortgaging, or exploring protection options. My mission is
                  simple: make your mortgage journey clear, smooth, and
                  stress-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          GOOGLE REVIEWS SECTION
      ============================ */}
      <section className='bg-blue-light/30 py-14 border-t border-gray-200'>
        <div className='max-w-5xl mx-auto px-4 md:px-8'>
          <h2 className='text-2xl md:text-3xl font-bold text-blue-dark text-center mb-6'>
            What My Clients Say
          </h2>

          <p className='text-text-dark text-center max-w-3xl mx-auto mb-10'>
            I’m grateful for every review left by clients I’ve helped. Here’s
            what people are saying about their experience with Svetlana Latiseva
            Mortgages.
          </p>

          {/* REVIEW WIDGET WRAPPER */}
          <div className='bg-white rounded-xl shadow-lg p-4 md:p-6'>
            <GoogleReviews />
          </div>
        </div>
      </section>

      {/* ===========================
          CTA SECTION
      ============================ */}
      <section className='bg-blue-light py-10 border-t border-gray-200 text-center'>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-2xl md:text-3xl font-bold mb-3 text-blue-dark'>
            Let’s Connect
          </h2>
          <p className='text-base text-text-dark mb-6 leading-relaxed'>
            Looking for clear, friendly mortgage or protection advice? Get in
            touch today and I’ll help you take the next step with confidence.
          </p>

          <div className='inline-flex flex-col items-center'>
            <Link to='/appointment'>
              <Button variant='primary' size='md'>
                Book First Consultation Fee-Free*
              </Button>
            </Link>
            <p className='text-xs md:text-sm mt-4 text-blue-dark text-center w-0 min-w-full'>
              *Broker fees may apply if you proceed with a mortgage or
              remortgage application
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
