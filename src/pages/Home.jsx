import React from 'react'
import { Hero, BrowseCategories } from '../components'
import { Carousel, ItemCard, CategoryDisplay } from '../minicomponents'
import { NewArrivals, TopSelling } from '../constants'


export const Home = () => {
  return (
    <section className='pt-20'>
        <Hero/>
        <Carousel/>
        <CategoryDisplay
        title='New Arrivals'
        data={NewArrivals}
        />
        <div className='flex justify-self-center content-none w-[90vw] h-[2px] bg-gray-100 my-4' />
        <CategoryDisplay
        title='Top Selling'
        data={TopSelling}
        />
        <BrowseCategories/>

    </section>
  )
}
