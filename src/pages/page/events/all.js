import React from 'react'
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';

import NewsroomComponent from '@/components/NewsroomComponent';

const All = () => {
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
          Upcoming Events
        </h1>

        <hr className="my-6 border-blueGray-300" />

              <NewsroomComponent
                  
          image={
            "https://vaave.s3.amazonaws.com/event_photos/851f5ac9941d720844d143ed9cfcf60a_01e0a7e1298bbeaf198b9caeb8f6c018.jpeg"
          }
                  height='200px'
                  width='200px'
          heading={"Vaccine 2.0"}
          text={"Raas Rang Banquet"}
        />
      </div>

      <Footer />
    </div>
  );
}

export default All
