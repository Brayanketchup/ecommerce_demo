import React from 'react'
import { TopsData, BottomsData } from '../constants'
import { CategoryDisplay } from '../minicomponents';

export const ProductCategoryOnSale = () => {

    const casualTops = TopsData.filter(item => item.discount > 0);
    const casualBottoms = BottomsData.filter(item => item.discount > 0);

    const allData = [...casualTops, ...casualBottoms]


    //  id: number;
    // tittle: string;
    // description: string;
    // size: string[];
    // price: number;
    // image: string;
    // category: string[];
    // style: string;
    // color: string;
    // rating: number;
    // discount: number;
    // slug: string;

    return (
        <CategoryDisplay
            data={allData}
            tittle="On Sale"
        />


    )

}