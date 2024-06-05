import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const usePortal = () => {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<Element | null>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		ref.current = document.querySelector<HTMLElement>('#root-modal')
		setMounted(true)
	}, [])

	const openPortal = () => {
		setIsOpen(true)
	}
	const closePortal = () => {
		setIsOpen(false)
	}

	const portal = ({ children }: { children: React.ReactNode }) => {
		return mounted && ref.current && isOpen
			? createPortal(
					<div className='fixed left-0 top-0 z-40 flex justify-center align-middle'>
						<div
							className='fixed left-0 top-0 h-full w-full bg-black opacity-50'
							role='presentation'
							onClick={closePortal}
						/>
						<div className='relative'>{children}</div>
					</div>,
					ref.current
			  )
			: null
	}
	return { portal, openPortal, closePortal }
}

export default usePortal
