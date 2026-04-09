import './App.css'
import KeyMetrics from './components/KeyMetrics/KeyMetrics'
import Hero from './components/Nav/Hero'
import Nav from './components/Nav/Nav'
function App() {

  return (
    <>
      <div className='container mx-auto'>
      <Nav></Nav>
      <Hero></Hero>
      <KeyMetrics></KeyMetrics>
      </div>
    </>
  )
}

export default App
