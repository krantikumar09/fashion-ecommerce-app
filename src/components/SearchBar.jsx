import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[location]) 

  return showSearch && visible ? (
    <div className='border-b bg-stone-100 text-center'>
        <div className="inline-flex items-center justify-center border border-black px-5 py-2 my-5 mx-3 rounded-full w-1/2 sm:w-4/2">
            <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm font-medium text-black' type="text"placeholder='Search here...' />
            <img className='w-4' src={assets.search_icon} alt="search icon" />
        </div>
        <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="close icon" />
    </div>
  ) : null;
}

export default SearchBar