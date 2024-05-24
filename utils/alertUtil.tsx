'use client'

import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '@redux/types/alertType'
import { SetStateAction, useEffect, useRef } from 'react'
import { RootState } from '@redux/store'
import { alertActions } from '@redux/reducers/alert/index'
import AlertInfo from '@component/common/alert/AlertInfo'
import AlertDanger from '@component/common/alert/AlertDanger'
import AlertSuc from '@component/common/alert/AlertSuc'
import AlertWarn from '@component/common/alert/AlertWarn'
import BasicAlert from '@component/common/alert/BasicAlert'
import { AnimatePresence, motion } from 'framer-motion'
import { basicAnim } from '@motion/BasicAnim'

const AlertUtil = () => {
	let dispatch = useDispatch()
	const alert: Alert[] = useSelector((state: RootState) => state.alert)
	const fire = useRef<SetStateAction<any>>()

	const timeOut = () => {
		fire.current = setTimeout(() => {
			dispatch(alertActions.deleteAlert())
		}, 1500)
	}

	useEffect(() => {
		if (alert.length > 0) {
			timeOut()
		}
		return () => {
			clearTimeout(fire.current)
		}
	}, [alert])

	const closeCallback = () => {
		dispatch(alertActions.deleteAlert())
	}
	return (
		<>
			<AnimatePresence>
				<motion.div
					className={'fixed z-40 max-w-md px-2'}
					style={{ margin: '0 auto', left: '0', right: '0', top: '40%' }}
					key={alert[0]?.uuid}
					initial={basicAnim.initial}
					animate={basicAnim.animate}
					exit={basicAnim.exit}
				>
					{alert.length > 0 && alert[0]?.type == null && <BasicAlert uuid={alert[0].uuid} msg={alert[0].msg} closeCallback={closeCallback}></BasicAlert>}
					{alert.length > 0 && alert[0]?.type == 'info' && <AlertInfo uuid={alert[0].uuid} msg={alert[0].msg} closeCallback={closeCallback}></AlertInfo>}
					{alert.length > 0 && alert[0]?.type == 'danger' && <AlertDanger uuid={alert[0].uuid} msg={alert[0].msg} closeCallback={closeCallback}></AlertDanger>}
					{alert.length > 0 && alert[0]?.type == 'suc' && <AlertSuc uuid={alert[0].uuid} msg={alert[0].msg} closeCallback={closeCallback}></AlertSuc>}
					{alert.length > 0 && alert[0]?.type == 'warn' && <AlertWarn uuid={alert[0].uuid} msg={alert[0].msg} closeCallback={closeCallback}></AlertWarn>}
				</motion.div>
			</AnimatePresence>
		</>
	)
}

export default AlertUtil
