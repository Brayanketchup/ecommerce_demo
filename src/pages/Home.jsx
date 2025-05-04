import React from 'react'
import { Hero, BrowseCategories, BrandsCarousel, ReviewsCarousel } from '../components'
import { CategoryDisplay } from '../minicomponents'
import { NewArrivals, TopSelling } from '../constants'
import { calvin_klein, gucci, prada, versace, zara, } from '../assets';





export const Home = () => {
  const items = [calvin_klein, gucci, prada, versace, zara];


  return (
    <section >
      <Hero />
      <BrandsCarousel/>
      <CategoryDisplay
        tittle='New Arrivals'
        data={NewArrivals}
        limit={4}
      />
      <div className='flex justify-self-center content-none w-[90vw] h-[2px] bg-gray-100 my-4' />
      <CategoryDisplay
        tittle='Top Selling'
        data={TopSelling}
        limit={4}
      />
      <BrowseCategories />
      <ReviewsCarousel/>

    </section>
  )
}
