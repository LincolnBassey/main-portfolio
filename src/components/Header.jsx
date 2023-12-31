import "./Header.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaletteSharpIcon from "@mui/icons-material/PaletteSharp";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menubar, setMenubar] = useState(true);

  const menuClick = () => setMenubar(!menubar);

  return (
    <div className="header bg-black px-[10px] md:px-[20px] lg:[60px] w-full h-[50px] active">
      <div className="logo w- text-select font-extrabold text-sm md:text-xl lg:text-2xl">
        <a href="#hero" className="">
          Lin.<span className="text-[#ffa600] italic md:text-lg">portfolio</span>
        </a>
      </div>

      {/* ========Nav-menu======== */}
      <div
        className={
          menubar
            ? "flex nav-off top-[50px]  -right-52 md:static  fixed md:space-x-10 "
            : "flex nav-on  rounded-t-none md:rounded-none rounded-lg md:border-none top-[50px] right-0 md:static fixed md:space-x-10 "
        }
      >
        <ul
          className="navbar flex flex-col items-center md:flex-row md:w-fit
            w-[200px] md:py-0  py-10 gap-5"
        >
          <Link to='/'>
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/resume">
            <li>Resume</li>
          </Link>
          <Link to="/service">
            <li>Services</li>
          </Link>

          <Link to="/project">
            <li>Projects</li>
          </Link>
          {/* ========Button:start a project====== */}
          <button className=" bg-select md:ml-20 px-5 py-2 rounded-md md:px-4 md:py-1 text-sm font-semibold text-black md:rounded-xl">
            Start A Project
          </button>
        </ul>
      </div>

      {/* colorpallete and hambuger icon */}

      <div className=" flex flex-row-reverse gap-10">
        <div className="text-white">
          <ColorLensIcon className="text-purple-200" />
        </div>

        <div
          onClick={menuClick}
          className=" hambuger md:hidden flex flex-col gap-[5px] cursor-pointer"
        >
          <div className="w-6 h-[2px] rounded-lg transition-all text-white bg-white"></div>
          <div className="w-6 h-[2px] rounded-lg transition-all text-white bg-white"></div>
          <div className="w-6 h-[2px] rounded-lg transition-all text-white bg-white"></div>
        </div>
      </div>
    </div>
  );
}
