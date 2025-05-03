import React from 'react'
import { useParams } from 'react-router-dom'
import { TopsData } from '../constants'
import { ProductLayout } from '../minicomponents'


export const ProductTopID = () => {
  const { id } = useParams()

 return (
  <ProductLayout
  id={id}
  ProductData={TopsData}
  />
   
  )
}
