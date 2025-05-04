import React from 'react'
import { Link } from 'react-router-dom'
import { hero } from '../assets'

export const Hero = () => {
    return (
        <section id='Hero' className='flex md:flex-row flex-col items-center justify-between bg-[#e4e2e3] px-14'>
            <div className='flex flex-col gap-5 px-10 pt-5 h-full '>
                <h1 className=' lg:text-6xl text-5xl font-extrabold text-wrap '>FIND CLOTHES<br/>THAT MATCHES<br/>YOU STYLE</h1>
                <p className=' font-light text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Commodi consectetur ratione minima eius soluta autem. 
                    Facilis alias debitis dolor magnam numquam iste, laudantium.</p>
                <Link  to="products/shop" className='w-fit py-4 px-14 bg-black text-white rounded-full'>Shop Now</Link>
                <ul className='flex flex-row gap-5 mt-10'>
                    <li className='flex flex-col'>
                        <h3 className='text-3xl font-medium'>200+</h3>
                        <span className='font-light text-gray-500'>International Brands</span>
                    </li>
                    <li className='flex flex-col'>
                        <h3 className='text-3xl font-medium'>2,000+</h3>
                        <span className='font-light text-gray-500'>High-Quality Products</span>
                    </li>
                    <li className='flex flex-col'>
                        <h3 className='text-3xl font-medium'>30,000+</h3>
                        <span className='font-light text-gray-500'>Happy Customers</span>
                    </li>
                </ul>
            </div>

            <div className='flex h-full min-w-[40%] relative self-end'>
                <img src={hero} alt="Models posing" className=' object-contain h-fit relative ' />
            </div>
        </section>
    )
}
