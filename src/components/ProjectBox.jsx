import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt';
import { AiFillEye } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
const ProjectBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const overlayOpener = () => {
        setIsOpen(!isOpen);
    }
    return (

        <Tilt className='w-full h-full shadow-xl ' onEnter={overlayOpener} onLeave={overlayOpener}>
            <img src="https://github.com/J-Ankit2020/Github-profile-finder/raw/main/public/screenshot.png" alt="" className='rounded-t-xl relative' />
            <div className="content absolute bottom-0  w-full text-white  ">
                <p className='font-semibold text-xl p-4 bg-blue-800'>Github Profile Finder</p>
                {isOpen && <div className="overlay bg-gray-50 text-black  px-4 py-3 animate__slideInUp animate__animated animate__faster  w-11/12 font-mono">
                    <p className='text-center text-base font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptate suscipit! Numquam dolore omnis odio molestiae voluptatibus laudantium porro corrupti!</p>
                    <div className="btns flex w-full justify-around">
                        <button className='bg-black p-2 w-20 text-white flex justify-around items-center rounded-lg mt-1 hover:bg-blue-900'>
                            <AiFillEye />
                            View
                        </button>
                        <button className='bg-black p-2 w-20 text-white flex justify-around items-center rounded-lg mt-1 hover:bg-blue-900'>
                            <BsCodeSlash />
                            Code
                        </button>
                    </div>
                </div>}
            </div>
        </Tilt>

    )
}

export default ProjectBox