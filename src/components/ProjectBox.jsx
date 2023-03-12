import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt';
import { AiFillEye } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'

const ProjectBox = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);
    const overlayOpener = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Tilt className='shadow-xl  md:mt-1' onEnter={overlayOpener} onLeave={overlayOpener}>
            <div className=' w-full h-72'>
                <img src={project.img} alt="" className='rounded-t-xl relative object-cover w-full h-full' />
            </div>
            <div className="content absolute bottom-0  w-full text-white  ">
                <p className='font-semibold text-xl p-4 bg-purple-600'>{project.Name}</p>
                {isOpen && <div className="overlay bg-gray-50 text-black  px-4 py-3 animate__slideInUp animate__animated animate__faster  font-mono w-full">
                    <p className='text-center text-base font-medium'>{project.desc}</p>
                    <div className="btns flex w-full justify-around">
                        <a className='bg-black p-2 w-20 text-white flex justify-around items-center rounded-lg mt-1 hover:bg-blue-900 cursor-pointer' href={project.liveLink} target={'_blank'}>
                            <AiFillEye />
                            View
                        </a>
                        <a className='bg-black p-2 w-20 text-white flex justify-around items-center rounded-lg mt-1 hover:bg-blue-900 cursor-pointer' href={project.srcLink} target={'_blank'}>
                            <BsCodeSlash />
                            Code
                        </a>
                    </div>
                </div>}
            </div>
        </Tilt>
    )
}

export default ProjectBox