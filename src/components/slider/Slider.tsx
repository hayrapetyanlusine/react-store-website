import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {SwiperSlider} from "../../common/interfaces/swiper-slide";
import {ProductItem} from "../productItem/ProductItem";
import {Swiper, SwiperSlide} from 'swiper/react';
import React, {FC} from "react";
import "./Slider.scss";
import 'swiper/css';

interface SwiperSliderProps {
    slides: SwiperSlider[]
}

export const Slider: FC<SwiperSliderProps> = ({ slides }) => {
    return (
        <Swiper
            loop={true}
            spaceBetween={20}
            slidesPerView={4}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="swiper-container"
        >
            {slides.map((slide: SwiperSlider) => (
                <SwiperSlide key={slide.id}>
                    <ProductItem url={slide.url} name={slide.name} price={slide.price} />
                </SwiperSlide>
            ))}
            <div className="swiper-button-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="45" viewBox="0 0 24 45" fill="none">
                    <path d="M1 44L23 22.5L0.999998 1" stroke="#323334" />
                </svg>

            </div>
            <div className="swiper-button-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="45" viewBox="0 0 24 45" fill="none">
                    <path d="M23 1L1 22.5L23 44" stroke="#323334" />
                </svg>
            </div>
        </Swiper>
    );
};
