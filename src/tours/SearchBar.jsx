// SearchFilterComponent.js
import  { useState } from 'react';
import {FaSearch} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../Context/Context';

const SearchFilterComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const {setShowModal} = useGlobalContext()
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>{
   return  searchTerm.toLowerCase() === '' ? null : item.desc.toLowerCase().includes(searchTerm);
  }
  );

  return (
    <div className='border bg-white w-full h-full border-black/20 rounded-3xl'>
      <div className='flex  py-2 px-4  gap-x-1 items-center'>
        <FaSearch className='text-red-600 text-lg' />
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearch}
          className=' rounded-3xl outline-none  w-full py-2 px-4'
        />
      </div>
      <article className='space-y-2 rounded-b-3xl bg-gray-100'>
        {searchTerm !== '' ? (
          filteredData.length === 0 ? (
            <div className='text-gray-400 text-center py-4'>No Result</div>
          ) : (
            filteredData.map((item, index) => (
              <NavLink onClick={()=>setShowModal(false)} key={index} to={item.to}>
                <ul className='text-left border-t px-4 py-3'>
                  <li className='text-base text-black/70'>{item.desc}</li>
                  <li className='text-xs text-gray-400'>/tour/{item.visit}</li>
                </ul>
              </NavLink>
            ))
          )
        ) : // Display nothing when the search term is empty
        null}
      </article>
    </div>
  )
};

export default SearchFilterComponent;
