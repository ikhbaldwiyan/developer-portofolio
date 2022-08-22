import React from 'react'
import Layout from '../components/Layout'

function Blog() {

  const articles = [
    {
      title: 'React JS Hooks',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi ut rerum architecto? Dolor sunt alias a distinctio totam odit minima cumque facilis vel.',
      image: 'https://source.unsplash.com/360x200?programming'
    },
    {
      title: 'Tips UI / UX Design',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi ut rerum architecto? Dolor sunt alias a distinctio totam odit minima cumque facilis vel.',
      image: 'https://source.unsplash.com/360x200?ui+ux'
    },
    {
      title: 'Learn Tailwind CSS',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi ut rerum architecto? Dolor sunt alias a distinctio totam odit minima cumque facilis vel.',
      image: 'https://source.unsplash.com/360x200?css'
    },
    {
      title: 'Improve your writing skills',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi ut rerum architecto? Dolor sunt alias a distinctio totam odit minima cumque facilis vel.',
      image: 'https://source.unsplash.com/360x200?writing'
    },
    {
      title: 'Showcase Your Medium Articles',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi ut rerum architecto? Dolor sunt alias a distinctio totam odit minima cumque facilis vel.',
      image: 'https://source.unsplash.com/360x200?articles'
    },
    {
      title: 'Best Coffee for Programmer',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eligendi ut rerum architecto? Dolor sunt alias a distinctio totam odit minima cumque facilis vel.',
      image: 'https://source.unsplash.com/360x200?coffee'
    },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl">
              <h4 className='font-bold text-2xl text-black uppercase'>Latest Articles</h4>
            </div>
          </div>

          <div className="flex flex-wrap py-2">
            {articles.map((item, idx) => (
              <div key={idx} className="w-full px-4 lg:w-1/2 xl:w-1/3 py-4">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <img src={item.image} alt={item.title} className='w-full' />
                  <div className="py-6 px-6">
                    <a href='#' className='text-black hover:text-primary font-semibold text-xl truncate'>
                      {item.title}
                    </a>
                    <p className='py-5 text-semibold text-secondary'>
                      {item.desc}
                    </p>
                    <a href="#" className="py-2 px-5 bg-gradient-to-r font-semibold from-primary to-blue-500 text-white rounded-lg hover:opacity-70">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog