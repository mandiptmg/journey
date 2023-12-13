import Hero from './Hero'
import Contact from './Contact'
import TravelUs from './TravelUs'
import PopularTours from './PopularTours'
import Services from './Services'
import Newsletter from '../about/Newsletter'
import Testimonials from './Testimonials'
const Home = () => {
  return (
    <div>
      <Hero />
      <div className='w-[90vw]  mx-auto'>
        <TravelUs />
        <PopularTours />
        <Services />
      </div>
      <div><Testimonials /></div>
      <div className='w-[90vw]  mx-auto'>
        <Newsletter />
        <Contact />
      </div>
    </div>
  )
}

export default Home
