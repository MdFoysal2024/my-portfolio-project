import { MdDownloadForOffline } from 'react-icons/md';
import resumeImg2 from '../assets/My Resume 1 copy.jpg'
import resume from '../assets/My Resume 1.pdf'
const Resume = () => {
    return (


        <section className='bg-[#10171d] h-[100vh] md:h-[100%] -mt-20 '>

            <div className=' container pt-24 mx-auto flex flex-col text-center justify-center'>
                {/* <img className='p-6' src={resumeImg} alt="" /> */}

                <div className='text-center flex justify-between'>

                    <div>

                    </div>

                    <a href={resume} download="Resume">

                        <button className='bg-red-600 mr-6 text-lg flex  items-center  gap-2   hover:bg-red-800 cursor-pointer text-white font-bold px-4 py-2 rounded-lg'>
                            Download < MdDownloadForOffline className='text-2xl' />
                        </button>
                    </a>
                </div>

                <img className='p-6' src={resumeImg2} alt="" />
            </div>
        </section>
    );
};

export default Resume;