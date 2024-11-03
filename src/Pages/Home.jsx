
import Skills from '../components/Skills'
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
       
        

    </div>
  )
}

export default Home