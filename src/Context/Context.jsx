import { useContext, useState, createContext, useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import data from '../assets/Data/Data'
const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState({
    country: data[0].country ,
    img:data[0].img ,
    aos:data[0].aos
  })
  const [showModal, setShowModal] = useState(false)
  const [activeButton, setActiveButton] = useState(data[0].country)


  let showRef = useRef()

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto'

 AOS.init({
   duration: 1000,
   easing: 'ease-in-sine',
 })
    let handler = (e) => {
      if (!showRef.current.contains(e.target)) {
        setShowModal(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [showModal])
  return (
    <AppContext.Provider
      value={{
        backgroundImage,
        setBackgroundImage,
        showModal,
        setShowModal,
        showRef,
      activeButton,
      setActiveButton
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
