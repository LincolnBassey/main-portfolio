import "./About.scss";
import Underline from "./dynamicstyle/Underline";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Header from "./Header";

export default function About() {
  return (
    <>
     
      <div
        className="about text-sm bg-black h-[100vh] overflow-hidden md:px-10 lg:px-40 px-5"
        id=""
      >
        {/* ======About header========= */}
        <div id="about">
          <div className="flex overflow-hidden tracking-widest items-center justify-center flex-col">
            <h1 className=" md:font-extrabold font-bold lg:text-xl text-select ">
              About Me
            </h1>
            <p className=" text-white font-sans pb-2 text-xs">Why Choose Me?</p>
            <Underline></Underline>
          </div>
        </div>
        <div className=" h-[90vh] flex items-center w-full justify-center ">
        {/* ========left and right col====== */}
          <div className="left-right lg:px-4 px-5 text-sm md:flex-row h-full md:h-[80%] overflow-hidden gap- flex flex-col items-center justify-center text-center bg-black text-white rounded-xl md:overflow-hidden ">
            {/* =========left col============ */}
            <div className="overflow-hidden md:flex md:items-center text-xs md:text-sm justify-center  w-[40%] ">
              <div className="left-col  flex flex-col justify-center  w-full items-center">
                <div className="img rounded-full p-[2px]">
                  <img
                    className=" flex rounded-full w-[80px] h-[80px] lg:w-[150px] lg:h-[150px] "
                    src="./src/assets/IMG_20230504_111357.jpg"
                    alt=""
                  />
                </div>
                <div className="tracking-widest ">
                  <span className="font-semibold">Lincoln Bassey</span> <br />
                  <span className="font-thin text-gray-400 italic">
                    Web Developer
                  </span>
                </div>
                {/* ========Socialmedia contacts============ */}
                <div className="social-media text-select flex md:flec-col gap-4 ">
                  <div className="contact items-center flex gap-1">
                    <PersonOutlineIcon></PersonOutlineIcon>
                  </div>
                  <div className="contact items-center flex gap-1">
                    <MailOutlineIcon></MailOutlineIcon>
                  </div>
                  <div className="contact items-center flex gap-1">
                    <GitHubIcon></GitHubIcon>
                  </div>
                  <div className="contact items-center flex gap-1">
                    <FacebookRoundedIcon></FacebookRoundedIcon>
                  </div>
                </div>
              </div>
            </div>
            {/* ========right col==========? */}
            <div className="right-col tracking-wide text-start md:text-start flex pb-4 pt-4  flex-col w-[100%] gap-5 md:px-1  ">
              <h1 className="font-bold text-cente ">Why Choose me?</h1>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio accusantium, volu ptatum omnis, aliquid at laboriosam
                sint obcaecati, officia illo quam quos recusandae dolores autem
                est. Itaque consequatur dicta quas dolor Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Sunt, soluta! Lorem ipsum dolor sit amet.
                .
              </p>
              <div className="features items-cente md:items-start md:text-start flex flex-col gap-2 ">
                <h2 className="text-select font-semibold">
                  Here is Few Features:
                </h2>
                {/* ==list of my features======== */}
                <l className="feat-para  flex md:justify-start  justify-cente  items-cente font-light flex-wrap gap-1 ">
                  <li className="feat-list ">
                    <span className="each-feat">User Interface Design</span>
                  </li>
                  <li className="feat-list ">
                    <span className="each-feat">User Interface Design</span>
                  </li>
                  <li className="feat-list ">
                    <span className="each-feat">User Interface Design</span>
                  </li>
                  <li className="feat-list ">
                    <span className="each-feat">User Interface Design</span>
                  </li>
                </l>
              </div>
              {/* =======hire btn and resume btn====== */}
              <div className="flex pt-3 justify-center md:justify-start gap-4 ">
                <button className=" hire-btn font-semibold py-[6px] px-5 text-select rounded border-2 border-select">
                  Hire Me
                </button>
                <button className="resume-btn font-semibold py-[6px] px-4 border-2 border-[orange] rounded text-[orange]">
                  Get Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
