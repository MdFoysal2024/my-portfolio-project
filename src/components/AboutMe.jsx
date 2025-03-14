

import Skills from "./Skills";


const AboutMe = () => {
    return (
        <section className="relative " >

            <div className="bg-[#10171d]">

                <div className="container mx-auto ">

                    <div className="   flex flex-col md:flex-col  lg:flex-row justify-between  md:gap-24" >

                        <div id="about" className=" lg:w-1/2   pt-36 px-6 md:px-0  lg:px-0">
                            <h2 className="text-3xl  md:text-5xl text-center md:text-left font-bold  py-8"> About Me</h2>
                            <p className=" text-justify text-lg text-gray-400 pt-6">
                                Hi, <span className="font-bold">I’m Foysal,</span> a passionate Frontend Developer dedicated to crafting seamless, user-friendly, and visually appealing web experiences. With expertise in <span className="font-bold">HTML, CSS, JavaScript, Express.js, Node.js, MongoDB and modern frameworks like React.js</span>, I specialize in building responsive and high-performance interfaces that enhance usability and engagement.


                            </p>
                            <p className=" text-justify text-lg pt-4 text-gray-400 ">
                                I thrive on transforming complex ideas into intuitive digital experiences, focusing on clean code, performance optimization, and accessibility. Keeping up with the latest industry trends and best practices, I ensure that every project I work on is modern, scalable, and aligned with user needs.

                                Whether it’s developing sleek UI components, optimizing website performance, or integrating APIs, I bring a keen eye for detail and a problem-solving mindset to every challenge. Let’s build something amazing together!


                            </p>
                        </div>

                        <Skills></Skills>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default AboutMe;