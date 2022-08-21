import React from 'react'
import About from '../components/About'
import HeroBanner from '../components/HeroBanner'
import Layout from '../components/Layout'
import Portofolio from '../components/Portofolio'

function Home() {
  return (
    <Layout>
      <HeroBanner />
      <Portofolio />
      <About />
    </Layout>
  )
}

export default Home