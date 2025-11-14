import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const currentPageRef = useRef<HTMLAnchorElement>(null)

  // Close menu on Escape key (keyboard support for accessibility)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    // Only return focus to button on keyboard navigation (not touch)
    if (document.activeElement?.tagName === 'BUTTON') {
      menuButtonRef.current?.focus()
    }
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/quotation', label: 'Conveyancing Quote' },
    { to: '/appointment', label: 'Book Appointment' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/careers', label: 'Careers' },
  ]

  return (
    <>
      <header className='sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 backdrop-blur-sm'>
        <nav
          className='container mx-auto px-4 py-4'
          aria-label='Main navigation'
        >
          <div className='flex justify-between items-center'>
            <Link
              to='/'
              className='text-2xl font-bold text-primary-orange hover:opacity-80 active:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange focus-visible:ring-offset-2 rounded'
            >
              SL Mortgages
            </Link>

            {/* Desktop Navigation */}
            <nav
              className='hidden md:flex space-x-6'
              aria-label='Desktop navigation'
            >
              {navLinks.map((link) => {
                const isActive = link.to === location.pathname
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`hover:text-primary-orange focus:outline-none rounded px-2 py-1 ${
                      isActive
                        ? 'text-primary-orange font-semibold border-b-2 border-primary-orange'
                        : ''
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              className='md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded'
              aria-expanded={isMenuOpen}
              aria-controls='mobile-menu'
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className='sr-only'>
                {isMenuOpen ? 'Close menu' : 'Open menu'}
              </span>
              <div className='w-6 h-6 flex flex-col justify-center space-y-1.5'>
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                  aria-hidden='true'
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                  aria-hidden='true'
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                  aria-hidden='true'
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] md:hidden'
          onClick={closeMenu}
          aria-hidden='true'
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        id='mobile-menu'
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-[80] md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label='Mobile navigation'
      >
        <div className='flex flex-col h-full'>
          <div className='flex justify-between items-center p-4 border-b'>
            <span className='text-xl font-bold text-primary-orange'>Menu</span>
            <button
              onClick={closeMenu}
              className='min-w-[44px] min-h-[44px] px-4 py-2 text-base font-medium text-gray-700 hover:text-primary-orange hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 rounded transition-colors flex items-center gap-2'
              aria-label='Close menu'
            >
              <span>Close</span>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <nav
            className='flex-1 overflow-y-auto p-4'
            aria-label='Mobile navigation links'
          >
            <ul className='space-y-4'>
              {navLinks.map((link) => {
                const isActive = link.to === location.pathname
                return (
                  <li key={link.to}>
                    <Link
                      ref={isActive ? currentPageRef : null}
                      to={link.to}
                      onClick={closeMenu}
                      className={`block py-3 px-4 text-lg rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 ${
                        isActive
                          ? 'bg-primary-orange text-white font-semibold'
                          : 'hover:text-primary-orange hover:bg-gray-50'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
