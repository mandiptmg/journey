import { NavLink } from 'react-router-dom'
const NoPage = () => {
  return (
    <div>
      <div className='before:absolute before:w-full before:h-[120vh] before:-top-20 before:left-0 before:bg-[url(https://cdn.pixabay.com/photo/2017/08/01/18/27/boat-2567136_1280.jpg)] before:bg-cover before:bg-center before:bg-no-repeat before:-z-10  w-full h-screen before:bg-blend-overlay before:bg-white/80 '>
        <div className='grid  h-full  -mt-20 place-items-center'>
          <div className='text-center font-[cursive] space-y-10'>
            <h1 className=' text-5xl font-bold md:text-6xl text-red-500'>
              404
            </h1>
            <p className='text-lg font-semibold md:text-2xl text-red-500'>
              Oops! Page Not Found
            </p>
            <p className='text-base md:text-lg text-black/80'>
              {' '}
              We're Sorry, but It Looks Like You've Taken a Wrong Turn
            </p>
            <div>
              <NavLink to='/'>
                <button className='bg-red-500 font-sans hover:bg-white hover:text-red-500 border border-red-500 text-white px-6 py-3 font-bold rounded-2xl'>
                  Return Home
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoPage
