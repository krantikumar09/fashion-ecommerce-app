import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";

const SpecialProduct = () => {
  const { categoryName } = useParams();
  const { backendUrl } = useContext(ShopContext);
  const [specialProduct, setSpecialProduct] = useState([]);

  const loadSpecialProducts = async () => {
    try {
      const res = await axios.get(
        backendUrl + `/api/product/special?categoryName=${categoryName}`
      );
      if (res.data.success) {
        setSpecialProduct(res.data.product);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    loadSpecialProducts();
  }, []);

  return (
    <div className="collection mt-8 mb-20">
      <div className="container mx-auto px-4">
        <Title title={categoryName}/> 
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-14">
          {specialProduct.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
