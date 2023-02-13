import { Cross } from 'hamburger-react'
import React, { useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import 'animate.css';
const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <header className='flex justify-between p-4 items-center  shadow-md'>
            <h1 className='logo left font-bold tracking-widest'>Ankit Jha</h1>
            <nav className='md:hidden bg-yellow-300 z-20   fixed right-0 top-0 h-screen flex flex-col items-end '>
                <div className=''>
                    <Cross toggled={isOpen} toggle={setOpen} />
                </div>
                <ul className={`md:hidden ${isOpen ? 'block' : 'hidden'} h-3/4 w-[50vw] flex flex-col justify-between items-center text-xl  animate__animated ${isOpen ? 'animate__slideInRight' : 'animate__slideOutRight'}`}>
                    <li >Home</li>
                    <li >About</li>
                    <li>Skills</li>
                    <li >Education</li>
                    <li>Projects</li>
                    <li >Contact Me</li>

                </ul>
            </nav>
            <nav className='hidden md:block px-10 font-semibold '>
                <ul className={`md:flex justify-around hidden`}>
                    <Link to="" smooth={true}><li className='mr-3 hover:text-blue-500 cursor-pointer' >Home</li></Link>
                    <Link to="about" smooth={true}><li className='mr-3 hover:text-blue-500 cursor-pointer' smooth={true}>About</li></Link>
                    <Link to="skills" smooth={true}><li className='mr-3 hover:text-blue-500 cursor-pointer'>Skills</li></Link>
                    <Link to="project" smooth={true}><li className='mr-3 hover:text-blue-500 cursor-pointer'>Projects</li></Link>
                    <Link to="contact" smooth={true}><li className='mr-3 hover:text-blue-500 cursor-pointer'>Contact</li></Link>
                </ul>
            </nav>
        </header >
    )
}

export default NavBar