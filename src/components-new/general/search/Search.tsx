import React, {FC} from 'react';
import {Btn} from "../btn/Btn";
import "./Search.scss";

export const Search: FC = () => {
    return (
        <div className="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="26" viewBox="0 0 33 26" fill="none">
                <path opacity="0.5" fillRule="evenodd" clipRule="evenodd"
                      d="M23.6846 16.412L32.2514 23.1906C32.5526 23.4291 32.7216 23.7524 32.7215 24.0894C32.7213 24.4265 32.552 24.7497 32.2506 24.988C31.9493 25.2262 31.5407 25.36 31.1147 25.3599C30.6888 25.3598 30.2803 25.2258 29.9792 24.9874L21.4123 18.2087C18.8514 19.7782 15.631 20.5168 12.4062 20.2742C9.18147 20.0317 6.19463 18.8261 4.05333 16.9029C1.91202 14.9796 0.777084 12.4831 0.87941 9.92129C0.981737 7.35943 2.31364 4.92463 4.60416 3.11222C6.89468 1.2998 9.97176 0.245915 13.2094 0.164947C16.4471 0.0839798 19.6021 0.982015 22.0327 2.67636C24.4633 4.37071 25.9869 6.7341 26.2934 9.28573C26.6 11.8374 25.6666 14.3856 23.683 16.412H23.6846ZM13.613 17.7992C16.1469 17.7992 18.577 17.0027 20.3688 15.585C22.1605 14.1672 23.1671 12.2444 23.1671 10.2394C23.1671 8.23438 22.1605 6.31151 20.3688 4.89376C18.577 3.47602 16.1469 2.67954 13.613 2.67954C11.0791 2.67954 8.64899 3.47602 6.85725 4.89376C5.06552 6.31151 4.05893 8.23438 4.05893 10.2394C4.05893 12.2444 5.06552 14.1672 6.85725 15.585C8.64899 17.0027 11.0791 17.7992 13.613 17.7992Z"
                      fill="#0A032A" fillOpacity="0.7"/>
            </svg>
            <input type="text"/>
            <Btn text={"Search"}/>
        </div>
    )
}