import React from 'react'
import { casual, formal, gym, party } from '../assets'
import { Link } from 'react-router-dom'

export const BrowseCategories = () => {
  return (
    <section className='w-full p-20'>
      <div className='bg-[#e4e2e3] p-6 w-full rounded-2xl'>
        <h1 className='text-3xl font-extrabold text-center py-8'>BROWSE BY DRESS STYLE</h1>
        <div className='flex flex-col gap-4 justify-center items-center'>

          <div className='flex md:flex-row flex-col gap-6 '>
            <Link to="/products/casual" className='inline-block relative hover:scale-105 transition-all duration-500 h-[150px] md:h-full'>
              <img src={casual} alt="casual category image" className='rounded-2xl w-full h-[150px] md:h-full object-cover  object-top-right' />
              <span className='absolute top-0 p-5 font-bold'>Casual</span>
            </Link>
            <Link to="/products/formal" className='relative hover:scale-105 transition-all duration-500 h-[150px] md:h-full'>
              <img src={formal} alt="formal category image" className='rounded-2xl w-full h-[150px] md:h-full object-cover object-top-right' />
              <span className='absolute top-0 p-5 font-bold'>Formal</span>
            </Link>
          </div>

          <div className='flex md:flex-row flex-col gap-4'>
            <Link to="/products/party" className='relative hover:scale-105 transition-all duration-500 h-[150px] md:h-full'>
              <img src={party} alt="party category image" className='rounded-2xl w-full h-[150px] md:h-full object-cover object-top-right' />
              <span className='absolute top-0 p-5 font-bold'>Party</span>

            </Link>
            <Link to="/products/gym" className='inline-block relative hover:scale-105 transition-all duration-500 h-[150px] md:h-full'>
              <img src={gym} alt="gym category image" className='rounded-2xl w-full h-[150px] md:h-full object-cover  object-top-right' />
              <span className='absolute top-0 p-5 font-bold'>Gym</span>
            </Link>
          </div>

        </div>

      </div>
    </section>

  )
}
