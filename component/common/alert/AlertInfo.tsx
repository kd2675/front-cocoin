import React, { ReactNode } from 'react'

type PropsType = {
	uuid?: string
	msg: ReactNode | string
	closeCallback: () => void
}

const AlertInfo = (props: PropsType) => {
	return (
		<>
			<div className="flex bg-blue-100 p-4 shadow-lg border-2 rounded-lg text-lg font-bold text-blue-700" role="alert">
				<svg className="w-6 h-6 inline mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
				</svg>
				<div>{props.msg}</div>
			</div>
		</>
	)
}

export default AlertInfo
