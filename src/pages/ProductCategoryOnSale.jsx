import React from 'react'
import { TopsData, BottomsData } from '../constants'
import { CategoryDisplay } from '../minicomponents';

export const ProductCategoryOnSale = () => {

    const casualTops = TopsData.filter(item => item.discount > 0);
    const casualBottoms = BottomsData.filter(item => item.discount > 0);

    const allData = [...casualTops, ...casualBottoms]

    return (
        <CategoryDisplay
            data={allData}
            tittle="On Sale"
        />


    )

}