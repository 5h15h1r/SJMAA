import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

import Link from "next/link";

const gallery = () => {
  
  return (
    <div className="bg-white h-[100vh] w-full">
      <Navbar />
      <div className=" flex flex-row w-[90%] md:max-w-6xl bg-[#355245] h-[50px] ml-[5%] mt-10 rounded-lg shadow-2xl">
        <Link href="/page/gallery/album" className="p-1 mx-2 my-2" >
          Album
        </Link>

        <Link href="/page/gallery/videos" className="p-1 mx-2 my-2">
          Videos
        </Link>
        <Link href="/page/gallery/memories" className="p-1 mx-2 my-2">
          Memories
        </Link>
      </div>
      <div className="flex flex-row h-[450px] bg-[#355245] w-[90%] ml-[5%] mt-10 md:max-w-6xl rounded-lg shadow-2xl ">
        <div className="mx-4 my-4 bg-[#648374] h-[200px] w-[200px] cursor-pointer " onClick={()=>{console.log("")}}>
          <img
            className="h-full w-full object-cover"
            src="https://i.pinimg.com/736x/c1/d1/bb/c1d1bbda5fb1f84d5beaf7ccea0e1cd0.jpg"
            
            
            alt="the image"
          />
          <div className="flex flex-col items-center">
            <p> Main sponsers</p>
            <p> 1 photo</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default gallery;