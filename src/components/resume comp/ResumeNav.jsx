import React from "react";

export default function ResumeNav({title,active,id,resumeclick}) {
  return (
    <div className="  edu relative  rounded-r-full">
      <div
        key={id}
        role="button"
        onClick={resumeclick}
        className={
          active
            ? "pl-[25px] p-[5px] bg-[#0db064b7] text-sm  font-[700] relative "
            : "pl-[25px] p-[5px] bg-blue- text-sm  font-[700] relative"
        }
      >
        {title}
      </div>
    </div>
  );
}
