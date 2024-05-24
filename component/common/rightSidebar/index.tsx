import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { mainActions } from '@redux/reducers/main'
import BasicRightSidebar from "@component/common/rightSidebar/BasicRightSidebar";
import {basicRightSidebarAnim} from "@motion/BasicAnim";
import ModalBg from '@component/common/modalBg'
import { RootState } from '@redux/store'

const Index = () => {
	const dispatch = useDispatch()
	const router = useRouter()

	const isRightSidebar = useSelector((state: RootState) => state.main.isRightSidebar)

	// const historyBackHandler = function () {
	// 	if (router.query?.rightSidebar) {
	// 		dispatch(mainActions.isRightSidebar('n'))
	// 	}
	// }
	//
	// useEffect(() => {
	// 	if (router.query?.rightSidebar) {
	// 		dispatch(mainActions.isRightSidebar('y'))
	// 	}
	// 	router.events.on('routeChangeStart', historyBackHandler)
	// 	return () => {
	// 		router.events.off('routeChangeStart', historyBackHandler)
	// 	}
	// }, [router.query])
	//
	// useEffect(() => {
	// 	console.log('BasicRightSidebar mount')
	// }, [])

	return (
		<>
			<AnimatePresence mode={'wait'} initial={false}>
				{isRightSidebar == 'y' && (
					<>
						<ModalBg></ModalBg>
						<motion.aside
							id="rightSidebar"
							className={
								'fixed z-30 bg-gray-50 pt-4 dark:bg-black text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-600 h-full top-0 right-0 flex lg:flex flex-shrink-0 flex-col w-80 sm:w-96'
							}
							aria-label="Sidebar"
							{...basicRightSidebarAnim}
						>
							<BasicRightSidebar></BasicRightSidebar>
						</motion.aside>
					</>
				)}
			</AnimatePresence>
			<>
				{isRightSidebar == 'n' && (
					<aside
						id="rightSidebar"
						className={'fixed hidden bg-gray-50 dark:bg-black z-30 h-full top-0 right-0 xl:flex lg:hidden flex-shrink-0 flex-col w-96 transition-width duration-75'}
						aria-label="Sidebar"
					>
						<BasicRightSidebar></BasicRightSidebar>
					</aside>
				)}
			</>
		</>
	)
}

export default Index
