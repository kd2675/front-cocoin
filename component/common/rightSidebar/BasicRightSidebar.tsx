'use client'

import React, { useState } from 'react'
import BasicLRBar from '@component/common/rightSidebar/BasicLRBar'
import { AnimatePresence, motion } from 'framer-motion'
import { rightSidebarVariants } from '@motion/BasicVariants'
import BasicRightSidebarA from '@component/common/rightSidebar/BasicRightSidebarA'
// import TestLoginForm from '@component/common/TestLoginForm'
import BasicRightSidebarB from '@component/common/rightSidebar/BasicRightSidebarB'
import BasicRightSidebarC from '@component/common/rightSidebar/BasicRightSidebarC'
import { useDispatch, useSelector } from 'react-redux'
import { commonActions } from 'redux/reducers/common'
import { useRouter } from 'next/navigation'
import { RootState } from '@redux/store'

const BasicRightSidebar = () => {
	const dispatch = useDispatch()
	const router = useRouter()

	const [state, setState] = useState<number>(0)
	const userInfo = useSelector((state: RootState) => state.auth.userInfo)

	const setPrevState = () => {
		if (state == 0) {
			setState(2)
		} else {
			setState((v) => v - 1)
		}
	}

	const setNextState = () => {
		if (state == 2) {
			setState(0)
		} else {
			setState((v) => v + 1)
		}
	}

	const closeOnClick = () => {
		dispatch(commonActions.isRightSidebar('n'))
	}

	return (
		<>
			<div className="relative flex-1 flex flex-col min-h-0 border-l border-gray-200 dark:border-gray-600 pt-0">
				<div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
					<div className="xl:hidden space-y-2 pt-2">
						<div className="flex pb-4">
							<div className="flex-1 justify-start"></div>
							<div className={'flex-1 justify-center'}></div>
							<div className={'flex-1 justify-end text-center'}>
								<button
									type="button"
									onClick={closeOnClick}
									className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
								>
									<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div className="flex-1 px-3">
						<BasicLRBar setPrevState={setPrevState} setNextState={setNextState}></BasicLRBar>
						<AnimatePresence mode={'wait'} initial={false}>
							<motion.div key={state} variants={rightSidebarVariants} initial="hidden" animate="visible" exit="hidden">
								{state == 0 && userInfo && <BasicRightSidebarA {...userInfo}></BasicRightSidebarA>}
								{/*{state == 0 && !userInfo && <TestLoginForm></TestLoginForm>}*/}
								{state == 1 && userInfo && <BasicRightSidebarB></BasicRightSidebarB>}
								{state == 2 && userInfo && <BasicRightSidebarC></BasicRightSidebarC>}
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</>
	)
}

export default BasicRightSidebar
