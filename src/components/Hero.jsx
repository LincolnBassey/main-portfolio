import "./Hero.scss";
import HeroText from "./Hero-text/HeroText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Myimage from "./MyHeroPic/Myimage";
import React from "react";
import Header from "./Header";

export default function Hero() {
  return (
    <div className=" h-[100vh] bg-black ">
    <Header />
    <div
      className="hero tracking-wider h-[90vh] text-white overflow-hidden flex items-center justify-center"
      id="hero"
    >
      
      <div className="flex flex-col md:flex-row items-center justify-center lg:px-[100px] md:gap-8 px-10">
        <div className="w-full flex justify-center">

      {/* ======heroimage========= */}
          <Myimage></Myimage>
        </div>
        {/* ==========hero write top=========== */}
        <div className="flex flex-col justify-center items-center md:items-start">
          {/* ======Hero write top====== */}
          <div className="font-semibold">
            <h1 className="">
              Hello, I'm{" "}
              <span className="text-[#ffa600] text-xl">Lincoln Bassey</span>
            </h1>
            <span className="font-extrabold text-select text-3xl">
              Web Developer
            </span>
          </div>
          <p className="font-light leading-5 text-center md:text-start text-xs">
            Whether you're launching a new website, revamping an existing one, or
            exploring innovative web applications. I am ready to turn your ideas
            into immersive, visually stunning, and highly functional realities.
          </p>
          {/* ===========Hire me and resume button========= */}
          <div className="flex pt-5 gap-5 text-select text-sm">
            <button className="border-select border-2 rounded-lg py-2 px-4">
              Hire Me
            </button>
            <button className="border-[#ffa600] border-2 text-[#ffa600] rounded-lg py-2 px-4">
              Get Resume
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
