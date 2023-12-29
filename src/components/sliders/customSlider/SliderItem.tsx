import {FC} from "react";
import {Btn} from "../../general/btn/Btn";

interface SliderItemProps {
    title: string;
    description: string;
}

export const SliderItem: FC<SliderItemProps> = ({title, description}) => {
    return (
        <div className="slider-item">
            <div className="s-img"></div>
            <div className="s-info">
                <p>{title}</p>
                <h2>{description}</h2>
                <Btn text={"VIEW NOW"}/>
            </div>
        </div>
    )
}