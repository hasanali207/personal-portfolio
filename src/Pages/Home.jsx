import React from 'react'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import { Link } from 'react-router-dom'
import Contact from '../pages/Contact'
import Timeline from '../components/Timeline'
import Banner from '../components/Banner'
import About from '../components/About'
import RecentWorks from '../components/RecenWorks'

const Home = () => {
  return (
    <div>
        <Banner></Banner>

              
       <RecentWorks></RecentWorks>
       
       
        

        <section  id='skills'>
         <Skills></Skills>
        </section>
        <Timeline></Timeline>
       
        <About></About>
       
        

        <Contact></Contact>
    </div>
  )
}

export default Home