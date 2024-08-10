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
			<div
				className='relative w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl'>
				<header className='flex items-center justify-end'>
					<button
						data-modal-toggle='example2'
						data-modal-action='close'
						className='rounded-full p-2 transition-colors hover:bg-gray-50 focus:outline-none focus:ring'
						onClick={props.closeFunc}
					>
						<svg className='fill-current ' width='18' height='18' viewBox='0 0 18 18'>
							<path
								d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z'></path>
						</svg>
					</button>
				</header>
				{/*<svg*/}
				{/*	xmlns='http://www.w3.org/2000/svg'*/}
				{/*	className='mx-auto mt-8 h-16 w-16 text-green-400'*/}
				{/*	viewBox='0 0 20 20'*/}
				{/*	fill='currentColor'*/}
				{/*>*/}
				{/*	<path*/}
				{/*		fill-rule='evenodd'*/}
				{/*		d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'*/}
				{/*		clip-rule='evenodd'*/}
				{/*	/>*/}
				{/*</svg>*/}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='mx-auto mt-2 h-16 w-16 text-red-500'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path
						fill-rule='evenodd'
						d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
						clip-rule='evenodd'
					/>
				</svg>
				<h1 className='mt-2 text-center text-2xl font-bold text-gray-500'>Success</h1>
				<p className='my-4 text-center text-sm text-gray-500'>Woah, successfully completed 3/5 Tasks</p>
				<div className='space-x-4 bg-gray-100 py-4 text-center'>
					<button
						className='inline-block rounded-md bg-red-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400'
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
