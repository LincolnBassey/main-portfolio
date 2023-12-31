import React from "react";
import "./Resume.scss";
import SchoolIcon from "@mui/icons-material/School";
import HistoryIcon from "@mui/icons-material/History";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { useState, useEffect } from "react";
import Underline from "./dynamicstyle/Underline";
import ResumeNav from "./resume comp/ResumeNav";

export default function Resume() {
  // ======= for education click on small screen===========
  const [edu, setEdu] = useState(true);
  // ===========for resume nav menu on md screen==========
  const [resumenav, setResumenav] = useState("education");
  const [data, setData] = useState([]);

  const handleclick = () => setEdu(!edu);

  useEffect(() => {
    switch (resumenav) {
      case "education":
        setData(education);
        break;
      case "work":
        setData(job);
        break;
      case "programming":
        setData(skill);
        break;

      default:
        setData(education);
    }
  }, [resumenav]);

  const resumemenu = [
    { id: "education", title: "Education" },
    { id: "work", title: "Work History" },
    { id: "programming", title: "Programming Skills" },
    { id: "professional", title: "Professional Skills" },
  ];

  const education = [
    {
      id: "1",
      school: "University of Uyo, Akwa Ibom State",
      date: "2014-2019",
      degree: "B.sc in Electrical Engineer",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe delectus illo ut repellendus odit fuga nam quibusdam velit voluptates?",
    },
    {
      id: "2",
      school: "Community Development Agency, Akwa Ibom State",
      date: "2008-2013",
      degree: "Senior Secondary School Certificate",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe delectus illo ut repellendus odit fuga nam quibusdam velit voluptates?",
    },
    {
      id: "3",
      school: "Government Primary School, Akwa Ibom State",
      date: "2003-2008",
      degree: "First School Leaving Certification",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe delectus illo ut repellendus odit fuga nam quibusdam velit voluptates?",
    },
  ];

  const job = [
    {
      id: "1",
      company: "Laskill Traning Center, Akwa Ibom State",
      workdate: "2022-2023",
      position: "Frontend Web Developer",
      responsibilty:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe delectus illo ut repellendus odit fuga nam quibusdam velit voluptates?",
    },
    {
      id: "2",
      company: "Patrick Digital Work, Akwa Ibom State",
      workdate: "2021-2022",
      position: "Social Digital Marketer",
      responsibilty:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe delectus illo ut repellendus odit fuga nam quibusdam velit voluptates?",
    },
    {
      id: "3",
      company: "Fisher Hotel, Nepaline Uyo",
      workdate: "2021-2022",
      position: "Supervisor",
      responsibilty:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi saepe delectus illo ut repellendus odit fuga nam quibusdam velit voluptates?",
    },
  ];

  const skill = [
    {
      id: "1",
      skillpercent: "90%",
      skillname: "HTML njj ",
      circlePercent:
        "circle-percent rounded-full  flex items-center justify-center text-center",
      innercircle:
        "inner-circle bg-black rounded-full flex items-center justify-center ",
    },
    {
      id: "2",
      skillpercent: "90%",
      skillname: "HTML njj ",
      circlePercent:
        "circle-percent rounded-full  flex items-center justify-center text-center",
      innercircle:
        "inner-circle bg-black rounded-full flex items-center justify-center ",
    },
    {
      id: "3",
      skillpercent: "90%",
      skillname: "HTML njj ",
      circlePercent:
        "circle-percent rounded-full  flex items-center justify-center text-center",
      innercircle:
        "inner-circle bg-black rounded-full flex items-center justify-center ",
    },
    {
      id: "4",
      skillpercent: "90%",
      skillname: "HTML njj ",
      circlePercent:
        "circle-percent rounded-full  flex items-center justify-center text-center",
      innercircle:
        "inner-circle bg-black rounded-full flex items-center justify-center ",
    },
    {
      id: "5",
      skillpercent: "90%",
      skillname: "HTML njj ",
      circlePercent:
        "circle-percent rounded-full  flex items-center justify-center text-center",
      innercircle:
        "inner-circle bg-black rounded-full flex items-center justify-center ",
    },
    {
      id: "6",
      skillpercent: "90%",
      skillname: "HTML njj ",
      circlePercent:
        "circle-percent rounded-full  flex items-center justify-center text-center",
      innercircle:
        "inner-circle bg-black rounded-full flex items-center justify-center ",
    },
  ];

  return (
    <div className="resume flex text-white bg-black items-center md:justify-center md:h-[100vh] flex-col">
      {/*=========== resume header============ */}
      <div
        className="flex pb-10 md:pb-5 gap-2 tracking-widest items-center justify-center flex-col"
        id="service"
      >
        <h1 className=" md:font-extrabold font-bold lg:text-xl text-select ">
          Resume
        </h1>
        <p className="text-white font-sans text-xs">My formal Bio Details</p>
        <Underline></Underline>
      </div>
      {/* ============left-right col================ */}
      <div className="left-right bg-red-40 flex md:flex-row flex-col gap-5 items-center justify-center lg:w-[80%] md:w-[90%] w-[95%] md:h-[80vh]  lg:h-[60vh]">
        {/* ===========left col================= */}
        <div className=" hidden left-col w-1/2  md:w-[250px] items-center justifty-center md:h-[50%] lg:h-[70%] md:flex">
          {/* ============left icon========== */}
          <div className="left-icon flex flex-col items-center  justify-center h-full bg-[#0db064b7]  gap-5">
            <div className="">
              <SchoolIcon></SchoolIcon>
            </div>
            <div className="P">
              <HistoryIcon></HistoryIcon>
            </div>
            <div className="P">
              <IntegrationInstructionsIcon></IntegrationInstructionsIcon>
            </div>

            <div className="P">
              <AccessibilityNewIcon></AccessibilityNewIcon>
            </div>
          </div>
          {/* ==============left nav=============== */}
          <div className="left-nav h-full pr-8 text- font-bold tracking-wider flex flex-col justify-center  gap-4">
            {resumemenu.map((menu) => (
              <ResumeNav
                id={menu.id}
                title={menu.title}
                active={resumenav === menu.id}
                resumeclick={() => setResumenav(menu.id)}
              ></ResumeNav>
            ))}
          </div>
        </div>
        <div className="w-full md:w-fit">
          {/* =======right col============== */}
          <div className="right-col  md:flex flex-col hidden gap-3 justify-evenl items-cente text-sm md:w-[350px]  lg:w-[500px]  h-ful">
            {/* // ============Education write top============ */}
            <div>
              {data.map((d) => (
                <div className={" education hidde flex flex-col gap-"}>
                  <div className="uni flex flex-wrap justify-between">
                    <h1 className="font-semibold text-orange">{d.school}</h1>
                    <div className="date px-4 py- rounded-xl bg-orange font-serif">
                      {d.date}
                    </div>
                  </div>
                  <div className="degree font-semibold">{d.degree}</div>
                  <div className="degree">
                    <p>{d.text}</p>
                  </div>
                </div>
              ))}

              {/* ==============work history writetop======== */}

              {data.map((d) => (
                <div className="work flex flex-col hidde">
                  <div className="flex flex-wrap justify-between">
                    <h1 className="font-semibold text-orange">{d.company}</h1>
                    <div className="date px-4 rounded-xl bg-orange font-serif">
                      {d.workdate}
                    </div>
                  </div>
                  <div className="position font-semibold">{d.position}</div>
                  <div>
                    <p>{d.responsibilty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ================programing skill write top============ */}

          <div className=" md:grid grid-cols-3 hidden  gap-">
            {data.map((d) => (
              <div className="flex flex-col items-center">
                <div className={d.circlePercent}>
                  <div className={d.innercircle}>
                    <span className="percent-num font-bold ">
                      {d.skillpercent}
                    </span>
                  </div>
                </div>
                <div className="text-cente font-semibold">
                  <span>{d.skillname}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
{/* ==============Resume section for small screen============== */}

<div className="md:hidden flex flex-col px-8 gap-8">
  {/* ===================Education============= */}
        <div className="">
          <button
            onClick={() => handleclick()}
            className="border-2 w-full py-2 bg-white text-orange font-bold"
          >
            Education
          </button>
  
          <div className="flex flex-col pt-10 gap-3 text-sm">
            {education.map((d) => (
              <div className={" education hidde flex flex-col gap-"}>
                <div className="uni flex flex-wrap justify-between">
                  <h1 className="font-semibold text-orange">{d.school}</h1>
                  <div className="date px-4 py- rounded-xl bg-orange font-serif">
                    {d.date}
                  </div>
                </div>
                <div className="degree font-semibold">{d.degree}</div>
                <div className="degree">
                  <p className="text-[#cecdcd]">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* =============Work History================ */}
        <div className="">
          <button
            onClick={() => handleclick()}
            className="border-2 w-full py-2 bg-white text-orange font-bold"
          >
            Work History
          </button>
  
          <div className="flex flex-col pt-10 gap-3 text-sm">
            {job.map((d) => (
              <div className={" education hidde flex flex-col gap-"}>
                <div className="uni flex flex-wrap justify-between">
                  <h1 className="font-semibold text-orange">{d.company}</h1>
                  <div className="date px-4 py- rounded-xl bg-orange font-serif">
                    {d.workdate}
                  </div>
                </div>
                <div className="degree font-semibold">{d.position}</div>
                <div className="degree">
                  <p className="text-[#cecdcd]">{d.responsibilty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
{/* ===============programing skill on small screen============= */}
        <div className="">
          <button
              onClick={() => handleclick()}
              className="border-2 w-full py-2 bg-white text-orange font-bold"
            >
              Programming Skills
            </button>

            <div className=" grid text-sm grid-cols-3 pt-10 gap-4">
            {skill.map((d) => (
              <div className="flex flex-col items-center">
                <div className={d.circlePercent}>
                  <div className={d.innercircle}>
                    <span className="percent-num text-xs ">
                      {d.skillpercent}
                    </span>
                  </div>
                </div>
                <div className="text-cente ">
                  <span>{d.skillname}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="">
          <button
              onClick={() => handleclick()}
              className="border-2 w-full py-2 bg-white text-orange font-bold"
            >
              Creative Skills
            </button>

            <div className=" grid text-sm grid-cols-3 pt-10 gap-4">
            {skill.map((d) => (
              <div className="flex flex-col items-center">
                <div className={d.circlePercent}>
                  <div className={d.innercircle}>
                    <span className="percent-num text-xs ">
                      {d.skillpercent}
                    </span>
                  </div>
                </div>
                <div className="text-cente ">
                  <span>{d.skillname}</span>
                </div>
              </div>
            ))}
          </div>

        </div>



</div>
    </div>
  );
}
