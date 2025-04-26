import React from 'react'
import { ReviewCard } from '../minicomponents'
import { Reviews } from '../constants'



export const ReviewsCarousel = () => {   
    
    const duplicatedReviews = [...Reviews, ...Reviews];

    return (
        <section className='carousel_container overflow-hidden w-[100vw] py-5'>
            <h1 className="text-4xl font-bold mb-4 md:pl-14 text-center">OUR HAPPY CUSTOMERS</h1>
            <ul id='carousel_items' className='inline-flex animate-slide-reviews gap-1 px-1 w-fit justify-around '>
                {duplicatedReviews.map((item, index) => (
                    <ReviewCard
                        key={index}
                        review={item}
                    />
                ))}
            </ul>
        </section>
    )
}
