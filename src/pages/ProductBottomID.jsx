import React from 'react'
import { useParams } from 'react-router-dom'
import { BottomsData } from '../constants'
import { ProductLayout } from '../minicomponents'


export const ProductBottomID = () => {
  const { id } = useParams()

 return (
  <ProductLayout
  id={id}
  ProductData={BottomsData}
  />
   
  )
}