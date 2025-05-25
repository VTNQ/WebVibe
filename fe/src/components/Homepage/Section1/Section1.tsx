import './Section1.css';

import { Typewriter } from 'react-simple-typewriter';

function Section1(){


    return(
        <div className=" bg-white flex items-center justify-center px-4 py-1">
            <div className="max-w-7xl w-full grid lg:grid-cols-[36%_65%] gap-12 items-center">

                {/* Left column */}
                <div className="space-y-6 content-start">
                    <h1 className="text-5xl text-[#2D2D2D] font-bold leading-tight mb-9 md:text-6xl">
                        The Ultimate <br />

                        <Typewriter
                            words={['Creative', 'Portfolio', 'Website Builder']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={60}
                            deleteSpeed={50}
                            delaySpeed={1400}

                        />
                        <br />
                        Website Builder
                    </h1>
                    <p className="text-gray-600 max-w-md mb-8 text-[1.1rem] md:text-[1.2rem]">
                        Trusted by beginners, marketers & professionals; Built with usability and performance in mind.
                    </p>
                    <button className="px-6 py-4  flex font-semibold bg-[#2D2D2D] text-1xl text-white rounded-md hover:bg-gray-800 transition">
                        Contact to Designing
                        <i className='ml-2.5  self-center  text-[1.4rem] bx bx-right-arrow-alt'></i>
                    </button>
                    <img className="w-[70%] " src="/public/img/homepage/pencil_line.png" alt=""/>
                    <div className="flex space-x-12 mt-10 text-center">
                        <div className="flex flex-col items-start">
                            <p className="text-3xl font-bold">1,000,000+</p>
                            <p className="text-gray-500">People Trust Avada</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-3xl font-bold">26k+</p>
                            <p className="text-gray-500">Average 5-Star Reviews</p>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <img
                       src="/public/img/homepage/section1_bg.png"
                        alt="Website Builder UI"
                        className="  w-full max-w-[1400px] h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default Section1;
