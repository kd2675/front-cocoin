'use client'

import React, { useEffect } from 'react'

const ModalBg = () => {
	useEffect(() => {
		document.body.style.cssText = `
    		position: fixed; 
    		top: -${window.scrollY}px;
    		overflow-y: hidden;
    		width: 100%;`
		return () => {
			const scrollY = document.body.style.top
			document.body.style.cssText = ''
			window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
		}
	}, [])
	return <div className={'fixed bg-fixed bg-black opacity-70 top-0 left-0 w-full h-full '}></div>
}

export default ModalBg
