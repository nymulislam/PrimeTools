import './App.css'
import KeyMetrics from './components/KeyMetrics/KeyMetrics'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Products from './components/Products/Products'
import HowItWorks from './components/HowItWorks/HowItWorks'
function App() {

  return (
    <>
      <div className='container mx-auto'>
      <Nav></Nav>
      <Hero></Hero>
      <KeyMetrics></KeyMetrics>
      <Products></Products>
      <HowItWorks></HowItWorks>
      </div>
    </>
  )
}

export default App
