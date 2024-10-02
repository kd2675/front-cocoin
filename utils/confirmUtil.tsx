'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { modalActions, ModalReducerType } from '@redux/reducers/modal/index'
import { AnimatePresence, motion } from 'framer-motion'
import { basicConfirmAnim } from '@motion/BasicAnim'
import BasicConfirm from '@component/common/modal/confirm/BasicConfirm'
import React from 'react'
import ConfirmSuc from '@component/common/modal/confirm/ConfirmSuc'
import ConfirmWarm from '@component/common/modal/confirm/ConfirmWarm'
import ConfirmDanger from '@component/common/modal/confirm/ConfirmDanger'

const ConfirmUtil = () => {
	const dispatch = useDispatch()
	const modal: ModalReducerType = useSelector((state: RootState) => state.modal)

	const closeFunc = () => {
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
					{modal.confirm.length > 0 && modal.toast.length === 0 && modal.confirm[0]?.type == null && (
						<BasicConfirm
							uuid={modal.confirm[0].uuid}
							msg={modal.confirm[0].msg}
							title={modal.confirm[0].title}
							closeFunc={closeFunc}
							openCallback={modal.confirm[0].openCallback}
							closeCallback={modal.confirm[0].closeCallback}
							btn1Func={modal.confirm[0].btn1Func}
							btn1Text={modal.confirm[0].btn1Text}
							btn2Func={modal.confirm[0].btn2Func}
							btn2Text={modal.confirm[0].btn2Text}
						></BasicConfirm>
					)}
					{modal.confirm.length > 0 && modal.toast.length === 0 && modal.confirm[0]?.type == 'suc' && (
						<ConfirmSuc
							uuid={modal.confirm[0].uuid}
							msg={modal.confirm[0].msg}
							title={modal.confirm[0].title}
							closeFunc={closeFunc}
							openCallback={modal.confirm[0].openCallback}
							closeCallback={modal.confirm[0].closeCallback}
							btn1Func={modal.confirm[0].btn1Func}
							btn1Text={modal.confirm[0].btn1Text}
							btn2Func={modal.confirm[0].btn2Func}
							btn2Text={modal.confirm[0].btn2Text}
						></ConfirmSuc>
					)}
					{modal.confirm.length > 0 && modal.toast.length === 0 && modal.confirm[0]?.type == 'warn' && (
						<ConfirmWarm
							uuid={modal.confirm[0].uuid}
							msg={modal.confirm[0].msg}
							title={modal.confirm[0].title}
							closeFunc={closeFunc}
							openCallback={modal.confirm[0].openCallback}
							closeCallback={modal.confirm[0].closeCallback}
							btn1Func={modal.confirm[0].btn1Func}
							btn1Text={modal.confirm[0].btn1Text}
							btn2Func={modal.confirm[0].btn2Func}
							btn2Text={modal.confirm[0].btn2Text}
						></ConfirmWarm>
					)}
					{modal.confirm.length > 0 && modal.toast.length === 0 && modal.confirm[0]?.type == 'danger' && (
						<ConfirmDanger
							uuid={modal.confirm[0].uuid}
							msg={modal.confirm[0].msg}
							title={modal.confirm[0].title}
							closeFunc={closeFunc}
							openCallback={modal.confirm[0].openCallback}
							closeCallback={modal.confirm[0].closeCallback}
							btn1Func={modal.confirm[0].btn1Func}
							btn1Text={modal.confirm[0].btn1Text}
							btn2Func={modal.confirm[0].btn2Func}
							btn2Text={modal.confirm[0].btn2Text}
						></ConfirmDanger>
					)}
				</motion.div>
			</AnimatePresence>
		</>
	)
}

export default ConfirmUtil
