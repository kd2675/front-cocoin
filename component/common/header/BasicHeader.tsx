'use client'

import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { commonActions } from 'redux/reducers/common'
import Image from 'next/image'

const BasicHeader = () => {
	const dispatch = useDispatch()
	// const router = useRouter()

	// const goMainPage = goMainRoute()
	// const headerLogoOnClick = () => {
	// 	goMainPage({ type: 'push' })
	// 	router.reload()
	// }

	return (
		<>
			<nav className={'fixed top-0 z-30 h-16 w-full text-black dark:text-white'}>
				<div className="rounded-b-lg border-b border-gray-200 bg-gray-50 px-3 py-3 dark:border-gray-600 dark:bg-black ml-96">
					<div className="flex items-center justify-between">
						<div className="flex flex-1 items-center justify-start">
							{/*<button*/}
							{/*	id="toggleSidebarMobile"*/}
							{/*	aria-expanded="true"*/}
							{/*	aria-controls="sidebar"*/}
							{/*	className="mr-2 cursor-pointer rounded p-2 hover:ring-2 hover:ring-gray-100 focus:ring-2 focus:ring-gray-100 lg:hidden"*/}
							{/*	onClick={leftSidebarToggleOnClick}*/}
							{/*>*/}
							{/*	<svg id="toggleSidebarMobileHamburger" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
							{/*		<path*/}
							{/*			fillRule="evenodd"*/}
							{/*			d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"*/}
							{/*			clipRule="evenodd"*/}
							{/*		></path>*/}
							{/*	</svg>*/}
								{/*<svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
								{/*	<path*/}
								{/*		fillRule="evenodd"*/}
								{/*		d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
								{/*		clipRule="evenodd"*/}
								{/*	></path>*/}
								{/*</svg>*/}
							{/*</button>*/}
							{/*<div onClick={headerLogoOnClick} className="flex cursor-pointer items-center lg:ml-2.5">*/}
							<div className="flex cursor-pointer items-center">
								{/*<Image src={'/limepiece1.png'} alt={'메인이미지'} width={40} height={40}></Image>*/}
								<span className="whitespace-nowrap bg-gradient-to-r from-blue-500 via-blue-400 to-blue-400 bg-clip-text font-fantasy text-3xl font-medium text-transparent">모의코인투자</span>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default BasicHeader
