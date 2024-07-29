'use client'

import React from 'react'

type PropsType = {
	children: React.ReactNode
	title: string
	content: string
	subContent: string
}

const LankPiece = (props: PropsType) => {
	return (
		<>
			<div className='relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
				{props.children}
				<div className='p-4 text-right'>
					<p className='block font-sans text-sm font-normal leading-normal text-blue-gray-600 antialiased'>
						{props.title}
					</p>
					<h4 className='block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
						{props.content}
					</h4>
				</div>
				<div className='border-t border-blue-gray-50 p-4 text-right'>
					<p className='block font-sans text-base font-normal leading-relaxed text-blue-gray-600 antialiased'>
						<strong className='text-green-500'>{props.subContent}</strong>
					</p>
				</div>
			</div>
		</>
	)
}

export default LankPiece
