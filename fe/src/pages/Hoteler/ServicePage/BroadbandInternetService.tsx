import {useState} from "react";
import { FaArrowRight } from "react-icons/fa6";
import {FaArrowLeft} from "react-icons/fa6";
// FAQ Items data
const FAQ_ITEM = [
    { question: "Is my technology allowed on tech?", answer: "There are many variations..." },
    { question: "How to self launch your business?", answer: "There are many variations..." },
    { question: "How to turn visitors into contributors?", answer: "There are many variations..." },
    { question: "How can I find my solutions?", answer: "There are many variations..." },
];

// Accordion Item Component
const AccordionItem = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-900 font-semibold focus:outline-none"
            >
                <span>{question}</span>
                <span>{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen && (
                <div className="px-4 pb-4 text-gray-700 text-sm border-t border-gray-200">
                    {answer || "No content available."}
                </div>
            )}
        </div>
    );
};
// Main Component
export default function BroadbandInternetService() {
    const images = [
        "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/bg6-672x448.jpg",
        "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/bg3-672x448.jpg",
        "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/bg1-1-672x448.jpg"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;
    const nextSlide = () => {
        setCurrentIndex((prevIndex)=> (prevIndex + 1)%totalImages);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex)=> (prevIndex - 1+totalImages)%totalImages);
    };
    const getDisplayedImages = () => {
        return [
            images[currentIndex],
            images[(currentIndex + 1) % totalImages]
        ];
    };
    const menuItems = [
        { name: "Broadband Internet", isActive: true, url: "/Hoteler/Broadband-Internet" },
        { name: "Lounge Bar", isActive: false, url: "/Hoteler/Lounge-Bar" },
        { name: "Gymnasium", isActive: false, url: "/Hoteler/Gymnasium" },
        { name: "Spa Salon", isActive: false, url: "/Hoteler/Spa-Salon" },
        { name: "Swimming Pool", isActive: false, url: "/Hoteler/Swimming-Pool" },
        { name: "Pick Up & Drop", isActive: false, url: "/Hoteler/Pick-up" },
    ];
    return (
        <div>
            <div
                className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/page-title-bg.jpg')",
                }}
            >
                <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0"/>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl font-semibold">Broadband Internet</h1>
                    <div className="mt-4 text-sm flex justify-center items-center gap-2">
                        <span className="text-white/70">Home</span>
                        <span className="text-white font-semibold">› Broadband Internet</span>
                    </div>
                </div>
            </div>
            <section className="max-w-[1200px] mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Sidebar */}
                <div className="md:col-span-1 space-y-6">
                    {/* Menu Accordion */}
                    <div className="space-y-2">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className={`flex justify-between items-center w-full rounded border border-gray-300 px-4 py-2 text-gray-700 font-medium transition-colors duration-200`}
                            >
                                <span>{item.name}</span>
                                <span className="text-gray-500">
                                    {item.isActive ?
                                        <a href={item.url}><button className="bg-[#aa8453] p-2 rounded-3xl text-[#ffffff]"><FaArrowRight /></button></a>
                                        : <a href={item.url}><button className="bg-gray-100 p-2 rounded-3xl hover:bg-[#aa8453] hover:text-[#ffffff] text-[#aa8453]"><FaArrowRight /></button></a>}
                                </span>
                            </button>
                        ))}
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-md">
                        <h3 className="text-lg font-semibold mb-4">Hotel Booking</h3>
                        <form className="space-y-3">
                            <input
                                type="date"
                                placeholder="Check In"
                                className="w-full px-3 py-2 rounded border border-gray-300"
                            />
                            <input
                                type="date"
                                placeholder="Check Out"
                                className="w-full px-3 py-2 rounded border border-gray-300"
                            />
                            <select className="w-full px-3 py-2 rounded border border-gray-300">
                                <option>Room</option>
                                <option>Single</option>
                                <option>Double</option>
                                <option>Suite</option>
                            </select>
                            <select className="w-full px-3 py-2 rounded border border-gray-300">
                                <option>Guest</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            <button
                                type="submit"
                                className="w-full bg-yellow-700 text-white font-semibold py-2 rounded hover:bg-yellow-800 transition"
                            >
                                CHECK AVAILABILITY
                            </button>
                        </form>
                    </div>
                    <div className="text-center bg-black bg-opacity-80 text-white p-6 rounded-md space-y-4">
                        <p className="uppercase text-sm opacity-90">
                            For Booking Please Call Us or Write to us.
                        </p>
                        <div
                            className="border border-yellow-400 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-10 h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5h2l3 7-1 1a11.042 11.042 0 0011 11l-3-3a7.5 7.5 0 01-8-8l-1 1-7-3v-2z"
                                />
                            </svg>
                        </div>
                        <p>Now! Secretly container + Address hello@gmail.com</p>
                        <p className="text-xl font-bold">+88 (9800) 6802</p>
                    </div>
                </div>
                {/* Right Content Area */}
                <div className="md:col-span-2 space-y-6">
                    {/* Middle Content */}
                    <div>
                        <img
                            src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/bg4.jpg"
                            alt="Room"
                            className="rounded-md w-full object-cover h-64 md:h-80"
                        />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Broadband Internet</h2>
                        <p className="text-gray-700 mb-4">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy</p>
                        <blockquote className="border-l-4 border-yellow-700 pl-4 italic text-gray-600 mb-6">Lorem Ipsum is simply free text not dummy available typesetting industry been the industry standard Lorem ipsum is simply free text</blockquote>
                        <div className="relative">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {getDisplayedImages().map((src, idx) => (
                                    <img key={idx} src={src} alt={`Slide ${idx}`} className="w-full rounded-md object-cover h-40" />
                                ))}
                            </div>
                            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"><FaArrowLeft /></button>
                            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"><FaArrowRight /></button>
                        </div>
                        <p className="text-gray-700 mb-4">It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum take a look at our round. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <div className="flex gap-4 mt-4">
                            <img
                                src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/bg1-1-672x448.jpg"
                                alt="Interior 3"
                                className="rounded-md object-cover h-24 w-24"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Services overview
                                </h3>
                                <p className="text-gray-700 mb-2">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum.
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Praesent efficitur quam sit amet</li>
                                    <li>Nunc cursus dolor id purus euismod</li>
                                    <li>Quisque tincidunt eros ac placea</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Right Accordion FAQs */}
                    <div className="space-y-3">
                        {FAQ_ITEM.map((faq, index) => (
                            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
