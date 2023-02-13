import { Cross } from 'hamburger-react'
import React, { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import 'animate.css';
const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <header className='flex justify-between p-4 items-center  shadow-md'>
            <h1 className='logo left font-bold tracking-widest flex justify-between items-center'>
                <span className='w-10 h-10'>
                    <img src="/assets/man.svg" alt="" className='w-full h-full' />
                </span>
                Ankit Jha</h1>
            <nav className='md:hidden  z-20   fixed right-0 top-0 h-screen flex flex-col items-end '>
                <div className=''>
                    <Cross toggled={isOpen} toggle={setOpen} />
                </div>
                <div className='h-full '>
                    <ul className={`md:hidden ${isOpen ? 'block' : 'hidden'} h-1/3 w-[20vw] flex flex-col justify-between items-center text-xl  animate__animated ${isOpen ? 'animate__slideInRight' : 'animate__slideOutRight'} bg-violet-800 opacity-80 text-white`}>
                        <Link to="" smooth="true"><li className='mr-3 hover:text-blue-500 cursor-pointer' >Home</li></Link>
                        <Link to="about" smooth="true"><li className='mr-3 hover:text-blue-500 cursor-pointer' smooth={true}>About</li></Link>
                        <Link to="skills" smooth="true"><li className='mr-3 hover:text-blue-500 cursor-pointer'>Skills</li></Link>
                        <Link to="project" smooth="true"><li className='mr-3 hover:text-blue-500 cursor-pointer'>Projects</li></Link>
                        <Link to="contact" smooth={true}><li className='mr-3 hover:text-blue-500 cursor-pointer'>Contact</li></Link>

                    </ul>
                </div>
            </nav >
            <nav className='hidden md:block px-10 font-semibold '>
                <ul className={`md:flex justify-around hidden text-lg`}>
                    <Link to="" smooth="true"><li className='mr-3 hover:text-blue-500 cursor-pointer' >Home</li></Link>
                    <Link to="about" smooth="true"><li className='mr-3 hover:text-blue-500 cursor-pointer' smooth={true}>About</li></Link>
                    <Link to="skills" smooth="true"><li className='mr-3 hover:text-blue-500 cursor-pointer'>Skills</li></Link>
                    <Link to="project" smooth="true"><li className='mr-3 hover:text-blue-500 cursor-pointer'>Projects</li></Link>
                    <Link to="contact" smooth={true}><li className='mr-3 hover:text-blue-500 cursor-pointer'>Contact</li></Link>
                </ul>
            </nav>
        </header >
    )
}

export default NavBar