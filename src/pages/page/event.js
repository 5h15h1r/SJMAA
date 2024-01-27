import Navbar from "@/components/Navbar";
import { useRouter } from 'next/navigation'
import React from "react";

const Event = () => {
  const router = useRouter()
  return (
    <div className="bg-slate-300 h-[150vh] ">
      <Navbar />
      <div className="bg-yellow-100 m-1 rounded-lg">
        <div className="flex flex-row m-1">
         
          
          <button
            type="button"
            onClick={()=>router.push('/page/event/all')}
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            All
          </button>
          
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            Reunion
          </button>
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            webinar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
