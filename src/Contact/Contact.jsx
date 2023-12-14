import CustomerSupport from "./CustomerSupport"
import Faq from "./Faq"
const Contact = () => {
  return (
    <div className='relative'>
      <div className=' before:absolute before:-top-20 before:-z-10 before:left-0 before:w-full before:h-[150vh]  before:bg-blend-overlay before:bg-white/80 before:bg-cover before:bg-no-repeat before:bg-[url(https://img.freepik.com/free-photo/compass-near-old-maps_23-2147793492.jpg?w=826&t=st=1702027206~exp=1702027806~hmac=3a4e2149fdcb655e119f0676db7fc5dec4e64ff08da1976dde14ff049f705c2e)]  bg-gradient-to-b from-transparent to-white'>
        <div className='font-[cursive] py-20 text-center'>
          <div>
            <h1 className='md:text-6xl text-4xl text-red-500'>Contact Us</h1>
            <p className='md:text-lg text-sm mt-7'>
              We're here to assist you with any questions, inquiries, or
              feedback you may have.
            </p>
          </div>
          <div
            data-aos='zoom-in'
            className='mt-10 w-[90vw] md:max-w-3xl mx-auto'
          >
            <form action=''>
              <div className='flex gap-4 items-center'>
                <input
                  type='text'
                  placeholder='Name'
                  className=' bg-gray-200 outline-none rounded-2xl p-4 w-full'
                  required
                />
                <input
                  type='email'
                  placeholder='Email'
                  className=' bg-gray-200 outline-none rounded-2xl p-4 w-full'
                  required
                />
              </div>
              <div>
                <textarea
                  className=' bg-gray-200 outline-none mt-4 rounded-2xl p-4 w-full'
                  required
                  placeholder='Message'
                  cols='30'
                  rows='10'
                ></textarea>
              </div>
              <button
                className='w-full bg-red-500 hover:bg-red-400 p-4 text-white rounded-full mt-4 capitalize text-base md:text-xl '
                type='submit'
              >
                send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <CustomerSupport />
      </div>
      <div>
        <Faq />
      </div>
    </div>
  )
}

export default Contact
