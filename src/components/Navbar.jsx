import { React, useState, useEffect } from 'react'
import { cart, down_arrow, profile, search } from '../assets';


export const Navbar = () => {


  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const toggleSearchBar = () => {
    setSearchIsOpen(!searchIsOpen);
    setHamburgerIsOpen(false);
  }
  const toggleMenu = () => {
    setHamburgerIsOpen(!hamburgerIsOpen);
    setSearchIsOpen(false);
  }


  //function to close the menu in case of screen size change
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 1024) {
        setSearchIsOpen(false);
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
      <nav className='lg:flex hidden w-full gap-10 items-center text-sm px-10 py-5 '>
        <div className='inline-flex' >
          <h1 className='text-3xl font-extrabold' >LOGO.CO</h1>
        </div>

        <div className='flex flex-row gap-15 px-5 w-full items-center justify-center' >
          <ul className='flex flex-row gap-5 text-normal'>
            <li>
              <a href="/" className='flex flex-row text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>
                Shop
                <img src={down_arrow} alt="arrow down logo" className='w-3 h-3 self-center' />
              </a>
            </li>
            <li>
              <a href="/" className='text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>On Sale</a>
            </li>
            <li>
              <a href="/" className='text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>New Arrivals</a>
            </li>
            <li>
              <a href="/" className='text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>Brands</a>
            </li>
          </ul>
          <div className=' bg-gray-300 flex flex-row px-5 rounded-full'>
            <img src={search} alt="search logo" className='object-contain px-2' />
            <textarea name="searchbar" id="searchbar" placeholder='Search for products...' className='resize-none content-center'></textarea>
          </div>
          <div className='flex flex-row gap-2 '>
            <a href="/">
              <img src={cart} alt="cart icon" className='object-contain h-[80%]' />
            </a>
            <a href="/">
              <img src={profile} alt="Profile icon" className='object-contain h-[80%]' />
            </a>
          </div>
        </div>
      </nav>

      {/* tablet */}
      <nav className='md:flex lg:hidden hidden w-full gap-10 items-center text-sm px-10 py-5 bg-white '>
        <div className='inline-flex' >
          <h1 className='text-3xl font-extrabold' >LOGO.CO</h1>
        </div>


        <div className='flex flex-row h-7 gap-10 px-5 w-full items-center justify-center z-10' >
          <ul className='flex flex-row gap-3 text-normal'>
            <li>
              <a href="/" className='flex flex-row text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>
                Shop
                <img src={down_arrow} alt="arrow down logo" className='w-3 h-3 self-center' />
              </a>
            </li>
            <li>
              <a href="/" className='text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>On Sale</a>
            </li>
            <li>
              <a href="/" className='text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>New Arrivals</a>
            </li>
            <li>
              <a href="/" className='text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>Brands</a>
            </li>
          </ul>
          
          <div className='flex flex-row relative w-7 h-full'>
            <div className={`bg-[#F0F0F0] absolute flex min-w-7 top-0 -right-full rounded-full hover:cursor-pointer transition-all duration-500 ${searchIsOpen ? 'translate-y-10' : 'delay-500'} `}>
              <div className={`flex gap-2 h-full transition-all duration-500 ${searchIsOpen ? 'w-[65vw] min-h-10 delay-500' : 'w-7'} `}>
              <button onClick={toggleSearchBar} className='min-w-7'>
                <img src={search} alt="search logo" className={`object-contain self-center p-1 w-7 `} />
              </button>
              <textarea name="searchbar" id="searchbar" placeholder='Search for products...' className={`resize-none content-center w-full delay-700 ${searchIsOpen ? "block" : "hidden"}`}></textarea>
              </div>
            </div>
          </div>

          <div className='flex flex-row gap-2 '>
            <a href="/">
              <img src={cart} alt="cart icon" className='object-contain h-[20px]' />
            </a>
            <a href="/">
              <img src={profile} alt="Profile icon" className='object-contain h-[20px]' />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile version */}
      <nav className='sm:hidden flex w-full gap-10 items-center justify-between  text-sm px-10 py-5 bg-white relative'>
        <button onClick={toggleMenu} className='flex flex-col gap-y-1 z-50 '>
          <div className={`content-none rounded-b-full bg-black h-[2px] w-[7px]  duration-800 transition-transform ${hamburgerIsOpen ? 'rotate-45 translate-y-[2.5px] translate-x-[1.5px]' : ''} `} />
          <div className={`content-none rounded-b-full bg-black h-[2px] w-[16px] duration-800 transition-transform  ${hamburgerIsOpen ? '-rotate-45' : ''} `} />
          <div className={`content-none rounded-b-full bg-black h-[2px] w-[7px]  duration-800 transition-transform self-end ${hamburgerIsOpen ? 'rotate-45 -translate-y-[3px] -translate-x-[1px] ' : ''} `} />
        </button>
        <div className='inline-flex' >
          <h1 className='text-3xl font-extrabold' >LOGO.CO</h1>
        </div>

        <div className='flex flex-row relative'>
          <div className={`bg-[#F0F0F0] absolute flex min-w-7 h-full right-full top-0 rounded-full hover:cursor-pointer transition-all duration-500 ${searchIsOpen ? 'translate-y-10' : 'delay-500'} `}>
            <div className={`flex gap-2 h-full transition-all duration-500 ${searchIsOpen ? 'w-[65vw] delay-500' : 'w-7'} `}>
              <button onClick={toggleSearchBar} className='min-w-7'>
                <img src={search} alt="search logo" className={`object-contain self-center p-1 w-7 `} />
              </button>
              <textarea name="searchbar" id="searchbar" placeholder='Search for products...' className={`resize-none content-center w-full delay-700 ${searchIsOpen ? "block" : "hidden"}`}></textarea>
            </div>
          </div>

          <div className='flex flex-row gap-2 p-1 '>
            <a href="/">
              <img src={cart} alt="cart icon" className='object-contain h-[20px]' />
            </a>
            <a href="/">
              <img src={profile} alt="Profile icon" className='object-contain h-[20px]' />
            </a>
          </div>
        </div>
      </nav>


      <div className={`absolute left-0 border-2 bg-white border-cyan-800 p-5 rounded-r-4xl w-fit h-fit content-center transition-transform duration-500 ease-in-out ${hamburgerIsOpen ? 'translate-x-0' : '-translate-x-full'} `}>
        <ul className='flex justify-center items-center flex-col gap-5 text-normal'>
          <li className={` transition-transform duration-200 ease-in-out delay-100 ${hamburgerIsOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <a href="/" className={`flex flex-row text-black hover:opacity-60 opacity-100 transition-all duration-300`}>
              Shop
              <img src={down_arrow} alt="arrow down logo" className='w-3 h-3 self-center' />
            </a>
          </li>
          <li className={` transition-transform duration-200 ease-in-out delay-200 ${hamburgerIsOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <a href="/" className={`text-black hover:opacity-60 opacity-100 transition-hover duration-300`}>On Sale</a>
          </li>
          <li className={` transition-transform duration-200 ease-in-out delay-300 ${hamburgerIsOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <a href="/" className={`text-black hover:opacity-60 opacity-100 transition-hover duration-300`}>New Arrivals</a>
          </li>
          <li className={` transition-transform duration-200 ease-in-out delay-400 ${hamburgerIsOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <a href="/" className={`text-black hover:opacity-60 opacity-100 transition-hover duration-300`}>Brands</a>
          </li>
        </ul>
      </div>


    </header>
  )
}