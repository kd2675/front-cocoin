import React from 'react'

type PropsType = {
	setPrevState: () => void
	setNextState: () => void
}

const BasicLRBar = (props: PropsType) => {
	return (
		<>
			<div className="lg:px-4 w-full my-3">
				<div className="flex justify-center">
					<div className="bg-white dark:bg-slate-800 rounded-xl shadow-md flex w-full  p-2 justify-between h-12 lg:h-fit items-center">
						<button
							className="border-slate-500 dark:border-slate-100 hover:text-blue-500 dark:hover:text-blue-400 border hover:border-blue-500 dark:hover:border-blue-400 w-6 h-6 rounded-xl duration-150 hover:scale-105 active:scale-95"
							onClick={props.setPrevState}
						>
							<svg height="22" viewBox="0 0 21 21" width="22" xmlns="http://www.w3.org/2000/svg">
								<g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)">
									<path d="m9.55 11.4-3-2.9 3-3"></path>
								</g>
							</svg>
						</button>
						<button className="bg-blue-400 h-3 transition-all w-3 self-center duration-150 hover:scale-150 active:scale-125 ease-in-out rounded-md xl:p-1 shadow"></button>
						<button className="bg-blue-400 h-3 transition-all w-3 self-center duration-150 hover:scale-150 active:scale-125 ease-in-out rounded-md xl:p-1 shadow"></button>
						<button className="bg-blue-400 h-3 transition-all w-3 self-center duration-150 hover:scale-150 active:scale-125 ease-in-out rounded-md xl:p-1 shadow"></button>
						<button
							className="border-slate-500 dark:border-slate-100 hover:text-blue-500 dark:hover:text-blue-400 border hover:border-blue-500 dark:hover:border-blue-400 w-6 h-6 rounded-xl duration-150 hover:scale-105 active:scale-95"
							onClick={props.setNextState}
						>
							<svg height="22" viewBox="0 0 21 21" width="22" xmlns="http://www.w3.org/2000/svg">
								<g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)">
									<path d="m7.5 11.5 3-3-3.068-3"></path>
								</g>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default BasicLRBar
