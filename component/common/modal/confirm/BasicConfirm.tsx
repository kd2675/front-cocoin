'use client'

import React, { useEffect } from 'react'
import ModalBg from '@component/common/modal/modalBg'
import { useDispatch } from 'react-redux'
import { ConfirmType } from '@redux/reducers/modal'

type PropsType = {
	closeFunc: () => void
} & ConfirmType

const BasicConfirm = (props: PropsType) => {
	const dispatch = useDispatch()

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

	const btn1Text = props.btn1Text ? props.btn1Text : '취소'
	const btn1Fuc = () => {
		const btn1Fuc = props.btn1Func ? props.btn1Func : props.closeFunc
		btn1Fuc()
	}

	const btn2Text = props.btn2Text ? props.btn2Text : '확인'
	const btn2Fuc = () => {
		const btn2Fuc = props.btn2Func ? props.btn2Func : props.closeFunc
		btn2Fuc()
	}

	return (
		<>
			<ModalBg></ModalBg>
			<div data-modal-main='example2' className='relative mx-4 my-8 w-auto overflow-y-auto '>
				<div className='pointer-events-auto relative mx-auto w-full max-w-screen-sm rounded-md bg-white text-gray-800 shadow-lg'>
					<header className='flex items-center justify-between p-2'>
						<h2 className='font-semibold'>Header</h2>
						<button
							data-modal-toggle='example2'
							data-modal-action='close'
							className='rounded-full p-2 transition-colors hover:bg-gray-50 focus:outline-none focus:ring'
							onClick={props.closeFunc}
						>
							<svg className='fill-current ' width='18' height='18' viewBox='0 0 18 18'>
								<path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
							</svg>
						</button>
					</header>
					<main className='p-2 text-center'>
						<p className='mb-5'>Lorem ipsum dolor sit amet consectetur</p>
					</main>
					<footer className='flex justify-between p-2'>
						<button
							type='button'
							data-modal-toggle='example2'
							data-modal-action='close'
							className='w-32 rounded-full bg-red-400 p-2 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-none focus:outline-none focus:ring'
							onClick={btn1Fuc}
						>
							{btn1Text}
						</button>
						<button
							type='button'
							data-modal-toggle='example2'
							data-modal-action='close'
							className='w-32 rounded-full bg-blue-400 p-2 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-none focus:outline-none focus:ring'
							onClick={btn2Fuc}
						>
							{btn2Text}
						</button>
					</footer>
				</div>
			</div>
		</>
	)
}

export default BasicConfirm
