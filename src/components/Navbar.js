import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import { AiFillHome } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { MdArticle, MdPermContactCalendar } from 'react-icons/md';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive(!isActive)
  }

  const menus = [
    {
      name: 'Home',
      pathname: '/',
      hash: '#',
      icon: <AiFillHome className="inline mt-1 mr-1" />
    },
    {
      name: 'Blog',
      pathname: '/blog',
      hash: '#',
      icon: <MdArticle size={18} className="inline mt-1 mr-1" />
    },
    {
      name: 'Projects',
      pathname: '/',
      hash: '#project',
      icon: <FaLaptopCode size={18} className='inline mt-1 mr-1'/>
    },
    {
      name: 'Contact',
      pathname: '/',
      hash: '#about',
      icon: <MdPermContactCalendar size={18} className='inline mt-1 mr-1' />
    },
    {
      name: 'About',
      pathname: '/',
      hash: '#about',
      icon: <BsInfoCircleFill className='inline mt-1 mr-1' />
    },
  ]

  const Menu = () => (
    <nav className={`absolute py-5 bg-white shadow-xl rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${!isActive ? 'hidden' : ''}`}>
      <ul className='block lg:flex'>
        {menus.map((item, idx) => (
          <li key={idx} className='group'>
            <NavHashLink
              to={`${item.pathname}${item.hash}`}
              smooth
            >
              <a className='font-semibold text-black py-2 mx-8 flex group-hover:text-primary lg:text-white lg:group-hover:text-gray-800'>
                {item.icon} {item.name}
              </a>
            </NavHashLink>
          </li>
        ))}
      </ul>
    </nav>
  )

  const Hamburger = () => (
    <button onClick={handleMenu} name='hamburger' type='button' 
      className={`block absolute right-4 lg:hidden ${isActive ? 'hamburger-active' : ''}`}>
      <span className='hamburger-line transition duration-300 origin-top-left'></span>
      <span className='hamburger-line transition duration-300'></span>
      <span className='hamburger-line transition duration-300 origin-bottom-left'></span>
    </button>
  )

  return (
    <header className='bg-gradient-to-l from-primary to-sky-500 bg-opacity-80 fixed z-[99] top-0 left-0 w-full flex flex-items-center shadow-xl backdrop-blur-md'>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-2">
            <Link to="/">
              <a className='font-bold text-stone-50 block py-6 text-3xl'>
                Developer Profile
              </a>
            </Link>
          </div>
          <div className='flex items-center'>
            <Hamburger />
            <Menu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar