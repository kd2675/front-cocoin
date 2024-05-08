import React, { useEffect, useState } from 'react'
import bg1 from '@public/images/background5.jpg'
import bg2 from '@public/images/background6.jpg'
import bg3 from '@public/images/background7.jpg'
import bg4 from '@public/images/background9.jpg'
import bg5 from '@public/images/background15.jpg'
import bg6 from '@public/images/background17.jpg'
import Image from 'next/image'

const HomeBanner = () => {
	const [img, setImg] = useState<string | null>(null)

	useEffect(() => {
		const backgroundImg = [bg1, bg2, bg3, bg4, bg5, bg6]
		const randomIndex = Math.floor(Math.random() * backgroundImg.length)
		setImg(backgroundImg[randomIndex].src)
	}, [])

	return (
		<>
			<div className={'relative h-24 bg-black'}>
				{img && (
					<Image src={img} fill={true} className={'object-cover'} alt={''} loading={'lazy'} priority={false}></Image>
				)}
			</div>
		</>
	)
}

export default HomeBanner
