import { React, useState, useRef, useEffect } from 'react'
import { cart, profile, search } from '../assets';
import { useNavigate } from 'react-router-dom';

import { NavLink } from 'react-router-dom';



export const Navbar = () => {


  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);



  const toggleSearchBar = () => {
    setSearchIsOpen(!searchIsOpen);
    setHamburgerIsOpen(false);
  }
  const toggleMenu = () => {
    setHamburgerIsOpen(!hamburgerIsOpen);
    setSearchIsOpen(false);
  }

  // focus into the input after they open search bar
  useEffect(() => {
    if (searchIsOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchIsOpen]);

  //function to close the menu in case of screen size change
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 1024) {
        setSearchIsOpen(false);
        setHamburgerIsOpen(false);
        setSearchIsOpen(false);
        console.log('closing everything')
        window.removeEventListener('resize', checkScreenSize);
      }
    };
    // if isOpen add the event listener
    if (hamburgerIsOpen || searchIsOpen) {
      window.addEventListener('resize', checkScreenSize);
    }

    // Initially check if desktop
    checkScreenSize();

    // remove the event listener when isOpen is false
    return () => {
      if (hamburgerIsOpen || searchIsOpen) {
        window.removeEventListener('resize', checkScreenSize);
      }
    };
  }, [hamburgerIsOpen, searchIsOpen]);


  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/products/${encodeURIComponent(query.trim())}`);
    setQuery('')
  };


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
              <NavLink to="products/shop" className='flex flex-row text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="products/onsale" className='text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>On Sale</NavLink>
            </li>
            <li>
              <NavLink to="products/newarrivals" className='text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>New Arrivals</NavLink>
            </li>
            <li>
              <NavLink to="/" className='text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>Home</NavLink>
            </li>
          </ul>
          <form onSubmit={handleSubmit} className=' bg-gray-300 flex flex-row px-5 rounded-full'>
            <img src={search} alt="search logo" className='object-contain px-2' />
            <input type='text' value={query} placeholder='Search for products...' onChange={e => setQuery(e.target.value)} className="flex-1 bg-transparent outline-none"></input>
          </form>
          <div className='flex flex-row gap-2 '>
            <NavLink to="/cart">

              <img src={cart} alt="cart icon" className='object-contain h-[80%]' />

            </NavLink>
            <NavLink to="/">
              <img src={profile} alt="Profile icon" className='object-contain h-[80%]' />
            </NavLink>
          </div>
        </div>
      </nav>

      {/* tablet */}
      <nav className='md:flex hidden lg:hidden w-full gap-10 items-center text-sm px-10 py-5 bg-white '>
        <div className='inline-flex' >
          <h1 className='text-3xl font-extrabold' >LOGO.CO</h1>
        </div>
        <div className='flex flex-row h-7 gap-10 px-5 w-full items-center justify-center z-10' >
          <ul className='flex flex-row gap-3 text-normal'>
            <li>
              <NavLink to="products/shop" className='flex flex-row text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="products/onsale" className='text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>On Sale</NavLink>
            </li>
            <li>
              <NavLink to="products/newarrivals" className='text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>New Arrivals</NavLink>
            </li>
            <li>
              <NavLink to="/" className='text-black hover:opacity-60 opacity-100 transition-opacity duration-300'>Home</NavLink>
            </li>
          </ul>

          <div className='flex flex-row relative w-7 h-full'>
            <div className={`bg-[#F0F0F0] absolute flex min-w-7 top-0 -right-full rounded-full hover:cursor-pointer transition-all duration-500 ${searchIsOpen ? 'translate-y-10' : 'delay-500'} `}>
              <form  onSubmit={handleSubmit} className={`flex gap-2 h-full transition-all duration-500 ${searchIsOpen ? 'w-[65vw] min-h-10 delay-500' : 'w-7'} `}>
                <button type='button' onClick={toggleSearchBar} className='min-w-7'>
                  <img src={search} alt="search logo" className={`object-contain self-center p-1 w-7 `} />
                </button>
                <input ref={inputRef} type="text" name="searchbar" value={query} onChange={e => setQuery(e.target.value)} placeholder='Search for products...' className={`resize-none content-center w-full delay-700 ${searchIsOpen ? "block" : "hidden"}`}></input>
              </form>
            </div>
          </div>

          <div className='flex flex-row gap-2 '>
            <NavLink to="/cart">
              <img src={cart} alt="cart icon" className='object-contain h-[20px]' />
            </NavLink>
            <NavLink to="/">
              <img src={profile} alt="Profile icon" className='object-contain h-[20px]' />
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile version */}
      <nav className='md:hidden flex w-full gap-10 items-center justify-between  text-sm px-10 py-5 bg-white relative'>
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
            <form onSubmit={handleSubmit} className={`flex gap-2 h-full transition-all duration-500 ${searchIsOpen ? 'w-[65vw] delay-500' : 'w-7'} `}>
              <button type='button' onClick={toggleSearchBar} className='min-w-7'>
                <img src={search} alt="search logo" className={`object-contain self-center p-1 w-7 `} />
              </button>
              <input ref={inputRef} name="searchbar" type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder='Search for products...' className={`resize-none content-center w-full delay-700 ${searchIsOpen ? "block" : "hidden"}`}></input>
            </form>
          </div>

          <div className='flex flex-row gap-2 p-1 '>
            <NavLink to="/cart">
              <img src={cart} alt="cart icon" className='object-contain h-[20px]' />
            </NavLink>
            <NavLink to="/">
              <img src={profile} alt="Profile icon" className='object-contain h-[20px]' />
            </NavLink>
          </div>
        </div>
      </nav>


      <div className={`absolute left-0 border-2 bg-white border-cyan-800 p-5 rounded-r-4xl w-fit h-fit content-center transition-transform duration-500 ease-in-out ${hamburgerIsOpen ? 'translate-x-0' : '-translate-x-full'} `}>
        <ul className='flex justify-center items-center flex-col gap-5 text-normal'>
          <li className={` transition-transform duration-200 ease-in-out delay-100 ${hamburgerIsOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <NavLink to="products/shop" className={`flex flex-row text-black hover:opacity-60 opacity-100 transition-all duration-300`}>
              Shop
            </NavLink>
          </li>
          <li className={` transition-transform duration-200 ease-in-out delay-200 ${hamburgerIsOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <NavLink to="products/onsale" className={`text-black hover:opacity-60 opacity-100 transition-hover duration-300`}>On Sale</NavLink>
          </li>
          <li className={` transition-transform duration-200 ease-in-out delay-300 ${hamburgerIsOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <NavLink to="products/newarrivals" className={`text-black hover:opacity-60 opacity-100 transition-hover duration-300`}>New Arrivals</NavLink>
          </li>
          <li className={` transition-transform duration-200 ease-in-out delay-400 ${hamburgerIsOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <NavLink to="/" className={`text-black hover:opacity-60 opacity-100 transition-hover duration-300`}>Home</NavLink>
          </li>
        </ul>
      </div>


    </header>
  )
}


