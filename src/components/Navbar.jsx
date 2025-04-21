import React from 'react'
import { useState, useEffect } from 'react'


export const Navbar = () => {


  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const toggleMenu = () => { setHamburgerIsOpen(!hamburgerIsOpen); }


  //function to close the menu in case of screen size change
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 1024) {
        setHamburgerIsOpen(false); 
        window.removeEventListener('resize', checkScreenSize); 
      }
    };
    // if isOpen add the event listener
    if (hamburgerIsOpen) {
      window.addEventListener('resize', checkScreenSize);
    }

    // Initially check if desktop
    checkScreenSize();

    // remove the event listener when isOpen is false
    return () => {
      if (hamburgerIsOpen) {
        window.removeEventListener('resize', checkScreenSize);
      }
    };
  }, [hamburgerIsOpen]); 



  return (
    <header className='w-full fixed z-50 bg-white'>
      {/* deskotp version */}


      <nav className='md:flex hidden w-full gap-2 items-center text-sm px-10 py-5 '>
        <div className='' >
          <h1>LOGO</h1>
        </div>

        <div className='flex flex-row gap-5 w-full' >
            <ul className='flex flex-row gap-5'>
                <li>
                    <a href="/">shop</a>
                        </li>
                <li>
                    <a href="/">On Sale</a>
                        </li>
                <li>
                    <a href="/">New Arrivals</a>
                        </li>
                <li>
                    <a href="/">Brands</a>
                        </li>
            </ul>
            <div className='bg-gray-500 flex-1'>
                <textarea name="searchbar" id="searchbar" placeholder='look for something' className=''></textarea>
            </div>
            <div className='flex flex-row gap-5 '>
                <a href="/">log1</a>
                <a href="/">log2</a>
            </div>
        </div>
      </nav>


    </header>
  )
}