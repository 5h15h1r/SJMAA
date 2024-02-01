import Footer from "@/components/Footer";
import Gallerycomponent from "@/components/Gallerycomponent";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Album = () => {

	return (
		<div className="bg-white h-[100vh] w-full">
			<Navbar />

			<div className=" flex flex-row w-[90%] md:max-w-6xl bg-[#355245] h-[50px] ml-[5%] mt-10 rounded-lg shadow-2xl">
				<Link href="/page/gallery/album" className="p-1 mx-2 my-2">
					Album
				</Link>

				<Link href="/page/gallery/videos" className="p-1 mx-2 my-2">
					Videos
				</Link>
				<Link href="/page/gallery/memories" className="p-1 mx-2 my-2">
					Memories
				</Link>
			</div>
			<div className="flex flex-row h-[450px] bg-[#355245] w-[90%] ml-[5%] mt-10 md:max-w-6xl rounded-lg shadow-2xl ">
				<Gallerycomponent
					img={
						"https://vaave.s3.amazonaws.com/album_photos/851f5ac9941d720844d143ed9cfcf60a_b40d9e18a43a65d69135eff220cb6c6f_thumb.jpeg"
					}
					p1={"Main Sponser"}
					p2={"1 photo"}
				/>
				<Gallerycomponent
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
