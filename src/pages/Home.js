import React from 'react'
import About from '../components/About'
import HeroBanner from '../components/HeroBanner'
import Layout from '../components/Layout'

function Home() {
  return (
    <Layout>
      <HeroBanner />
      <About />
    </Layout>
  )
}

export default Home