import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const res = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (res.data.success) {
        setOrders(res.data.orders.reverse);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const res = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );

      if (res.data.success) {
        await fetchAllOrders();
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h5>All orders</h5>

      <div>
        {orders.map((order, index) => (
          <div key={index}>
            <img src={assets.image_upload} alt="" />
            <div>
              {order.map((item, index) => {
                if (index === order.items.length - 1) {
                  return (
                    <p key={index}>
                      {item.name} x {item.quantity} <span>{item.size}</span>
                    </p>
                  );
                } else {
                  return (
                    <p key={index}>
                      {item.name} x {item.quantity} <span>{item.size}</span>,
                    </p>
                  );
                }
              })}
            </div>

            <p>{order.address.firstName + " " + order.address.lastName}</p>

            <div>
              <p>{order.address.street + ","}</p>
              <p>
                {order.address.city +
                  "," +
                  order.address.state +
                  " " +
                  order.address.country +
                  " " +
                  order.address.zipcode}
              </p>
            </div>

            <p>{order.address.phone}</p>

            <div>
              <p>Items: {order.items.length}</p>
              <p>Payment method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? "Done" : "Pending"}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            <p>
              {currency}
              {order.amount}
            </p>

            <select
              onChange={(event) => statusHandler(event, order._id)}
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled selected>
                Order status
              </option>
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipping</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivery</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
