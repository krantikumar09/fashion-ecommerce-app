import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LatestCollection = () => {
  const { products, navigate } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
    
  }, [products]);

  return (
    <div className="Latest-Collection mt-32 mb-20">
      <Title title={"Latest Collection"} />

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-14">
        {latestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      <div className="w-full text-center mt-12">
        <button
          onClick={() => navigate('/collection')}
          className="btn sm:btn-md bg-transparent text-black text-sm sm:text-base font-medium hover:bg-transparent outline-none border-black capitalize"
        >
          View More <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default LatestCollection;
