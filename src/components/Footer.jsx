import React from 'react'
import { email } from '../assets'
import { FooterContent } from '../constants'

export const Footer = () => {
    return (
        <footer>

            <div className='w-[90vw] flex justify-self-center'>
                <form action="/" className='flex md:flex-row flex-col gap-3 rounded-3xl justify-between bg-black p-10'>

                    <h1 className='text-5xl font-extrabold text-white inline-flex text-wrap md:max-w-1/2'>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h1>

                    <div className='flex flex-col gap-5 w-full'>
                        <div className='bg-white text-black flex w-full h-17 rounded-full resize-none p-5 content-center'>
                            <img src={email} alt="email logo" className='object-contain px-4' />
                            <textarea name="" id="submit" placeholder='enter yout email address' className='resize-none' ></textarea>
                        </div>

                        <button type='submit' className='bg-white text-black w-full h-17 rounded-full hover:bg-gray-300 transition-colors duration-200 ease-in'>Subscribe to Newsletter</button>
                    </div>

                </form>
            </div>

            <div className='w-full flex md:flex-row flex-col justify-around gap-14 p-10'>
                <div className='inline-flex flex-col'>
                    <h1 className='text-3xl font-extrabold' >LOGO.CO</h1>
                    <p className='text-wrap md:w-36 w-full'>We have clothes that suits your style and which you're proud to wear.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-between">
                    {FooterContent.map((category, index) => (
                        <div key={index}>
                            <h2 className="text-xl font-bold mb-4">{category.tittle}</h2>
                            <ul className="space-y-2">
                                {category.Links.map((link, idx) => (
                                    <li key={idx}>
                                        <a href={link.url} className="text-gray-600 hover:text-black">
                                            {link.tittle}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


            </div>
                <div className='w-full border-t-[1px]'>
                    <p className='text-wrap p-14'>
                        sample website made on 2025
                    </p>
                </div>
        </footer>
    )
}
