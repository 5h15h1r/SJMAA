import Image from "next/image";
import React from "react";

const Gallerycomponent = ({ img, p1, p2, alt = "image", onclick,className="" }) => {
  return (
    <div
      className="mx-4 my-4 bg-[#648374] h-[100px] w-[100px] md:h-[200px] md:w-[200px] cursor-pointer "
      onClick={onclick}
    >
      <Image
        width={200}
        height={200}
        className="h-full w-full object-cover"
        src={img}
        alt={alt}
      />
      <div className="flex flex-col items-center mt-1">
        <p className="text-[13px] md:text-lg "> {p1}</p>
        <p className="text-[13px] md:text-lg"> {p2}</p>
      </div>
    </div>
  );
};

export default Gallerycomponent;
