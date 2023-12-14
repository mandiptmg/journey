import { NavLink } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { HiBars2 } from 'react-icons/hi2'
import { FaTimes } from 'react-icons/fa'
import { useEffect, useState } from "react"
import { useGlobalContext } from "../Context/Context"
const Navbar = () => {
 const [open,setOpen] = useState(false);
 const [navbar,setNavbar] = useState(false)
 const {setShowModal} = useGlobalContext()
 useEffect(()=>{
  const handleChange =()=>{
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  const handleWidthChange = ()=>{
    if (window.innerWidth >= 768){
      setOpen(false)
    }
  }
  handleWidthChange()
  handleChange()
  window.addEventListener('resize',handleWidthChange)
  window.addEventListener('scroll',handleChange)
  },[])
  return (
    <div data-aos='zoom-in' data-aos-delay='1100'
      className={
        navbar ? 'sticky duration-500  shadow-2xl z-20 top-0 bg-white' : 'sticky z-10'
      }
    >
      <nav className='items-center  h-20 px-7 md:px-28 mx-auto justify-between flex'>
        <div>
          <h1 className='font-bold text-red-500 text-2xl'>
            <NavLink onClick={()=>setOpen(false)} className='active' to='/'>
              Journey
            </NavLink>
          </h1>
        </div>
        <div className={navbar ? 'hidden opacity-1 md:block' : 'opacity-0'}>
          <ul className='flex gap-4 items-center'>
            <li>
              <NavLink className='active' to='/tours'>
                Tours
              </NavLink>
            </li>
            <li>
              <NavLink className='active' to='/About us'>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className='active' to='/contact us'>
                Contact US
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='hidden md:block'>
          <div className='flex items-center gap-x-7 '>
            <select
              className='border p-1 bg-transparent border-black rounded-lg'
              name='english'
              id=''
            >
              <option value='english'>English</option>
            </select>
            <button onClick={() => setShowModal(true)}>
              <FaSearch className='text-lg' />
            </button>
          </div>
        </div>
        <div className='md:hidden'>
          <button
            onClick={() => setOpen(!open)}
            className='md:hidden text-3xl duration-1000 '
          >
            {open ? <FaTimes /> : <HiBars2 />}
          </button>
        </div>
      </nav>
      <div  className={open ? 'bg-white ' : 'hidden'}>
        <div className='flex flex-col-reverse items-center gap-y-7 '>
          <select
            className='border p-1 bg-transparent border-black rounded-lg'
            name='english'
            id=''
          >
            <option value='english'>English</option>
          </select>
          <button onClick={() => setShowModal(true)}>
            <FaSearch className='text-lg' />
          </button>
        </div>
        <div>
          <ul className='flex py-4 justify-center flex-col gap-4 items-center'>
            <li>
              <NavLink onClick={()=>setOpen(false)} className='active' to='/tours'>
                Tours
              </NavLink>
            </li>
            <li>
              <NavLink onClick={()=>setOpen(false)} className='active' to='/About us'>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink onClick={()=>setOpen(false)} className='active' to='/contact us'>
                Contact US
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar