import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const sizeList = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryName, setCategoryName] = useState("hoodie and sweetshirt");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [trending, setTrending] = useState(false);
  const [sizes, setSizes] = useState([]);

  const handleSizeClick = (size) => {
    setSizes((currentSizes) =>
      currentSizes.includes(size)
        ? currentSizes.filter((s) => s !== size)
        : [...currentSizes, size]
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("categoryName", categoryName);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("trending", trending);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const res = await axios.post(backendUrl + "/api/product/add", formData, {
        headers: { token },
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setDescription("");
        setPrice("");
        setSizes("");
        setBestseller("");
        setTrending("");
        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-start gap-5"
    >
      <div>
        <h5 className="mb-2 text-md text-black font-medium">Upload Image</h5>

        <div className="flex  gap-2">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={!image1 ? assets.image_upload : URL.createObjectURL(image1)}
              alt=""
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>

          <label htmlFor="image2">
            <img
              className="w-20"
              src={!image2 ? assets.image_upload : URL.createObjectURL(image2)}
              alt=""
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>

          <label htmlFor="image3">
            <img
              className="w-20"
              src={!image3 ? assets.image_upload : URL.createObjectURL(image3)}
              alt=""
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>

          <label htmlFor="image4">
            <img
              className="w-20"
              src={!image4 ? assets.image_upload : URL.createObjectURL(image4)}
              alt=""
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>

      <div>
        <h5 className="mb-2 text-md text-black font-medium">Name</h5>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Type here"
          className="input input-bordered text-sm text-slate-500 font-medium w-full max-w-xs"
        />
      </div>

      <div>
        <h5 className="mb-2 text-md text-black font-medium">Description</h5>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Type here"
          className="input input-bordered text-sm text-slate-500 font-medium w-full max-w-xs"
        />
      </div>

      <div>
        <h5 className="mb-2 text-md text-black font-medium">Price</h5>
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="text"
          placeholder="Type here"
          className="input input-bordered text-sm text-slate-500 font-medium w-full max-w-xs"
        />
      </div>

      <div className="flex gap-6">
        <div>
          <h5 className="mb-2 text-md text-black font-medium">Category</h5>
          <select
            onChange={(e) => setCategoryName(e.target.value)}
            value={categoryName}
            className="select select-bordered text-sm text-slate-500 font-medium w-full max-w-xs"
          >
            <option disabled>Category Name</option>
            <option value="hoodie and sweetshirt">Hoode & Sweetshirt</option>
            <option value="coats and parks">Coats & Parks</option>
            <option value="tees and t-shirts">Tees & T-Shirts</option>
            <option value="Jeans">Jeans</option>
            <option value="Shirts">Shirts</option>
          </select>
        </div>

        <div>
          <h5 className="mb-2 text-md text-black font-medium">Category</h5>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="select select-bordered text-sm text-slate-500 font-medium w-full max-w-xs"
          >
            <option disabled selected>
              category
            </option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <h5 className="mb-2 text-md text-black font-medium">Sub category</h5>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="select select-bordered text-sm text-slate-500 font-medium w-full max-w-xs"
          >
            <option disabled selected>
              Sub category
            </option>
            <option value="Topwear">Top wear</option>
            <option value="Bottomwear">Bottom wear</option>
            <option value="Winterwear">Winter wear</option>
          </select>
        </div>
      </div>

      <div>
        <h5 className="mb-2 text-md text-black font-medium">Sizes</h5>

        <div className="flex gap-2">
          {sizeList.map((size, index) => (
            <div key={index} onClick={() => handleSizeClick(size)}>
              <p
                className={`px-3 py-1 cursor-pointer font-normal ${
                  sizes.includes(size)
                    ? "bg-slate-400 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2 flex-wrap">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      <div className="flex gap-2 mt-2 flex-wrap">
        <input
          onChange={() => setTrending((prev) => !prev)}
          checked={trending}
          type="checkbox"
          id="trending"
        />
        <label className="cursor-pointer" htmlFor="trending">
          Add to trending
        </label>
      </div>

      <button className="btn btn-md bg-black text-white text-base font-medium hover:bg-black mt-4 capitalize">
        add product
      </button>
    </form>
  );
};

export default Add;
