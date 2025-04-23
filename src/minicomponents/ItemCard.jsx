import React from 'react'
import { star, half_star } from '../assets'


export const ItemCard = ( { tittle, rating, img, price, discount }) => {
  return (
    <div className='flex flex-col justify-center w-[200px]'>
      <img src={img} alt="shirt" className='object-contain rounded-2xl' />
      <h2 className='font-semibold pt-2'>{tittle}</h2>
      <div className='flex flex-row items-center'>

        {[...Array(Math.floor(rating))].map((_, i) => (
          <img key={`full-${i}`} src={star} alt="star" className='w-[16px] inline-block' />
        ))}
        {rating % 1 !== 0 && (
          <img src={half_star} alt="half star" className='w-[8px] inline-block' />
        )}

        <h6 className='pl-2 text-xs'>{rating}/<span className='font-light text-gray-400'>5</span></h6>
      </div>
      {discount !== 0 ? (
          <div className='flex gap-2 items-center'>
            <span className='font-semibold'>${(Math.floor(price * (1 - discount / 100)) + 0.99).toFixed(2)}</span>
            <span className='line-through text-gray-400 text-sm'>${price}</span>
            <span className='text-red-500 bg-red-100 py-1 px-3 rounded-full font-semibold'>-{discount}%</span>
          </div>
        ) : (
          <span className='font-semibold'>${price.toFixed(2)}</span>
        )}
    </div>
  )
}
