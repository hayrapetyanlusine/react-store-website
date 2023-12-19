import React, {FC} from 'react';
import "./Btn.scss";

interface BtnProps {
    text: string
}

export const Btn: FC<BtnProps> = ({text}) => {
    return (
        <button className="btn"> {text} </button>
    )
}