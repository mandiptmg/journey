import SingleTourImage from '../Home/SingleTourImage'
import Newsletter from '../about/Newsletter'
import Contact from '../about/Contact'
import data from '../assets/Data/Data'
import { FaSearch } from 'react-icons/fa'
import {useGlobalContext} from '../Context/Context'
import Modal from '../Home/Modal'
const Tour = () => {
  const {setShowModal} = useGlobalContext()
  return (
    <div className='relative '>
      <div className='before:absolute before:-top-20 before:-z-10 before:left-0 before:w-full before:h-[50vh]  before:bg-blend-overlay before:bg-white/90 before:bg-cover before:bg-center before:bg-no-repeat before:bg-[url(https://c4.wallpaperflare.com/wallpaper/444/19/627/sunrise-annapurna-massif-himalayas-minimal-wallpaper-preview.jpg)] bg-gradient-to-b from-transparent to-white'>
        <div data-aos='fade-up' className='font-[cursive] text-center py-20'>
          <h1 className='text-4xl md:text-6xl text-red-500 font-bold'>
            Our Tours
          </h1>
          <p className='pt-10 md:text-lg'>Journey Beyond Imagination</p>
        </div>
      </div>
      <div
        data-aos='fade-up'
        className='text-center w-[90vw] md:max-w-lg mx-auto'
      >
        <button
          onClick={() => setShowModal(true)}
          className='flex justify-between items-center rounded-3xl border outline-none  w-full py-2 px-4'
        >
          <h1 className='text-left text-gray-400'> Search here...</h1>
          <FaSearch />
        </button>
      </div>
      <div className='md:grid-cols-3 pt-10 grid w-[90vw] md:max-w-6xl mx-auto h-full items-center  gap-4'>
        {data.map((item, index) => {
          return <SingleTourImage key={index} {...item} />
        })}
      </div>
      <div className='w-[90vw] mx-auto '>
        <Newsletter />
      </div>
      <div className='mx-auto max-w-3xl'>
        <Contact />
      </div>
      {/* modal show */}
      <div>
        <Modal />
      </div>
    </div>
  )
}

export default Tour
