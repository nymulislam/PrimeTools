import './App.css'
import KeyMetrics from './components/KeyMetrics/KeyMetrics'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import HowItWorks from './components/HowItWorks/HowItWorks'
import PricingSection from './components/PricingSection/PricingSection'
import CTASection from './components/CTASection/CTASection'
function App() {

  return (
    <>
      <div className='container mx-auto'>
      <Nav></Nav>
      <Hero></Hero>
      <KeyMetrics></KeyMetrics>
      <Products></Products>
      <HowItWorks></HowItWorks>
      <PricingSection></PricingSection>
      <CTASection></CTASection>
      </div>
    </>
  )
}

export default App
