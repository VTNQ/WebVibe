import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { GiPoolDive } from "react-icons/gi";

const OutdoorActivitiesSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    const titleVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section
            ref={ref}
            className="relative bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
            {/* Left Content */}
            <div>
                <p className="uppercase tracking-widest text-sm text-gray-600 mb-2">
                    Luxury Hoteler <span className="inline-block text-xl text-[#a17441]">~</span>
                </p>

                <motion.h2
                    initial="hidden"
                    animate={controls}
                    variants={titleVariants}
                    className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-snug"
                >
                    We Provide Outdoor <br />
                    Activities To All Visitors
                </motion.h2>

                <p className="text-[#a17441] font-semibold mt-4 text-sm sm:text-base">
                    San Francisco has hills with views, the coast, excellent food & has been <br className="hidden sm:block" />
                    voted the happiest, healthiest and fittest city in the States many times.
                </p>

                {/* Icons */}
                <div className="mt-8 flex flex-wrap gap-8">
                    <div className="group flex items-center gap-3 cursor-pointer" style={{ perspective: '1000px' }}>
                        <FaLightbulb className="text-[#a17441] h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-500 group-hover:rotate-y-180" />
                        <div>
                            <p className="font-medium text-gray-900 text-sm sm:text-base">The Best</p>
                            <p className="text-gray-500 text-sm sm:text-base">Lighting</p>
                        </div>
                    </div>

                    <div className="group flex items-center gap-3 cursor-pointer" style={{ perspective: '1000px' }}>
                        <GiPoolDive className="text-[#a17441] h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-500 group-hover:rotate-y-180" />
                        <div>
                            <p className="font-medium text-gray-900 text-sm sm:text-base">The Best</p>
                            <p className="text-gray-500 text-sm sm:text-base">Swimming</p>
                        </div>
                    </div>
                </div>

                {/* List */}
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                        <span className="text-[#a17441]">✔</span> It is a long fact that a reader will be distracted by the readable
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#a17441]">✔</span> Lorem Ipsum is simply dummy of the printing and industry
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#a17441]">✔</span> There are many variations of Lorem Ipsum majority
                    </li>
                </ul>

                <button className="mt-8 bg-[#a17441] hover:bg-[#8d5c2c] text-white px-6 py-3 rounded shadow transition">
                    ABOUT MORE
                </button>
            </div>

            {/* Right Image Stack */}
            <div className="relative w-full flex justify-center items-center">
                {/* Viền mảnh */}
                <div className="absolute top-12 right-8 md:right-28 h-[250px] sm:h-[300px] md:h-[412px] w-[40%] border-[#a17441] border border-solid z-0"></div>

                {/* Ảnh phía sau */}
                <div className="absolute group top-0 right-0 w-40 sm:w-60 h-32 sm:h-44 border-[6px] border-white shadow-lg overflow-hidden z-10">
                    <img
                        src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/about3-550x550.jpg"
                        alt="Hotel Lounge"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent to-white/30 group-hover:animate-shine" />
                </div>

                {/* Ảnh phía trước */}
                <div className="relative group overflow-hidden mt-24 w-64 sm:w-80 md:w-96 h-44 sm:h-52 md:h-60 border-[6px] border-white shadow-2xl z-20">
                    <img
                        src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/about3-550x550.jpg"
                        alt="Hotel Hallway"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent to-white/30 group-hover:animate-shine" />
                </div>
            </div>
        </section>
    );
};

export default OutdoorActivitiesSection;
