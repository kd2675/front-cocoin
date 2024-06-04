'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { modalActions, ModalReducerType } from '@redux/reducers/modal/index'
import { AnimatePresence, motion } from 'framer-motion'
import { basicConfirmAnim } from '@motion/BasicAnim'
import BasicConfirm from '@component/common/modal/confirm/BasicConfirm'
import React from 'react'

const AlertUtil = () => {
	const dispatch = useDispatch()
	const modal: ModalReducerType = useSelector((state: RootState) => state.modal)

	const closeCallback = () => {
		dispatch(modalActions.deleteConfirm())
	}

	return (
		<>
			<AnimatePresence>
				<motion.div
					className={'fixed z-40 max-w-md px-2'}
					style={{ margin: '0 auto', left: '0', right: '0', top: '30%' }}
					key={modal.confirm[0]?.uuid}
					initial={basicConfirmAnim.initial}
					animate={basicConfirmAnim.animate}
					exit={basicConfirmAnim.exit}
				>
					{
						modal.confirm.length > 0
						&& modal.confirm[0]?.type == null
						&& <BasicConfirm uuid={modal.confirm[0].uuid} msg={modal.confirm[0].msg} closeCallback={closeCallback}></BasicConfirm>
					}
				</motion.div>
			</AnimatePresence>
		</>
	)
}

export default AlertUtil
