import React, {FC} from "react";
import {useCategories} from "../../common/hooks/useCategories";
import {Loading} from "../loading/Loading";
import {CategoryNames} from "./CategoryNames";
import "./CategoryFilter.scss";

export const CategoryFilterContainer: FC = () => {
    const { data: categories, isLoading: isCategoriesLoading } = useCategories();

    return (
        <div className="category-filter-container">
            <div className="category-names">
                <h2>Categories</h2>
                {
                    isCategoriesLoading ? (
                        <Loading />
                    ) : (
                        categories.map(({ _id, name }: {_id: string, name: string}) => {
                            <CategoryNames
                                key={_id}
                                name={name}
                                isActive="1"
                                id={_id}
                            />
                        })
                    )
                }
            </div>

            <div className="item-lists"></div>
        </div>
    )
}