/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const NewsroomComponent = ({
	image = "",
	heading = "",
	text = "",
	buttontext = "",

	className = "",
}) => {
    return(
      <div className="bg-slate-100 w-[90%] md:w-[60%`] p-4  ">
          <div className="flex space-x-5 w-full ">
            <div className="w-[50%] md:w-auto">
              {/* Image */}
              <img height="" width="" src={image} className="" />
            </div>

            <div className="w-[50%] md:w-auto">
              <h2 className="font-bold font-sans text-lg md:text-2xl">{heading}</h2>
              <p>
                {text}
              </p>
              <button className="px-4 py-2 rounded-3xl ml-autom mt-1 bg-sky-200">Read more</button>
            </div>
          </div>
      </div>
    )
};

export default NewsroomComponent;
