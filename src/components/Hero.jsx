import React from 'react';
import Typewriter from 'typewriter-effect';
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from 'react-icons/bs'

const Hero = () => {

    return (
        <div className=' flex justify-between px-10 py-12 items-center bg-gray-200' id='#'>
            <div className="left">
                <h1 className='text-6xl text-purple-400 font-semibold'>Hi There,</h1>
                <h1 className='text-6xl mt-3 text-purple-400 font-semibold'>I'm <span className='text-[#409EBE]'>Ankit Jha</span></h1>
                <div className="line flex items-center mt-3 text-xl font-semibold md:text-2xl md:mt-5">
                    <p className='mr-2'>I am Into</p>
                    <Typewriter
                        options={{
                            strings: ['<span style = "color:#409EBE">Full Stack Developer<span>',
                                '<span style = "color:#409EBE">Machine Learning<span>',
                                '<span style = "color:#409EBE">Competitive Programming<span>'
                            ],
                            autoStart: true,
                            loop: true,
                            cursor: '<span style = "color:#409EBE">|<span>'
                        }} />
                </div>
                <div className="links  w-3/4  mt-3 p-3 flex justify-evenly items-center">
                    <div className="wrapper border-2 rounded-full w-8 h-8 bg-transparent hover:bg-black cursor-pointer ">
                        <BsLinkedin className='text-xl mx-auto mt-1 text-white hover:text-blue-800' />
                    </div>
                    <div className="wrapper border-2 rounded-full w-8 h-8 bg-transparent hover:bg-black cursor-pointer ">
                        <BsGithub className='text-xl mx-auto mt-1 text-white ' />
                    </div>
                    <div className="wrapper border-2 rounded-full w-8 h-8 bg-transparent hover:bg-black cursor-pointer ">
                        <BsFillEnvelopeFill className='text-xl mx-auto mt-1 text-white hover:text-yellow-400 ' />
                    </div>
                    <div className="wrapper border-2 rounded-full w-8 h-8 bg-transparent hover:bg-black cursor-pointer ">
                        <BsGithub className='text-xl mx-auto mt-1 text-white ' />
                    </div>
                </div>
            </div>
            <div className="right w-1/3 hidden md:block">
                <img src="/assets/pc.gif" alt="" className='w-full ' />
            </div>
        </div>
    )
}

export default Hero