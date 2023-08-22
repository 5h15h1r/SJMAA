import React from "react";
import Footer from "@/components/Footer";
import Sliderr from "@/components/Slider";
import Card from "@/components/Card";

const Landing = () => {
	return (
		<div>
			
			<Sliderr />
			<Card title={"Events"} />

			<Footer />
		</div>
	);
};

export default Landing;
