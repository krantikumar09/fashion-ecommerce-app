import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const { backendUrl, token } = useContext(ShopContext);
  const [profile, setProfile] = useState([]);

  const getUserProfile = async () => {
    try {
      const res = await axios.get(backendUrl + "/api/profile", {
        headers: { token },
      });
      if (res.data.success) {
        setProfile(res.data.profile);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserProfile(token);
    }
  }, []);

  return (
    <div className="collection mt-8">
      <div className="container mx-auto px-4">
        <Title title={"My Profile"} />

        <div className="mt-10 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <img className="w-16" src={assets.user} alt="avatar" />
            <div>
              <h1 className="text-xl text-black font-bold">
                {profile.name}
              </h1>
              <p className="text-base text-slate-500 font-normal mb-0">
                {profile.email}
              </p>
            </div>
          </div>
          <Link
            to="/orders"
            className="btn sm:btn-md bg-black text-white text-sm sm:text-base font-medium hover:bg-black uppercase"
          >
            My Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
