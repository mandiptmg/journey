import { useState } from 'react'
import { useGlobalContext } from '../Context/Context'

const SingleImage = ({ img, country }) => {
  const [show, setShow] = useState(true)
  const { setBackgroundImage } = useGlobalContext()
  return (
    <div>
      <article className='relative'>
        <button
          onMouseEnter={() => setShow(false)}
          onMouseLeave={() => setShow(true)}
          onClick={() =>
            setBackgroundImage({
              img: img,
              country: country,
            })
          }
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
