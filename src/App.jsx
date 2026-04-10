import './App.css'
import KeyMetrics from './components/KeyMetrics/KeyMetrics'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import HowItWorks from './components/HowItWorks/HowItWorks'
import PricingSection from './components/PricingSection/PricingSection'
import CTASection from './components/CTASection/CTASection'
import Footer from './components/Footer/Footer'

const FetchProduct = async () => {
  const res = await fetch('/Products.json')
  return res.json()
}

function App() {

  const ProductData = FetchProduct();

  return (

    <>
      <div className='container mx-auto'>
        <Nav></Nav>
        <Hero></Hero>
        <KeyMetrics></KeyMetrics>
        <Products ProductData={ProductData}></Products>
        <HowItWorks></HowItWorks>
        <PricingSection></PricingSection>
        <CTASection></CTASection>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
