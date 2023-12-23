import React, { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./Slider.scss";

interface SwiperSliderProps {}

export const Slider: FC = () => {
    return (
        <Swiper
            spaceBetween={5}
            slidesPerView={4}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className="swiper-slide-item">Slide 1</SwiperSlide>
            <SwiperSlide className="swiper-slide-item">Slide 2</SwiperSlide>
            <SwiperSlide className="swiper-slide-item">Slide 3</SwiperSlide>
            <SwiperSlide className="swiper-slide-item">Slide 4</SwiperSlide>
        </Swiper>
    );
};
