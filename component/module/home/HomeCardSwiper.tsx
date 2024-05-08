import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Lazy, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'

const HomeCardSwiper = () => {
	return (
		<>
			<div className="h-96 w-full py-10 xl:h-128">
				<Swiper
					className={'flex h-full w-full'}
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					navigation={false}
					modules={[Pagination, Navigation, Lazy]}
				>
					<SwiperSlide>
						<Image src={'/images/background4.jpg'} className="swiper-lazy" fill={true} alt={''} loading={'lazy'}></Image>
					</SwiperSlide>
					<SwiperSlide>
						<Image src={'/images/test2.png'} className="swiper-lazy" fill={true} alt={''} loading={'lazy'}></Image>
					</SwiperSlide>
					<SwiperSlide>
						<Image src={'/images/test1.png'} className="swiper-lazy" fill={true} alt={''} loading={'lazy'}></Image>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	)
}

export default HomeCardSwiper
