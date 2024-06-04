'use client'

import { useDispatch, useSelector } from 'react-redux'
import { SetStateAction, useEffect, useRef } from 'react'
import { RootState } from '@redux/store'
import { modalActions, ModalReducerType } from '@redux/reducers/modal/index'
import AlertInfo from '@component/common/modal/alert/AlertInfo'
import AlertDanger from '@component/common/modal/alert/AlertDanger'
import AlertSuc from '@component/common/modal/alert/AlertSuc'
import AlertWarn from '@component/common/modal/alert/AlertWarn'
import BasicAlert from '@component/common/modal/alert/BasicAlert'
import { AnimatePresence, motion } from 'framer-motion'
import { basicAlertAnim } from '@motion/BasicAnim'

const AlertUtil = () => {
	const dispatch = useDispatch()
	const modal: ModalReducerType = useSelector((state: RootState) => state.modal)
	const fire = useRef<SetStateAction<any>>()

	const timeOut = () => {
		fire.current = setTimeout(() => {
			dispatch(modalActions.deleteAllAlert())
		}, 1500)
	}

	useEffect(() => {
		if (modal.alert.length > 0) {
			timeOut()
		}
		return () => {
			clearTimeout(fire.current)
		}
	}, [modal])

	const closeCallback = () => {
		dispatch(modalActions.deleteAlert())
	}

	return (
		<>
			<AnimatePresence>
				<motion.div
					className={'fixed z-40 max-w-md px-2'}
					style={{ margin: '0 auto', left: '0', right: '0', top: '2%' }}
					key={modal.alert[0]?.uuid}
					initial={basicAlertAnim.initial}
					animate={basicAlertAnim.animate}
					exit={basicAlertAnim.exit}
				>
					{modal.alert.length > 0 && modal.alert[0]?.type == null &&
						<BasicAlert uuid={modal.alert[0].uuid} msg={modal.alert[0].msg} closeCallback={closeCallback}></BasicAlert>}
					{modal.alert.length > 0 && modal.alert[0]?.type == 'info' &&
						<AlertInfo uuid={modal.alert[0].uuid} msg={modal.alert[0].msg} closeCallback={closeCallback}></AlertInfo>}
					{modal.alert.length > 0 && modal.alert[0]?.type == 'danger' &&
						<AlertDanger uuid={modal.alert[0].uuid} msg={modal.alert[0].msg} closeCallback={closeCallback}></AlertDanger>}
					{modal.alert.length > 0 && modal.alert[0]?.type == 'suc' &&
						<AlertSuc uuid={modal.alert[0].uuid} msg={modal.alert[0].msg} closeCallback={closeCallback}></AlertSuc>}
					{modal.alert.length > 0 && modal.alert[0]?.type == 'warn' &&
						<AlertWarn uuid={modal.alert[0].uuid} msg={modal.alert[0].msg} closeCallback={closeCallback}></AlertWarn>}
				</motion.div>
			</AnimatePresence>
		</>
	)
}

export default AlertUtil
