import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const { backendUrl, token } = useContext(ShopContext);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  const getUserProfile = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/profile`, {
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
    } finally {
      setLoading(false); // Set loading to false after data fetch
    }
  };

  useEffect(() => {
    if (token) {
      getUserProfile();
    }
  }, [token]);

  return (
    <div className="collection mt-8">
      <div className="container mx-auto px-4">
        <Title title="My Profile" />
        
        <div className="mt-10 mb-20">
          <div className="flex items-center gap-3 mb-8">
            {loading ? (
              <Skeleton circle={true} height={64} width={64} />
            ) : (
              <img className="w-16" src={assets.user} alt="avatar" loading="lazy" />
            )}
            
            <div>
              <h1 className="text-xl text-black font-bold">
                {loading ? <Skeleton width={120} /> : profile.name}
              </h1>
              <p className="text-base text-slate-500 font-normal mb-0">
                {loading ? <Skeleton width={180} /> : profile.email}
              </p>
            </div>
          </div>
          <Link
            to="/orders"
            className="btn sm:btn-md bg-black text-white text-sm sm:text-base font-medium hover:bg-black uppercase"
          >
            {loading ? <Skeleton width={80} /> : "My Orders"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
