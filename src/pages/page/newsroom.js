/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";
import NewsroomComponent from "@/components/NewsroomComponent";

const newsroom = () => {
  return (
    <div className="bg-slate-300 h-[150vh]">
      <Navbar />
      <div className="flex flex-col justify-center items-center ml-10  bg-white mt-2 mb-[30px] w-[90%] md:w m  h-auto shadow-2xl rounded-lg">
        <NewsroomComponent
        
          image={
           " https://vaave.s3.amazonaws.com/content/151669119_1669962012_toppersICSEISC2020_thumb.jpg"
          }
          heading={"Toppers list of ICSE 2020 Examinations"}
          text={"Congratulations to all the Toppers!"}
          buttontext={"Read more"}
        />
        <NewsroomComponent
          image={
            "https://vaave.s3.amazonaws.com/content/151669119_1669961862_Scan-01-Feb-2021-1_thumb.jpg"
          }
          
          heading={"Fee Structure"}
          text={"The fee structure details are mentioned in the image"}
          buttontext={"Read more"}
        />
        <NewsroomComponent
        
          image={
           " https://vaave.s3.amazonaws.com/content/151669119_1669962012_toppersICSEISC2020_thumb.jpg"
          }
          heading={"Toppers list of ICSE 2020 Examinations"}
          text={"Congratulations to all the Toppers!"}
          buttontext={"Read more"}
        />
        <NewsroomComponent
          image={
            "https://vaave.s3.amazonaws.com/content/151669119_1669961862_Scan-01-Feb-2021-1_thumb.jpg"
          }
          
          heading={"Fee Structure"}
          text={"The fee structure details are mentioned in the image"}
          buttontext={"Read more"}
        />
      
      </div>
        <div>
          <a href="https://www.google.com" className="no-underline ml-[90px]">St. John's School, Marhauli</a>
          <a href="https://www.facebook.com" className="no-underline ml-[20px]">Facebook</a>
          <a href="https://www.instagram.com" className="no-underline ml-[20px]">instagram</a>
        </div>
        <div className="flex flex-row h-[80px]  bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
          <div className="ml-[90px] mt-5">
            <p>Powered by</p>
            <h1 className="font-bold font-mono text-2xl text-white">Mera Lund</h1>
          </div>
          <div className="mt-[45px]">
            <a href="" className="no-underline ml-[20px]">Copyright © 2024</a>
            <a href="" className="no-underline ml-[20px]">Disclaimer </a>
            <a href="" className="no-underline ml-[20px]">Terms of Use</a>
            <a href="" className="no-underline ml-[20px]">Privacy Policy</a>
            <a href="" className="no-underline ml-[20px]">Alumni Directory</a>
          </div>


        </div>
    </div>
  );
};

export default newsroom;
