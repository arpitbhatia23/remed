import React, { useState } from 'react'
import Logo from './Logo'
import { BiMenuAltRight } from "react-icons/bi"
import { AiTwotoneCloseCircle } from "react-icons/ai"
import {Link} from "react-scroll"
const Navbar = () => {
  const navItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Contact us" }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=''>
      <nav className='flex items-center justify-between py-6 px-8 font-frenchCanon bg-[#ebedee46] '>
        <div className='flex'>
          <Logo />
        </div>

        {/* Mobile Menu Button */}
        <button
          className='sm:hidden flex items-center  z-50 text-black'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? null : <BiMenuAltRight size={30} />}
        </button>

        {/* Desktop Menu */}
        <ul className='hidden sm:flex ml-auto gap-x-[62px] text-[24px] mr-[62px]'>
          {navItems.map((item) => (
             <Link key={item.name} to={item.name}  smooth={true} duration={500}>
              
             <li  className={`text-[#000000]`}>
             <button> {item.name}</button>
             </li>
             </Link> 
          ))}
        </ul>

        {/* Mobile Menu */}
        <ul className={`fixed top-0 right-0 w-2/4 h-screen bg-[#0b090aab] flex flex-col items-center justify-start py-4 space-y-6 text-2xl  text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'hidden'} sm:hidden z-40`}>
        <button
          className='sm:hidden flex w-full px-4  items-center  z-50 text-black  justify-start '
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ?<AiTwotoneCloseCircle size={30}/>:null}
        </button>
          {navItems.map((item) => (
           
             <Link key={item.name} to={item.name}  smooth={true} duration={1000}>
              <ul>
            <li  className='hover:underline'>
            <button> {item.name}</button>
           
            </li>
            </ul>
            </Link>  
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
