import React from 'react';
import Profile from '../assets/img/profile.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function HeroBanner() {

  const ProfileImage = () => (
    <div className="w-full self-end px-4 lg:w-1/2 mt-10">
      <div className="relative mt-10 lg:right-0 lg:mt-9">
        <img src={Profile} alt="Ikhbal Dwiyantoro" className="relative z-10 mx-auto max-w-full" />
        <SVG />
      </div>
    </div>
  )

  const SVG = () => (
    <span className="absolute -bottom-12 lg:bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
      <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient">
            <stop offset="20%" stop-color="#06b6d4" />
            <stop offset="80%" stop-color="#0891b2" />
          </linearGradient>
        </defs>
        <path 
          fill="url(#gradient)" 
          d="M47.5,-55.6C61.7,-44.7,73.5,-29.9,76.3,-13.6C79,2.8,72.8,20.6,63.4,36.3C53.9,52,41.4,65.6,26.1,70.7C10.8,75.8,-7.2,72.5,-25.6,67.2C-44,61.8,-62.8,54.5,-70.4,40.9C-77.9,27.3,-74.2,7.4,-71,-12.9C-67.9,-33.2,-65.3,-53.9,-53.5,-65.2C-41.8,-76.5,-20.9,-78.3,-2.1,-75.8C16.7,-73.3,33.3,-66.4,47.5,-55.6Z" 
          transform="translate(100 100) scale(1.0)"
        />
      </svg>
    </span>
  )

  return (
    <section id="home" className='pt-36 lg:pt-10 pb-14'>
      <div className="container lg:mt-10">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className='text-base text-1xl font-bold text-primary'>
              Hello Everyone 👋,  I am
              <span className="block text-2xl text-black lg:text-4xl mt-2">
                Ikhbal Dwiyantoro
              </span>
            </h1>
            <span className="font-semibold block text-lg text-cyan-800 mt-2">
              Web Developer <span className="text-black"> & Blogger</span>
            </span>
            <p className="font-medium text-secondary py-8 max-w-lg">
              Hi! I am Ikhbal Dwiyantoro! I've experienced as a Web Developer
              over 2 years with a demonstrated history of working in the information technology and IT services industry
            </p>

            <div className="mt-4 flex">
              <a href='https://www.linkedin.com/in/ikhbal-dwiyantoro-536693199/' className='text-base font-semibold text-white bg-gradient-to-r from-primary to-sky-500 py-3 px-6 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out mr-5 inline' target="_blank">
                <AiFillLinkedin className='mb-1 inline' size={25} /> LinkedIn 
              </a>  
              <a href='https://github.com/ikhbaldwiyan' className='text-base font-semibold text-white bg-black py-3 px-6 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out' target="_blank">
                <AiFillGithub className='mb-1 inline mr-1' size={25} /> GitHub
              </a>
            </div>
          </div>
          <ProfileImage />
        </div>
      </div>
    </section>
  )
}

export default HeroBanner