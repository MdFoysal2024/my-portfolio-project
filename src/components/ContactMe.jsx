import contact from '../assets/Contact.png'

const ContactMe = () => {
    return (


        <section className='relative bg-[#10171d]'>

        <div id='contact' className=" container mx-auto px-6 md:px-0    py-36 ">
            <h2 className="text-3xl  md:text-5xl text-center md:text-left font-bold py-8"> Contact Me</h2>

            <div className="grid gap-6 pt-6 grid-cols-1 md:grid-cols-2 ">

                <div className=" bg-gray-800 rounded-2xl p-4 flex flex-col items-center">

                    <div className="  w-full  ">
                        <form className="card-body">
                            <div className="form-control">

                                <input type="text" placeholder="Your Name" className="input input-bordered bg-none rounded-lg border-red-600 py-6 bg-gray-800 w-full" required />
                            </div>
                            <div className="form-control">

                                <input type="email" placeholder="Your Email" className="input input-bordered py-6 rounded-lg border-red-600 bg-gray-800 w-full" required />

                            </div>
                            <div className="form-control">

                                <textarea className="rounded-lg p-3 border-red-600 w-full" cols={50} rows={10} placeholder="Write Here"></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <a className='bg-red-600 mr-6 text-lg   items-center  gap-2  text-center  hover:bg-red-800 cursor-pointer text-white font-bold px-4 py-2 rounded-lg' href="#banner">Send Message</a>
                            </div>
                        </form>
                    </div>

                </div>


               

                <div className=" flex flex-col  items-center">

                   <img className='opacity-100 md:w-[80%]' src={contact} alt="" />
                </div>

            </div>
        </div>
        </section>
    );
};

export default ContactMe;