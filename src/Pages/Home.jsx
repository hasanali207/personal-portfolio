
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'
import Banner from '../components/Banner'
import About from '../components/About'
import RecentWorks from '../components/RecentWorks'
import Contact from '../Pages/Contact'
const Home = () => {
  return (
    <div>
        <Banner></Banner>

              
       <RecentWorks></RecentWorks>
       
       
        

       
         <Skills></Skills>
        
        <Timeline></Timeline>
       
        <About></About>
        <Contact></Contact>
        

    </div>
  )
}

export default Home