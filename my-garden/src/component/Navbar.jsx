import React, { use, useContext } from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { ThemeContext } from "./ThemeContext";
import "./Navbar.css"
const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);

  const { theme, toggleTheme } = use(ThemeContext);
  // console.log(user);

  const handleLogOut = () => {
    logOutUser();
  };

  const Links = (
    <>
      <li>
        <NavLink className="hover:text-[#14A800] font-bold" to={"/"}>
          Home
        </NavLink>
      </li>
     
      <li>
        <NavLink className="hover:text-[#14A800] font-bold" to={"/browsetips"}>
          Browse Tips
        </NavLink>
      </li>
       <li>
        <NavLink className="hover:text-[#14A800] font-bold" to={"/sharetips"}>
          Share a Garden Tips
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#14A800] font-bold" to={"/mytips"}>
          My Tips
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <Link to={"/"} className="flex items-center font-bold gap-2">
            <img className="size-15" src={Logo} alt="logo" />
            <p>Gardenia</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          <button
            className="btn btn-ghost"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <div
                data-tooltip-id="user"
                data-tooltip-content={user?.displayName}
                data-tooltip-place="top"
              >
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                />
              </div>
              <Tooltip id="user" style={{zIndex: "1000"}}/>
              <button
                className="btn bg-[#14A800] text-white"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn border-[#14A800] text-[#14A800]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
