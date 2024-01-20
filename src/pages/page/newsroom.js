/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";
import NewsroomComponent from "@/components/NewsroomComponent";
import Footer from "@/components/Footer";

const newsroom = () => {
  return (
    <div className="bg-slate-300 h-[150vh]">
      <Navbar />
      <div className="w-full flex flex-col space-y-4  my-10 items-center justify-center max-w-6xl  shadow-2xl rounded-lg">
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
       
       <Footer />
    </div>
  );
};

export default newsroom;
