'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { modalActions, ModalReducerType } from '@redux/reducers/modal/index'
import { AnimatePresence, motion } from 'framer-motion'
import { basicToastAnim } from '@motion/BasicAnim'
import BasicToast from '@component/common/modal/toast/BasicToast'
import React from 'react'

const ToastUtil = () => {
	const dispatch = useDispatch()
	const modal: ModalReducerType = useSelector((state: RootState) => state.modal)

	const closeCallback = () => {
		dispatch(modalActions.deleteToast())
	}

	return (
		<>
			<AnimatePresence>
				<motion.div
					className={'fixed z-40 max-w-md px-2'}
					style={{ margin: '0 auto', left: '0', right: '0', top: '40%' }}
					key={modal.toast[0]?.uuid}
					initial={basicToastAnim.initial}
					animate={basicToastAnim.animate}
					exit={basicToastAnim.exit}
				>
					{
						modal.toast.length > 0
						&& modal.toast[0]?.type == null
						&&
						<BasicToast uuid={modal.toast[0].uuid} msg={modal.toast[0].msg} closeCallback={closeCallback}></BasicToast>
					}
				</motion.div>
			</AnimatePresence>
		</>
	)
}

export default ToastUtil
