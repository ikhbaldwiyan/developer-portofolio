import React from 'react'

function About() {
  return (
    <section id='about' className='pt-36 pb-32'>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className='font-bold text-primary text-2xl uppercase mb-4'>About Me</h4>
            <h2 className='text-black font-semibold uppercase'>Biodata</h2>
            <h2 className='text-secondary'>Hi! I am Ikhbal Dwiyantoro! I've experienced as a Web Developer over 2 years with a demonstrated history of working in the information technology and IT services industry</h2>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className='font-semibold text-black uppercase pt-10'>Connect With Me</h3>
            <p className='text-secondary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat explicabo perferendis illo adipisci? Sequi veniam accusantium sunt voluptates, rerum quis eaque nulla iusto, unde consequuntur error itaque harum vero magni!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About