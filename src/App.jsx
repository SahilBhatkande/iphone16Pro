import './App.css'
import Features from './Components/Features'
import Hero from './Components/Hero'
import Highlights from './Components/Highlights'
import Model from './Components/Model'
import Navbar from './Components/Navbar'
import * as Sentry from '@sentry/react'
import HowItWorks from './Components/HowItWorks'
import Footer from './Components/Footer'

function App() {  
  return (
    <main className='bg-black'>

      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>


    </main>
  )
}

export default Sentry.withProfiler(App);
