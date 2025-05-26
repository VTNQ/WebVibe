import * as React from "react";

function Section2(){
    return (
        <div className="w-full grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto py-10   md:grid-cols-2 px-6  grid   gap-8 lg:grid-cols-3 ">
            <div className="bg-[#FFE979] rounded-lg p-8 flex flex-col items-center text-center">
                <p className="text-sm font-semibold mb-2">For Beginners</p>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                    Launch Your First <br /> Website
                </h2>
                <img

                    src="/public/img/homepage/section2_1.png"
                    alt="For Beginners"
                    className="mb-6 w-auto h-48"
                />
                <div className="flex flex-wrap justify-center gap-3">
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition">
                        Visual Builder
                    </button>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition">
                        Documentation
                    </button>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition">
                        Support
                    </button>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition">
                        Prebuilt Websites
                    </button>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#C2FFA1] rounded-lg p-8 flex flex-col items-center text-center">
                <p className="text-sm font-semibold mb-2">For Marketers</p>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                    Generate Leads And <br /> Conversions
                </h2>
                <img
                    src="/public/img/homepage/section2_2.png"
                    alt="For Marketers"
                    className="mb-6 w-auto h-48"
                />
                <div className="flex flex-wrap justify-center gap-3">
                    <button className="bg-green-400 text-black px-4 py-2 rounded font-semibold hover:bg-green-500 transition">
                        Design
                    </button>
                    <button className="bg-green-400 text-black px-4 py-2 rounded font-semibold hover:bg-green-500 transition">
                        SEO
                    </button>
                    <button className="bg-green-400 text-black px-4 py-2 rounded font-semibold hover:bg-green-500 transition">
                        Shop Builder
                    </button>
                    <button className="bg-green-400 text-black px-4 py-2 rounded font-semibold hover:bg-green-500 transition">
                        Form Builder
                    </button>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#7FD4F0] rounded-lg p-8 flex flex-col items-center text-center">
                <p className="text-sm font-semibold mb-2">For Professionals</p>
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                    Take Your Projects <br /> To The Next Level
                </h2>
                <img
                    src="/public/img/homepage/section2_3.png    "
                    alt="For Professionals"
                    className="mb-6 w-auto h-48"
                />
                <div className="flex flex-wrap justify-center gap-3">
                    <button className="bg-sky-400 text-black px-4 py-2 rounded font-semibold hover:bg-sky-500 transition">
                        All-In-One
                    </button>
                    <button className="bg-sky-400 text-black px-4 py-2 rounded font-semibold hover:bg-sky-500 transition">
                        Patcher
                    </button>
                    <button className="bg-sky-400 text-black px-4 py-2 rounded font-semibold hover:bg-sky-500 transition">
                        WCAG
                    </button>
                    <button className="bg-sky-400 text-black px-4 py-2 rounded font-semibold hover:bg-sky-500 transition">
                        Dynamic Data
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Section2