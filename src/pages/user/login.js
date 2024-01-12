import React, { useState } from "react";
import { useRouter } from 'next/router';

import { getAuth, createUserWithEmailAndPassword, is, signInWithEmailAndPassword } from "firebase/auth";
import app from "@/firebase/firebase";
import Navbar from "@/components/Navbar";
import Navpages from "@/components/Navpages";

const RegistrationForm = () => {
	const router = useRouter();
	const auth = getAuth(app);
	const [formData, setFormData] = useState({

		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		//Prevents form to reload on submit
		e.preventDefault();
		const { name, value } = e.target;

		//Creates user with username and password
		await signInWithEmailAndPassword(
			auth,
			formData.email,
			formData.password,
			
		)
			.then((userCredential) => {
				const user = userCredential.user;
				
				  
				router.push('/'); // Replace with your desired destination
 
				// ...
			})
			.catch((error) => {
				alert(error.message);
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
			// 
		setFormData((prevData) => ({
			...prevData,
			[name]: "",
		}));
		console.log(formData);

		// You can implement your registration logic here
	};

	return (
		<div>
		<Navbar />
			<div className=" flex pt-32 md:pt-36 justify-center  items-center ">
			
			<form
				className="w-full max-w-sm border-gray-200 dark:bg-gray-700  rounded-lg shadow-md p-6"
				onSubmit={handleSubmit}
			>
				<h2 className="text-2xl font-semibold mb-4">Login</h2>
				
				<div className="mb-4">
					<label className="block text-sm font-medium mb-1">
						Email
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block  text-sm font-medium mb-1">
						Password
					</label>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
				>
					Register
				</button>
			</form>
		</div>
			
		</div>
	)
};

export default RegistrationForm;
