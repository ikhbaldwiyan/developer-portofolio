import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function About() {
  return (
    <section id='about' className='pt-36 pb-32 '>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className='font-bold text-primary text-2xl uppercase mb-4'>About Me</h4>
            <h2 className='text-black font-semibold uppercase'>Biodata</h2>
            <h2 className='text-secondary  mt-5'>Hi! I am Ikhbal Dwiyantoro! I've experienced as a Web Developer over 2 years with a demonstrated history of working in the information technology and IT services industry</h2>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className='font-semibold  text-black uppercase pt-10'>Connect With Me</h3>
            <p className='text-secondary'>
              <p className='font-semibold mt-5'>Find Me on Social Media</p>
              <div className="py-5">
                <a href='#' className='text-base font-semibold text-white bg-gray-400 py-3 px-3 rounded-xl hover:shadow-lg hover:bg-black transition duration-200 ease-in-out mr-5 inline'>
                  <AiFillGithub size={25} className='inline' />
                </a>
                <a href='#' className='text-base font-semibold text-white bg-gray-400 py-3 px-3 rounded-xl hover:shadow-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition duration-200 ease-in-out mr-5 inline'>
                  <AiOutlineInstagram size={25} className='inline' />
                </a>
                <a href='#' className='text-base font-semibold text-white bg-gray-400 py-3 px-3 rounded-xl hover:shadow-lg hover:bg-primary transition duration-200 ease-in-out mr-5 inline'>
                  <AiOutlineTwitter size={25} className='inline' />
                </a>
                <a href='#' className='text-base font-semibold text-white bg-gray-400 py-3 px-3 rounded-xl hover:shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out mr-5 inline'>
                  <AiFillLinkedin size={25} className='inline' />
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About