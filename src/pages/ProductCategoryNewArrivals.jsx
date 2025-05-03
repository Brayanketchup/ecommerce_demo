import React from 'react'
import { NewArrivals } from '../constants'
import { CategoryDisplay } from '../minicomponents';

export const ProductCategoryNewArrivals = () => {

  return (
    <CategoryDisplay
    data={NewArrivals}
    tittle="New Arrivals"
    />


  )

}

 