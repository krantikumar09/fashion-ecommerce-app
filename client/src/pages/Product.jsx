import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [products]);

  return productData ? (
    <div className="products mt-6 transition-opacity ease-in duration-300 opacity-100">
      <div className="container mx-auto px-4">
        {/* product data */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* product image */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[28%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer gap-2 sm:gap-0"
                  alt=""
                  loading="lazy"
                />
              ))}
            </div>

            <div className="w-full sm:w-[80%]">
              <img className="w-full h-auto" src={image} alt="" loading="lazy" />
            </div>
          </div>

          {/* product data */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3" loading="lazy" />
              <img src={assets.star_icon} alt="" className="w-3" loading="lazy" />
              <img src={assets.star_icon} alt="" className="w-3" loading="lazy"/>
              <img src={assets.star_icon} alt="" className="w-3" loading="lazy"/>
              <img src={assets.star_dull_icon} alt="" className="w-3" />
              <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-2xl xs:text-3xl font-medium">
              {currency}
              {productData.price}
            </p>
            <p className="mt-5 text-navbar-text font-normal text-xs xs:text-base leading-normal md:w-4/5">
              {productData.description}
            </p>

            <div className="flex flex-col gap-4 my-8">
              <p className="text-sm sm:text-base text-navbar-text font-normal">
                Select Size
              </p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-slate-100 text-xs sm:text-sm font-medium text-black ${
                      item === size ? "border-gold" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => addToCart(productData._id, size)}
              className="btn sm:btn-md bg-black text-white text-sm sm:text-base font-medium hover:bg-black outline-none border-none capitalize"
            >
              Add to Cart
            </button>

            <hr className="mt-8 sm:w-4/5 text-slate-200" />

            <div className="text-sm text-navbar-text flex flex-col gap-1 mt-4">
              <p className="text-sm font-normal text-navbar-text">
                100% Original products.
              </p>
              <p className="text-sm font-normal text-navbar-text">
                Cash on delivery is available on this product.
              </p>
              <p className="text-sm font-normal text-navbar-text">
                Easy return and exchange policy within 7 days.
              </p>
            </div>
          </div>
        </div>

        {/* ------- description and review ------- */}
        <div className="mt-20 mb-8">
          <div className="flex gap-2">
            <b className="border text-sm px-4 py-2 font-medium text-black">
              Description
            </b>
            <p className="border text-sm px-4 py-2 border-slate-200 font-normal text-navbar-text">
              Reviwes(122)
            </p>
          </div>

          <div className="flex flex-col gap-4  px-2 sm:px-6 py-4 text-sm leading-normal">
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <p>
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        </div>

        <hr className="text-slate-200 mb-16" />

        {/* ------- related products ------- */}
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
