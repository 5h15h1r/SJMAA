import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PhotosComponent from "@/components/PhotosComponent";
import Link from "next/link";
import photos from "./photos";
import SubNavebar from "@/components/SubNavebar";

const Activitiesphotos = () => {
  const items = photos.map((photo) => {
    return <PhotosComponent key={photo.id} url={photo.url} />;
  });
  return (
    <div className="bg-white h-[100vh] w-full">
      <Navbar />
      <SubNavebar/>
      
      <div className="grid grid-cols-5   h-[450px] bg-[#355245] w-[90%] ml-[5%] mt-10 md:max-w-6xl rounded-lg shadow-2xl ">
        {items}
      </div>

      <Footer />
    </div>
  );
};

export default Activitiesphotos;
