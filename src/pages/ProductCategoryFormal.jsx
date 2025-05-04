import React from 'react'
import { TopsData, BottomsData } from '../constants'
import { CategoryDisplay } from '../minicomponents';

export const ProductCategoryFormal = () => {

  const casualTops = TopsData.filter(item => item.category.includes('formal'));
  const casualBottoms = BottomsData.filter(item => item.category.includes('formal'));

  const allData = [ ...casualTops, ...casualBottoms]

  return (
    <CategoryDisplay
    data={allData}
    tittle="Formal"
    />


  )
}
