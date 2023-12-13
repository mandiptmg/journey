import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='py-40 bg-[url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D)] bg-cover bg-center bg-blend-overlay bg-white/90 border shadow-lg shadow-red-500   '>
      <div className='w-[90vw] mx-auto  '>
        <div className='grid md:grid-cols-3 md:text-left text-center gap-y-16 gap-x-28'>
          <div className='text-center'>
            <div className='max-w-[8rem] mx-auto'>
              <button className='text-3xl font-bold font-[cursive] text-red-500'>
                <NavLink to='/'>Journey</NavLink>
              </button>
              <p className='pt-4 text-gray-400 font-[cursive]'>
                &copy; Journey. All Rights Reserved 2023.
              </p>
            </div>
            <div className='pt-14'>
              <ul className='text-xl text-gray-400'>
                <li>
                  Phone No:{' '}
                  <span className='text-black md:inline block'>
                    {' '}
                    (123) 456-7890
                  </span>
                </li>
                <li>
                  Email:{' '}
                  <span className='text-black md:inline block'>
                    info@journey.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h1 className='font-[cursive] pb-7  text-2xl md:text-4xl font-bold text-red-500'>
                Pages
              </h1>
              <ul className='md:flex pl-4 items-center gap-x-7 gap-y-4 flex-wrap text-xl font-semibold capitalize'>
                <li>
                  <NavLink to='/'>home</NavLink>
                </li>{' '}
                <li>
                  <NavLink to='/tours'>tours</NavLink>
                </li>
                <li>
                  <NavLink to='/about us'>about us</NavLink>
                </li>
                <li>
                  <NavLink to='/contact us'>contact us</NavLink>
                </li>
                <li>
                  <NavLink to='*'>404</NavLink>
                </li>
              </ul>
            </div>
            <div className='pt-10'>
              <h1 className='font-[cursive] pb-7  text-2xl md:text-4xl font-bold text-red-500'>
                Legal
              </h1>
              <ul className='md:flex pl-4 items-center gap-x-7 gap-y-4 flex-wrap text-xl font-semibold capitalize'>
                <li>
                  <NavLink to='/FAQ'>FAQ</NavLink>
                </li>{' '}
                <li>
                  <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to='/terms-conditions'>Teams & Conditions</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h1 className='font-[cursive]  text-2xl md:text-4xl font-bold text-red-500'>
                Follow Us{' '}
              </h1>
              <div className='pt-7'>
                <ul className='text-3xl text-red-500 grid  md:grid-cols-2 pl-4 items-center gap-4'>
                  <li>
                    <button>
                      <a
                        className='flex gap-4 items-center'
                        href='https://www.facebook.com/'
                      >
                        <FaFacebook />
                        <span className='text-black text-lg'>Facebook</span>
                      </a>
                    </button>
                  </li>
                  <li>
                    <button>
                      <a
                        className='flex gap-4 items-center'
                        href='https://www.twitter.com/'
                      >
                        <FaTwitter />
                        <span className='text-black text-lg'>Twitter</span>
                      </a>
                    </button>
                  </li>
                  <li>
                    <button>
                      <a
                        className='flex gap-4 items-center'
                        href='https://www.instagram.com/'
                      >
                        <FaInstagram />
                        <span className='text-black text-lg'>Instagram</span>
                      </a>
                    </button>
                  </li>{' '}
                  <li>
                    <button>
                      <a
                        className='flex gap-4 items-center'
                        href='https://www.tiktok.com/'
                      >
                        <FaTiktok />
                        <span className='text-black text-lg'>Tiktok</span>
                      </a>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='rounded-2xl mt-7 w-full max-h-full text-center p-4 bg-white'>
              <h1 className='text-lg font-[cursive] text-red-500'>
                Subscribe to our Newsletter
              </h1>
              <div>
                <input
                  type='text'
                  placeholder='123@email.com'
                  className='bg-gray-200 my-4 rounded-3xl p-4 w-full'
                />
                <button type='submit'
                className='w-full bg-red-500 text-white hover:bg-red-400 text-center rounded-3xl p-3'>
Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
