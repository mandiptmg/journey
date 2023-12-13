import SearchFilterComponent from '../tours/SearchBar'
import data from '../assets/Data/Data'
import { useGlobalContext } from '../Context/Context'

const Modal = () => {
  const { showModal, showRef } = useGlobalContext()

  return showModal ? (
    <div className='relative'>
      <div className='fixed z-20  top-0 bg-black/50 h-screen left-0 w-full mx-auto'>
        <div
          ref={showRef}
          className='mt-40 w-full max-w-md md:max-w-lg mx-auto'
        >
          <SearchFilterComponent data={data} />
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
