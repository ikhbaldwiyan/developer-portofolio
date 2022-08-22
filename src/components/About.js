import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function About() {

  const socmed = [
    {
      logo: <AiFillGithub size={30} className='inline mb-1' />,
      color: 'bg-black'
    },
    {
      logo: <AiOutlineInstagram size={30} className='inline mb-1' />,
      color: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
    },
    {
      logo: <AiOutlineTwitter size={30} className='inline mb-1' />,
      color: 'bg-primary'
    },
    {
      logo: <AiFillLinkedin size={30} className='inline mb-1' />,
      color: 'bg-blue-700'
    },
  ];

  return (
    <section id='about' className='pt-22 pb-32'>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className='font-bold text-primary text-2xl uppercase mb-4'>About Me</h4>
            <h2 className='text-black font-semibold uppercase'>Biodata</h2>
            <h2 className='text-secondary font-medium mt-5'>
              Hi! I am Ikhbal Dwiyantoro! I've experienced as a Web Developer over 2 years <br />
              with a demonstrated history of working in the information technology and IT services industry.
              I focused to Front End development but sometimes i also full stack
            </h2>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h2 className='font-semibold  text-black uppercase pt-10'>Connect With Me</h2>
            <p className='text-secondary'>
              <p className='font-semibold mt-7 mb-3'>Find Me on Social Media</p>
              <div className="py-5 space-x-4">
                {socmed.map((item, idx) => (
                  <a key={idx} href='#' className={`text-base font-semibold text-white ${item.color} py-4 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-300 ease-in-out inline`}>
                    {item.logo}
                  </a>
                ))}
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About