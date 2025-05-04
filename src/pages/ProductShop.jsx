import React from 'react'
import { TopsData, BottomsData } from '../constants'
import { CategoryDisplay } from '../minicomponents';

export const ProductShop = () => {
  const allData = [ ...TopsData, ...BottomsData]

  return (
    <CategoryDisplay
    data={allData}
    tittle="Shop"
    />
  )

}