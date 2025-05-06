
import React from 'react';
import { calvin_klein, gucci, prada, versace, zara, } from '../assets';


export const BrandsCarousel = () => {
  const items = [calvin_klein, gucci, prada, versace, zara];
  const duplicatedItems = [...items, ...items];

  return (
    <section className='carousel_container overflow-hidden bg-black w-[100vw] py-5'>
      <ul id='carousel_items' className='inline-flex animate-slide w-[200vw] justify-around '>
        {duplicatedItems.map((item, index) => (
          <li key={index} className='text-center text-white px-5'>
            <img src={item} alt={`${item} logo`} />
          </li>
        ))}
      </ul>
    </section>

  );
};

