import { useState } from 'react'
import { useGlobalContext } from '../Context/Context'
import { NavLink } from 'react-router-dom'

const SingleImage = ({ img, country, to,aos }) => {
  const [show, setShow] = useState(true)
  const { setBackgroundImage, backgroundImage,setActiveButton,activeButton} = useGlobalContext()
  return (
    <div>
      <div
        className={activeButton === country? 'text-center relative bg-white rounded-3xl p-5' : 'hidden'}
      >
        <NavLink
          className='text-red-500 text-xl  font-bold'
          to={backgroundImage.to}
        >
          <button className='capitalize'>view image</button>
        </NavLink>
      </div>
      <article className={activeButton === country ? 'hidden':'relative'}>
        <button
          onMouseEnter={() => setShow(false)}
          onMouseLeave={() => setShow(true)}
          onClick={() => {
            setBackgroundImage({
              img: img,
              country: country,
              to: to,
              aos:aos
            })
            setActiveButton(country)
          }}
        >
          <img
            src={img}
            alt=''
            className='w-full hover:scale-105 duration-500 rounded-3xl opacity-70 hover:opacity-100 aspect-[1/0.6] object-cover'
          />
          <h2
            className={
              show
                ? 'font-bold  text-white md:text-3xl capitalize absolute top-[50%] left-auto text-center w-full'
                : 'hidden'
            }
          >
            {country}
          </h2>
        </button>
      </article>
    </div>
  )
}

export default SingleImage
