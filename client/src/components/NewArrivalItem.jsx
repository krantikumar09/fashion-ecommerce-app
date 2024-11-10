import React from 'react'
import { Link } from 'react-router-dom'

const NewArrivalItem = ({id, image, name, text, categoryName}) => {
  return (
    <Link to={`/special/${categoryName}`}>
        <div className='overflow-hidden w-full h-[300px] sm:h-[280px] md:h-[360px] rounded-xl'>
            <img src={image} className='w-full h-full object-cover  hover:scale-110 ease-in-out trasition' alt={name} loading="lazy"/>
        </div>
        <div className='mt-3'>
            <h5 className='text-xl sm:text-2xl font-medium text-black line-clamp-1'>{name}</h5>
            <p className='font-medium text-sm sm:text-base text-gold'>{text}</p>
        </div>
    </Link>
  )
}

export default NewArrivalItem