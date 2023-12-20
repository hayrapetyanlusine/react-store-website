import React, {FC} from 'react';
import "./NewsletterSignUp.scss";

export const NewsletterSignUp: FC = () => {
    return (
        <div className="newsletter-signup">
            <div className="newsletter-signup-text">
                <h2>SING UP FOR OUR NEWSLETTER</h2>
                <p>Subscribe for the latest DEALS and promotions</p>
            </div>
            <form>
                <input
                    type="email"
                    placeholder="Enter your e-mail address"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="50" viewBox="0 0 85 50" fill="none">
                    <rect width="85" height="50" fill="#4C8787"/>
                    <path
                        d="M51.25 17H31.75C31.3352 17 31 17.3352 31 17.75V32.75C31 33.1648 31.3352 33.5 31.75 33.5H51.25C51.6648 33.5 52 33.1648 52 32.75V17.75C52 17.3352 51.6648 17 51.25 17ZM50.3125 19.5969V31.8125H32.6875V19.5969L32.0406 19.093L32.9617 17.9094L33.9648 18.6898H49.0375L50.0406 17.9094L50.9617 19.093L50.3125 19.5969ZM49.0375 18.6875L41.5 24.5469L33.9625 18.6875L32.9594 17.907L32.0383 19.0906L32.6852 19.5945L40.6914 25.8195C40.9217 25.9984 41.2049 26.0955 41.4965 26.0955C41.7881 26.0955 42.0713 25.9984 42.3016 25.8195L50.3125 19.5969L50.9594 19.093L50.0383 17.9094L49.0375 18.6875Z"
                        fill="#F3F6FF"/>
                </svg>
            </form>
        </div>
    )
}