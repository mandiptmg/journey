import { NavLink } from "react-router-dom"
const Services = () => {
  return (
    <div className='pt-20 font-[cursive] pb-20 w-[80vw] mx-auto'>
      <div className='text-center pb-10 font-[cursive]'>
        <h1 className='text-2xl md:text-4xl font-bold text-red-500'>
          Our Services
        </h1>
        <p className='mt-4 text-base text-gray-500'>
          We offer plenty of services, here's some of them
        </p>
      </div>
      <div className='mt-7 grid gap-y-20 gap-x-32 md:grid-cols-2 items-start'>
        <div className='w-full h-full'>
          <img
            src='https://framerusercontent.com/images/TkJYgQeDFbWw4yNLf3UtAnkhDOw.jpg?scale-down-to=512'
            alt=''
            className='rounded-2xl object-cover aspect-[1/0.6] mb-2'
          />

          <h1 className='font-bold mb-4 text-4xl'> Accommodation Booking</h1>

          <p className='font-semibold text-gray-400 text-lg'>
            Booking hotels, resorts, guesthouses, vacation rentals, or other
            types of accommodations based on traveler preferences and budgets.
          </p>
        </div>
        <div className='w-full h-full'>
          <img
            src='https://framerusercontent.com/images/gxziWKvcRwbZ4rxSBNv9xoQrc4s.jpg'
            alt=''
            className='rounded-2xl mb-2 aspect-[1/0.6] object-cover'
            loading='lazy'
          ></img>

          <h1 className='font-bold mb-4 text-4xl'>
            Flight and Transportation Booking
          </h1>

          <p className='font-semibold text-gray-400 text-lg'>
            Arranging airline tickets, train tickets, rental cars, airport
            transfers, and other transportation options for travelers.
          </p>
        </div>
        <div className='w-full h-full'>
          <img
            src='https://framerusercontent.com/images/XdYqhLidcD9iYSDdSTZbsCZMfY.jpg?scale-down-to=1024'
            alt=''
            className='rounded-2xl aspect-[1/0.6] object-cover mb-2'
          />

          <h1 className='font-bold mb-4 text-4xl'>
            {' '}
            Guided Tours and Excursions
          </h1>

          <p className='font-semibold text-gray-400 text-lg'>
            Organizing guided tours, adventure activities, cultural excursions,
            and day trips to popular attractions and destinations.
          </p>
        </div>
        <div className='w-full shadow-lg rounded-3xl grid place-items-center shadow-red-200 h-full'>
          <div className='w-full text-center px-10'>
            <h1 className='text-xl text-gray-400 '>Learn more about us </h1>
            <button className='text-3xl font-bold font-sans  mb-7 md:mb-0   bg-red-600 text-white rounded-full py-2  text-center mt-10 w-full  '>
              <NavLink to='/about us'>About Us</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
