import "./Project.scss";
import Underline from "./dynamicstyle/Underline";
import React from "react";
import { useState, useEffect } from "react";
import ProjectNav from "./projectList/ProjectNav";
import Header from "./Header";
import { GitHub } from "@mui/icons-material";

export default function Project() {
  const [select, setActive] = useState("work");
  const [data, setData] = useState([]);

  const list = [
    { id: "work", title: "All Work" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile" },
    { id: "design", title: "Design" },
  ];

  const pwork = [
    {
      id: 1,
      img: "./src/assets/workimage/1702239149552.jpg",
      title: "Web App ",
    },

    {
      id: 3,
      img: "./src/assets/workimage/1702239149567.jpg",
      title: "Branding Design",
    },
    {
      id: 4,
      img: "./src/assets/workimage/1702239149579.jpg",
      title: "Mobile Home Screen",
    },
    {
      id: 5,
      img: "./src/assets/workimage/1702239149604.jpg",
      title: "Simple E-comerce Webpage",
    },
    {
      id: 6,
      img: "./src/assets/workimage/1702239149814.jpg",
      title: "Portfolio webpage",
    },
  ];

  const pweb = [
    {
      id: 6,
      img: "./src/assets/workimage/1702239149814.jpg",
      title: "Portfolio webpage",
    },
    {
      id: 5,
      img: "./src/assets/workimage/Fauxica homepage.png",
      title: "Simple E-comerce Webpage",
    },
    {
      id: 1,
      img: "./src/assets/workimage/1702239149552.jpg",
      title: "Web App ",
    },
  ];
  const pmobile = [
    {
      id: 4,
      img: "./src/assets/workimage/1702239149579.jpg",
      title: "Mobile Home Screen",
    },
    {
      id: 5,
      img: "./src/assets/workimage/1702239149604.jpg",
      title: "Simple E-comerce Webpage",
    },
  ];

  const pdesign = [
    {
      id: 1,
      img: "./src/assets/workimage/1702239149552.jpg",
      title: "Web App ",
    },
    {
      id: 4,
      img: "./src/assets/workimage/1702239149579.jpg",
      title: "Mobile Home Screen",
    },
  ];

  useEffect(() => {
    switch (select) {
      case "work":
        setData(pwork);

        break;
      case "mobile":
        setData(pmobile);

        break;
      case "web":
        setData(pweb);

        break;
      case "design":
        setData(pdesign);

        break;

      default:
        setData(pwork);
    }
  }, [select]);

  return (
    
    <div className="project text-white flex flex-col bg-black items-center md:h-[100vh] h-full" id="project">
      {/* ==========Service header======== */}
      <div className="flex pb-5 md:pb-5 md:gap-2 tracking-widest items-center justify-center flex-col">
        <h1 className=" md:font-extrabold font-bold lg:text-lg text-select ">
          Projects
        </h1>
        <p className="text-white pb-[6px] font-sans text-xs">Check in My Latest Works</p>
        <Underline></Underline>
      </div>

      {/* ===========Work nav-menu============ */}
      <div className="nav-menu  md:pb-8 pb-5 flex justify-center items-center">
        {list.map((item) => (
          <ProjectNav
            title={item.title}
            id={item.id}
            active={select === item.id}
            setActive={setActive}
            handleclick={() => setActive(item.id)}
          ></ProjectNav>
        ))}
      </div>

      {/* ========= my works========== */}

      <div className="container flex flex-wrap gap-5 justify-center w-[80%] items-center">
        {data.map((d) => (

          <div className="flex flex-col gap-  px-">
            <div className="item bg-blue-300  relative overflow-hidden border-2 border-[#262626] rounded-t-xl flex items-center justify-center w-[400px] h-[250px] md:w-[280px] md:h-[150px] ">
              <img src={d.img} alt="" className="" />
              <p className="absolute text-[red]">{d.title}</p>
            </div>
            {/* =======Demo and view code btn========= */}
            <div  className="flex gap-2 text-center justify-center">
              <a href="#" className="px- py-2 rounded-bl-xl w-full  font-semibold bg-[red]">View Live Demo </a>
              <a href="#" className="px- py-2 rounded-br-xl w-full font-semibold bg-[red]">View Code <GitHub className="text-select"></GitHub> </a>
            </div>
          </div>
        ))}
    </div>
      </div>
  );
}
