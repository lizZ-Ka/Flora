import './App.css';
import Header from './Widgets/Header';
import HeroSection from './Widgets/HeroSection';
import HowItWorks from './Widgets/HowItWorks'
import DreamHome from './Widgets/DreamHome';
import Properties from './Widgets/TrendingProperties';
import Testimonials from './Widgets/Testimonials';
import Footer from './Widgets/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <HowItWorks />
      <DreamHome />
      <Properties />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App;
