import React from 'react'
import { star, half_star } from '../assets'
import { useState } from 'react'
import { useCart } from '../context/CartContext';

export const ProductInfo = ({ product }) => {
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("")
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  
  const toggleSelected = (sizeOption) => {
    if (selectedSize !== sizeOption) {
      setSelectedSize(sizeOption);
    } else {
      setSelectedSize("");
      setSelectedQuantity(1)
    }
  }

  const increaseAmount = () => {
    setSelectedQuantity(curr => curr+1)
  }

  const decreaseAmount = () => {
    selectedQuantity>1 ? setSelectedQuantity(curr => curr-1) : setSelectedQuantity(1);
    }

    const handleAddToCart = (product_id, product, product_size, product_category, product_quantity) => {
      if(selectedSize !== ''){
        addToCart(product_id, product, product_size, product_category, product_quantity)
        setSelectedSize("")
        setSelectedQuantity(1)
      }else{
        alert("please select a size in order to add the item to your cart")
      }
    }


  return (
    <div className='flex md:flex-row flex-col gap-10'>
      <div>
        <img src={product.image} alt="product image" />
      </div>

      <div className='flex flex-col gap-3'>
        <h1 className='text-5xl font-extrabold inline-flex md:max-w-1/2'>{product.tittle}</h1>

        <div className='flex flex-row items-center'>
          {[...Array(Math.floor(product.rating))].map((_, i) => (
            <img key={`full-${i}`} src={star} alt="star" className='w-[16px] inline-block' />
          ))}
          {product.rating % 1 !== 0 && (
            <img src={half_star} alt="half star" className='w-[8px] inline-block' />
          )}

          <h6 className='pl-2 text-xs'>{product.rating}/<span className='font-light text-gray-400'>5</span></h6>
        </div>

        {product.discount !== 0 ? (
          <div className='flex gap-2 items-center'>
            <span className='font-semibold'>${(Math.floor(product.price * (1 - product.discount / 100)) + 0.99).toFixed(2)}</span>
            <span className='line-through text-gray-400 text-sm'>${product.price}</span>
            <span className='text-red-500 bg-red-100 py-1 px-3 rounded-full font-semibold'>-{product.discount}%</span>
          </div>
        ) : (
          <span className='font-semibold'>${product.price.toFixed(2)}</span>
        )}

        <p className='text-gray-400'>{product.description}</p>
        <div className="w-full h-[1px] bg-gray-200 content-none" />
        <div className="">
          <h6 className="text-gray-400" >choose size</h6>
          {product.size.map((sizeOption, index) => (
            <button key={index} onClick={() => toggleSelected(sizeOption)} className={`px-10 py-3 m-1 hover:bg-black hover:text-white  transition-colors duration-300 rounded-full ${(selectedSize === sizeOption) ? "text-white bg-black" : "bg-[#e4e2e3] text-black"}`}>
              {sizeOption}
            </button>
          ))}
        </div>
        <div className="w-full h-[1px] bg-gray-200 content-none" />
        <div className="flex flex-row gap-3">
          <div className=" rounded-full flex flex-row text-black items-center bg-[#e4e2e3] ">
            <button onClick={() => decreaseAmount()} className="bg-[#e4e2e3] hover:bg-black hover:text-white text-black transition-colors duration-300 rounded-l-full md:px-6 md:py-3 px-4 py-2 text-2xl">-</button>
            <h3 className="bg-[#e4e2e3] md:px-10 md:py-3 px-7 py-2 text-normal">{selectedQuantity}</h3>
            <button onClick={() => increaseAmount()} className="bg-[#e4e2e3] hover:bg-black hover:text-white text-black transition-colors duration-300 rounded-r-full md:px-6 md:py-3 px-4 py-2 text-2xl">+</button>
          </div>
          <button onClick={() => handleAddToCart(product.id, product, selectedSize, product.category, selectedQuantity)} className="bg-[#e4e2e3] hover:bg-black hover:text-white text-black transition-colors duration-300 rounded-full px-10 w-full py-3 text-lg">Add to Cart</button>
        </div>

      </div>
    </div>
  )
}
