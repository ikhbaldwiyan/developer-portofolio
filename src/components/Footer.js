import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import { AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Footer() {
  const socmed = [
    {
      logo: <AiFillGithub size={25} className='inline mb-1' />,
      link: 'https://github.com/ikhbaldwiyan'
    },
    {
      logo: <AiOutlineInstagram size={25} className='inline mb-1' />,
      link: 'https://www.instagram.com/ikhbal.dwiyan/'
    },
    {
      logo: <AiOutlineTwitter size={25} className='inline mb-1' />,
      link: ''
    },
    {
      logo: <AiFillLinkedin size={25} className='inline mb-1' />,
      link: 'https://www.linkedin.com/in/ikhbal-dwiyantoro-536693199/'
    },
  ];

  return (
    <footer className="bg-gradient-to-l from-cyan-600 to-sky-900 pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-200 font-medium md:w-1/3">
            <h2 className="text-white text-1xl mb-5">Inzoid</h2>
            <h2 className="font-bold text-1xl mb-3">Contact Me :</h2>
            <p>ikhbaldwiyan@gmail.com</p>
            <p>Jl Sukarasa No 27, Bandung</p>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h2 className="font-semibold text-white mb-5">
              Article Category
            </h2>
            <ul className="text-slate-300 space-y-3 font-medium">
              <li>
                <a href="#" className="inline-block hover:text-white">
                  Programming
                </a>
              </li>
              <li>
                <a href="#" className="inline-block hover:text-white">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="inline-block hover:text-white">
                  UI / UX
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h2 className="font-semibold text-white mb-5">
              Pages
            </h2>
            <ul className="text-slate-300 space-y-3 font-medium">
              <li>
                <NavHashLink smooth to="/#" >
                  <a className="inline-block hover:text-white">
                    Home
                  </a>
                </NavHashLink>
              </li>
              <li>
                <NavHashLink smooth to="/blog#" >
                  <a className="inline-block hover:text-white">
                    Blog
                  </a>
                </NavHashLink>
              </li>
              <li>
                <NavHashLink smooth to="/#project" >
                  <a className="inline-block hover:text-white">
                    Projects
                  </a>
                </NavHashLink>
              </li>
              <li>
                <NavHashLink to="/contact#" >
                  <a href="/contact#" className="inline-block hover:text-white">
                    Contact
                  </a>
                </NavHashLink>
              </li>
              <li>
                <NavHashLink smooth to="/#about" >
                  <a className="inline-block hover:text-white">
                    About
                  </a>
                </NavHashLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full pt-22 pb-0 text-center">
          <div className="py-5 space-x-4 px-4">
            {socmed.map((item, idx) => (
              <a key={idx} href={item.link} target="_blank">
                <button href='#' className="text-base font-semibold text-white py-2 px-3 rounded-full hover:shadow-lg hover:bg-cyan-800 border transition duration-300 ease-in-out inline">
                  {item.logo}
                </button>
              </a>
            ))}
          </div>
          <p className="text-white">
            Copyright © 2022 Inzoid. Built with 🎶 and <span className="text-white font-semibold">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer