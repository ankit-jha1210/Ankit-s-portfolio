import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import { SkillBar } from 'react-skillbars'
const Skills = () => {
    const skills = [
        { type: 'Java', level: 80 },
        { type: 'React', level: 95 },
        { type: 'Javascript', level: 75 },
        { type: 'Node.js', level: 70 },
        { type: 'MongoDB', level: 90 },
        { type: 'Docker', level: 25 },
        { type: 'HTML CSS', level: 95 },

    ];
    const colors = {
        bar: "rgb(192, 132, 252)",
        title: {
            text: "#fff",
            background: "rgb(192, 132, 252)"
        }
    };


    return (
        <div className='skills w-full
             bg-gray-200 px-10 py-12 ' id='skills'>
            <h1 className='text-4xl flex justify-center items-center font-bold tracking-wide text-white  
             '>
                <span>
                    <FaLaptopCode className='mr-3 text-[#409EBE]' />
                </span>
                <span className='text-gray-700'>Skills</span>
            </h1>

            <div className='w-3/4 h-[50vh] mx-auto mt-4'>
                <SkillBar skills={skills} barBackground={'transparent'} colors={colors} />


            </div>
        </div>
    )
}

export default Skills