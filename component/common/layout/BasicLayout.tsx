'use client'

import React from 'react'
import BasicHeader from '@component/common/header/BasicHeader'
import { basicAnim } from '@motion/BasicAnim'
import { motion } from 'framer-motion'
import LeftSidebar from '@component/common/leftSidebar'
import RightSidebar from '@component/common/rightSidebar'
import BasicFooter from '@component/common/footer/BasicFooter'
import SecondHeader from '@component/common/header/SecondHeader'
import SecondFooter from '@component/common/footer/SecondFooter'
import SocketTest from '@component/common/test/SocketTest'

type PropsType = {
	children: React.ReactNode
}
const BasicLayout = (props: PropsType) => {
	return (
		<>
			{/*<BasicHeader></BasicHeader>*/}
			{/*<RightSidebar></RightSidebar>*/}
			<LeftSidebar></LeftSidebar>

			<motion.div
				className='overflow-hidden p-4 text-black dark:text-white xl:ml-80'
				initial={basicAnim.initial}
				animate={basicAnim.animate}
			>
				<SecondHeader></SecondHeader>
				<SocketTest></SocketTest>
				{props.children}
				<SecondFooter></SecondFooter>
			</motion.div>
			{/*<BasicFooter></BasicFooter>*/}
		</>
	)
}

export default BasicLayout
