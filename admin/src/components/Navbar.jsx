import React from "react";

const Navbar = ({ setToken }) => {
  return (
    <div className="container mx-auto">
      <div className="navbar">
        <div className="flex-1">
          <div>
            <div className="flex items-center gap-4">
              <a className="font-bold text-3xl uppercase mb-0 pb-0">Fashion</a>
            </div>
            <p className="m-0 p-0">Admin</p>
          </div>
        </div>

        <div className="flex-none">
          <button onClick={() => setToken('')} className="btn btn-sm sm:btn-md bg-black text-white text-sm sm:text-base font-medium hover:bg-black">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
