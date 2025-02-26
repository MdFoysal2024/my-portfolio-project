import Marquee from "react-fast-marquee";
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/js.png'
import reactImg from '../assets/react-01.png'
import mongoBDImg from '../assets/mongodb.png'
import nodeImg from '../assets/node.png'
import tailwindImg from '../assets/tailwind.png'
import firebaseImg from '../assets/firebase.png'
import nextImg from '../assets/next-js.png'
import nextTextImg from '../assets/next-text.js.png'
import githubImg from '../assets/github.png'
import expressImg from '../assets/express.png'

const RunningSection = () => {
    return (
        <div className="mt-16">
        <Marquee>
       
            <div className=" rounded-2xl  flex flex-row gap-1 mr-12  items-center">
                <img className='w-8' src={htmlImg} alt="" />
                <p className=''>HTML5</p>
            </div>
            <div className=" rounded-2xl  flex flex-row gap-1 mr-12  items-center">
                <img className='w-8' src={cssImg} alt="" />
                <p className=''>CSS3</p>
            </div>
            <div className=" rounded-2xl  flex flex-row gap-1 mr-12  items-center">
                <img className='w-8' src={jsImg} alt="" />
                <p className=''>JavaScript</p>
            </div>
            <div className=" rounded-2xl  flex flex-row gap-2 mr-12  items-center">
                <img className='w-8' src={reactImg} alt="" />
                <p className=''>React.js</p>
            </div>
            <div className=" rounded-2xl  flex flex-row gap-1 mr-12  items-center">
                <img className='w-8' src={mongoBDImg} alt="" />
                <p className=''>Mongo DB</p>
            </div>
            <div className=" rounded-2xl  flex flex-row gap-2 mr-12  items-center">
                <img className='w-8' src={nodeImg} alt="" />
                <p className=''>Node.js</p>
            </div>
            <div className=" rounded-2xl  flex flex-row gap-3 mr-12  items-center">
                <img className='w-8' src={tailwindImg} alt="" />
                <p className=''>Tailwind CSS</p>
            </div>
            <div className="  rounded-2xl  flex flex-row gap-1 mr-12  items-center">
                <img className='w-8' src={firebaseImg} alt="" />
                <p className=''>Firebase</p>
            </div>
            <div className="  rounded-2xl  flex flex-row gap-1 mr-12  items-center">
                <img className='w-8' src={githubImg} alt="" />
                <p className=' pl-2'> GitHub</p>
            </div>
             <div className="  rounded-2xl  flex flex-row gap-1 mr-12  items-center">
                <img className='w-8' src={nextImg} alt="" />
                <img className='w-8 ml-2' src={nextTextImg} alt="" />
                
            </div>
            <div className=" rounded-2xl  flex flex-row gap-2 mr-12  items-center">
                                    <img className='w-8' src={expressImg} alt="" />
                                    <p className=''>Express.js</p>
                                </div>

            </Marquee> 
    </div>
    );
};

export default RunningSection;