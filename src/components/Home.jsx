import AboutMe from "./AboutMe";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import Course from "./Course";
import Education from "./Education";
import Projects from "./Projects";
import RunningSection from "./RunningSection";
//import Skills from "./Skills";
import ParticleBackground from './Particle'

const Home = () => {
    return (
        <div>


            <ParticleBackground />
            <Banner></Banner>
            <RunningSection></RunningSection>

            <AboutMe></AboutMe>

            <Education></Education>
            <Course></Course>
            <Projects></Projects>
            <ContactMe></ContactMe>

        </div>
    );
};

export default Home;