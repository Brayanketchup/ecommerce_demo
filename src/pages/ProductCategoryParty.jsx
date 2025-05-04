import React from 'react'
import { TopsData, BottomsData } from '../constants'
import { CategoryDisplay } from '../minicomponents';

export const ProductCategoryParty = () => {

  const casualTops = TopsData.filter(item => item.category.includes('party'));
  const casualBottoms = BottomsData.filter(item => item.category.includes('party'));

  const allData = [ ...casualTops, ...casualBottoms]


  return (
    <CategoryDisplay
    data={allData}
    tittle="Party"
    />


  )

}