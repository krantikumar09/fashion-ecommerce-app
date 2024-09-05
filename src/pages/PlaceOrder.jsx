import React, { useContext, useState } from "react";
import Title from "../components/Title";
import Cart from "./Cart";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const { navigate } = useContext(ShopContext)

  return (
    <div className="place-order mt-12">
      <div className="container mx-auto px-4">
        <Title title={"Delivery Information"} />
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-8 min-h-[80vh] ">
          {/* left side */}
          <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First name"
                className="input input-bordered w-full"
              />

              <input
                type="text"
                placeholder="Last name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Street"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="City"
                className="input input-bordered w-full"
              />

              <input
                type="text"
                placeholder="State"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Zipcode"
                className="input input-bordered w-full"
              />

              <input
                type="text"
                placeholder="Country"
                className="input input-bordered w-full"
                defaultValue={"India"}
              />
            </div>

            <div>
              <input
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
                <button onClick={() => navigate('/orders')} className="btn rounded-none sm:btn-md bg-black text-white text-sm sm:text-base font-medium hover:bg-black uppercase">
                  place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
