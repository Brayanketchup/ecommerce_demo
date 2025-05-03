import React from 'react'
import  { CategoryDisplay } from '../minicomponents'
import { TopsData } from '../constants' 

export const ProductTopCategory = () => {
  return (
    <CategoryDisplay
    data={TopsData}
    tittle="Bottoms"
    />
  )
}