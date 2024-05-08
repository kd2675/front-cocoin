import React, { useEffect, useState } from 'react'
import Layout from '@component/common/layout'
import HomeThreeCard from '@component/module/home/HomeThreeCard'
import HomeGallery from '@component/module/home/HomeGallery'
import HomeCardSwiper from '@component/module/home/HomeCardSwiper'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import HomeBanner from '@component/module/home/HomeBanner'


const Index = () => {
	const router = useRouter()
	const dispatch = useDispatch()

	return (
		<>
			<Layout>
				<HomeBanner></HomeBanner>
				<HomeCardSwiper></HomeCardSwiper>
				<HomeThreeCard></HomeThreeCard>
				<HomeGallery></HomeGallery>
			</Layout>
		</>
	)
}

export default Index
