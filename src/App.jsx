import { Routes, Route,  } from 'react-router-dom'

import Navbar from './Header/Navbar'
import Home from './Home/Home'
import About from './about/About'
import Tour from './tours/Tour'
import Footer from './footer/Footer'
import Contact from './Contact/Contact'
import SinglePage from './SinglePage/SinglePage'
import data from './assets/Data/Data'
import Modal from './Home/Modal'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about us' element={<About />} />
        <Route path='/tours' element={<Tour />} />
        <Route path='/contact us' element={<Contact />} />
        <Route path='/:id' element={<SinglePage data={data} />} />
      </Routes>
      <Modal/>
      <Footer />
    </div>
  )
}

export default App
