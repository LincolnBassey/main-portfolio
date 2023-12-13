import React from "react";


export default function HeroText() {
  return (
    <div className="flex flex-col font-light gap-10 tracking-wide">
      <div className="flex flex-col md:gap-3">
        <span className="text-xl md:text-2xl ">
          Hi There, I'm <br /> 
          <span className="md:text-4xl text-2xl">
            Lincoln Bassey
            </span>
        </span>

        <span className="text-xl">
          A <span className="text-select font-bold">Frontend Developer</span>
        </span>
      </div>

      <p className="leading-7 hidden md:flex">
        Empower your digital presence with our frontend development expertise.
        Whether you're launching a new website, revamping an existing one, or
        exploring innovative web applications, our frontend developers are ready
        to turn your ideas into immersive, visually stunning, and highly
        functional realities.
      </p>
    </div>
  );
}
