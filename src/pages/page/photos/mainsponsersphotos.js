import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PhotosComponent from "@/components/PhotosComponent";
import SubNavebar from "@/components/SubNavebar";
import Link from "next/link";

const Mainsponsersphotos = () => {
  return (
    <div className="bg-white h-[100vh] w-full">
      <Navbar />

      <SubNavebar/>
      <div className="flex flex-row h-[450px] bg-[#355245] w-[90%] ml-[5%] mt-10 md:max-w-6xl rounded-lg shadow-2xl ">
        <PhotosComponent
          url={
            "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_b40d9e18a43a65d69135eff220cb6c6f_thumb.jpeg"
          }
        />
        <PhotosComponent
          url={
            "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_b40d9e18a43a65d69135eff220cb6c6f_thumb.jpeg"
          }
        />
        <PhotosComponent
          url={
            "https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_b40d9e18a43a65d69135eff220cb6c6f_thumb.jpeg"
          }
        />
      </div>

      <Footer />
    </div>
  );
};

export default Mainsponsersphotos;
