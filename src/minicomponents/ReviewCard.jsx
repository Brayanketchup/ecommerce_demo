import React from 'react'
import { star, half_star } from '../assets';


export const ReviewCard = ( { review } ) => {
  return (
        <div className='flex flex-col justify-center min-w-[350px] h-fit border-[1px] border-gray-200 rounded-2xl px-5 py-10 gap-2'>
          <div className='flex flex-row items-center'>
            {[...Array(Math.floor(review.score))].map((_, i) => (
              <img key={`full-${i}`} src={star} alt="star" className='w-[16px] inline-block' />
            ))}
            {review.score % 1 !== 0 && (
              <img src={half_star} alt="half star" className='w-[8px] inline-block' />
            )}    
          </div>

          <h2 className='font-semibold pt-2'>{review.name}</h2>
          <p>{review.description}</p>
        </div>
  )
}

