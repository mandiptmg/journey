const Contact = () => {
  return (
    <div className='py-16 '>
      <div className='md:container w-[90vw] mx-auto grid place-items-center'>
        <div className='text-center mb-10  font-[cursive]'>
          <h1 className='text-2xl md:text-4xl font-bold text-red-500'>
            Get in Touch
          </h1>
          <p className='mt-4 md:text-lg text-base text-gray-500'>
            We believe that the world is a vast, beautiful place waiting to be
            discovered. We're here to make your travels seamless, memorable, and
            filled with the spirit of discovery.
          </p>
        </div>
        <div className='rounded-xl w-full'>
          <form className='space-y-4'>
            <div className="flex  items-center gap-7">
              
              <input
                type='text'
                id='name'
                name='name'
                className='w-full p-4 border border-gray-300 rounded-3xl bg-gray-200'
                placeholder='Your Name'
                required
              />
           
             
              <input
                type='email'
                id='email'
                name='email'
                className='w-full p-4 border border-gray-300 rounded-3xl bg-gray-200'
                placeholder='Your Email'
                required
              />
            </div>
            <div>
              
              <textarea
                id='message'
                name='message'
                className='w-full p-4 border border-gray-300 rounded-3xl bg-gray-200'
                rows='4'
                placeholder='Your Message'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-red-500 hover:bg-red-400 text-white p-4 w-full rounded-3xl'
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
