import {
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 pt-20 pb-6 px-4 font-basier">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                {/* Logo + Stats */}
                <div>
                    <h2 className="text-white text-2xl font-bold mb-3">WebVibe</h2>
                    <div>
                        <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            1,000,000+
                        </span>
                        <p className="text-xs mt-2">Websites designed and counting!</p>
                    </div>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="text-white font-semibold text-base mb-2">Support</h3>
                    <ul className="space-y-1 text-sm">
                        {["Help Center", "Avada Studio", "Prebuilt Websites", "Reviews", "Submit A Ticket"].map((item, index) => (
                            <li key={index} className="hover:text-green-500 cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-white font-semibold text-base mb-2">Company</h3>
                    <ul className="space-y-1 text-sm">
                        {["About Us", "Careers", "Support Policy", "Terms And Conditions", "Privacy Policy"].map((item, index) => (
                            <li key={index} className="hover:text-green-500 cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-semibold text-base mb-2">
                        Subscribe to our newsletter
                    </h3>
                    <p className="text-sm mb-3">Get the latest news and updates right in your inbox.</p>
                    <form className="flex flex-col md:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Your email *"
                            className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                        />
                        <button
                            type="submit"
                            className="bg-[#282828] hover:bg-green-500 text-white px-5 py-2 rounded-md transition duration-200"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                <p className="text-center md:text-left">
                    © 2024 – 2025 | WebVibe Website Builder by {"WebVibe company"}

                </p>
                <div className="flex gap-4 text-white text-lg">
                    <FaFacebookF className="hover:text-green-500 cursor-pointer" />
                    <FaXTwitter className="hover:text-green-500 cursor-pointer" />
                    <FaInstagram className="hover:text-green-500 cursor-pointer" />
                    <FaYoutube className="hover:text-green-500 cursor-pointer" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
