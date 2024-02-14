import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="p-5 flex flex-wrap justify-center items-center sm:justify-between border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <img
            src="https://www.google.com/logos/doodles/2024/valentines-day-2024-6753651837110186-sdrk.png"
            alt="google"
            className="h-[33px]"
          />
        </Link>
        <Search />
        <div className="flex space-x-7 items-center">
          <p>by Shubham</p>
          <img
            src="https://lh3.googleusercontent.com/ogw/ANLem4bC4qb4UqdHt0Jr5mlTRIZj-j9HuzceW_uYBM_P3Q=s32-c-mo"
            alt="profile-img"
            className="rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
