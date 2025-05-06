import React, { useMemo } from 'react'
import { useCart } from '../context/CartContext';
import { trash, promoTag } from '../assets'


export const Cart = () => {
    const { cartItem, decreaseCartQuantity, increaseCartQuantity, removeFromCart } = useCart();

    const orderSummary = useMemo(() => {
        const subtotal = cartItem.reduce(
            (sum, { product, quantity }) => sum + product.price * quantity,
            0
        );

        const discount = cartItem.reduce((sum, { product, quantity }) => {
            if (product.discount) {
                return sum + (product.discount / 100) * product.price * quantity;
            }
            return sum;
        }, 0);

        const deliveryFee = subtotal > 100 ? 0 : 15;
        const total = subtotal - discount + deliveryFee;

        return {
            subtotal: subtotal.toFixed(2),
            discount: discount.toFixed(2),
            deliveryFee: deliveryFee.toFixed(2),
            total: total.toFixed(2),
        };
    }, [cartItem]);


    return (
        <div className='min-h-screen p-5'>
            <h1 className='text-4xl font-extrabold'>Your Cart</h1>
            <div className='flex md:flex-row flex-col gap-4 rounded-4xl p-3'>
                <div className='flex flex-col gap-2'>
                    {cartItem?.length > 0 || cartItem === null ? (
                        cartItem?.map((item, index) => (
                            <div key={index} className='flex flex-row h-[300px] border-[1px] border-[#e4e2e3] rounded-4xl p-3 gap-5 '>
                                <div className='h-full flex'>
                                    <img src={item.product.image} alt="product photo" className='object-contain' />
                                </div>
                                <div className='flex flex-row h-full w-full'>
                                    <div className='w-full h-full flex flex-col justify-between py-7'>
                                        <h1 className='font-bold md:text-2xl text-lg'>{item.product.tittle}</h1>
                                        <h6 className='text-black'>Size: <span className='text-gray-400'>{item.size}</span></h6>
                                        <h6 className='text-black'>Color: <span className='text-gray-400'>{item.product.color}</span></h6>
                                        <h6 className='font-bold text-xl'>${item.product.price}</h6>
                                    </div>
                                    <div className='h-full flex flex-col justify-between'>
                                        <button onClick={() => removeFromCart(item.id, item.size)} className='flex self-end p-1 cursor-pointer'>
                                            <img src={trash} alt="trash can icon" className='h-5' />
                                        </button>

                                        <div className=" rounded-full flex flex-row text-black items-center bg-[#e4e2e3] ">
                                            <button onClick={() => decreaseCartQuantity(item.id, item.size)} className="bg-[#e4e2e3] hover:bg-black hover:text-white text-black transition-colors duration-300 rounded-l-full md:px-6 md:py-3 px-4 py-2 text-2xl">-</button>
                                            <h3 className="bg-[#e4e2e3] md:px-10 md:py-3 px-7 py-2 text-normal">{item.quantity}</h3>
                                            <button onClick={() => increaseCartQuantity(item.id, item.size)} className="bg-[#e4e2e3] hover:bg-black hover:text-white text-black transition-colors duration-300 rounded-r-full md:px-6 md:py-3 px-4 py-2 text-2xl">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))

                    ) : (
                        <h6 className=''>Theres nothing on your cart yet</h6>
                    )
                    }
                </div>
                { cartItem?.length > 0 ? 
                <div className='border-[1px] border-gray-200 rounded-4xl p-5 gap-2 h-fit'>
                    <h3 className='font-bold text-lg'>Order Summary</h3>
                    <ul className='flex flex-col'>
                        <li className='flex w-full justify-between'>
                            <h6 className='text-[#a2a2a2]'>Subtotal</h6>
                            <h6 className='font-bold'>{orderSummary.subtotal}</h6>

                        </li>
                        {orderSummary.discount > 0 ?
                            <li className='flex w-full justify-between'>
                                <h6 className='text-[#a2a2a2]'>Discount</h6>
                                <h6 className='text-red-500'>-{orderSummary.discount}</h6>
                            </li> : ''}

                        <li className='flex w-full justify-between'>
                            <h6 className='text-[#a2a2a2]'>Delivery Fee</h6>
                            <h6 className='font-bold'>${orderSummary.deliveryFee}</h6>

                        </li>

                    </ul>
                    <div className='flex w-full justify-between'>
                        <h6 className='text-[#a2a2a2]'>Total</h6> 
                        <h6 className='font-bold' >${orderSummary.total}</h6>
                    </div>
                    <div className='w-full flex flex-row gap-2 py-2'>
                        <div className='flex w-full bg-[#f0f0f0] py-1 px-3 rounded-full'>
                            <img src={promoTag} alt="promo tag icon" className='object-contain self-center p-1 w-7' />
                            <textarea name="promoCode" id="promoCode" className='w-full resize-none'></textarea>
                        </div>
                        <button className='inline-flex self-center bg-black text-white hover:bg-gray-400 hover:text-black transition-colors duration-300 ease-in rounded-full py-2 px-6'>Apply</button>
                    </div>
                    <div className='felx w-full'>
                        <button className='inline-flex w-full self-center bg-black text-white hover:bg-gray-400 hover:text-black transition-colors duration-300 ease-in rounded-full py-2 px-6 text-center'>Go to Checkout →</button>

                    </div>
                </div>
                : '' }
            </div>


        </div>

    )
}
