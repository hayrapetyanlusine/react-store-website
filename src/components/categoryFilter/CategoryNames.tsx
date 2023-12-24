import React, { FC } from 'react';

interface CategoryNamesProps {
    name: string,
    isActive: string,
    id: string
}

export const CategoryNames: FC<CategoryNamesProps> = ({ name, isActive, id }) => {
    return (
        <p className={isActive ? "active" : ""}> {name} </p>
    )
}
