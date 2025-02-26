import AboutMe from "./AboutMe";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Course from "./Course";
import Education from "./Education";
import Projects from "./Projects";
import RunningSection from "./RunningSection";
//import Skills from "./Skills";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <RunningSection></RunningSection>

           <div className="flex gap-24 justify-between">

           <AboutMe></AboutMe>
          
           
           </div>
           
           <Education></Education>
           <Course></Course>
           <Projects></Projects>
           <ContactMe></ContactMe>
        </div>
    );
};

export default Home;