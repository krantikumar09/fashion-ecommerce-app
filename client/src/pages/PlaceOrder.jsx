import React, { useContext, useState } from "react";
import Title from "../components/Title";
import Cart from "./Cart";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartItems,
    delivery_fee,
    getCartAmount,
    products,
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order._id,
      receipt: order.receipt,
      handler: async (res) => {
        try {
          const { data } = await axios(
            backendUrl + "api/order/verifyRazorpay",
            res,
            { headers: { token } }
          );

          if (data.success) {
            navigate('/orders');
            setCartItems({});
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod": {
          const res = await axios.post(
            backendUrl + "api/order/place",
            orderData,
            { headers: { token } }
          );

          if (res.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(res.data.message);
          }
          break;
        }

        case "stripe": {
          const resStripe = await axios.post(
            backendUrl + "api/order/place-stripe",
            orderData,
            { headers: { token } }
          );
          if (resStripe.data.success) {
            const { session_url } = resStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(resStripe.data.message);
          }
          break;
        }

        case "razorpay": {
          const resRazorpay = await axios.post(
            backendUrl + "api/order/place-razorpay",
            orderData,
            { headers: { token } }
          );
          if (resRazorpay.data.success) {
            initPay(resRazorpay.data.order);
          } else {
            toast.error(resRazorpay.data.message);
          }
          break;
        }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="place-order mt-12">
      <div className="container mx-auto px-4">
        <Title title={"Delivery Information"} />
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-8 min-h-[80vh] "
        >
          {/* left side */}
          <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
            <div className="flex gap-3">
              <input
                onChange={onChangeHandler}
                name="firstName"
                value={formData.firstName}
                type="text"
                placeholder="First name"
                className="input input-bordered w-full"
                required
              />

              <input
                onChange={onChangeHandler}
                name="lastName"
                value={formData.lastName}
                type="text"
                placeholder="Last name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <input
                onChange={onChangeHandler}
                name="email"
                value={formData.email}
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <input
                onChange={onChangeHandler}
                name="street"
                value={formData.street}
                type="text"
                placeholder="Street"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="flex gap-3">
              <input
                onChange={onChangeHandler}
                name="city"
                value={formData.city}
                type="text"
                placeholder="City"
                className="input input-bordered w-full"
                required
              />

              <input
                onChange={onChangeHandler}
                name="state"
                value={formData.state}
                type="text"
                placeholder="State"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="flex gap-3">
              <input
                onChange={onChangeHandler}
                name="zipcode"
                value={formData.zipcode}
                type="number"
                placeholder="Zipcode"
                className="input input-bordered w-full"
                required
              />

              <input
                onChange={onChangeHandler}
                name="country"
                value={formData.country}
                type="text"
                placeholder="Country"
                className="input input-bordered w-full"
                required
                defaultValue={"India"}
              />
            </div>

            <div>
              <input
                required
                onChange={onChangeHandler}
                name="phone"
                value={formData.phone}
                type="number"
                placeholder="Phone"
                className="input input-bordered w-full"
                maxLength={10}
              />
            </div>
          </div>

          {/* right side */}
          <div className="min-w-80">
            <div className="w-full">
              <CartTotal />

              <div className="flex items-center mt-10">
                <div
                  onClick={() => setMethod("stripe")}
                  className="flex items-center gap-3 p-2 px-3 cursor-pointer"
                >
                  <p
                    className={`min-w-3.5 h-3.5 border rounded-full ${
                      method === "sripte" ? "bg-green-400" : ""
                    }`}
                  ></p>
                  <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
                </div>

                <div
                  onClick={() => setMethod("razorpay")}
                  className="flex items-center gap-3 p-2 px-3 cursor-pointer"
                >
                  <p
                    className={`min-w-3.5 h-3.5 border rounded-full ${
                      method === "razorpay" ? "bg-green-400" : ""
                    }`}
                  ></p>
                  <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
                </div>

                <div
                  onClick={() => setMethod("cod")}
                  className="flex items-center gap-3 p-2 px-3 cursor-pointer"
                >
                  <p
                    className={`min-w-3.5 h-3.5 border rounded-full ${
                      method === "cod" ? "bg-green-400" : ""
                    }`}
                  ></p>
                  <p className="capitalize text-sm text-black font-medium">
                    cash on delivery
                  </p>
                </div>
              </div>

              <div className="w-full text-end mt-8">
                <button
                  type="submit"
                  // onClick={() => navigate("/orders")}
                  className="btn rounded-none sm:btn-md bg-black text-white text-sm sm:text-base font-medium hover:bg-black uppercase"
                >
                  place order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
