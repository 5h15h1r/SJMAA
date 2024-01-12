/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const NewsroomComponent = ({
  image = "",
  heading = "",
  text = "",
  buttontext = "",
  
  className= "",
}) => {
  return (
    <div
      className={` flex flex-row w-[70%] h-[200px] bg-slate-100 mt-2 mb-2 ${className}`}
    >
      <div>
        <img src={image} height="100px" width="180px" className="ml-1 mt-1 mb-1" alt="img" ></img>
      </div>
      <div className="flex flex-col ml-10">
        <h1 className="font-bold font-sans">{heading}</h1>
        <p>date of posting</p>
        <p>{text}</p>
        <button className="rounded-lg w-[100px] h-[25px] bg-slate-500 mt-[30px]"> {buttontext}</button>
      </div>
    </div>
  );
};

export default NewsroomComponent;
