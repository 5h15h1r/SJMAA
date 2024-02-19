import Navbar from "@/components/Navbar";
import { useRouter } from 'next/navigation'
import React from "react";
import All from "./events/all";

const Event = () => {
  const router = useRouter()
  
  return (
    <All/>
  )
};

export default Event;
