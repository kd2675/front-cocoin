import React from 'react';
import {Lazy, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";

const HeaderCardSwipe = () => {
    return (
        <>
            <div className="h-96 w-full py-10">
                <Swiper
                    className={' h-full w-full'}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Lazy]}
                >
                    <SwiperSlide>
                        <Image src={'/images/background4.jpg'} className="swiper-lazy-preloader-white" fill={true} alt={''} loading={'lazy'}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={'/images/test2.png'} className="swiper-lazy-preloader-white" fill={true} alt={''} loading={'lazy'}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={'/images/test1.png'} className="swiper-lazy-preloader-white" fill={true} alt={''} loading={'lazy'}></Image>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default HeaderCardSwipe;