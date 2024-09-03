import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, name, price}) => {

    const { currency } = useContext(ShopContext)

  return (
    <Link to={`/product/${id}`}>
        <div className='overflow-hidden w-full h-[300px] sm:h-[280px] md:h-[360px] rounded-xl'>
            <img src={image[0]} className='w-full h-full object-cover  hover:scale-110 ease-in-out trasition' alt={name} />
        </div>
        <div className='mt-3'>
            <h5 className='text-md font-medium text-black line-clamp-1'>{name}</h5>
            <p className='font-medium text-base text-gold'>{currency}{price}</p>
        </div>
    </Link>
  )
}

export default ProductItem