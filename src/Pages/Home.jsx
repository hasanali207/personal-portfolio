import React from 'react'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Timeline from '../components/Timeline'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Banner></Banner>

              
       
          <Portfolio></Portfolio>
       
       
        

        <section  id='skills'>
         <Skills></Skills>
        </section>

        <div className='bg-slate-200'>
        <About></About>
        </div>
        <Timeline></Timeline>
    </div>
  )
}

export default Home