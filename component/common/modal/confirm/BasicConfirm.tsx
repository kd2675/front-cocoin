'use client'

import React, { ReactNode } from 'react'
import ModalBg from '@component/common/modal/modalBg'
import { useDispatch } from 'react-redux'
import { modalActions } from '@redux/reducers/modal'

type PropsType = {
	uuid?: string
	msg: ReactNode | string
	closeCallback: () => void
}

const BasicConfirm = (props: PropsType) => {
	const dispatch = useDispatch()
	const test = () => {
		dispatch(modalActions.addToast({ msg: 'test' }))
	}
	return (
		<>
			<ModalBg></ModalBg>
			<div data-modal-main="example2" className="overflow-y-auto relative w-auto my-8 mx-4 ">
				<div
					className="relative shadow-lg rounded-md w-full pointer-events-auto bg-white text-gray-800 max-w-screen-sm mx-auto">
					<header className="flex items-center justify-between p-2">
						<h2 className="font-semibold">Header</h2>
						<button data-modal-toggle="example2" data-modal-action="close"
										className="transition-colors hover:bg-gray-50 focus:ring focus:outline-none p-2 rounded-full"
										onClick={test}>
							<svg className="fill-current " width="18" height="18" viewBox="0 0 18 18">
								<path
									d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
							</svg>
						</button>
					</header>
					<main className="p-2 text-center">
						<p className="mb-5">
							Lorem ipsum dolor sit amet consectetur
						</p>
					</main>
					<footer className="flex justify-center p-2 space-x-64">
						<button
							type="button"
							data-modal-toggle="example2"
							data-modal-action="close"
							className="bg-red-400 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
						>
							cancel
						</button>
						<button
							type="button"
							data-modal-toggle="example2"
							data-modal-action="close"
							className="bg-blue-400 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
						>
							confirm
						</button>
					</footer>
				</div>
			</div>
		</>
	)
}

export default BasicConfirm
