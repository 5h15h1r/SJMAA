import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const videos = () => {
    return (
        <div className="bg-white h-[100vh] w-full">
            <Navbar />
            <div className=" flex flex-row w-[90%] md:max-w-6xl bg-[#355245] h-[50px] ml-[5%] mt-10 rounded-lg shadow-2xl">
        <a href="/page/gallery/album" className="p-1 mx-2 my-2">
          Album
        </a>

        <a href="/page/gallery/videos" className="p-1 mx-2 my-2">
          Videos
        </a>
        <a href="/page/gallery/memories" className="p-1 mx-2 my-2">
          Memories
        </a>
      </div>
            
            <div className=" flex flex-row w-[90%]  md:max-w-6xl bg-[#355245] h-[450px] ml-[5%] mt-10 rounded-lg shadow-2xl">
               <h1 className="mx-2 my-2" > this is videos</h1>
            </div>
            <Footer />
        </div>
    );
};

export default videos;
