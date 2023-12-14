
const Contact = () => {
  return (
    <div className='mt-10'>
      <div className='container min-h-screen grid place-items-center'>
        <div className='text-center pb-10 font-[cursive]'>
          <h1 className='text-2xl md:text-4xl font-bold text-red-500'>
            Get in Touch
          </h1>
          <p className='mt-4 text-base text-gray-500'>
            Contact us for any questions you may have about our tours, or to
            book a private tour
          </p>
        </div>
        <div
          data-aos='zoom-in'
          className='bg-white shadow-lg p-8 rounded-xl w-full md:w-1/2 lg:w-1/3'
        >
          <form className='space-y-4'>
            <div>
              <label htmlFor='name' className='block mb-1'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full p-2 border border-gray-300 rounded-lg'
                placeholder='Your Name'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-1'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full p-2 border border-gray-300 rounded-lg'
                placeholder='Your Email'
                required
              />
            </div>
            <div>
              <label htmlFor='message' className='block mb-1'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='w-full p-2 border border-gray-300 rounded-lg'
                rows='4'
                placeholder='Your Message'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-red-500 hover:bg-red-400 text-white p-2 w-full rounded-lg'
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