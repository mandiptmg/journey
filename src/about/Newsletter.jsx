
const Newsletter = () => {
  return (
    <div>
      <div className='border mt-24  shadow shadow-red-200 '>
        <div className='text-center py-24 max-w-2xl mx-auto font-[cursive]'>
          <div>
            <h1 className='text-red-500 md:text-4xl text-3xl  font-bold '>
              Our Newsletter
            </h1>
            <p className='text-sm mt-5 md:text-lg font-thin'>
              Subscribe to get updates and special offers
            </p>
          </div>
          <div className='container mx-auto items-center gap-4 grid md:flex  mt-14 '>
            <input
              type='email'
              placeholder='123@email.com'
              className='p-4 w-full outline-none rounded-full bg-gray-200'
              required
            />
            <button
              type='submit'
              className='bg-red-500 px-6 py-4 w-full md:w-auto  rounded-3xl hover:bg-red-600 text-white'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter