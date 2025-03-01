import { NavLink } from "react-router-dom";
import  { useState } from 'react'
import { NavHashLink } from "react-router-hash-link";
import image from '../assets/image.png'
//import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react'
import { Link } from "react-router-dom";

const Navbar = () => {


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const links = <>
        <li ><NavLink to='/' style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", color: isActive ? "orangered" : "white",  textDecoration: isActive ? "underline" : "" })}>Home</NavLink></li>
        <li> <NavHashLink to='/#about'>About Me</NavHashLink> </li>
        <li> <NavHashLink to='/#education'>Education</NavHashLink> </li>
        <li> <NavHashLink to='/#course'>Course</NavHashLink> </li>
        <li> <NavHashLink to='/#projects'>Projects</NavHashLink> </li>
        <li> <NavHashLink to='/#contact'>Contact Me</NavHashLink> </li>
        {/* <li ><NavLink to='/resume'
            style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal", color: isActive ? "orangered" : "white",  textDecoration: isActive ? "underline" : "" })}
        >Resume</NavLink></li> */}

    </>




    return (
        <header className='fixed top-0 z-50 w-full border-b py-2 border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0'>
      <div className=' container mx-auto flex h-14 items-center'>
        <div className='md:mr-4 flex justify-between w-full'>

            <Link to='/'>
            <div className='mr-6 flex items-center space-x-2'>
                <img src={image} alt="" className='w-10' />
                <p className="text-3xl font-bold text-red-600">Md Foysal</p>
            </div>
            </Link>
            <ul className='md:flex hidden text-white items-center space-x-6 text-lg font-medium'>
                {links}
            </ul>
        </div>
        <button className='inline-flex items-center justify-center rounded-md md:hidden' onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}>
           <span className='sr-only'>Open main menu</span>
           {mobileMenuOpen ? (
            <X className='h-6 w-6 text-red-600' aria-hidden="true"/>
           ):(
            <Menu className='h-6 w-6 text-red-600' aria-hidden="true"/>
           )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className='md:hidden'>
            <ul className='space-y-1 bg-gray-800 px-2 pb-3 pt-2'>
                {links}
            </ul>
        </div>
      )}
    </header>
    );
};

export default Navbar;