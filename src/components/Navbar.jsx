import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="navbar p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="pe-4 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
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
                <a>Home</a>
              </li>
              <li>
                <a>Original</a>
              </li>
              <li>
                <a>Movies</a>
              </li>
              <li>
                <a>Series</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="text-xl font-[700] text-txt-color">MOVIES4U</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-7">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Original</a>
            </li>
            <li>
              <a>Movies</a>
            </li>
            <li>
              <a>Series</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="cursor-pointer">
            <button className="btn">Sign In</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
