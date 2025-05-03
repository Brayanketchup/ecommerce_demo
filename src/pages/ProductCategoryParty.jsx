import React from 'react'
import { TopsData, BottomsData } from '../constants'
import { CategoryDisplay } from '../minicomponents';

export const ProductCategoryParty = () => {

  const casualTops = TopsData.filter(item => item.category.includes('party'));
  const casualBottoms = BottomsData.filter(item => item.category.includes('party'));

  const allData = [ ...casualTops, ...casualBottoms]


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
    tittle="Casual"
    />


  )

}