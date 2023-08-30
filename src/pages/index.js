import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Landing from "@/Home/Landing";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="flex-col h-screen ">
			<Navbar />
      <Landing />
		</main>
	);
}
