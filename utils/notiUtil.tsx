'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { modalActions, ModalReducerType } from '@redux/reducers/modal/index'
import { AnimatePresence, motion } from 'framer-motion'
import { basicNotiAnim } from '@motion/BasicAnim'
import React from 'react'
import BasicNoti from '@component/common/modal/noti/BasicNoti'

const NotiUtil = () => {
	const dispatch = useDispatch()
	const modal: ModalReducerType = useSelector((state: RootState) => state.modal)

	const closeFunc = (uuid?: string) => {
		if (uuid) {
			dispatch(modalActions.deleteNoti(uuid))
		}
	}

	const deleteAllNoti = () => {
		dispatch(modalActions.deleteAllNoti())
	}

	return (
		<>
			<AnimatePresence>
				{modal.noti.length > 1 && (
					<motion.div
						className={'fixed z-40 max-w-md px-2'}
						style={{ margin: '0 auto', right: '0', top: '10%' }}
						key={'notiAllDelete'}
						initial={basicNotiAnim.initial}
						animate={basicNotiAnim.animate}
						exit={basicNotiAnim.exit}
					>
						<div
							className={
								'rounded-md bg-blue-500 py-1 px-2 font-medium text-blue-50 hover:bg-blue-600'
							}
							style={{ cursor: 'pointer' }}
							onClick={deleteAllNoti}
						>
							모두지우기
						</div>
					</motion.div>
				)}
				{modal.noti.length > 0 &&
					modal.noti.map((v) => {
						return (
							<motion.div
								className={'fixed z-40 max-w-md px-2'}
								style={{ margin: '0 auto', right: '0', top: (modal.noti.indexOf(v) + 1) * 8 + 6 + '%' }}
								key={v.uuid}
								initial={basicNotiAnim.initial}
								animate={basicNotiAnim.animate}
								exit={basicNotiAnim.exit}
							>
								<BasicNoti
									uuid={v.uuid}
									title={v.title}
									msg={v.msg}
									closeFunc={() => {
										closeFunc(v.uuid)
									}}
									openCallback={v.openCallback}
									closeCallback={v.closeCallback}
									btnFunc={v.btnFunc}
								></BasicNoti>
							</motion.div>
						)
					})}
			</AnimatePresence>
			{/*<motion.div*/}
			{/*	className={'fixed z-40 max-w-md px-2'}*/}
			{/*	style={{ margin: '0 auto', right: '0', top: '10%' }}*/}
			{/*	key={modal.noti[0]?.uuid}*/}
			{/*	initial={basicNotiAnim.initial}*/}
			{/*	animate={basicNotiAnim.animate}*/}
			{/*	exit={basicNotiAnim.exit}*/}
			{/*>*/}
			{/*	{modal.noti.length > 0 &&*/}
			{/*		modal.noti.map((v) => {*/}
			{/*			return (*/}
			{/*				<BasicNoti*/}
			{/*					uuid={v.uuid}*/}
			{/*					msg={v.msg}*/}
			{/*					closeFunc={() => {*/}
			{/*						closeFunc(v.uuid)*/}
			{/*					}}*/}
			{/*					openCallback={v.openCallback}*/}
			{/*					closeCallback={v.closeCallback}*/}
			{/*					btnFunc={v.btnFunc}*/}
			{/*				></BasicNoti>*/}
			{/*			)*/}
			{/*		})}*/}
			{/*</motion.div>*/}
		</>
	)
}

export default NotiUtil
