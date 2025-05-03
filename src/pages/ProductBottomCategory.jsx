import React from 'react'
import  { CategoryDisplay } from '../minicomponents'
import { BottomsData } from '../constants' 
import { useState } from 'react'

export const ProductBottomCategory = () => {

  return (  
    <CategoryDisplay
    data={BottomsData}
    tittle="Bottoms"
    />
    
  )
}
