import React from 'react'
import  { CategoryDisplay } from '../minicomponents'
import { BottomsData } from '../constants' 

export const ProductBottomCategory = () => {

  return (  
    <CategoryDisplay
    data={BottomsData}
    tittle="Bottoms"
    />
    
  )
}
