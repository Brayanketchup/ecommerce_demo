import React from 'react'
import { star, half_star } from '../assets'
import { Link } from 'react-router-dom'


export const ItemCard = ( { item }) => {
  
  return (
    <Link className='flex flex-col justify-center w-[200px] ease-in transition-transform duratino-300 hover:scale-105' to={`/${item.slug}${item.id}`} >
      <img src={item.image} alt="shirt" className='object-contain rounded-2xl' />
      
      <h2 className='font-semibold pt-2'>{item.tittle}</h2>
      <div className='flex flex-row items-center'>

        {[...Array(Math.floor(item.rating))].map((_, i) => (
          <img key={`full-${i}`} src={star} alt="star" className='w-[16px] inline-block' />
        ))}
        {item.rating % 1 !== 0 && (
          <img src={half_star} alt="half star" className='w-[8px] inline-block' />
        )}

        <h6 className='pl-2 text-xs'>{item.rating}/<span className='font-light text-gray-400'>5</span></h6>
      </div>
      {item.discount !== 0 ? (
          <div className='flex gap-2 items-center'>
            <span className='font-semibold'>${(Math.floor(item.price * (1 - item.discount / 100)) + 0.99).toFixed(2)}</span>
            <span className='line-through text-gray-400 text-sm'>${item.price}</span>
            <span className='text-red-500 bg-red-100 py-1 px-3 rounded-full font-semibold'>-{item.discount}%</span>
          </div>
        ) : (
          <span className='font-semibold'>${item.price.toFixed(2)}</span>
        )}
    </Link>
  )
}
