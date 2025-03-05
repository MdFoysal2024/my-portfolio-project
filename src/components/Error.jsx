import { Link } from 'react-router-dom';
import errorImg from '../assets/errorpage.jpg'

const Error = () => {
    return (
        <section className=' '>

            <div className=' container p-12  md:p-24   mx-auto flex flex-col text-center justify-center'>
                {/* <img className='p-6' src={resumeImg} alt="" /> */}
                <img className='p-6' src={errorImg} alt="" />
                <Link className='flex justify-center' to='/'>
                    <button className=" flex items-center justify-center gap-4  rounded-lg  font-bold border-2 cursor-pointer border-red-600 bg-red-600 text-white py-2 px-6 md:px-6 text-lg">Go To Home</button>
                </Link>
            </div>
            
        </section>
    );
};

export default Error;