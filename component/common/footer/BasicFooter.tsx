import React from 'react'

const BasicFooter = () => {
	return (
		<>
			<div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">

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

export default BasicFooter
