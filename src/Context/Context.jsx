import { useContext, useState, createContext, useEffect, useRef } from 'react'

const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState({
    country: 'iceland',
    img: 'https://res.cloudinary.com/icelandtours/g_auto,f_auto,c_fill,w_3840,q_auto:best/flatey_island_summer_e2506cca1c.jpg',
  })
  const [showModal, setShowModal] = useState(false)
  let showRef = useRef()

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto'

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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
