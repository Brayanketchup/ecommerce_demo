import React from 'react'
import { TopsData } from '../constants'
import { ItemCard } from './ItemCard'

export const CategoryDisplay = ({ data, title, limit }) => {
  return (
    <div className='py-5'>
      <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
      <div className="flex gap-6 justify-around flex-wrap">
        {
        data.slice(0, limit).map((item) => (
          <ItemCard key={item.id}
          item={item}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-white border-[1px] rounded-full py-2 px-14 hover:bg-gray-200 transition duration-300">
          View All
        </button>
      </div>
    </div>
  )
}