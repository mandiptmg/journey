import Team from './Team'
import Services from './Services'
import Contact from './Contact'
import Newsletter from './Newsletter'
const About = () => {
  return (
    <div className='bg-gradient-to-b from-transparent via-white to-white relative before:absolute before:left-0 before:w-full before:h-screen before:-z-10 before:bg-no-repeat before:bg-cover before:-top-20 before:bg-blend-overlay before:bg-white/80 before:bg-[url(https://media.istockphoto.com/id/619733490/photo/group-of-hikers-checking-route-on-map.jpg?s=612x612&w=is&k=20&c=P6kzcBP14GtwprKBNET2KSwzVJr-AgR-9LmTXQQGPJA=)]'>
      <div className='w-[88%] mx-auto'>
        <div data-aos='fade-up' className='font-[cursive] text-center py-10'>
          <h1 className='py-4 font-bold md:text-6xl text-4xl text-red-500 '>
            About Us.
          </h1>
          <p className='text-sm max-w-3xl font-normal text-black/80  mx-auto md:text-lg '>
            Welcome to Journey, your ultimate destination for immersive travel
            experiences and exploration. At Journey, we are dedicated to turning
            your travel dreams into unforgettable memories. Our website is your
            passport to adventure, where we provide a one-stop platform for all
            your travel needs.
          </p>
        </div>
        <div data-aos='fade-up'>
          <video
            autoPlay
            loop
            muted
            className='cursor-auto w-full h-full rounded-2xl block object-cover bg-[rgba(0, 0, 0, 0)]'
            style={{ objectPosition: '50% 50%' }}
          >
            <source
              src='https://framerusercontent.com/assets/NUcG6WdwdjGac1LMvztyuwVl5kc.mp4'
              type='video/mp4'
            ></source>
          </video>
        </div>
        <div className='font-[cursive] text-center py-10'>
          <h1 className='py-4 font-bold  text-4xl text-red-500 '>
            Who We Are?
          </h1>
          <p className='text-sm max-w-3xl font-normal text-black/80  mx-auto md:text-lg '>
            At Journey, we're a passionate team of seasoned travelers,
            wanderers, and adventure seekers. We understand the transformative
            power of travel and the joy it brings to those who dare to explore.
          </p>
          <img
            data-aos='zoom-in'
            src='https://framerusercontent.com/images/UAa4PQa61uaImNNMw4UUYcDOmC0.jpg?scale-down-to=2048'
            alt=''
            className='h-[450px] object-cover py-10 w-full rounded-[50px]'
          />
        </div>
      </div>{' '}
      <div>
        <Team />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Newsletter />
      </div>
      <div className='mx-auto max-w-3xl'>
        <Contact />
      </div>
    </div>
  )
}

export default About
