import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import NavBar from './components/NavBar/NavBar'
import SiteFooter from './components/SiteFooter/SiteFooter'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import PowderCoating from './pages/PowderCoating/PowderCoating'
import OurWork from './pages/OurWork/OurWork'
import Pricing from './pages/Pricing/Pricing'
import Contact from './pages/Contact/Contact'
import Events from './pages/Events/Events'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/powder-coating" element={<PowderCoating />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <SiteFooter />
    </>
  )
}
