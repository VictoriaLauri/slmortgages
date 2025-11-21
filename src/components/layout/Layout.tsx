import { Outlet } from 'react-router-dom'
import CookieBanner from './CookieBanner'
import Footer from './Footer'
import Header from './Header'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className='min-h-screen flex flex-col'>
      <ScrollToTop />
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
