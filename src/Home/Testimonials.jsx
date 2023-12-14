import data from '../assets/Data/Data2'
import Marquee from 'react-fast-marquee'
const Testimonials = () => {
  return (
    <div className='bg-[url(https://cdn.pixabay.com/photo/2017/08/04/14/40/porto-2580226_1280.jpg)] w-full h-full bg-no-repeat bg-cover bg-blend-overlay py-20 bg-white/40 relative before:absolute before:h-full before:bg-gradient-to-b before:from-transparent before:via-white before:to-white before:w-full  '>
      <div className='w-[90vw] font-[cursive] mx-auto'>
        <div className='text-center py-10 font-[cursive]'>
          <h1 className='text-2xl md:text-4xl font-bold text-red-500'>
            Testimonials
          </h1>
          <p className='mt-4 text-lg text-gray-500'>
            Our travelers' experiences
          </p>
        </div>
        <div>
          <Marquee speed={100}>
            {data.map((item, index) => {
              const { img, name, country, info } = item
              return (
                <article
                  data-aos='zoom-in'
                  className='text-center max-w-xl mx-2 h-[450px] space-y-7  p-4 rounded-3xl border bg-white'
                  key={index}
                >
                  <h1 className='text-red-500 text-3xl'>{country}</h1>
                  <p className='h-[224px] text-xl text-gray-400 '>{info}</p>
                  <div className='flex justify-center items-center gap-x-4'>
                    <img
                      src={img}
                      alt={name}
                      className='w-[100px] h-[100px] rounded-full object-cover'
                    />
                    <h1 className='text-lg text-red-500 font-thin'>{name}</h1>
                  </div>
                </article>
              )
            })}
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
