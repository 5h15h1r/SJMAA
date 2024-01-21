import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";

const Members = () => {


	return (
		<div>
			<Navbar />
			{/* width:7xl */}
			<div className=" items-center w-full mx-auto max-w-6xl text-center bg-gray-300 justify-center my-12">
				<div className=" bg-gray-400  ">
					<h2 className="text-3xl md:text-4xl">Members</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
					<div className="px-10 py-12 bg-gray-100 gap-2 flex flex-col items-center justify-center">
						<Image
							width={120}
							height={120}
							src="/profileimages/1.jpeg"
							alt=""
							className="rounded-full "
						/>
						<span>name</span>
						<span>batch</span>
					</div>
					<div className="px-10 py-14 bg-gray-100 gap-2 flex flex-col items-center justify-center">
						<Image
							width={120}
							height={120}
							src="/profileimages/2.jpeg"
							alt=""
							className="rounded-full "
						/>
						<span>name</span>
						<span>batch</span>
					</div>

					<div className="px-10 py-14 bg-gray-100 gap-2 flex flex-col items-center justify-center">
						<Image
							width={120}
							height={120}
							src="/profileimages/3.jpeg"
							alt=""
							className="rounded-full "
						/>
						<span>name</span>
						<span>batch</span>
					</div>

					<div className="px-10 py-14 bg-gray-100 gap-2 flex flex-col items-center justify-center">
						<Image
							width={120}
							height={120}
							src="/profileimages/5.jpeg"
							alt=""
							className="rounded-full "
						/>
						<span>name</span>
						<span>batch</span>
					</div>

					<div className="px-10 py-14 bg-gray-100 gap-2 flex flex-col items-center justify-center">
						<Image
							width={120}
							height={120}
							src="/profileimages/1.jpeg"
							alt=""
							className="rounded-full "
						/>
						<span>name</span>
						<span>batch</span>
					</div>

					<div className="px-10 py-14 bg-gray-100 gap-2 flex flex-col items-center justify-center">
						<Image
							width={120}
							height={120}
							src="/profileimages/1.jpeg"
							alt=""
							className="rounded-full "
						/>
						<span>name</span>
						<span>batch</span>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Members;
