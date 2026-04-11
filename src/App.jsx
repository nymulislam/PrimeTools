import './App.css'
import KeyMetrics from './components/KeyMetrics/KeyMetrics'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import HowItWorks from './components/HowItWorks/HowItWorks'
import PricingSection from './components/PricingSection/PricingSection'
import CTASection from './components/CTASection/CTASection'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

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
