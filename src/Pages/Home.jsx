import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Contact from './Contact'
import Hero from '../Components/Hero/Hero';
import Service from './Service';
import Project from './Projects';
import About from './About';

const Home = () => {

  return (
    <div className='w-full min-h-screen bg-[#F9FAFF]'>
      <Hero />
      <About />
      {/* <Service /> */}
      <Project />
      <Contact />
    </div>
  )
}

export default Home
