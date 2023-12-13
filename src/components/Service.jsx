import "./Service.scss";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Underline from "./dynamicstyle/Underline";

export default function Service() {
  return (
    <div className="service  h-[100vh] w-[100%] relative top-[70px] " id="service">
      {/* =========service header========== */}
      <div className="flex pb-10 md:pb-5 gap-2 tracking-widest items-center justify-center flex-col" id="service">
        <h1 className=" md:font-extrabold font-bold lg:text-xl text-select ">
          Projects
        </h1>
        <p className="text-white font-sans text-xs">Check in My Latest Works</p>
        <Underline></Underline>
      </div>
      {/* ============Services================= */}
      <div className="flex items-center justify-center">
        {/* ===========slider=========== */}
        <div className="slider h-[300px] flex w-[100vw] ">
          <div className="container w-[100vw] flex items-center justify-center">
            {/* ========item=========== */}

            <div className="item flex w-[600px] h-[100%] bg-white rounded-3xl">
              {/* ========left-col------ */}
              <div className="left-col p-4 flex flex-col gap-3 justify-center bg-[#3c1697e0] h-full ">
                <GitHubIcon className="w-20 text-orange"></GitHubIcon>
                <h1 className="font-extrabold text-select"> UX/UI</h1>
                <p className="text-md font-light">Lorem ipsum, dolor sit amet consectetur
                   adipisicing elit. Accusantium, ipsam</p>
                   <a href="#" className=" p-2 text-center bg-orange font-bold text-black border-select w-40 rounded">Learn more </a>
              </div>
              <div className="right-col overflow-hidden  h-full bg-[#3c1697e0] ">
                <img src="/src/components/projectList/1702239149798.jpg" alt="" className=" h-[300px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
