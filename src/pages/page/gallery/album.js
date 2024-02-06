import Footer from "@/components/Footer";
import Gallerycomponent from "@/components/Gallerycomponent";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SubNavebar from "@/components/SubNavebar";

import React from "react";

const Album = () => {
  const router = useRouter();

  return (
    <div className="bg-white h-[100vh] w-full">
      <Navbar />

      <SubNavebar />
      <div className="flex flex-row h-[450px] bg-[#355245] w-[90%] ml-[5%] mt-10 md:max-w-6xl rounded-lg shadow-2xl ">
        <Gallerycomponent
          onclick={() => {
            router.push("/page/photos/mainsponsersphotos");
          }}
          img={
            "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_b40d9e18a43a65d69135eff220cb6c6f_thumb.jpeg"
          }
          p1={"Main Sponser"}
          p2={"1 photo"}
        />
        <Gallerycomponent
          onclick={() => {
            router.push("/page/photos/activitiesphotos");
          }}
          img={
            "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_95fd98fba09b06ada444eab726571e44.jpeg"
          }
          p1={"Activities"}
          p2={"11 photo"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Album;
