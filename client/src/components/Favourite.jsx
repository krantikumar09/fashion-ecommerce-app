import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import NewArrivalItem from './NewArrivalItem';

const Favourite = () => {
    const { offerProducts } = useContext(ShopContext);
    const [favProduct, setFavProduct] = useState([]);

    useEffect(() => {
        const products = offerProducts.filter((item) => item.youngsfavourite)
        setFavProduct(products)
    }, [])
  return (

    <div className='favourite mt-32 mb-20'>
        <Title title={"Young's Favourite"}/> 

        <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 mt-16">
            {
                favProduct.map((item, index) => (
                    <NewArrivalItem key={index} id={item.id} image={item.image} name={item.name} text={item.description}/>
                ))
            }
        </div>
    </div>
  )
}

export default Favourite