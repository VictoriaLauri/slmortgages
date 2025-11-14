import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Careers from './pages/Careers'
import Home from './pages/Home'
import Partners from './pages/Partners'
import Quotation from './pages/quotation/Index'
import Purchase from './pages/quotation/Purchase'
import Sale from './pages/quotation/Sale'
import SaleAndPurchase from './pages/quotation/SaleAndPurchase'
import Remortgage from './pages/quotation/Remortgage'
import Survey from './pages/quotation/Survey'
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
        <Route path='/quotation/sale-and-purchase' element={<SaleAndPurchase />} />
        <Route path='/quotation/sale' element={<Sale />} />
        <Route path='/quotation/remortgage' element={<Remortgage />} />
        <Route path='/quotation/survey' element={<Survey />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/referral' element={<Referral />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/partners' element={<Partners />} />
      </Route>
    </Routes>
  )
}
