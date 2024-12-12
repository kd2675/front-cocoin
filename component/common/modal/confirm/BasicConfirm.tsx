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
		props.closeFunc()
	}

	const btn2Text = props.btn2Text ? props.btn2Text : '확인'
	const btn2Fuc = () => {
		const btn2Fuc = props.btn2Func ? props.btn2Func : props.closeFunc
		btn2Fuc()
		props.closeFunc()
	}

	return (
		<>
			<ModalBg></ModalBg>
			<div
				className='relative w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl'>
				<header className='flex items-center justify-end'>
					<button
						data-modal-toggle='example2'
						data-modal-action='close'
						className='rounded-full p-2 transition-colors hover:bg-gray-50 focus:outline-none'
						onClick={props.closeFunc}
					>
						<svg className='fill-current ' width='18' height='18' viewBox='0 0 18 18'>
							<path
								d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
						</svg>
					</button>
				</header>
				<h1 className='mt-2 text-center text-2xl font-bold text-gray-700'>{props.title}</h1>
				<p className='mt-4 mb-8 text-center text-md text-gray-700 whitespace-pre-line'>{props.msg}</p>
				<div className='space-x-4 bg-gray-100 py-4 text-center'>
					<button
						className='inline-block rounded-md bg-red-500 px-6 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400'
						onClick={btn1Fuc}
					>
						{btn1Text}
					</button>
					<button
						className='inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400'
						onClick={btn2Fuc}
					>
						{btn2Text}
					</button>
				</div>
			</div>
		</>
	)
}

export default BasicConfirm
