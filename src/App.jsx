import './App.css'
import KeyMetrics from './components/sections/KeyMetrics'
import Hero from './components/sections/Hero'
import Nav from './components/layout/Nav'
import HowItWorks from './components/sections/HowItWorks'
import PricingSection from './components/sections/PricingSection'
import CTASection from './components/sections/CTASection'
import Footer from './components/layout/Footer'
import { useState } from 'react'
import Products from './components/Products/Products'

const FetchProduct = async () => {
  const res = await fetch('/Products.json')
  return res.json()
}
const dataPromise = FetchProduct();

function App() {
  const [carts, setCarts] = useState([])

  return (

    <>
      <div className='container mx-auto'>
        <Nav carts={carts}></Nav>
        <Hero></Hero>
        <KeyMetrics></KeyMetrics>
        <Products dataPromise={dataPromise} carts={carts} setCarts={setCarts}></Products>
        <HowItWorks></HowItWorks>
        <PricingSection></PricingSection>
        <CTASection></CTASection>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
