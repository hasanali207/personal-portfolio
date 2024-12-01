import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Banner from '../components/Banner';
import About from '../components/About';
import RecentWorks from '../components/RecentWorks';
import Contact from '../Pages/Contact';
const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div id="portfolio">
        <RecentWorks></RecentWorks>
      </div>

      <div id="skills">
        
        <Skills></Skills>
      </div>

      <div id="experience">
        <Timeline></Timeline>
      </div>

      <div id="about">
        <About></About>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
