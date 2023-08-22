import React from "react";

const Card = ({title}) => {
	return (
		<div className="flex z-50 my-10 items-center justify-center max-w-7xl mx-auto">
			<a
				href="#"
				className="block max-w-7xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
			>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of
					2021 so far, in reverse chronological order.
				</p>
			</a>
		</div>
	);
};

export default Card;
