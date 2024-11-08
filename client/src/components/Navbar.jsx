import "../App.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const location = useLocation();
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="Navbar py-2 border-b border-gray">
      <div className="container mx-auto px-4">
        <div className="navbar p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="pe-4 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    color="#242323"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/collection">Collection</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <a
              className="text-xl sm:text-2xl font-[800] text-black flex items-center gap-2 sm:gap-4"
              href="/"
            >
              <img
                src={assets.logo}
                alt="logo"
                className="w-[18px] h-[20px] sm:w-[30px] sm:h-[28px] object-contain"
              />
              FASHION
            </a>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="flex gap-8">
              <li className="flex flex-col items-center">
                <NavLink
                  to="/"
                  className="text-base font-medium cursor-pointer text-navbar-text relative"
                >
                  Home
                  <hr className="w-2/4 border-none h-[1.5px] bg-navbar hidden" />
                </NavLink>
              </li>
              <li className="flex flex-col items-center">
                <NavLink
                  to="/collection"
                  className="text-base font-medium cursor-pointer text-navbar-text relative"
                >
                  Collection
                  <hr className="w-2/4 border-none h-[1.5px] bg-navbar hidden" />
                </NavLink>
              </li>
              <li className="flex flex-col items-center">
                <NavLink
                  to="/about"
                  className="text-base font-medium cursor-pointer text-navbar-text relative"
                >
                  About
                  <hr className="w-2/4 border-none h-[1.5px] bg-navbar hidden" />
                </NavLink>
              </li>
              <li className="flex flex-col items-center">
                <NavLink
                  to="/contact"
                  className="text-base font-medium cursor-pointer text-navbar-text relative"
                >
                  Contact
                  <hr className="w-2/4 border-none h-[1.5px] bg-navbar hidden" />
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {location.pathname === "/collection" && (
              <img
                onClick={() => setShowSearch(true)}
                src={assets.search_icon}
                alt="search"
                className="w-4 sm:w-5 cursor-pointer me-6"
              />
            )}
            {token ? (
              <div className="flex items-center gap-6">
                <div className="group relative">
                  <img
                    src={assets.profile_icon}
                    className="w-4 sm:w-5 cursor-pointer"
                    alt="user"
                  />
                  <div className="group-hover:block hidden absolute droupdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 text-navbar-text bg-white shadow-xl rounded-md">
                      <p
                        onClick={() => navigate("/myprofile")}
                        className="text-xs sm:text-base cursor-pointer py-1 sm:py-2 px-1 text-navbar-text hover:text-white hover:bg-navbar rounded-md"
                      >
                        My Profile
                      </p>
                      <p
                        onClick={() => navigate("/orders")}
                        className="text-xs sm:text-base cursor-pointer py-1 sm:py-2 px-1 text-navbar-text hover:text-white hover:bg-navbar rounded-md"
                      >
                        Orders
                      </p>
                      <p
                        onClick={logout}
                        className="text-xs sm:text-base cursor-pointer py-1 sm:py-2 px-1 text-navbar-text hover:text-white hover:bg-navbar rounded-md"
                      >
                        Logout
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/cart" className="relative">
                  <img
                    src={assets.cart_icon}
                    alt="cart"
                    className="w-4 sm:w-5 min-w-4 cursor-pointer"
                  />
                  <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                    {getCartCount()}
                  </p>
                </Link>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="btn btn-md bg-black text-white text-sm sm:text-base hover:bg-black border-none outline-none"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
