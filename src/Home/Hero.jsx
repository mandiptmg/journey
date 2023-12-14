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
            <div data-aos={backgroundImage.aos} data-aos-delay='1100'>
              <h1 className='text-5xl sm:text-7xl md:text-[180px] capitalize font-bold tracking-widest font-[Kalam,sans-serif] opacity-60'>
                {backgroundImage.country}
              </h1>{' '}
            </div>
            <h1 className='text-center font-[cursive] font-bold text-white text-3xl md:text-6xl capitalize py-12'>
              <span data-aos='zoom-in' data-aos-delay='400'>
                {' '}
                Discover.
              </span>
              <span data-aos='zoom-in' data-aos-delay='700'>
                Explore.
              </span>
              <span
                data-aos='zoom-in'
                data-aos-delay='900'
                className='text-red-600'
              >
                journey
              </span>
            </h1>
          </div>
          <div
            data-aos='zoom-in-up'
            data-aos-delay='1100'
            className='grid grid-cols-2 md:grid-cols-4  pt-16 items-center gap-4 w-full justify-center'
          >
            {data.slice(0, 4).map((location, index) => (
              <SingleImage
                key={index}
                img={location.img}
                country={location.country}
                to={location.to}
                aos={location.aos}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
