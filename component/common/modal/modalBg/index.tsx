'use client'

import React, { ReactNode, useEffect } from 'react'
import { ModalReducerType } from '@redux/reducers/modal'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'

type PropsType = {
	closeFunc?: () => void
}

const ModalBg = (props: PropsType) => {
	const modal: ModalReducerType = useSelector((state: RootState) => state.modal)

	useEffect(() => {
		document.body.style.cssText = `
    		position: fixed; 
    		top: -${window.scrollY}px;
    		overflow-y: hidden;
    		width: 100%;`
		return () => {
			if (modal.toast.length + modal.confirm.length > 1) {
			} else {
				const scrollY = document.body.style.top
				document.body.style.cssText = ''
				window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
			}
		}
	}, [])
	return (
		<div
			className={'fixed left-0 top-0 h-full w-full bg-black bg-fixed opacity-70'}
			onClick={props.closeFunc ? props.closeFunc : () => {}}
		></div>
	)
}

export default ModalBg
