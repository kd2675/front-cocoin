import React, { useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { DownVariants } from '@motion/BasicVariants'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { goInquiryRoute, goIntroShlRoute, goNoticeRoute, goProductRoute } from '@link/index'
import { menuActions } from '@redux/reducers/menu'

export type CategoryType = {
	id: number
	sub: {
		subTitle: string
		onClick: () => void
	}[]
}

const Index = () => {
	const dispatch = useDispatch()
	const subMenuNum = useSelector((state: RootState) => state.menu.subMenuNum)
	const isMenu = useSelector((state: RootState) => state.menu.isMenu)
	const data = useSelector((state: RootState) => state.menu.data)

	const introSwrRoute = goIntroShlRoute()
	const productRoute = goProductRoute()
	const noticeRoute = goNoticeRoute()
	const inquiryRoute = goInquiryRoute()

	const onClick = useCallback((id1?: number, id2?: number) => {
		dispatch(menuActions.setIsMenu(false))
		switch (id1) {
			case 100:
				introSwrRoute({ type: 'push', id: id2 })
				break
			case 200:
				productRoute({ type: 'push', id: id2 })
				break
			case 300:
				noticeRoute({ type: 'push' })
				break
			case 400:
				inquiryRoute({ type: 'push' })
				break
		}
	}, [])

	return (
		<>
			<AnimatePresence>
				{isMenu && (
					<motion.section
						key='category'
						className='absolute left-0 top-18 z-10 hidden w-full cursor-default grid-cols-4 justify-center gap-4 overflow-hidden rounded-xl bg-green-50 text-gray-600 shadow-2xl lg:grid'
						initial='hidden'
						animate='visible'
						exit='hidden'
						variants={DownVariants}
					>
						{data.map((v, i, a) => {
							return (
								<React.Fragment key={v.id}>
									<div className={'border text-center'}>
										{v.sub.map((r, i, a) => {
											return (
												<React.Fragment key={i}>
													<div
														className={
															(subMenuNum == r.id ? 'border-indigo-500 border-opacity-100 ' : 'border-green-500 ') +
															'cursor-pointer border-b-2 border-green-500 border-opacity-0 p-4 duration-200 hover:border-opacity-100 hover:text-green-500'
														}
														onClick={() => {
															onClick(v.id, r.id)
														}}
													>
														{r.subTitle}
													</div>
												</React.Fragment>
											)
										})}
									</div>
								</React.Fragment>
							)
						})}
					</motion.section>
				)}
			</AnimatePresence>
		</>
	)
}

export default Index
