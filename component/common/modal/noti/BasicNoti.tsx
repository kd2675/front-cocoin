import React, { SetStateAction, useEffect, useRef, useState } from 'react'
import ModalBg from '@component/common/modal/modalBg'
import { Progress } from '@material-tailwind/react'
import { ToastType } from '@redux/reducers/modal'

type PropsType = {
	closeFunc: () => void
} & ToastType

const BasicNoti = (props: PropsType) => {

	useEffect(() => {
		if (props.openCallback) {
			props.openCallback()
		}
		return () => {
			if (props.closeCallback) {
				props.closeCallback()
			}
		}
	}, [])

	const btnFuc = () => {
		const btnFuc = props.btnFunc
			? () => {
					props.btnFunc ? props.btnFunc() : () => {}
					props.closeFunc()
			  }
			: props.closeFunc
		btnFuc()
	}

	return (
		<>
			<ModalBg></ModalBg>
			<div data-modal-main='example2' className='relative ml-auto overflow-y-auto '>
					<div className="w-full h-screen flex flex-col items-center justify-center">
						<div className="mb-4">
							<div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
								<div className="w-2 bg-red-600">
								</div>
								<div className="w-full flex justify-between items-start px-2 py-2">
									<div className="flex flex-col ml-2">
										<label className="text-gray-800">Your submission was rejected</label>
										<p className="text-gray-500 ">Lorem ipsum dolor sit amet consectetur sit amet</p>
									</div>
									<a href="#">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none"
												 viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
										</svg>
									</a>
								</div>
							</div>
						</div>
						{/*<div className="mb-4">*/}
						{/*	<div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">*/}
						{/*		<div className="w-2 bg-green-600">*/}
						{/*		</div>*/}
						{/*		<div className="w-full flex justify-between items-start px-2 py-2">*/}
						{/*			<div className="flex flex-col ml-2">*/}
						{/*				<label className="text-gray-800">Your submission was approved</label>*/}
						{/*				<p className="text-gray-500 ">Lorem ipsum dolor sit amet consectetur sit amet</p>*/}
						{/*			</div>*/}
						{/*			<a href="#">*/}
						{/*				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none"*/}
						{/*						 viewBox="0 0 24 24" stroke="currentColor">*/}
						{/*					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />*/}
						{/*				</svg>*/}
						{/*			</a>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*</div>*/}
						{/*<div className="mb-4">*/}
						{/*	<div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">*/}
						{/*		<div className="w-2 bg-yellow-600">*/}
						{/*		</div>*/}
						{/*		<div className="w-full flex justify-between items-start px-2 py-2">*/}
						{/*			<div className="flex flex-col ml-2">*/}
						{/*				<label className="text-gray-800">Your submission is pending</label>*/}
						{/*				<p className="text-gray-500 ">Lorem ipsum dolor sit amet consectetur sit amet</p>*/}
						{/*			</div>*/}
						{/*			<a href="#">*/}
						{/*				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none"*/}
						{/*						 viewBox="0 0 24 24" stroke="currentColor">*/}
						{/*					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />*/}
						{/*				</svg>*/}
						{/*			</a>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*</div>*/}
				</div>
			</div>
		</>
)
}

export default BasicNoti
