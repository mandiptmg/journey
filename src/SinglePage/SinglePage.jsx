import { useParams } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import Newsletter from '../about/Newsletter'
import Contact from '../about/Contact'
import { FaChevronDown } from 'react-icons/fa'
import NoPage from '../no page/NoPage'
import { useState } from 'react'
const SinglePage = ({ data }) => {
  const { id } = useParams()
  const [show,setShow] = useState(false);
  const [show2, setShow2] = useState(false)

  const tour = data.find((tour) => tour.visit === id)
  if (!tour) {
    return <div>
      <NoPage/>
    </div>
  }

  const heroStyle = {
    backgroundImage: `url(${tour.img})`,
  }
  return (
    <div> 
      <div
        style={heroStyle}
        className='bg-blend-overlay h-full w-full bg-bottom -mt-20 bg-cover  bg-no-repeat before:bg-gradient-to-b bg-white/20 before:from-transparent  before:to-white relative before:via-transparent before:w-full before:h-full before:absolute'
      >
        <div className='w-[90vw] h-full font-[cursive] text-center mx-auto'>
          <div className='space-y-10 pt-20'>
            <h1 className='md:text-xl inline-block text-lg capitalize rounded-full px-10 py-2 bg-white text-red-500 font-semibold'>
              special offer
            </h1>
            <p className='text-red-500 text-5xl md:text-6xl font-mono leading-normal'>
              {tour.desc}
            </p>
            <p className='md:text-lg font-medium text-sm text-black/80 max-w-3xl mx-auto'>
              Embark on an extraordinary journey through the land of fire and
              ice, as you explore the breathtaking landscapes, natural wonders,
              and unique culture of Iceland.
            </p>
          </div>
          <div className='bg-white rounded-3xl gap-y-20 text-lg md:text-xl py-4 relative md:flex justify-around font-semibold items-center mt-16 text-black font-sans'>
            <div className='flex justify-between items-center px-4'>
              <h1 className='text-gray-400'>Tour Duration</h1>
              <span>{tour.time} days</span>
            </div>
            <div className='flex justify-between items-center px-4'>
              <h1 className='text-gray-400'>Departure Date:</h1>
              <span className='capitalize'>{tour.date}</span>
            </div>
            <div className='flex justify-between items-center px-4'>
              <h1 className='text-gray-400'>Price:</h1>
              <span>${tour.price}</span>
            </div>
          </div>
          <div className='relative py-4'>
            <img
              src={tour.img}
              alt=''
              className='w-full h-[600px] object-cover rounded-3xl'
            />
          </div>
        </div>
      </div>
      <div className='w-[90vw] h-full font-[cursive] text-center mx-auto'>
        <div className=' font-sans h-full py-20 relative flex flex-col-reverse md:grid grid-cols-[2.2fr,1fr] gap-14'>
          <div className='text-left font-[cursive]'>
            <div className=''>
              <div className='flex text-xl md:text-3xl items-center border-b justify-between p-4 font-bold'>
                <h1 className='text-red-500 '>Tour Details</h1>
                <button onClick={() => setShow(!show)}>
                  <FaChevronDown
                    className={`${
                      show ? 'rotate-180 duration-500' : 'duration-500'
                    } text-red-500 `}
                  />
                </button>
              </div>
              <div className={show ? 'none' : 'hidden'}>
                <p className='px-4 py-2 text-lg font-sans'>{tour.tourDetail}</p>
                <div className='font-sans font-medium pt-7  px-4 text-lg'>
                  <h1 className='text-xl font-bold'>Inclusions:</h1>
                  <ul className='list-disc text-xl px-4'>
                    <li>
                      Accommodation in hotels and a cave hotel in Cappadocia.
                    </li>
                    <li> Guided tours and activities.</li>
                    <li> Transportation between locations.</li>
                    <li>Meals as per the itinerary.</li>
                    <li> English-speaking local guide. </li>
                    <li>Entrance fees to attractions.</li>
                  </ul>
                </div>
                <div className='font-[sans] font-medium pt-7  px-4 text-lg'>
                  <h1 className='text-xl font-bold'>Additional Information:</h1>
                  <ul className='list-disc text-xl px-4'>
                    <li>
                      This tour is suitable for travelers of all ages and
                      fitness levels.
                    </li>
                    <li>
                      {' '}
                      Be prepared for varying weather conditions and some
                      walking, especially in Cappadocia.{' '}
                    </li>
                    <li>
                      {' '}
                      Itinerary may be subject to changes based on weather
                      conditions and seasonal variations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className='flex mt-7 text-xl md:text-3xl items-center border-b justify-between p-4 font-bold'>
                <h1 className='text-red-500 '>Itinerary</h1>
                <button onClick={() => setShow2(!show2)}>
                  <FaChevronDown
                    className={`${
                      show2 ? 'rotate-180 duration-500' : 'duration-500'
                    } text-red-500 `}
                  />
                </button>
              </div>
              <div
                className={`font-[sans] duration-1000 font-medium pt-7 space-y-4  px-4 text-lg ${
                  show2 ? 'none' : 'hidden'
                }`}
              >
                {tour.locationsArray.map((day, index) => (
                  <div key={index}>
                    <h2 className='text-xl font-bold'>
                      Day {day.day}: {day.location}
                    </h2>
                    <ul className='list-disc text-xl px-4'>
                      {day.activities.map((activity, activityIndex) => (
                        <li key={activityIndex}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='text-center grid  space-y-5 text-lg rounded-3xl shadow-xl h-[550px] border lg:max-w-3xl md:sticky px-4 py-7 top-20 '>
            <h1 className='text-red-500 capitalize text-xl'>{tour.visit}</h1>
            <div className='flex justify-between items-center px-4'>
              <h1 className='text-gray-400'> Location:</h1>
              <span className='capitalize'>{tour.country}</span>
            </div>
            <div className='flex justify-between items-center px-4'>
              <h1 className='text-gray-400'>Tour Duration</h1>
              <span>{tour.time} days</span>
            </div>
            <div className='flex justify-between items-center px-4'>
              <h1 className='text-gray-400'>Departure Date:</h1>
              <span className='capitalize'>{tour.date}</span>
            </div>
            <div>
              <del className='text-gray-500 font-semibold text-xl'>
                {tour.price2}
              </del>
              <h1 className='text-red-500 font-semibold text-xl'>
                ${tour.price}/person
              </h1>
            </div>
            <div className='space-y-4'>
              <button className='bg-red-500 rounded-3xl hover:text-red-500 hover:bg-white font-semibold border border-red-500 w-full py-4 text-xl text-white capitalize '>
                book now
              </button>
              <button className='text-black rounded-3xl hover:text-red-500 hover:bg-white font-semibold border hover:border-red-500 w-full py-4 text-xl border-black capitalize '>
                contact us
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className='font-[cursive] space-y-7'>
            <h1 className='text-red-500 font-bold  text-4xl'>Album</h1>
            <p className='text-gray-500 text-lg'>
              These photos are taken by our team and other travelers during our
              tours
            </p>
          </div>
          <div className='flex py-10 items-center gap-7'>
            <Marquee speed={100}>
              {tour.imageUrls.map((img, index) => {
                return (
                  <div key={index}>
                    <img
                      src={img}
                      alt=''
                      className='rounded-xl w-[568px] mx-2 h-[347px]'
                    />
                  </div>
                )
              })}
            </Marquee>
          </div>
        </div>
        <div>
          <Newsletter />
        </div>
        <div className='max-w-3xl mx-auto'>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default SinglePage
