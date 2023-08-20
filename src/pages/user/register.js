import React, { useState } from "react";

const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		username: "",
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

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		// You can implement your registration logic here
	};

	return (
		<div className="min-h-screen flex justify-center items-center">
			<form
				className="w-full max-w-sm bg-white rounded-lg shadow-md p-6"
				onSubmit={handleSubmit}
			>
				<h2 className="text-2xl font-semibold mb-4">Register</h2>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-medium mb-1">
						Username
					</label>
					<input
						type="text"
						name="username"
						value={formData.username}
						onChange={handleChange}
						className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-medium mb-1">
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
					<label className="block text-gray-700 text-sm font-medium mb-1">
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
	);
};

export default RegistrationForm;
