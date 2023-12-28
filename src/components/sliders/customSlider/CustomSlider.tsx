import {FC, useEffect, useState} from "react";
import "./CustomSlider.scss";
import { Slide } from "../../../common/interfaces/slide";
import {SliderItem} from "./SliderItem";

interface CustomSliderProps {
    slides: Slide[]
}

export const CustomSlider: FC<CustomSliderProps> = ({slides}) => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveSlide(prevIndex => (prevIndex + 1) % slides.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [slides.length, setActiveSlide]);

    const transformValue = -activeSlide * 100;

    return (
        <div className="slider-wrapper">
            <div className="slider" style={{transform: `translateX(${transformValue}%)`}}>
                {slides.map(slide => (
                    <SliderItem key={slide.id} {...slide} />
                ))}
            </div>
            <div className="dots">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`dot ${index === activeSlide ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    )
}