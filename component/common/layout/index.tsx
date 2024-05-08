import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@component/common/layout/header'
import { basicAnim } from '@motion/BasicAnim'
import Menu from '@component/common/layout/menu'
import Footer from '@component/common/layout/footer'
import background from '@styles/background.module.css'
import bg1 from '@public/images/background5.jpg'
import bg2 from '@public/images/background6.jpg'
import bg3 from '@public/images/background7.jpg'
import bg4 from '@public/images/background9.jpg'
import bg5 from '@public/images/background15.jpg'
import bg6 from '@public/images/background17.jpg'
import Image, { StaticImageData } from 'next/image'
import HeaderCardSwipe from '@component/common/layout/HeaderCardSwipe'

type PropsType = {
	children: React.ReactNode
}

const Index = (props: PropsType) => {
	const [img, setImg] = useState<string | null>(null)

	useEffect(() => {
		const backgroundImg = [bg1, bg2, bg3, bg4, bg5, bg6]
		const randomIndex = Math.floor(Math.random() * backgroundImg.length)
		setImg(backgroundImg[randomIndex].src)
	}, [])

	return (
		<>
			{/*<Image*/}
			{/*	src={img}*/}
			{/*	className={background.background}*/}
			{/*	fill={true}*/}
			{/*	alt={''}*/}
			{/*	loading={'lazy'}*/}
			{/*></Image>*/}
			<div className={'h-screen overflow-auto'}>
				<Header></Header>
				<div className='px-0 lg:px-56'>
					<Menu></Menu>
					<motion.div className='text-black dark:text-white' initial={basicAnim.initial} animate={basicAnim.animate}>
						{props.children}
					</motion.div>
				</div>
				<Footer></Footer>
			</div>
		</>
	)
}

export default Index
