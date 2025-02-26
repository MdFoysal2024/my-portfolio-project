// import htmlImg from '../assets/html.png'
// import cssImg from '../assets/css.png'
// import jsImg from '../assets/js.png'
// import reactImg from '../assets/react-01.png'
// import mongoBDImg from '../assets/mongodb.png'
// import nodeImg from '../assets/node.png'
// import tailwindImg from '../assets/tailwind.png'
// import firebaseImg from '../assets/firebase.png'







import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/js.png'
import reactImg from '../assets/react-01.png'
import mongoBDImg from '../assets/mongodb.png'
import nodeImg from '../assets/node.png'
import tailwindImg from '../assets/tailwind.png'
import firebaseImg from '../assets/firebase.png'
import nextImg from '../assets/next-js.png'
//import nextTextImg from '../assets/next-text.js.png'
import githubImg from '../assets/github.png'
import expressImg from '../assets/express.png'
import bootstrapImg from '../assets/Bootstrap.png'













const Skills = () => {
    return (
        <div id='skills' className="px-6 md:px-0   mt-24 pt-24">
            <h2 className="text-4xl text-left mb-2 font-bold py-8"> Skills</h2>

            {/* <div className="grid gap-6 pt-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-8">

                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img className='w-16 md:w-24 lg:w-36' src={htmlImg} alt="" />
                    <p className='text-xl'>HTML</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img className='w-16 md:w-24 lg:w-36' src={cssImg} alt="" />
                    <p className='text-xl'>CSS</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img className='w-16 md:w-24 lg:w-36' src={jsImg} alt="" />
                    <p className='text-xl'>JavaScript</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img className='w-16 md:w-24 lg:w-36' src={reactImg} alt="" />
                    <p className='text-xl'>React.js</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img className='w-16 md:w-24 lg:w-36' src={mongoBDImg} alt="" />
                    <p className='text-xl'>Mongo DB</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img className='w-16 md:w-24 lg:w-36' src={nodeImg} alt="" />
                    <p className='text-xl'>Node.js</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img className='w-16 md:w-24 lg:w-36' src={tailwindImg} alt="" />
                    <p className='text-xl'>Tailwind</p>
                </div>
                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">
                    <img className='w-16 md:w-24 lg:w-36' src={firebaseImg} alt="" />
                    <p className='text-xl'>Firebase</p>
                </div>




            </div> */}

            <div className=' '>
                <div className=' grid grid-cols-2 md:grid-cols-3    gap-4 '>
                    <div className=" rounded px-6 py-2 justify-center  bg-gray-800 flex flex-row gap-1   items-center">
                        <img className='w-10' src={htmlImg} alt="" />
                        <p className='text-xl'>HTML5</p>
                    </div>
                    <div className=" rounded  px-6 py-2 justify-center  bg-gray-800 flex flex-row gap-2   items-center">
                        <img className='w-10' src={cssImg} alt="" />
                        <p className='text-xl'>CSS3</p>
                    </div>
                    <div className=" rounded  px-4 py-2 justify-center  bg-gray-800 flex flex-row gap-2   items-center">
                        <img className='w-10' src={jsImg} alt="" />
                        <p className='text-xl'>JavaScript</p>
                    </div>
                    <div className="  rounded  px-4 py-2 justify-center  bg-gray-800 flex flex-row gap-3   items-center">
                        <img className='w-10' src={nextImg} alt="" />
                        <p className='text-xl'>Next.js</p>

                    </div>

        
                    <div className=" rounded  px-4 py-2 justify-center  bg-gray-800 flex flex-row    items-center">
                        <img className='w-10' src={mongoBDImg} alt="" />
                        <p className='text-xl'>MongoDB</p>
                    </div>
                    <div className=" rounded  px-4 py-2 justify-center  bg-gray-800 flex flex-row gap-2   items-center">
                        <img className='w-8' src={expressImg} alt="" />
                        <p className='text-xl'>Express.js</p>
                    </div>
                    <div className=" rounded  px-4 py-2 justify-center  bg-gray-800 flex flex-row gap-2   items-center">
                        <img className='w-10' src={reactImg} alt="" />
                        <p className='text-xl'>React.js</p>
                    </div>
                    <div className=" rounded px-4 py-2  justify-center  bg-gray-800 flex flex-row gap-1   items-center">
                        <img className='w-10' src={nodeImg} alt="" />
                        <p className='text-xl'>Node.js</p>
                    </div>
             
              
                    <div className="  rounded  px-4 py-2 justify-center  bg-gray-800 flex flex-row gap-1   items-center">
                        <img className='w-10' src={githubImg} alt="" />
                        <p className='text-xl pl-2'> GitHub</p>
                    </div>
                    <div className=" rounded  px-4 py-2 justify-center  bg-gray-800 flex flex-row gap-3   items-center">
                        <img className='w-10' src={tailwindImg} alt="" />
                        <p className='text-xl'>Tailwind CSS</p>
                    </div>
                    <div className=" rounded  px-4 py-2 justify-center  bg-gray-800 flex flex-row gap-3   items-center">
                        <img className='w-10' src={bootstrapImg} alt="" />
                        <p className='text-xl'>Bootstrap</p>
                    </div>
                    <div className="  rounded  px-4 py-2 justify-center  bg-gray-800 flex flex-row gap-1   items-center">
                        <img className='w-10' src={firebaseImg} alt="" />
                        <p className='text-xl'>Firebase</p>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default Skills;