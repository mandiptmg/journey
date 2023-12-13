import data from '../assets/Data/Data'
import SingleTourImage from './SingleTourImage'
const PopularTours = () => {
  return (
    <div className='w-[80vw] pb-20 mx-auto '>
      <div className='text-center pb-10 font-[cursive]'>
        <h1 className='text-2xl md:text-4xl font-bold text-red-500'>
          Popular Tours
        </h1>
        <p className='mt-4 text-base text-gray-500'>
          Explore our most popular tours.
        </p>
      </div>
      <div className='md:grid-cols-3 grid w-full items-start  gap-4'>
        {data
          .map((item, index) => {
            return <SingleTourImage key={index} {...item} />
          })
          .slice(0, 4)}
      </div>
    </div>
  )
}

export default PopularTours
