import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false) // desktop default = closed
  // Initialize with actual window size if available (client-side), default to false for SSR
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  )
  const location = useLocation()

  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const servicesButtonRef = useRef<HTMLButtonElement>(null)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)

  // Detect mobile screen reactively
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)

      // Close mobile menu when switching to desktop
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    checkMobile() // Initial check
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [isMenuOpen])

  // Update Services state when mobile state changes
  useEffect(() => {
    setIsServicesOpen(isMobile) // mobile = open, desktop = closed
  }, [isMobile])

  // Close Services dropdown on outside click (desktop only)
  useEffect(() => {
    if (!isServicesOpen || isMobile) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        servicesButtonRef.current?.contains(target) ||
        servicesDropdownRef.current?.contains(target)
      ) {
        return
      }
      setIsServicesOpen(false)
    }

    document.addEventListener('click', handleClickOutside, true)
    return () => document.removeEventListener('click', handleClickOutside, true)
  }, [isServicesOpen, isMobile])

  // Close menus on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        setIsServicesOpen(isMobile)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobile])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeAllMenus = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(isMobile)
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Clicking any TOP NAV link closes dropdown on desktop
  const handleTopNavClick = () => {
    if (!isMobile) setIsServicesOpen(false)
    setIsMenuOpen(false)
  }

  // Top nav links
  const topNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/appointment', label: 'Book Appointment' },
    { to: '/contact', label: 'Contact' },
  ]

  // Services dropdown links
  const serviceLinks = [
    { to: '/quotation', label: 'Conveyancing Quote' },
    { to: '/referral', label: 'Refer a Friend' },
    { to: '/careers', label: 'Careers' },
    { to: '/partners', label: 'Partners' },
  ]

  return (
    <>
      {/* HEADER */}
      <header className='sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 backdrop-blur-sm'>
        <nav
          className='container mx-auto px-4 py-4'
          aria-label='Main navigation'
        >
          <div className='flex justify-between items-center'>
            {/* LOGO */}
            <Link
              to='/'
              onClick={handleTopNavClick}
              className='text-2xl font-bold text-primary-orange hover:opacity-80 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange focus-visible:ring-offset-2 rounded'
            >
              SL Mortgages
            </Link>

            {/* DESKTOP NAV */}
            <div className='hidden md:flex items-center space-x-6'>
              {/* Home + About */}
              {topNavLinks.slice(0, 2).map((link) => {
                const isActive = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={handleTopNavClick}
                    className={`hover:text-primary-orange rounded px-2 py-1 transition ${
                      isActive
                        ? 'text-primary-orange font-semibold border-b-2 border-primary-orange'
                        : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              {/* SERVICES DROPDOWN */}
              <div className='relative' ref={servicesDropdownRef}>
                <button
                  ref={servicesButtonRef}
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  aria-expanded={isServicesOpen}
                  aria-haspopup='true'
                  className='px-2 py-1 flex items-center gap-1 hover:text-primary-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange focus-visible:ring-offset-2 rounded'
                >
                  Services
                  <span
                    aria-hidden='true'
                    className={`transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {/* DROPDOWN MENU — CENTERED + NARROWER (w-52) */}
                <div
                  role='menu'
                  className={`
                    absolute left-1/2 -translate-x-1/2 mt-2 w-52 bg-white 
                    border border-gray-200 rounded-md shadow-lg z-50 
                    transition-all duration-200
                    ${
                      isServicesOpen
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible'
                    }
                  `}
                >
                  {serviceLinks.map((s) => {
                    const isActive = location.pathname === s.to
                    return (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={handleTopNavClick}
                        role='menuitem'
                        className={`block px-4 py-3 text-base rounded transition-colors ${
                          isActive
                            ? 'text-primary-orange font-semibold bg-gray-50'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        {s.label}
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Testimonials | Book Appointment | Contact */}
              {topNavLinks.slice(2).map((link) => {
                const isActive = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={handleTopNavClick}
                    className={`hover:text-primary-orange rounded px-2 py-1 transition ${
                      isActive
                        ? 'text-primary-orange font-semibold border-b-2 border-primary-orange'
                        : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className='md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2'
            >
              <span className='sr-only'>
                {isMenuOpen ? 'Close menu' : 'Open menu'}
              </span>

              <div className='w-6 h-6 flex flex-col justify-center space-y-1.5'>
                <span
                  className={`h-0.5 w-6 bg-gray-800 transition ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-6 bg-gray-800 transition ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-6 bg-gray-800 transition ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE OVERLAY */}
      {isMenuOpen && isMobile && (
        <div
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] md:hidden'
          onClick={closeAllMenus}
        />
      )}

      {/* MOBILE MENU PANEL */}
      {isMobile && (
        <aside
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-[80] md:hidden transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex flex-col h-full'>
            <div className='flex justify-between items-center p-4 border-b'>
              <span className='text-xl font-bold text-primary-orange'>
                Menu
              </span>
              <button
                onClick={closeAllMenus}
                className='px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2'
              >
                Close
              </button>
            </div>

            <nav className='flex-1 overflow-y-auto p-4'>
              <ul className='space-y-4'>
                {/* HOME + ABOUT */}
                {topNavLinks.slice(0, 2).map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={closeAllMenus}
                      className='block py-3 px-4 text-lg rounded hover:bg-gray-50 hover:text-primary-orange'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* SERVICES (always open on mobile) */}
                <li>
                  <div className='py-3 px-4 text-lg font-semibold text-gray-800'>
                    Services
                  </div>

                  <ul className='mt-2 ml-4 space-y-2'>
                    {serviceLinks.map((s) => (
                      <li key={s.to}>
                        <Link
                          to={s.to}
                          onClick={closeAllMenus}
                          className='block py-2 px-4 rounded text-base hover:bg-gray-50 hover:text-primary-orange'
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* TESTIMONIALS + BOOK APPT + CONTACT */}
                {topNavLinks.slice(2).map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={closeAllMenus}
                      className='block py-3 px-4 text-lg rounded hover:bg-gray-50 hover:text-primary-orange'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      )}
    </>
  )
}
