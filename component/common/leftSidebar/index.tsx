'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import { basicLeftSidebarAnim } from '@motion/BasicAnim'
import BasicLeftSidebar from '@component/common/leftSidebar/BasicLeftSidebar'
import SecondLeftSidebar from '@component/common/leftSidebar/SecondLeftSidebar'
import { RootState } from '@redux/store'

const Index = () => {
	const dispatch = useDispatch()
	const isMenu = useSelector((state: RootState) => state.menu.isMenu)

	return (
		<>
			<AnimatePresence mode={'wait'} initial={true}>
				<motion.aside
					id='leftSidebar'
					className={
						'fixed inset-0 z-50 my-4 ml-4 hidden h-[calc(100vh-32px)] w-72 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 xl:block'
					}
					aria-label='Sidebar'
					{...basicLeftSidebarAnim}
				>
					{/*<BasicLeftSidebar></BasicLeftSidebar>*/}
					<SecondLeftSidebar></SecondLeftSidebar>
				</motion.aside>
			</AnimatePresence>

			<AnimatePresence mode={'wait'} initial={true}>
				{isMenu && (
					<motion.aside
						id='leftSidebar'
						className={
							'fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 xl:hidden'
						}
						aria-label='Sidebar'
						{...basicLeftSidebarAnim}
					>
						{/*<BasicLeftSidebar></BasicLeftSidebar>*/}
						<SecondLeftSidebar></SecondLeftSidebar>
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	)
}

export default Index
