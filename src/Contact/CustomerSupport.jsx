import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

const CustomerSupport = () =>
{
  return (
    <div className='bg-white pt-20  pb-1 text-black'>
      <div className='w-[90vw] md:w-[80vw] mx-auto'>
        <div className='grid md:grid-cols-2 gap-10  font-[cursive] items-start'>
          <div>
            <h1 className='md:text-3xl text-xl text-center md:text-left  text-red-600'>
              Customer Support
            </h1>
            <p className='text-sm md:text-lg mt-4 font-medium text-black/85'>
              Our dedicated customer support team is available to assist you
              with any issues or questions you may have.
            </p>
            <ul className='text-gray-600  md:text-xl font-semibold mt-10 font-sans'>
              <li className='flex items-center gap-2 justify-between md:justify-start'>
                Phone No.: <span className='text-black'>(123) 456-7890</span>
              </li>
              <li className='flex items-center gap-2 justify-between md:justify-start'>
                Email: <span className='text-black'>support@journey.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h1 className='md:text-3xl text-xl text-center md:text-left  text-red-600'>
              General Inquiries
            </h1>
            <p className='text-sm md:text-lg mt-4 font-medium text-black/85'>
              For general inquiries, partnerships, media requests, or other
              non-customer support related matters.
            </p>
            <ul className='text-gray-600  md:text-xl font-semibold mt-10 font-sans'>
              <li className='flex items-center gap-2 justify-between md:justify-start'>
                Phone No.: <span className='text-black'>(123) 456-7890</span>
              </li>
              <li className='flex items-center gap-2 justify-between md:justify-start'>
                Email: <span className='text-black'>info@journey.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-32 font-[cursive] text-center'>
          <div>
            <h1 className='md:text-3xl text-xl   text-red-600'>
              Connect with Us on Social Media
            </h1>
            <p className='text-sm md:text-lg mt-4 font-medium text-black/85'>
              Stay up-to-date with our latest news, promotions, and travel
              inspiration by following us on social media.
            </p>
          </div>
          <div className='p-6 shadow-red-200 font-medium shadow-md md:max-w-xl max-w-[10em]  mt-10 mx-auto rounded-3xl  border'>
            <ul className='text-xl md:flex  items-center grid  gap-y-10 gap-x-8'>
              <li>
                <a
                  className='flex gap-4 text-black hover:text-red-600 items-center'
                  href='https://www.facebook.com/'
                >
                  <FaFacebook className='text-red-500' />
                  <span className=' text-lg'>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  className='flex gap-4  text-black hover:text-red-600 items-center'
                  href='https://www.twitter.com/'
                >
                  <FaTwitter className='text-red-500' />
                  <span className=' text-lg'>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  className='flex  text-black hover:text-red-600 gap-4 items-center'
                  href='https://www.instagram.com/'
                >
                  <FaInstagram className='text-red-500' />
                  <span className=' text-lg'>Instagram</span>
                </a>
              </li>{' '}
              <li>
                <a
                  className='flex  text-black hover:text-red-600 gap-4 items-center'
                  href='https://www.tiktok.com/'
                >
                  <FaTiktok className='text-red-500' />
                  <span className='text-lg'>Tiktok</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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

export default CustomerSupport
