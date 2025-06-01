
import { Typewriter } from 'react-simple-typewriter';

function Section1(){


    return(
        <div className=" bg-white flex items-center justify-center px-4 py-1 ">
            <div className="max-w-7xl w-full grid lg:grid-cols-[36%_65%] md:grid-cols-[40%_60%] gap-12 items-center">

                {/* Left column */}
                <div className="space-y-6 content-start py-8">
                    <h1 className="text-5xl text-[#2D2D2D] font-bold leading-tight mb-9 md:text-6xl">
                        Thiết kế <br />

                        <Typewriter
                            words={['Creative', 'Portfolio', 'E-commerce', 'Booking','Blog','Landing Page','Educational ']}
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
                        Gia công, thiết kế website với nhu cầu và mục đích sử dụng của doanh nghiệp bạn mong muốn
                        .
                    </p>
                    <button className="px-6 py-4  flex font-semibold bg-[#67AE6E] text-1xl text-white rounded-md hover:bg-[#90C67C] transition">
                        Liên hệ thiết kế
                        <i className='ml-2.5  self-center  text-[1.4rem] bx bx-right-arrow-alt'></i>
                    </button>

                    <img className="w-[70%] " src="/public/img/homepage/pencil_line.png" alt=""/>
                    <div className="flex space-x-12 mt-10 text-center">
                        <div className="fl  ex flex-col items-start">
                            <p className="text-3xl font-bold text-[#67AE6E]">20+</p>
                            <p className="text-gray-500">Customer</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-3xl font-bold text-[#67AE6E]">100+</p>
                            <p className="text-gray-500">Đánh giá tích cực</p>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <img
                       src="/public/img/homepage/bg3.png"
                        alt="Website Builder UI"
                        className="  w-full max-w-[1400px] h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default Section1;
