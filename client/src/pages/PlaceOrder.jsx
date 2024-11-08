import { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("");

  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
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
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + "/api/order/verifyRazorpay",
            response,
            { headers: { token } }
          );

          if (data.success) {
            navigate("/orders");
            setCartItems({});
          }
        } catch (error) {
          console.log(error);
          toast.error(response.data.message);
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

      if (method === "") {
        toast.error("Please select payment method!");
      }

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
            backendUrl + "/api/order/place",
            orderData,
            {
              headers: { token },
            }
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
            backendUrl + "/api/order/place-stripe",
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
            backendUrl + "/api/order/place-razorpay",
            orderData,
            { headers: { token } }
          );

          if (resRazorpay.data.success) {
            initPay(resRazorpay.data.order);
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
          className="flex flex-col md:flex-row justify-between  gap-4 pt-8 sm:pt-8 min-h-[80vh] mb-20 md:mb-0"
        >
          {/* left side */}
          <div className="flex flex-col gap-4 w-full md:max-w-[360px] lg:max-w-[600px] ">
            <div className="flex flex-col xs:flex-row gap-3">
              <input
                onChange={onChangeHandler}
                name="firstName"
                value={formData.firstName}
                type="text"
                placeholder="First name"
                className="input input-bordered w-full text-base font-normal text-black"
                required
              />

              <input
                onChange={onChangeHandler}
                name="lastName"
                value={formData.lastName}
                type="text"
                placeholder="Last name"
                className="input input-bordered w-full text-base font-normal text-black"
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
                className="input input-bordered w-full text-base font-normal text-black"
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
                className="input input-bordered w-full text-base font-normal text-black"
                required
              />
            </div>

            <div className="flex flex-col xs:flex-row gap-3">
              <input
                onChange={onChangeHandler}
                name="city"
                value={formData.city}
                type="text"
                placeholder="City"
                className="input input-bordered w-full text-base font-normal text-black"
                required
              />

              <input
                onChange={onChangeHandler}
                name="state"
                value={formData.state}
                type="text"
                placeholder="State"
                className="input input-bordered w-full text-base font-normal text-black"
                required
              />
            </div>

            <div className="flex flex-col xs:flex-row gap-3">
              <input
                onChange={onChangeHandler}
                name="zipcode"
                value={formData.zipcode}
                type="number"
                placeholder="Zipcode"
                className="input input-bordered w-full text-base font-normal text-black"
                required
              />

              <input
                onChange={onChangeHandler}
                name="country"
                value={formData.country}
                type="text"
                placeholder="Country"
                className="input input-bordered w-full text-base font-normal text-black"
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
                className="input input-bordered w-full text-base font-normal text-black"
                maxLength={10}
              />
            </div>
          </div>

          {/* right side */}
          <div className="md:min-w-72 mt-8 md:mt-0">
            <div className="w-full">
              <CartTotal />

              <div className="mt-8">
                <p className="text-sm sm:text-base text-black font-medium mb-2">
                  Payment option:
                </p>
                <div  className="flex flex-col items-start xs:flex-row sm:items-center gap-3">
                  <div
                    onClick={() => setMethod("stripe")}
                    className={`flex items-center text-xs xs:text-sm sm:text-base gap-3 p-2 px-3 cursor-pointer btn w-full xs:w-auto outline-none border-slate-500 bg-transparent  ${method === "stripe" ? "!bg-gold !border-gold" : ""}`}
                  >
                    <img className="h-5" src={assets.stripe_logo} alt="" />
                  </div>

                  <div
                    onClick={() => setMethod("razorpay")}
                    className={`flex items-center text-xs xs:text-sm sm:text-base gap-3 p-2 px-3 cursor-pointer btn w-full xs:w-auto outline-none border-slate-500 bg-transparent  ${method === "razorpay" ? "!bg-gold !border-gold" : ""}`}
                  >
                    <img
                      className="h-5"
                      src={assets.razorpay_logo}
                      alt=""
                    />
                  </div>

                  <div
                    onClick={() => setMethod("cod")}
                    className={`flex items-center text-xs xs:text-sm sm:text-base gap-3 p-2 px-3 cursor-pointer btn w-full xs:w-auto outline-none border-slate-500 bg-transparent  ${method === "cod" ? "!bg-gold !border-gold" : ""}`}
                  >
                    <p className="capitalize text-sm text-black font-medium">
                      cash on delivery
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full text-end mt-8">
                <button
                  type="submit"
                  // onClick={() => navigate("/orders")}
                  className="w-full btn sm:btn-md bg-black text-white text-xs xs:text-sm sm:text-base font-medium hover:bg-black outline-none border-none uppercase "
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
