'use client'

import React from 'react'
import { useDispatch } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import { basicLeftSidebarAnim } from '@motion/BasicAnim'
import BasicLeftSidebar from '@component/common/leftSidebar/BasicLeftSidebar'

const Index = () => {
	const dispatch = useDispatch()

	return (
		<>
			<AnimatePresence mode={'wait'} initial={true}>
				<motion.aside
					id='leftSidebar'
					className={
						'fixed left-0 top-0 z-30 flex h-full w-80 flex-shrink-0 flex-col border-r border-gray-200 bg-gray-50 pt-4 text-gray-900 w-96 dark:border-gray-600 dark:bg-black dark:text-white'
					}
					aria-label='Sidebar'
					{...basicLeftSidebarAnim}
				>
					<BasicLeftSidebar></BasicLeftSidebar>
				</motion.aside>
			</AnimatePresence>
		</>
	)
}

export default Index
