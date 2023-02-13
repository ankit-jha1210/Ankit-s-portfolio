import React from 'react'
import ProjectBox from './ProjectBox'
const Projects = () => {
    return (
        <div className='px-10 py-12 bg-blue-900 ' id='project'>
            <h1 className='text-center text-white text-4xl font-bold tracking-wide'>Projects
                <span className='text-purple-00 opacity-50 ml-1'>Made</span>
            </h1>
            <div className=' mx-auto p-4 grid md:grid-cols-3 gap-10  grid-cols-1 '>
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
            </div>
        </div>
    )
}

export default Projects