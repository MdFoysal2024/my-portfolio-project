import { FaFacebook, FaGithub } from 'react-icons/fa';
import portfolioImg from '../assets/portfolio-image.png'
import { ImLinkedin } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { LuSend } from 'react-icons/lu';
import { MdDownloadForOffline } from 'react-icons/md';
import { useTypewriter } from 'react-simple-typewriter'

const Banner = () => {


    const [text] = useTypewriter({
        words: ['Developer'],
        loop: 0
    })



    return (
        <section className='relative'>
            <div id='banner' className=' container mx-auto  px-6 md:px-0  lg:px-0 pt-8'>

                <div className="relative flex flex-col items-center gap-12 justify-between lg:flex-row">

                    <div className='lg:w-1/2'>
                        <h3 className=" text-lg lg:text-3xl text-gray-600 font-medium"> Hello, I am</h3>
                        <h1 className=" text-3xl lg:text-7xl font-bold  text-red-600 py-4"> MD Foysal </h1>

                        <h3 className=" text-xl lg:text-3xl text-gray-600 font-medium">
                            Frontend <span>{text}</span>
                        </h3>

                        <p className=" text-justify py-4 text-lg text-gray-400 ">
                                Hi, <span className="font-bold">I’m Foysal,</span> a passionate Frontend Developer dedicated to crafting seamless, user-friendly, and visually appealing web experiences. With expertise in <span className="font-bold">HTML, CSS, JavaScript, Express.js, Node.js, MongoDB and modern frameworks like React.js</span>, I specialize in building responsive and high-performance interfaces that enhance usability and engagement.


                            </p>
                        <div className='flex justify- gap-12 py-4 text-3xl'>
                            <a className='text-blue-600' href="https://www.facebook.com/profile.php?id=61560835027825" target='_blank'><FaFacebook /></a>
                            <a className='text-blue-600' href="https://www.linkedin.com/in/md-foysal-74784a210/" target='_blank'><ImLinkedin /></a>
                            <a className='text-gray-400' href="https://github.com/MdFoysal2024" target='_blank'><FaGithub /></a>
                        </div>

                        <div className='flex flex-row items-center mt-4 md:flex-row gap-6'>
                            <Link to='/resume'>
                                <button className=" flex items-center justify-center gap-4  rounded-lg  font-bold border-2 cursor-pointer border-red-600 bg-red-600 text-white py-2 px-6 md:px-6 text-lg">Resume< MdDownloadForOffline className='text-2xl' /></button>
                            </Link>


                            <a className=" text-xl flex items-center justify-center gap-4 border-2 cursor-pointer border-red-600 text-white font-bold w-40   text-center py-2 rounded-lg" href="#contact">Contact<LuSend /></a>
                        </div>


                    </div>

                    <div className='lg:w-1/2 flex justify-end'>
                        <img className='w-[640px]' width={''} src={portfolioImg} alt="" />
                    </div>

                </div>


            </div>
        </section>
    );
};

export default Banner;