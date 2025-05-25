import {
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 pt-32 pb-6 px-4 font-basier">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Logo + Stats */}
                <div>
                    <div className="text-white text-2xl font-bold mb-2">Avada</div>
                    <div className="text-sm">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            1,000,000+
                        </span>
                        <p className="text-xs mt-2">Websites designed and counting!</p>
                    </div>
                </div>

                {/* Help Links */}
                <div className="space-y-2 text-sm">
                    <p className="text-white text-base font-semibold mb-1">Support</p>
                    {["Help Center", "Avada Studio", "Prebuilt Websites", "Reviews", "Submit A Ticket"].map(
                        (item, i) => (
                            <p key={i} className="hover:text-green-500 cursor-pointer">
                                {item}
                            </p>
                        )
                    )}
                </div>

                {/* Company Links */}
                <div className="space-y-2 text-sm">
                    <p className="text-white text-base font-semibold mb-1">Company</p>
                    {["About Us", "Careers", "Support Policy", "Terms And Conditions", "Privacy Policy"].map(
                        (item, i) => (
                            <p key={i} className="hover:text-green-500 cursor-pointer">
                                {item}
                            </p>
                        )
                    )}
                </div>

                {/* Newsletter */}
                <div className="space-y-3 text-sm">
                    <p className="font-semibold text-white">
                        Sign up to our newsletter and get all the latest news and updates.
                    </p>
                    <div className="flex flex-col sm:flex-row w-full">
                        <input
                            type="email"
                            placeholder="Your email *"
                            className="flex-grow px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        />
                        <button className="mt-2 sm:mt-0 sm:ml-2 bg-[#282828] hover:bg-[#64BB7C] text-white px-5 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md font-medium transition duration-200">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
                <p className="text-center sm:text-left">
                    © 2012 – 2025 | Avada Website Builder by{" "}
                    <span className="text-blue-400">ThemeFusion</span> | Powered by{" "}
                    <span className="text-blue-400">WordPress</span>
                </p>
                <div className="flex gap-4 text-white text-lg justify-center sm:justify-end">
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
