import React from 'react'
import { TopsData, BottomsData } from '../constants'
import { CategoryDisplay } from '../minicomponents';

export const ProductCategoryCasual = () => {

  const casualTops = TopsData.filter(item => item.category.includes('casual'));
  const casualBottoms = BottomsData.filter(item => item.category.includes('casual'));

  const allData = [ ...casualTops, ...casualBottoms]

  return (
    <CategoryDisplay
    data={allData}
    tittle="Casual"
    />


  )
}
