import React from 'react'
import TLM from '../assets/img/4.png';
import JKT from '../assets/img/3.png';
import DLR from '../assets/img/2.png';
import SMT from '../assets/img/1.png';
import { FaLaptopCode , FaReact, FaHtml5, FaLaravel, FaPhp } from 'react-icons/fa';
import { TbZoomCode } from 'react-icons/tb';
import { AiFillGithub } from 'react-icons/ai';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { IoLogoNodejs } from 'react-icons/io';
import { SiMysql } from 'react-icons/si';

function Portofolio() {

  const TechStack = () => (
    <div>
      <div className="flex justify-center py-3 space-x-3">
        <a className=' text-white bg-sky-500 py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out' target="_blank">
          <FaReact className='mb-1 inline' size={20} />
        </a>
        <a className=' text-white bg-indigo-700 py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out' target="_blank">
          <BsFillBootstrapFill className='mb-1 inline' size={20} />
        </a>
        <a className=' text-white bg-[#e34c26] py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out' target="_blank">
          <FaHtml5 className='mb-1 inline' size={20} />
        </a>
        <a className=' text-white bg-[#6cc24a] py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out' target="_blank">
          <IoLogoNodejs className='mb-1 inline' size={20} />
        </a>
      </div>
    </div>
  )

  const TechStackPHP = () => (
    <div>
      <div className="flex justify-center py-3 space-x-3">
        <a className=' text-white bg-red-500 py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out' target="_blank">
          <FaLaravel className='mb-1 inline' size={20} />
        </a>
        <a className=' text-white bg-indigo-700 py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out' target="_blank">
          <BsFillBootstrapFill className='mb-1 inline' size={20} />
        </a>
        <a className=' text-white bg-[#474A8A] py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out' target="_blank">
          <FaPhp className='mb-1 inline' size={20} />
        </a>
        <a className=' text-white bg-[#00758f] py-2 px-3 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out' target="_blank">
          <SiMysql className='mb-1 inline' size={20} />
        </a>
      </div>
    </div>
  )

  const projects = [
    {
      img: TLM,
      title: 'The Lazy Media',
      desc: 'The Lazy Media is your games, technology, entertainment, and gadgets website. I remake this website for reading some article news with diffrent UI / UX',
      link: 'https://the-lazy-media.vercel.app/',
      github: 'https://github.com/ikhbaldwiyan/the-lazy-media',
      technology: <TechStack />
    },
    {
      img: JKT,
      title: 'JKT 48 SHOWROOM',
      desc: 'Showroom is one of the largest live streaming platforms in Japan! this website is filtered streaming for JKT48 room only based by API that i made',
      link: 'https://www.jkt48-showroom.com/',
      github: 'https://github.com/ikhbaldwiyan/showroom',
      technology: <TechStack />
    },
    {
      img: SMT,
      title: 'Smooth Pizza',
      desc: 'Website Point of sale for management pizza restaurant, This website made at my high school last project',
      technology: <TechStackPHP />

    },
    {
      img: DLR,
      title: 'Jack Dealer',
      desc: 'Website dealer for buy or sell cars, you can buy many type of branding cars in this website',
      technology: <TechStackPHP />
    },
  ]  

  return (
    <section id='project' className='pt-22 pb-16 bg-slate-100 rounded-lg my-10 mx-4'>
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-15">
            <h4 className='font-bold text-2xl text-primary py-8 uppercase'>Portfolio</h4>
            <h2 className='text-black font-semibold text-3xl mb-4 uppercase'>
              <FaLaptopCode size={40} className='inline mr-2'/> My Projects <FaLaptopCode size={40} className='inline ml-2'/> 
            </h2>
            <p className="font-medium text-md text-secondary">
              Here my list project that i been working
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 mx-auto">
          {projects.map((item, idx) => (
            <div key={idx} className="mb-4 p-4 md:w-1/2 text-center">
              <div className="rounded-md shadow-md overflow-hidden mt-10">
                <img src={item.img} width="w-full" alt="The Lazy Media" />
              </div>
              <h3 className="font-semibold text-xl text-black py-3 uppercase">
                {item.title}
              </h3>

              {item.technology}

              <p className="text-secondary font-medium mb-10">
                {item.desc}
              </p>

              <a href={item.link} className={`text-base font-semibold text-white bg-gradient-to-r from-primary to-sky-500  py-4 px-4 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out mr-5 inline mt-10 ${!item.link ? 'opacity-60 cursor-not-allowed' : ''} `} target="_blank">
                <TbZoomCode className='mb-1 inline' size={25} /> Website
              </a>
              <a href={item.github} className={`text-base font-semibold text-white bg-black py-4 px-4 rounded-xl hover:shadow-lg hover:opacity-70 transition duration-200 ease-in-out inline ${!item.link ? 'opacity-60 cursor-not-allowed' : ''}`} target="_blank">
                <AiFillGithub className='mb-1 inline mr-1' size={25} /> GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portofolio