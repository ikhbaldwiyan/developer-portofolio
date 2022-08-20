import React from 'react'
import Profile from '../assets/img/profile.png'

function HeroBanner() {

  const ProfileImage = () => (
    <div className='w-full self-end px-4 lg:w-1/2'> 
      <div className="mt-10 relative lg:mt-9 right-20">
        <img width={400} src={Profile} className="max-w-full mx-auto left-10" />
        <span className='absolute -bottom-9 -z-10 left-20 -translate-x-7 lg:left-40'>
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#06b6d4" d="M47.5,-55.6C61.7,-44.7,73.5,-29.9,76.3,-13.6C79,2.8,72.8,20.6,63.4,36.3C53.9,52,41.4,65.6,26.1,70.7C10.8,75.8,-7.2,72.5,-25.6,67.2C-44,61.8,-62.8,54.5,-70.4,40.9C-77.9,27.3,-74.2,7.4,-71,-12.9C-67.9,-33.2,-65.3,-53.9,-53.5,-65.2C-41.8,-76.5,-20.9,-78.3,-2.1,-75.8C16.7,-73.3,33.3,-66.4,47.5,-55.6Z" transform="translate(100 100)" />
          </svg>
        </span>
      </div>
    </div>
  )

  return (
    <section id="home" className='pt-36 lg:pt-10'>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className='text-base text-1xl font-bold text-primary'>
              Hello Everyone 👋,  I am
              <span className="block text-2xl text-black lg:text-4xl mt-2">
                Ikhbal Dwiyantoro
              </span>
            </h1>
            <span className="font-semibold block text-lg text-secondary mt-2">
              Front End Developer & <span className="text-black">Blogger</span>
            </span>
            <p className="font-medium text-secondary py-8">
              Hi! I am Ikhbal Dwiyantoro! I've experienced as a Web Developer over 2 years with a demonstrated history of working in the information technology and IT services industry
            </p>

            <a href='#' className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out mr-5'>
              Contact Me
            </a>
            <a href='#' className='text-base font-semibold text-white bg-black py-3 px-8 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out'>
              Github
            </a>
          </div>
          <ProfileImage />
        </div>
      </div>
    </section>
  )
}

export default HeroBanner