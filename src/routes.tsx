import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Careers from './pages/Careers'
import Home from './pages/Home'
import Partners from './pages/Partners'
import Quotation from './pages/quotation/Index'
import Purchase from './pages/quotation/Purchase'
import Referral from './pages/Referral'
import Testimonials from './pages/Testimonials'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/quotation' element={<Quotation />} />
        <Route path='/quotation/purchase' element={<Purchase />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/referral' element={<Referral />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/partners' element={<Partners />} />
      </Route>
    </Routes>
  )
}
