import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Greetings from '@component/module/intro/detail/Greetings'
import History from '@component/module/intro/detail/History'
import Vision from '@component/module/intro/detail/Vision'
import Layout from '@component/common/layout'
import { AnimatePresence, motion } from 'framer-motion'
import { rightSidebarVariants } from '@motion/BasicVariants'
import Menu from 'component/module/intro/detail/menu'
import { useDispatch } from 'react-redux'
import { menuActions } from '@redux/reducers/menu'

const Index = () => {
	const router = useRouter()
	const dispatch = useDispatch()

	const id = router.query.id

	useEffect(() => {
		dispatch(menuActions.setSubMenuNum(Number(id)))
		return ()=>{dispatch(menuActions.setSubMenuNum(Number(0)))}
	}, [router])

	return (
		<Layout>
			<Menu>
				<AnimatePresence mode={'wait'}>
					{id === '101' && (
						<motion.div key='greetings' initial='hidden' animate='visible' exit='hidden' variants={rightSidebarVariants}>
							<Greetings></Greetings>
						</motion.div>
					)}
					{id === '102' && (
						<motion.div key='history' initial='hidden' animate='visible' exit='hidden' variants={rightSidebarVariants}>
							<History></History>
						</motion.div>
					)}
					{id === '103' && (
						<motion.div key='vision' initial='hidden' animate='visible' exit='hidden' variants={rightSidebarVariants}>
							<Vision></Vision>
						</motion.div>
					)}
				</AnimatePresence>
			</Menu>
		</Layout>
	)
}

export default Index
