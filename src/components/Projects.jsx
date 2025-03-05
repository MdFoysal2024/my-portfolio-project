import { FaEye, FaGithub } from "react-icons/fa";
import project01 from '../assets/project-01.jpg'
import project02 from '../assets/project-02.jpg'
import project03 from '../assets/project-03.jpg'

const Projects = () => {
    return (
        <section className="relative bg-[#10171d]">

            <div id="projects" className="container mx-auto px-6 md:px-0 pt-36">
                <h2 className="text-3xl  md:text-5xl text-center md:text-left py-8 font-bold">My Projects</h2>


                <div className="grid grid-cols-1 pt-6 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    <div className="flex bg-gray-800 p-6 rounded-lg flex-col gap-6">
                        <img className="rounded-lg" src={project01} alt="" />
                        <h3 className="text-2xl font-semibold">🩸 BLOOD FOR LIFE</h3>
                        <p className="text-justify">BLOOD FOR LIFE is a life-saving online platform dedicated to connecting blood donors with those in urgent need. Our mission is to bridge the gap between blood donors and patients by providing a seamless, efficient, and secure way to find and donate blood.</p>
                        <div className="flex gap-4">
                            <a className=" flex items-center justify-center gap-3  rounded-lg  font-bold border-2 cursor-pointer border-red-600 bg-red-600 text-white py-2 px-4 md:px-4 text-lg"  href="https://blood-donation-project-b1849.web.app/" target='_blank'> <FaEye /> Live <span className="hidden md:flex">Preview</span></a>
                            <a className=" flex items-center justify-center gap-3  rounded-lg  font-bold border-2 cursor-pointer border-gray-600 bg-gray-600 text-white py-2 px-6 md:px-6 text-lg"  href="https://github.com/MdFoysal2024/assignment-12-client-side?tab=readme-ov-file" target='_blank'><FaGithub />GitHub<span className="hidden md:flex">Link</span></a>
                        </div>
                    </div>


                    <div className="flex bg-gray-800 p-6 rounded-lg flex-col gap-6">
                        <img className="rounded-lg" src={project02} alt="" />
                        <h3 className="text-2xl font-semibold">🏃‍♂️ Marathon Events</h3>
                        <p className="text-justify">Marathon Events is a premier online platform dedicated to organizing and promoting marathon races worldwide. Whether you are a professional athlete, a fitness enthusiast, or a first-time runner, our platform connects you with exciting running events in your city and beyond.</p>
                        <div className="flex gap-4">
                            <a className=" flex items-center justify-center gap-3  rounded-lg  font-bold border-2 cursor-pointer border-red-600 bg-red-600 text-white py-2 px-4 md:px-4 text-lg"  href="https://marathon-events-management.web.app/" target='_blank'> <FaEye /> Live <span className="hidden md:flex">Preview</span></a>
                            <a className=" flex items-center justify-center gap-3  rounded-lg  font-bold border-2 cursor-pointer border-gray-600 bg-gray-600 text-white py-2 px-6 md:px-6 text-lg"  href="https://github.com/MdFoysal2024/assignment-11-client-side-?tab=readme-ov-file" target='_blank'><FaGithub />GitHub<span className="hidden md:flex">Link</span></a>
                        </div>
                    </div>
                    <div className="flex bg-gray-800 p-6 rounded-lg flex-col gap-6">
                        <img className="rounded-lg" src={project03} alt="" />
                        <h3 className="text-2xl font-semibold">📢Crowd funding</h3>
                        <p className="text-justify" >Crowd funding is a dynamic online platform designed to help individuals, startups, and organizations raise funds for their projects, causes, or business ventures. Whether are an entrepreneur launching a new product, an artist seeking financial backing, or a nonprofit organization . . . </p>
                        <div className="flex gap-4">
                            <a className=" flex items-center justify-center gap-3  rounded-lg  font-bold border-2 cursor-pointer border-red-600 bg-red-600 text-white py-2 px-4 md:px-4 text-lg"  href="https://inspiring-cendol-2005b3.netlify.app/" target='_blank'> <FaEye /> Live <span className="hidden md:flex">Preview</span></a>
                            <a className=" flex items-center justify-center gap-3  rounded-lg  font-bold border-2 cursor-pointer border-gray-600 bg-gray-600 text-white py-2 px-6 md:px-6 text-lg"  href="https://github.com/MdFoysal2024/assignment-10-client-side?tab=readme-ov-file" target='_blank'><FaGithub />GitHub<span className="hidden md:flex">Link</span></a>
                        </div>
                    </div>














                </div>





            </div>
        </section>
    );
};

export default Projects;