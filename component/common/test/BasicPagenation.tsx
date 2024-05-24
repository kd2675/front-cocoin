import React from 'react'

const BasicPagenation = () => {
	return (
		<>
			<div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
				<nav>
					<ul className="flex">
						<li>
							<a
								className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
								href="#"
								aria-label="Previous"
							>
								<span className="material-icons text-sm">keyboard_arrow_left</span>
							</a>
						</li>
						<li>
							<a
								className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out"
								href="#"
							>
								1
							</a>
						</li>
						<li>
							<a
								className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
								href="#"
							>
								2
							</a>
						</li>
						<li>
							<a
								className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
								href="#"
							>
								3
							</a>
						</li>
						<li>
							<a
								className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
								href="#"
								aria-label="Next"
							>
								<span className="material-icons text-sm">keyboard_arrow_right</span>
							</a>
						</li>
					</ul>
				</nav>
				<div className="w-full md:w-7/12 pt-5 px-4 mb-8 mx-auto text-center">
					<div className="text-sm text-gray-700 py-1">
						This components requires
						<a href="https://www.material-tailwind.com?ref=tailwindcomponents" className="text-gray-700 font-semibold" target="_blank">
							Material Tailwind CSS & JS
						</a>
						for the classes. <br />
						<br />A component by
						<a href="https://www.creative-tim.com?ref=tailwindcomponents" className="text-gray-700 font-semibold" target="_blank">
							Creative Tim
						</a>
						.
					</div>
				</div>
			</div>
		</>
	)
}

export default BasicPagenation
