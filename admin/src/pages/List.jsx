import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const res = await axios.get(backendUrl + "/api/product/list");

      if (res.data.success) {
        setList(res.data.products);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const res = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        {
          headers: { token },
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        await fetchList();
        console.log("delete..");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.success(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <h5 className="text-2xl text-black font-bold mb-6">All products</h5>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xs font-semibold text-black">Image</th>
              <th className="text-xs font-semibold text-black">Name</th>
              <th className="text-xs font-semibold text-black">Category</th>
              <th className="text-xs font-semibold text-black">Price</th>
              <th className="text-xs font-semibold text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    className="w-20"
                    src={item.image[0]}
                    alt="product image"
                    loading="lazy"
                  />
                </td>
                <td className="text-sm text-black font-normal">{item.name}</td>
                <td className="text-sm text-black font-normal">
                  {item.category}
                </td>
                <td className="text-sm text-black font-medium">
                  {currency}
                  {item.price}
                </td>
                <td
                  onClick={() => removeProduct(item._id)}
                  className="cursor-pointer text-center"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-base sm:text-xl text-black cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
