import React, {FC} from 'react';
import {useNavigate} from "react-router";

interface CategoryNamesProps {
    name: string,
    isActive: boolean,
    id: string
}

export const CategoryNames: FC<CategoryNamesProps> = ({name, isActive, id}) => {
    const navigate = useNavigate();

    return (
        <p
            className={isActive ? "c-name active" : "c-name"}
            onClick={() => navigate("/store/" + id)}
        > {name} </p>
    )
}
