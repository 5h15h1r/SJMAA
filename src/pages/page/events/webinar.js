import React from 'react'
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer"; 
const Webinar = () => {
   return (
     <div className="bg-white h-[100vh] w-full">
       <Navbar />
       <div className=" flex flex-row w-[90%] md:max-w-6xl bg-[#355245] h-[50px] ml-[5%] mt-10 rounded-lg shadow-2xl">
         <Link
           href="/page/events/all"
           className="p-1 mx-2 my-2 hover:text-white"
         >
           All
         </Link>

         <Link
           href="/page/events/reunion"
           className="p-1 mx-2 my-2 hover:text-white"
         >
           Reunion
         </Link>
         <Link
           href="/page/events/webinar"
           className="p-1 mx-2 my-2 hover:text-white"
         >
           Webinar
         </Link>
       </div>

       <div className="flex flex-col space-y-4 h-[450px] items-center bg-[#355245] w-[90%] ml-[5%] mt-10 md:max-w-6xl rounded-lg shadow-2xl ">
         <h1 className="mt-[10%] text-white text-3xl font-bold">
           No Webinars
         </h1>

       
       </div>

       <Footer />
     </div>
   );
}

export default Webinar
