import React, { useState } from 'react'

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive(!isActive)
  }

  const menus = [
    {
      name: 'Home',
      link: '#home'
    },
    {
      name: 'Blog',
      link: '#blog'
    },
    {
      name: 'Client',
      link: '#client'
    },
    {
      name: 'Projects',
      link: '#project'
    },
    {
      name: 'About',
      link: '#about'
    },
    {
      name: 'Contact',
      link: '#about'
    },
  ]

  const Menu = () => (
    <nav className={`absolute py-5 bg-white shadow-xl rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${!isActive ? 'hidden' : ''}`}>
      <ul className='block lg:flex'>
        {menus.map((item, idx) => (
          <li key={idx} className='group'>
            <a href={item.link} className='font-semibold text-black py-2 mx-8 flex group-hover:text-primary lg:text-white lg:group-hover:text-gray-800'>{item.name}</a>
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
    <header className='bg-cyan-600 bg-opacity-80 fixed z-[99] top-0 left-0 w-full flex flex-items-center shadow-lg backdrop-blur-md'>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-7">
            <a href="#home" className='font-bold text-white block py-6 text-3xl'>
              Portofolio
            </a>
          </div>
          <div className='flex items-center px-7'>
            <Hamburger />
            <Menu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar