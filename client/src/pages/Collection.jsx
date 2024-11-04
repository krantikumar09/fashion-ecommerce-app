import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import ProductItem from "../components/ProductItem";
import Newsletter from "../components/Newsletter";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct=  () => {
    let fqCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fqCopy.sort((a, b) => (a.price - b.price)))
        break;
      case 'high-low':
        setFilterProducts(fqCopy.sort((a, b) => (b.price - a.price)))
        break;
      default:
        applyFilter();
        break;
    }
  } 
 
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  },[sortType])


  return (
    <div className="collection mt-8">
      <div className="container mx-auto px-4">
        <Title title={"All Collection"} />
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 mb-20">
          {/* filter option */}
          <div className="min-w-56 mb-5 sm:mb-0">
            <p
              onClick={() => setShowFilter(!showFilter)}
              className="my-2 text-xl font-medium flex items-center text-black cursor-pointer gap-2 uppercase"
            >
              filters{" "}
              <img
                className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
                src={assets.dropdown_icon}
                alt=""
              />
            </p>

            {/* category filter */}
            <div
              className={`border border-gray-300 pl-5 py-3 mt-6 ${
                showFilter ? "" : "hidden" 
              } sm:block`}
            >
              <p className="mb-3 text-md font-medium text-black capitalize">
                categories
              </p>

              <div className="flex flex-col gap-2 text-sm font-normal text-gray-700">
                <p className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    value={"Men"}
                    onChange={toggleCategory}
                  />{" "}
                  Men
                </p>

                <p className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    value={"Women"}
                    onChange={toggleCategory}
                  />{" "}
                  Women
                </p>

                <p className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    value={"Kids"}
                    onChange={toggleCategory}
                  />{" "}
                  Kids
                </p>
              </div>
            </div>

            {/* sub category */}
            <div
              className={`border border-gray-300 pl-5 py-3 mt-6 ${
                showFilter ? "" : "hidden"
              } sm:block`}
            >
              <p className="mb-3 text-md font-medium text-black capitalize">
                sub categories
              </p>

              <div className="flex flex-col gap-2 text-sm font-normal text-gray-700">
                <p className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    value={"Topwear"}
                    onChange={toggleSubCategory}
                  />{" "}
                  Topwear
                </p>

                <p className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    value={"Bottomwear"}
                    onChange={toggleSubCategory}
                  />{" "}
                  Bottomwear
                </p>

                <p className="flex gap-2">
                  <input
                    className="w-3"
                    type="checkbox"
                    value={"Winterwear"}
                    onChange={toggleSubCategory}
                  />{" "}
                  Winterwear
                </p>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex-1">
            <div className="flex justify-end text-base sm:text-2xl mb-5">
              {/* product sort */}
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="border text-xs font-medium p-2"
              >
                <option value="relavent">Sort by: Relavent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>

            {/* map products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 gap-y-6">
              {filterProducts.map((item, index) => (
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
      </div>

      <Newsletter />
    </div>
  );
};

export default Collection;
