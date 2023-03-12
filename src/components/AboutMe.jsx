import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { TbDownload } from 'react-icons/tb'
const AboutMe = () => {
    return (
        <div className='p-4' id="about" initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <h1 className='text-center flex justify-center items-center text-4xl font-bold'>
                <span className='mr-2'>
                    <BsFillPersonFill className='' />
                </span>
                About <span className='text-[#409EBE] ml-2'>Me</span></h1>
            <div className='flex  mt-10 md:flex-row flex-col'>
                <div className="left md:w-1/3   mt-4">
                    <img src="/assets/book.png" alt="" className='w-full' />
                </div>
                <div className="right w-2/3 ml-10 text-justify px-4">
                    <h1 className='text-2xl font-bold'>I'm Ankit Jha</h1>
                    <p className='font-semibold text-lg'>Full Stack Developer | Competitive Programmer</p>
                    <p className='font-bold mt-2'> A Third-Year CSE Student At Jain University, School of Engineering And Technology</p>
                    <p className='mt-3 font-mono'>I have a strong background in coding, starting from my high school years where I discovered my love for algorithms and problem-solving. To me, coding is not just a technical skill, but an art form that allows me to bring my visions to life.</p>

                    <p className='font-mono mt-2'>As a web developer, I have the opportunity to not only create visually stunning designs, but also build functional and user-friendly websites that make a positive impact on the world.</p>

                    <p className='mt-2 font-mono'>My ultimate goal is to use my skills and passion to contribute to creating a better world. With the advances in technology, I believe now is the time to build innovative solutions that can make a real difference in society. I am dedicated to using my abilities to help create a more positive and prosperous future for all.</p>

                    <a href="/assets/Ankit_Resume.pdf" className="relative inline-block px-4 py-2 font-medium group m-5 font-mono" target={'_blank'}>
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0" ></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white flex justify-between font-bold items-center">
                            <TbDownload className='mr-2' />
                            Resume</span>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default AboutMe