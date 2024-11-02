import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory}) => {

    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {

        if (products.length > 0) {
            let productCopy = products.slice();

            productCopy = productCopy.filter((item) => category === item.category);
            productCopy = productCopy.filter((item) => subCategory === item.subCategory);
            
            setRelated(productCopy.slice(0, 4))

        }

    }, [products])
  return (
    <div className='mt-24 mb-20'>
        <Title title={"Related Products"}/>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-14">
            {
                related.map((item, index) => ((
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
                )))
            }
        </div>
    </div>
  )
}

export default RelatedProducts