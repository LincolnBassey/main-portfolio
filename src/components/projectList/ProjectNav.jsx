import React from "react";
import "./ProjectNav.scss";

export default function ProjectNav({ title, handleclick, active}) {
  return (
    <div
      onClick={handleclick}
      className={
        active
          ? " cursor-pointer active rounded-lg px-4 py-1 text-sm"
          : " cursor-pointer rounded-lg px-4 py-1 text-sm"
      }
    >
      {title}
    </div>
  );
}
