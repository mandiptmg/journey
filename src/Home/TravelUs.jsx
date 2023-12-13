const TravelUs = () => {
  return (
    <div className='py-44 font-[cursive] mt-10 '>
      <div>
        <h1 className='text-3xl  text-center text-red-500 font-semibold  md:text-6xl '>
          Why Travel With Us?
        </h1>
        <p className='text-lg text-center mt-7 '>
          At Journey, we're more than just a travel company, we're your partner
          in exploration.
        </p>
      </div>
      <div className='md:grid flex flex-col-reverse mt-10 gap-10 grid-cols-[1fr,2fr]'>
        <div>
          <div className='text-center shadow-red-200 text-[cursive]  p-7 text-3xl shadow-md rounded-2xl'>
            <h1 className='text-red-500 font-bold '>
              5 years{' '}
              <span className='text-xl p-4 font-normal text-gray-700 block'>
                Travel Experience
              </span>
            </h1>
          </div>
          <div className='text-center mt-7 shadow-red-200 text-[cursive]  p-7 text-3xl shadow-md rounded-2xl'>
            <h1 className='text-red-500 font-bold '>
              1000
              <span className='text-xl p-4 font-normal text-gray-700 block'>
                Completed Tour
              </span>
            </h1>
          </div>
          <div className='text-center mt-7 shadow-red-200 text-[cursive]  p-7 text-3xl shadow-md rounded-2xl'>
            <h1 className='text-red-500 font-bold '>
              10000
              <span className='text-xl p-4 font-normal text-gray-700 block'>
                Happy Travelers
              </span>
            </h1>
          </div>
        </div>
        <div className='aspect-w-16 aspect-h-9'>
          <video
            autoPlay
            loop
            muted
            className='cursor-auto w-full h-full rounded-2xl block object-cover bg-[rgba(0, 0, 0, 0)]'
            style={{ objectPosition: '50% 50%' }}
          >
            <source
              src='https://framerusercontent.com/assets/b6UTzi2NtyAbX6cPDS2gJSOoFY.mp4'
              type='video/mp4'
            ></source>
          </video>
        </div>
      </div>
      <div className='text-center mt-7 text-xl md:text-2xl'>
        <a href='/tours'>
        
          <button className='bg-red-500 rounded-3xl px-7 py-3 capitalize text-white border border-red-500 hover:bg-white  font-bold hover:text-red-500'>
            view all tours
          </button>
        </a>
      </div>
    </div>
  )
}

export default TravelUs
