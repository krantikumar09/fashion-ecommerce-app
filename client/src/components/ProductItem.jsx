import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`}>
      <div className="card card-compact bg-base-100  shadow-md">
        <figure className="overflow-hidden w-full h-[180px] xs:h-[200px] sm:h-[280px]">
          <img
            className="w-full h-full object-cover hover:scale-110 ease-in-out trasition  transition-transform duration-300"
            src={image[0]}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-md font-medium text-black line-clamp-2">{name}</h2>
          <p className="font-medium text-base text-gold">{currency}{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
