import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'

const SingleQuestion = ({question,ans}) => {
 const [show, setShow] = useState(false)
  return (
    <div>
      <article className='mb-10'>
        <div className='flex items-center justify-between border-b pb-2'>
          <h1 className='text-red-500 font-semibold md:text-3xl   w-full'>
            {question}
          </h1>
          <button
            onClick={() => setShow(!show)}
            className={
              show
                ? 'text-2xl text-red-500 rotate-180 duration-700'
                : 'text-2xl text-red-500 duration-700 '
            }
          >
            <FaChevronDown />
          </button>
        </div>
        <p className={show ? 'pt-2 mb-4 md:text-lg' : 'hidden'}>{ans}</p>
      </article>
    </div>
  )
}

export default SingleQuestion