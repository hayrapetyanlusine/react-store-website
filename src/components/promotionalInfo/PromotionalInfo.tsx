import React, {FC} from "react";
import "./PromotionalInfo.scss"

export const PromotionalInfo: FC = () => {
    return (
        <div className="promotional-info">
            <div className="promotional-info-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
                    <path d="M25.9091 5.5H21.8182V0H2.72727C1.22727 0 0 1.2375 0 2.75V17.875H2.72727C2.72727 20.1575 4.55455 22 6.81818 22C9.08182 22 10.9091 20.1575 10.9091 17.875H19.0909C19.0909 20.1575 20.9182 22 23.1818 22C25.4455 22 27.2727 20.1575 27.2727 17.875H30V11L25.9091 5.5ZM25.2273 7.5625L27.9 11H21.8182V7.5625H25.2273ZM6.81818 19.25C6.06818 19.25 5.45455 18.6313 5.45455 17.875C5.45455 17.1187 6.06818 16.5 6.81818 16.5C7.56818 16.5 8.18182 17.1187 8.18182 17.875C8.18182 18.6313 7.56818 19.25 6.81818 19.25ZM9.84546 15.125C9.09546 14.2863 8.03182 13.75 6.81818 13.75C5.60455 13.75 4.54091 14.2863 3.79091 15.125H2.72727V2.75H19.0909V15.125H9.84546ZM23.1818 19.25C22.4318 19.25 21.8182 18.6313 21.8182 17.875C21.8182 17.1187 22.4318 16.5 23.1818 16.5C23.9318 16.5 24.5455 17.1187 24.5455 17.875C24.5455 18.6313 23.9318 19.25 23.1818 19.25Z" fill="#0A032A"/>
                </svg>
                <p>FREE SHIPPING</p>
            </div>
            <div className="promotional-info-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="29" viewBox="0 0 22 29" fill="none">
                    <path d="M19.25 12.814H2.75C2.02065 12.814 1.32118 13.0982 0.805456 13.6041C0.289731 14.11 0 14.7962 0 15.5116V26.3023C0 27.0178 0.289731 27.704 0.805456 28.2099C1.32118 28.7158 2.02065 29 2.75 29H19.25C19.9793 29 20.6788 28.7158 21.1945 28.2099C21.7103 27.704 22 27.0178 22 26.3023V15.5116C22 14.7962 21.7103 14.11 21.1945 13.6041C20.6788 13.0982 19.9793 12.814 19.25 12.814ZM19.25 26.3023H2.75V20.907H19.25V26.3023ZM19.25 18.2093H2.75V15.5116H19.25V18.2093ZM17.875 4.72093V11.4651H15.8125V6.74419H8.085L11.4125 10.0219L9.955 11.4651L4.125 5.73256L9.955 0L11.4125 1.44326L8.085 4.72093H17.875Z" fill="#0A032A"/>
                </svg>
                <p>100% REFUND</p>
            </div>
            <div className="promotional-info-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                    <path d="M11 0C4.9346 0 0 4.7103 0 10.5V14.8501C0 15.9253 0.9867 16.8 2.2 16.8H3.3C3.59174 16.8 3.87153 16.6894 4.07782 16.4925C4.28411 16.2955 4.4 16.0285 4.4 15.75V10.3498C4.4 10.0714 4.28411 9.8043 4.07782 9.60739C3.87153 9.41047 3.59174 9.29985 3.3 9.29985H2.3012C2.9128 5.23635 6.5758 2.1 11 2.1C15.4242 2.1 19.0872 5.23635 19.6988 9.29985H18.7C18.4083 9.29985 18.1285 9.41047 17.9222 9.60739C17.7159 9.8043 17.6 10.0714 17.6 10.3498V16.8C17.6 17.9581 16.6133 18.9 15.4 18.9H13.2V17.85H8.8V21H15.4C17.8266 21 19.8 19.1163 19.8 16.8C21.0133 16.8 22 15.9253 22 14.8501V10.5C22 4.7103 17.0654 0 11 0Z" fill="#0A032A"/>
                </svg>
                <p>SUPPORT 24/7</p>
            </div>
        </div>
    )
}