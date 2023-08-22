import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navpages = () => {
	const [windowSize, setwindowSize] = useState(0);
	const [state, setState] = useState(false);

	useEffect(() => {
		//This code is executed in the browser
		setwindowSize(window.innerWidth);
		// console.log(window.innerWidth);
	}, []);
    const handleClick = () => {
		if (state == false) setState(true);
		else setState(false);
	};
	return (
		<div>
			
			<div>
				{windowSize >= 500 ? (
					<>
						<nav className="bg-white border-gray-200 dark:bg-gray-900">
							<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
								<a href="#" className="flex items-center">
									{/* <img src="https://vaave.s3.amazonaws.com/assets/site_content/151669119/logo-cms.png" className="h-8 mr-3" alt="Flowbite Logo" /> */}
									<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
										SJMAA
									</span>
								</a>
							</div>
						</nav>

						<nav className="bg-gray-50 dark:bg-gray-700">
							<div className="max-w-screen-xl px-4 py-3 mx-auto">
								<div className="flex items-center">
									<ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
										<li>
											<Link
												href="/page/about"
												className="text-gray-900 dark:text-white hover:underline"
												aria-current="page"
											>
												About us
											</Link>
										</li>
										<li>
											<Link
												href="/page/newsroom"
												className="text-gray-900 dark:text-white hover:underline"
											>
												Newsroom
											</Link>
										</li>
										<li>
											<Link
												href="/page/members"
												className="text-gray-900 dark:text-white hover:underline"
											>
												Members
											</Link>
										</li>
										<li>
											<Link
												href="/page/event"
												className="text-gray-900 dark:text-white hover:underline"
											>
												Events
											</Link>
										</li>
										<li>
											<Link
												href="/page/gallery"
												className="text-gray-900 dark:text-white hover:underline"
											>
												Gallery
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</>
				) : (
					<>
						<nav className="bg-white border-gray-200 dark:bg-gray-900">
							<div className="flex  justify-between items-center mx-auto max-w-screen-xl p-4">
								<a href="" className="flex items-center">
									{/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
									<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
										SJMAA
									</span>
								</a>
								<div className="flex items-center space-x-4">
									{/* Register Button */}
									<div className="flex items-center">
										<Link
											href="/user/register"
											className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
										>
											Register
										</Link>
									</div>
									{/* Login button */}
									<div className="flex items-center">
										<Link
											href="#"
											className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
										>
											Login
										</Link>
									</div>
									{/* Burger Menu */}
									<div className="flex-wrap items-center">
										<button
											data-collapse-toggle="navbar-hamburger"
											onClick={handleClick}
											type="button"
											className="inline-flex items-center justify-center p-2 w-10 h-10  text-sm text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
										>
											<svg
												className="w-5 h-5 "
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 17 14"
											>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeidth="2"
													d="M1 1h15M1 7h15M1 13h15"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
							{state ? (
								<nav className="bg-gray-50 dark:bg-gray-700">
									<div className="max-w-screen-xl  ">
										<div className="flex  items-center">
											<ul className="flex  flex-col w-full font-medium  rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
												<li>
													<a
														href="#"
														className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400"
														aria-current="page"
													>
														About Us
													</a>
												</li>
												<li>
													<a
														href="#"
														className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
													>
														Newsroom
													</a>
												</li>
												<li>
													<a
														href="#"
														className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
													>
														Members
													</a>
												</li>
												<li>
													<a
														href="#"
														className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
													>
														Events
													</a>
												</li>
												<li>
													<a
														href="#"
														className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
													>
														Gallery
													</a>
												</li>
											</ul>
										</div>
									</div>
								</nav>
							) : null}
						</nav>
					</>
				)}
			</div>
			);
		</div>
	);
};

export default Navpages;
