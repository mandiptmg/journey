const SingleTourImage = ({
  desc,
  country,
  time,
  price,
  date,
  to,
  price2,
  img,
}) => {
  
  return (
    <article  className='bg-white h-full border font-[cursive] text-center border-gray-200 w-full rounded-lg shadow'>
      <div>
        <a href={to}>
          <img
            className='rounded-t-lg opacity-80 hover:opacity-100 h-auto w-full object-cover  aspect-[1/0.6]'
            src={img}
            alt={country}
          />
        </a>
      </div>
      <div className='p-5'>
        <div>
          <h5 className='mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900'>
            {country}
          </h5>

          <p className='mb-3 h-[50px]  font-normal text-gray-700 dark:text-gray-400'>
            {desc}
          </p>
        </div>
        
          <div className='pt-16   aspect-[1/0.5]'>
            <div className='flex justify-between items-center px-4'>
              <h1 className='text-gray-400 font-normal'>Duration:</h1>
              <span>{time} days</span>
            </div>
            <div className='flex justify-between items-center px-4'>
              <h1 className='text-gray-400 font-normal'>Departure:</h1>
              <span className='capitalize'>{date}</span>
            </div>
            <div className='flex justify-between items-start px-4'>
              <h1 className='text-gray-400 font-normal'>Price:</h1>
              <span className='text-red-500 '>
                <del className='block'>{price2}</del>${price}/person
              </span>
            </div>
          </div>
          <div>
            <button className='bg-red-500 pt-1hover:bg-white hover:text-red-500 border-red-500 px-5 py-2 mt-7 w-full text-white text-2xl rounded-3xl border text-center'>
              Book Now
            </button>
          </div>
        
      </div>
    </article>
  )
}

export default SingleTourImage
