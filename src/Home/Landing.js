import React from "react";
import Footer from "@/components/Footer";
import Sliderr from "@/components/Slider";
import Card from "@/components/Card";

const Landing = () => {
	const Welcome =
		"St. John`s School Marhauli. Do y’ll miss your school days? We are sure you do! You can now relive your good old school days with your batchmates on the school alumni portal. It’s time to get together to reminisce old times, walk down the memory lane and share success stories with your friends. Come, register on the link and stay connected with your school friends beyond time & distance.";
	const Events = "These are the events"
	return (
		<div>
			<Sliderr />
			
			<Card title={"Welcome"} content={Welcome} />
			<Card title={"Events"} content={Events}/>	
			<Footer />
		</div>
	);
};

export default Landing;
