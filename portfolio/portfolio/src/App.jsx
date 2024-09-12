
import './App.css'
import Header from './component/Header/Header'
import Footer from './component/footer-section/Footer'
import HeroSection from '../public/assets/hero-section/HeroSection'
function App() {

  return (
    <div className='bg-black h-svh w-svw overflow-y-auto'>
      <Header/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default App
