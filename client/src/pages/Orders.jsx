import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { currency, products, backendUrl, token } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const res = await axios.post(
        backendUrl + "api/order/userorders",
        {},
        { headers: { token } }
      );

      if (res.data.success) {
        let allOrderItems = [];
        res.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrderItems.push(item);
          });
        });
        setOrderData(allOrderItems.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="orders mt-12">
      <div className="container mx-auto px-4">
        <Title title={"Orders"} />

        <div className="mt-16">
          {orderData.map((item, index) => (
            <div
              key={index}
              className="py-4 flex flex-col sm:flex-row border-t border-b justify-between items-center border-slate-200"
            >
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-20" src={item.image[0]} alt="" />

                <div>
                  <p>{item.name}</p>

                  <div className="flex items-center gap-3 mt-2 text-base text-navbar-text">
                    <p className="text-xl font-bold text-black">
                      {currency} {item.price}
                    </p>
                    <p className="text-sm text-navbar-text font-normal">
                      Quantity : {item.quantity}
                    </p>
                    <p className="text-sm text-navbar-text font-normal">
                      Size: {item.size}
                    </p>
                  </div>

                  <p className="mt-2 text-sm font-normal text-navbar-text">
                    Date :{" "}
                    <span className="text-slate-500">{new Date(item.date).toDateString()}</span>
                  </p>

                  <p className="mt-2 text-sm font-normal text-navbar-text">
                    Payment :{" "}
                    <span className="text-slate-500">{item.paymentMethod}</span>
                  </p>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-200"></p>
                  <p className="text-sm text-navbar-text font-normal">
                    {item.status}
                  </p>
                </div>

                <button onClick={loadOrderData} className="btn bg-tranparent  rounded-none text-black border- text-sm font-medium hover:bg-black hover:text-white transition ease-in-out">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
