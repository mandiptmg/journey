const data = [
  {
    name: 'Sarah Mitchell',
    position: 'Founder & CEO',
    img: 'https://framerusercontent.com/images/L5MgsRJtlxwo5bC6WhFgoUQU1ls.jpg?scale-down-to=512',
  },
  {
    name: 'David Lopez',
    img: 'https://framerusercontent.com/images/LY9rmcZSwRcmHKMqvYdvQPtjs.jpg?scale-down-to=512',
    position: 'Head of Operations',
  },
  {
    name: 'Marcus Carter',
    img: 'https://framerusercontent.com/images/Et4yrG5tUyFDVawryUnIymqj4.jpg?scale-down-to=512',
    position: 'Travel Specialist',
  },
  {
    name: 'Lisa Adams',
    img: 'https://framerusercontent.com/images/RdpVeoaOnuQ4vzBL1UMcY0I7qM.jpg?scale-down-to=512',
    position: 'Travel Safety & Culture Specialist',
  },
  {
    name: 'Jennifer Hayes',
    img: 'https://framerusercontent.com/images/kU5FsTtu1seXS4P22XBithkgtQ4.jpg?scale-down-to=512',
    position: 'Customer Support Manager',
  },
]
const Team = () => {
  return (
    <div className=' bg-[url(https://img.freepik.com/free-photo/herd-cattle-shepherd-grazing-green-fields_181624-29867.jpg?w=826&t=st=1702101374~exp=1702101974~hmac=003b25d77576422eaff0c1455d10826a1ccc564bc6532aaa7e9b0f8d4df4aafe)] bg-no-repeat bg-cover bg-blend-overlay bg-white/80'>
      <div className='font-[cursive] text-center py-10'>
        <h1 className='py-4 font-bold  text-4xl text-red-500 '>
          Meet Our Team
        </h1>
        <p className='text-sm max-w-3xl font-normal text-black/80  mx-auto md:text-lg '>
          Our team members have traversed the globe, from the bustling streets
          of Tokyo to the serene landscapes of Iceland, and we bring our
          collective knowledge to help you navigate the world of travel.
        </p>
      </div>
      <div className="py-20 md:max-w-5xl flex-wrap mx-auto font-[cursive] grid md:flex items-center gap-7 justify-center">
       {data.map((item,index)=>{
        return(
         <article key={index} className="text-center">
          <img src={item.img} alt="" className="w-[200px] mx-auto h-[200px] object-cover rounded-full" />
          <h1 className="text-xl capitalize text-red-500 font-semibold">{item.name}</h1>
          <p className="text-gray-400">{item.position}</p>
         </article>
        )
       })}
      </div>
    </div>
  )
}

export default Team
