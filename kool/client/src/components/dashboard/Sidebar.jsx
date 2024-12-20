import React from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsFileEarmarkText } from "react-icons/bs";
import { HiOutlineUsers, HiOutlineLogout } from "react-icons/hi";
import { IoRestaurantOutline } from "react-icons/io5";
import { Logo } from "..";
import { Avatar as MuiAvatar } from "@mui/material";

const index = ({ isCollapsed, setIsCollapsed }) => {
 


  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("persist", false);
    navigate("/auth/signin");
  };

  return (
    <motion.aside className="basis-0 h-screen p-6 flex flex-col justify-between bg-[#f4f4f4] border-r-2 border-gray-200">
      <div className="flex flex-col gap-6">
        <div
          className={`flex ${
            isCollapsed ? "flex-col" : "flex-row"
          } justify-between items-center`}
        >
          <Logo hideName={isCollapsed ? true : false} />
          {isCollapsed && <hr className="w-full my-6" />}
          <FiMenu
            className="cursor-pointer"
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        </div>
        <hr />
        {/* Profile details */}
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12">
            <MuiAvatar
              sx={{ width: 48, height: 48 }}
              className="rounded-full border-primary border-2 -mr-2"
            />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col gap-1">
            </div>
          )}
        </div>
        <hr />
        {/* Navbar links */}
        <div className="flex flex-col gap-6 pl-2">
          <NavLink
            to={"/"}
            className={`rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-primaryLight p-2 flex gap-2 items-center text-gray-600 hover:text-light ${
              isCollapsed && "justify-center"
            }`}
          >
            <BiHomeAlt2 />
            {!isCollapsed && "Home"}
          </NavLink>
          <NavLink
            to={"/dashboard/users"}
            className={`rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-primaryLight p-2 flex gap-2 items-center text-gray-600 hover:text-light ${
              isCollapsed && "justify-center"
            }`}
          >
            <HiOutlineUsers />
            {!isCollapsed && "Users"}
          </NavLink>
          <NavLink
            to={"/dashboard/recipes"}
            className={`rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-primaryLight p-2 flex gap-2 items-center text-gray-600 hover:text-light ${
              isCollapsed && "justify-center"
            }`}
          >
            <IoRestaurantOutline />
            {!isCollapsed && "Recipes"}
          </NavLink>
          <NavLink
            to={"/dashboard/blogs"}
            className={`rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-primaryLight p-2 flex gap-2 items-center text-gray-600 hover:text-light ${
              isCollapsed && "justify-center"
            }`}
          >
            <BsFileEarmarkText />
            {!isCollapsed && "Blogs"}
          </NavLink>
        </div>
      </div>
      <hr />
      <div
        className={`mb-4 flex gap-2 items-center text-gray-600 rounded-lg hover:bg-gradient-to-r hover:from-primary hover:to-primaryLight hover:text-light p-2 cursor-pointer ml-2 ${
          isCollapsed && "justify-center"
        }`}
        onClick={handleLogout}
      >
        <HiOutlineLogout />
        {!isCollapsed && "Logout"}
      </div>
    </motion.aside>
  );
};

export default index;
