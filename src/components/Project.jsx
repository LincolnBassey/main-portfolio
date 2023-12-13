import "./Project.scss";
import Underline from "./dynamicstyle/Underline";
import React from "react";
import { useState, useEffect } from "react";
import ProjectNav from "./projectList/ProjectNav";

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
    <div className="project flex flex-col  items-center -[100vh]" id="project">
      {/* ==========Service header======== */}
      <div className="flex pb-10 md:pb-5 gap-1 md:gap-2 tracking-widest items-center justify-center flex-col">
        <h1 className=" md:font-extrabold font-bold lg:text-xl text-select ">
          Projects
        </h1>
        <p className="text-white font-sans text-xs">Check in My Latest Works</p>
        <Underline></Underline>
      </div>

      {/* ===========Work nav-menu============ */}
      <div className="nav-menu  md:pb-10 pb-5 flex justify-center items-center">
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

      <div className="container flex flex-wrap gap-5 justify-center w-[80%] items-center ">
        {data.map((d) => (
          <div className="item bg-blue-300 relative overflow-hidden border-2 border-[#262626] rounded-lg flex   items-center justify-center w-[350px] h-[200px] md:w-[250px] md:h-[150px] ">
            <img src={d.img} alt="" className="object-contain" />
            <p className="absolute">{d.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
