import React from 'react'
import ProjectBox from './ProjectBox'
const Projects = () => {
    const projects = [{
        Name: "Coin Tracker",
        desc: "Using this web app you can track any crypto coin. Made using React.js and MaterialUI",
        img: "/assets/cointracker.jpg",
        liveLink: "https://bit-tracker.netlify.app/",
        srcLink: "https://github.com/J-Ankit2020/Bit-Tracker",
    },
    {
        Name: "Code Sync",
        desc: "A Realtime code editor made using react.js and socket.io",
        img: "/assets/code-sync.png",
        liveLink: "https://code-sync-frontend.vercel.app/",
        srcLink: "https://github.com/J-Ankit2020/Code-Sync"
    },
    {
        Name: "BLOG-IT",
        desc: "A blog web app made using Next.js,tailwind css and GraphQL. It uses GraphCMS for content management to dynamically change the data",
        img: "/assets/blog.png",
        liveLink: "https://blog-page-seven.vercel.app/",
        srcLink: "https://github.com/J-Ankit2020/Blog-Page"
    },
    {

        Name: "Hulu Clone",
        desc: " A clone of HULU made using HTML, CSS and JavaScript",
        img: "/assets/hulu.png",
        liveLink: "https://epic-yonath-a81ad3.netlify.app/",
        srcLink: "https://github.com/J-Ankit2020/Hulu-Clone"
    },
    {

        Name: "GitHub Profile Finder",
        desc: "It enables users to retrieve Github user information simply by entering the desired username into the search box. Made using React.js,TailwindCSS",
        img: "/assets/github.png",
        liveLink: "https://github-profile-finder-six.vercel.app/",
        srcLink: "https://github.com/J-Ankit2020/Github-profile-finder"
    }]
    return (
        <div className='px-10 py-12 bg-blue-900 ' id='project'>
            <h1 className='text-center text-white text-4xl font-bold tracking-wide'>Projects
                <span className='text-purple-00 opacity-50 ml-1'>Made</span>
            </h1>
            <div className=' mx-auto p-2 flex flex-col justify-evenly md:grid grid-cols-3 gap-6   grid-rows-2'>
                {projects.map(project => <ProjectBox project={project} />)}
            </div>
        </div>
    )
}

export default Projects