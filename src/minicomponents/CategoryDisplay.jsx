import React from 'react'
import { ItemCard } from './ItemCard'
import { Link } from 'react-router-dom'

export const CategoryDisplay = ({ data, tittle, limit }) => {

  if (data?.length == 0) {
    return (
      <main className='min-h-screen flex flex-col gap-2 items-center justify-center'>
        <h1 className='text-3xl font-bold'>We don't have any product for this category sorry for the inconvenience</h1>
        <Link to='/' className='text-white bg-black/80 px-6 py-5 text-md'>Go Back To Home</Link>
      </main>
    )
  } else {

    return (
      <div className='py-5'>
        <h1 className="text-4xl font-bold mb-4 text-center">{tittle}</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-full justify-items-center">
          {
            data.slice(0, limit).map((item) => (
              <ItemCard 
              key={item.id}
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
}