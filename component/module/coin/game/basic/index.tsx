'use client'

type PropsType = {

};

const Index = (props: PropsType) => {
	return (
		<>
			<div className="flex justify-center items-center min-h-screen">
				<div className="max-w-[720px] mx-auto">
					<div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
						<a
							target="_blank"
							href="https://www.material-tailwind.com/docs/html/card"
							className="block w-full px-4 py-2 text-center text-slate-700 transition-all"
						>
							More components on <b>Material Tailwind</b>.
						</a>
					</div>

					<div
						className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8">
						<div
							className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
							<p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
								standard
							</p>
							<h1
								className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
								<span className="mt-2 text-4xl">$</span>29
								<span className="self-end text-4xl">/mo</span>
							</h1>
						</div>
						<div className="p-0">
							<ul className="flex flex-col gap-4">
								<li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-white/20 bg-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
																 stroke="currentColor" className="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
									<p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
										5 team members
									</p>
								</li>
								<li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-white/20 bg-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
																 stroke="currentColor" className="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
									<p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
										200+ components
									</p>
								</li>
								<li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-white/20 bg-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
																 stroke="currentColor" className="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
									<p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
										40+ built-in pages
									</p>
								</li>
								<li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-white/20 bg-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
																 stroke="currentColor" className="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
									<p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
										1 year free updates
									</p>
								</li>
								<li className="flex items-center gap-4">
                        <span className="p-1 border rounded-full border-white/20 bg-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
																 stroke="currentColor" className="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
									<p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
										Lifetime technical support
									</p>
								</li>
							</ul>
						</div>
						<div className="p-0 mt-12">
							<button
								className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
								type="button">
								Buy Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Index