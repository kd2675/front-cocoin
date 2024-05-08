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
					<div className="z-40 fixed flex w-full h-full justify-center align-middle top-0 left-0">
						<div className="absolute w-full h-full bg-black opacity-50" role="presentation" onClick={closePortal} />
						<div className="flex flex-col justify-center align-middle">{children}</div>
					</div>,
					ref.current
			  )
			: null
	}
	return { portal, openPortal, closePortal }
}

export default usePortal
