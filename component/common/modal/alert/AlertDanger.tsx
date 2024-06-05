'use client'

import React, { useEffect } from 'react'
import { AlertType } from '@redux/reducers/modal'

type PropsType = {} & AlertType

const AlertDanger = (props: PropsType) => {
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

	return (
		<>
			<div className='flex rounded-lg border-2 bg-red-100 p-4 text-lg font-bold text-red-700 shadow-lg' role='alert'>
				<svg
					className='mr-3 mt-0.5 inline h-6 w-6'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
						clipRule='evenodd'
					></path>
				</svg>
				<div>{props.msg}</div>
			</div>
		</>
	)
}

export default AlertDanger
