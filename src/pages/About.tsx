import { useEffect } from 'react'
import profileImg from '/public/assets/images/profile.jpeg'

export default function About() {
  useEffect(() => {
    document.title = 'About Me – SL Mortgages'
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
      {/* Panel + Overlapping Image (Amy-style) */}
      <section className='pt-16 md:pt-24 pb-12 md:pb-20'>
        <div className='max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-12 gap-8 md:gap-10 items-start'>
          {/* Text panel */}
          <div className='md:col-span-8 order-2 md:order-1'>
            <div className='bg-blue-light/20 rounded-xl shadow-sm py-7 md:py-10 px-8 md:px-24 relative'>
              <h1 className='text-3xl md:text-4xl font-bold text-primary-orange mb-5'>
                About Me
              </h1>

              <div className='text-text-dark leading-relaxed space-y-4'>
                <p>
                  My journey into the world of mortgages and protection began
                  with a deep passion for helping people achieve financial
                  security and homeownership. Over the years, I have gained
                  extensive knowledge and hands-on experience, allowing me to
                  provide tailored advice that truly makes a difference.
                </p>

                <p>
                  I first moved to the UK from Latvia over fifteen years ago.
                  Those early years weren’t easy, but the moment I received the
                  keys to my own flat, I felt a true sense of home. That
                  experience sparked my curiosity about the mortgage process and
                  the incredible role brokers play in helping people reach their
                  goals.
                </p>

                <p>
                  Years later, while on maternity leave, I decided to turn this
                  passion into a career. I wanted work that allowed me
                  flexibility as a mum while also helping others navigate one of
                  life’s biggest financial decisions. That’s when I took the
                  leap to become a qualified Mortgage & Protection Advisor — and
                  I’ve never looked back.
                </p>

                <p>
                  Today, based in London, I’m proud to offer friendly,
                  no-obligation advice that’s clear, honest, and fully tailored
                  to your needs. Whether you’re a first-time buyer,
                  remortgaging, or looking for protection options, my goal is to
                  secure the right deal for you and your family — stress-free,
                  from start to finish.
                </p>
              </div>
            </div>
          </div>

          {/* Image block — overlaps the panel on desktop */}
          <div className='md:col-span-4 relative order-1 md:order-2'>
            <div className='relative md:-ml-32 md:-mt-18'>
              <img
                src={profileImg}
                alt='Svetlana Latiseva – Mortgage & Protection Advisor'
                className='w-full max-w-md md:max-w-none rounded-2xl shadow-lg object-cover'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — consistent with Home.tsx */}
      <section className='bg-blue-light py-10 border-t border-gray-200 text-center'>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-2xl md:text-3xl font-bold mb-3 text-blue-dark'>
            Let’s Connect
          </h2>
          <p className='text-base text-text-dark mb-6 leading-relaxed'>
            Looking for expert, approachable advice? Get in touch today — I’ll
            be happy to help you take the next step toward your home and
            financial goals.
          </p>
          <a
            href='/appointment'
            className='inline-block bg-primary-orange text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-500 transition-colors'
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </main>
  )
}
