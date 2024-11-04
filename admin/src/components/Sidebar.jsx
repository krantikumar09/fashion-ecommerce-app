import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCircleCheck, faListUl } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <div className="sidebar w-[18%] min-h-screen">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className="flex items-center gap-3 btn hover:bg-gold border-none active:text-white"
          to="/add"
        >
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-base sm:text-xl text-black cursor-pointer"
          />
          <p className="hidden md:block text-sm text-black">Add Item</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 btn hover:bg-gold border-none"
          to="/list"
        >
          <FontAwesomeIcon
            icon={faListUl}
            className="text-base sm:text-xl text-black cursor-pointer"
          />
          <p className="hidden md:block text-sm text-black">List Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 btn hover:bg-gold border-none"
          to="/order"
        >
          <FontAwesomeIcon
            icon={faCartArrowDown}
            className="text-base sm:text-xl text-black cursor-pointer"
          />
          <p className="hidden md:block text-sm text-black">All Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
