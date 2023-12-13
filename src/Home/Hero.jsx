import React from 'react'
import data from '../assets/Data/Data'
import { useGlobalContext } from '../Context/Context'
import SingleImage from './SingleImage'

const Hero = () => {
  const { backgroundImage } = useGlobalContext()

  const heroStyle = {
    backgroundImage: `url(${backgroundImage.img})`,
  }

  return (
    <div className='relative h-screen'>
      <div
        style={heroStyle}
        className='bg-blend-overlay  h-full w-full bg-center -mt-20 bg-cover bg-no-repeat before:bg-gradient-to-b before:from-transparent before:via-transparent bg-black/30  before:to-white before:w-full before:h-full before:absolute'
      >
        <div className='w-[90vw] mx-auto'>
          <div className='text-center pt-20'>
            <h1 className='text-7xl md:text-[180px] capitalize font-bold tracking-widest font-[Kalam,sans-serif] opacity-60'>
              {backgroundImage.country}
            </h1>
            <h1 className='text-center font-[cursive] font-bold text-white text-3xl md:text-6xl capitalize py-12'>
              Discover.Explore.<span className='text-red-600'>journey</span>
            </h1>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4  pt-16 items-center gap-4 w-full justify-center'>
            {data.slice(0, 4).map((location, index) => (
              <SingleImage
                key={index}
                img={location.img}
                country={location.country}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
