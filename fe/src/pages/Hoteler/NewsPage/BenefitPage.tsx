import { BiSolidPackage } from "react-icons/bi";
import {FaFolder} from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
export default function BenefitPage() {
    const comments = [
        {
            id: 1,
            name: 'Steven',
            date: 'January 29, 2023 at 11:48 am',
            avatar:
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
            content:
                'Phasellus non dignissim purus, eu scelerisque diam. Donec vel amet lectus nulla. Etiam quis erat purus in justo pulvinar pretium. Aliquam in nulla nulla, nulla laoreet malesuada urna.',
            reply: true,
        },
        {
            id: 2,
            name: 'Steven',
            date: 'January 29, 2023 at 11:50 am',
            avatar:
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
            content:
                'Aliquam quis purus quis in justo pulvinar tempus. Aliquam efficitur nulla, mattis sodales erat mattis sodales.',
            reply: false,
        },
    ];
    const newsItems = [
        {
            title: "We Offering Online Registration At Your Hotel",
            date: "January 12, 2025",
            avatar: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/blog1-300x300.jpg"
        },
        {
            title: "Retore Lighting Design In The Hotel",
            date: "January 26, 2025",
            avatar: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/blog1-150x150.jpg"
        },
        {
            title: "Restoring The Lighting Design In The Hotel",
            date: "January 12, 2025",
            avatar: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/blog3-150x150.jpg"
        },
    ];
    const newsItemsInform = [
        { title: "Luxury Hotel Opens in Havana Amid Economic Challenges", date: "January 26, 2025", author: "SWEEM", comments: 2 },
        { title: "Shift Towards Alcohol-Free Experiences in Hotels", date: "January 26, 2025", author: "SWEEM", comments: 2 },
        { title: "Rising Costs Impacting UK Hotel Prices", date: "January 26, 2025", author: "SWEEM", comments: 2 }
    ];
    const categories = [
        "Digital Nomad",
        "Popular Places",
        "Spa & Wellness",
        "Tips & Tricks"
    ];
    const commentNew = [
        { user: "sweem", text: "on Benefit from a 15% discount reservations" },
        { user: "sweem", text: "on Benefit from a 15% discount reservations" },
    ];
    return (
        <div>
            <div
                className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/page-title-bg.jpg')",
                }}
            >
                <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0"/>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl font-semibold">Benefit from a 15% discount reservations</h1>
                    <div className="mt-4 text-sm flex justify-center items-center gap-2">
                        <span className="text-white/70">Home</span>
                        <span className="text-white font-semibold">› Benefit from a 15% discount reservations</span>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="lg:flex lg:space-x-12">
                    {/* Main content */}
                    <main className="flex-1 space-y-8">
                        {/* Top image */}
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/bg4-1024x683.jpg"
                                alt="Luxury Hotel Room"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                        {/* Article Content */}
                        <h1 className="font-bold">How to Find the Right Hotel</h1>
                        <article className="prose max-w-none">
                            <p>
                                This overview is here for our full government relations officers and
                                the health preparation and submission team provided. We will
                                prepare and submit your application to our HR and licensing bureau
                                if receiving the sponsoring licence number. However, this process
                                cannot be guaranteed and is subject to licensing. Consulting
                                services, providing advice on licencing.
                            </p>
                            <p>
                                UK hotels are experiencing increased operating costs due to issues
                                in staffing, including rises in employees’ national insurance
                                contributions and the recent living wage. These changes, of Travel
                                Team Agents are required in a rapidly evolving impact hotel
                                operators, with unions fact-finding meetings prior to seasons of
                                recent DHC. While the Luxury standard might absorb those issues,
                                mid-range hotels may struggle, potentially leading to reduced
                                services and job losses.
                            </p>
                            <p>
                                In 2025, The British Hotel industry saw a renewed surge in direct
                                trips, with 58 requested by clients typically Travel, driving
                                innovation in UK hotels in 2017, revenue from 2021. A similar
                                received the BET of the solution, with a significant sales worth
                                on ADRs. Potential hotel profit fell to an increase Capital of
                                173,000 million, at luxury but oil segments in London, including
                                the Mandarin Oriental Hyde park and Park Hyatt, Lanesboro Reserved.
                            </p>
                            {/* Inner Images */}
                            <div className="flex flex-col sm:flex-row sm:space-x-4 my-8 w-2/4">
                                <img
                                    src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/gym2.jpg"
                                    alt="Hotel Lobby"
                                    className="rounded-lg shadow-lg mb-4 sm:mb-0 sm:flex-1 object-cover"
                                    loading="lazy"
                                />
                                <img
                                    src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-5-1024x683.jpg"
                                    alt="Hotel Bar"
                                    className="rounded-lg shadow-lg sm:flex-1 object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <p>
                                Phasellus non dignissim purus, eu scelerisque diam. Donec vel amet
                                lectus nulla. Etiam quis erat purus in justo pulvinar pretium.
                                Aliquam in nulla nulla, nulla laoreet malesuada urna. Tempus vel
                                arcu at, cursus at faucibus. Quisque sit amet leo risus, in amet
                                leo varius eros. Phasellus vel sem eget augue ornare maximus.
                                Pellentesque habitant.
                            </p>
                            {/* Latest News More Info */}
                            <section className="mt-12">
                                    <h3 className="text-2xl font-bold mb-4">Latest News more Information</h3>
                                    <ul className="list-disc list-inside">
                                        {newsItemsInform.map((item, index) => (
                                            <li key={index} className="flex items-center mb-2">
                                                <span className="material-icons text-gray-600 mr-2"><BiSolidPackage /></span>
                                                <span className="font-semibold">{item.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-4 text-sm text-gray-500 flex items-center">
                                        <div className="flex items-center">
                                            <span><FaUserCircle/></span>
                                            <span className="ml-1">By {newsItemsInform[0].author}</span>
                                        </div>
                                        <div className="flex items-center ml-3">
                                            <span><FaCalendar/></span>
                                            <span className="ml-1 justify-center">{newsItemsInform[0].date}</span>
                                        </div>
                                        <div className="flex items-center ml-3">
                                            <span><FaComment/></span>
                                            <span className="ml-1 justify-center">{newsItemsInform[0].comments} Comments</span>
                                        </div>
                                    </div>
                            </section>
                            {/* Meta and Tags */}
                            <section className="mt-10 border-t border-gray-300 pt-6">
                                <div className="flex flex-wrap sm:items-center sm:space-x-4 text-sm text-gray-600">
                                    <span>Posted in:</span>
                                    <span
                                        className="inline-block bg-yellow-300 text-yellow-900 px-3 py-1 rounded-full font-medium">Top Hotels
                                    </span>
                                </div>
                                <div className="flex flex-wrap mt-3 space-x-3 text-sm text-gray-600">
                                    <span className="font-semibold">Tags:</span>
                                    <span>Travel</span>
                                    <span>Tourism</span>
                                </div>
                            </section>
                            {/* Comments Section */}
                            <section className="mt-16">
                                <h3 className="text-xl font-semibold mb-6">2 Comments</h3>
                                <div className="space-y-6">
                                    {comments.map(({id, name, date, avatar, content, reply}) => (
                                        <div
                                            key={id}
                                            className={`p-5 rounded-lg bg-white shadow-md border ${
                                                reply ? 'border-yellow-400 ml-12 sm:ml-20' : 'border-gray-300'
                                            }`}
                                        >
                                            <div className="flex items-center space-x-4 mb-3">
                                                <img
                                                    src={avatar}
                                                    alt={`${name} avatar`}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                    loading="lazy"
                                                />
                                                <div>
                                                    <p className="font-semibold">{name}</p>
                                                    <p className="text-sm text-gray-500">{date}</p>
                                                </div>
                                            </div>
                                            <p className="mb-3 text-gray-700">{content}</p>
                                            <button
                                                type="button"
                                                className="bg-yellow-400 text-yellow-900 rounded-full px-4 py-1 text-xs font-semibold uppercase hover:bg-yellow-500"
                                            >
                                                Reply
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                            {/* Leave a Comment */}
                            <section className="mt-16">
                                <h3 className="text-xl font-semibold mb-6">Leave A Comment</h3>
                                <form className="space-y-6">
                  <textarea
                      className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                      rows="5"
                      placeholder="Write your comment here..."
                      required
                      aria-label="Write your comment here"
                  ></textarea>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <input
                                            type="text"
                                            className="rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                            placeholder="Name"
                                            required
                                            aria-label="Your name"
                                        />
                                        <input
                                            type="email"
                                            className="rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                            placeholder="Email"
                                            required
                                            aria-label="Your email"
                                        />
                                        <input
                                            type="url"
                                            className="rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                                            placeholder="Website"
                                            aria-label="Your website"
                                        />
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <input
                                            type="checkbox"
                                            id="saveInfo"
                                            aria-label="Save my name, email, and website in this browser for the next time I comment"
                                        />
                                        <label htmlFor="saveInfo">
                                            Save my name, email, and website in this browser for the next time I
                                            comment.
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-yellow-400 text-yellow-900 font-semibold px-6 py-3 rounded-md hover:bg-yellow-500"
                                    >
                                        Post Comment
                                    </button>
                                </form>
                            </section>
                        </article>
                    </main>
                    {/* Sidebar */}
                    <aside className="w-full lg:w-80 mt-12 lg:mt-0 space-y-10">
                        {/* Search */}
                        <div>
                            <label htmlFor="search" className="sr-only">
                                Search
                            </label>
                            <div className="flex rounded-md overflow-hidden border border-gray-300">
                                <input
                                    id="search"
                                    type="text"
                                    placeholder="Search here"
                                    className="flex-grow p-2 focus:outline-none"
                                    aria-label="Search here"
                                />
                                <button
                                    className="bg-yellow-400 px-4 flex items-center justify-center text-yellow-900 hover:bg-yellow-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* Latest News */}
                        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs mx-auto">
                            <h4 className="text-lg font-semibold mb-4">Latest News</h4>
                            <div className="border-t border-gray-300 mb-4"></div>
                            <ul className="space-y-5 text-gray-700">
                                {newsItems.map(({title, date, avatar}, i) => (
                                    <a href="">
                                        <li key={i} className="flex items-center space-x-4">
                                            <img
                                                src={avatar}
                                                alt="News avatar"
                                                className="rounded-full object-cover"
                                                loading="lazy"
                                                width="75"
                                                height="75"
                                            />
                                            <div>
                                                <p className="font-semibold hover:text-[#aa8453]">{title}</p>
                                                <p className="text-xs text-gray-500">{date}</p>
                                            </div>
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                        {/* Categories */}
                        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs mx-auto">
                            <h4 className="text-lg font-semibold mb-4">Categories</h4>
                            <div className="border-t border-gray-300 mb-4"></div>
                            <ul className="space-y-2 text-gray-700">
                                {categories.map(
                                    (category, i) => (
                                        <li
                                            key={i}
                                            className="cursor-pointer hover:text-[#aa8453] transition-colors flex items-center mb-2"
                                        >
                                            <span className="material-icons text-gray-600 mr-2"><FaFolder/></span>
                                            <span> {category}</span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                        {/* Tags */}
                        <div className="bg-white p-6 rounded-lg shadow-md max-w-xs mx-auto">
                            <h4 className="text-lg font-semibold mb-4">Tags</h4>
                            <div className="border-t border-gray-300 mb-4"></div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Booking',
                                    'Travel',
                                    'Normal',
                                    'Promotional',
                                    'Tours',
                                    'Resort',
                                ].map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-200 text-gray-700 text-xs font-semibold rounded-full px-3 py-1 cursor-pointer hover:bg-yellow-400 hover:text-yellow-900 transition-colors"
                                    >{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Recent Comments */}
                        <div className="max-w-md mx-auto my-8 p-6 bg-white border rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Recent Comments</h2>
                            <div className="border-t border-gray-300 mb-4"></div>
                            {commentNew.map((comment, index) => (
                                <div key={index} className="flex items-start mb-4 justify-center">
                                    <span><FaRegComments/></span>
                                    <div className="ml-1">
                                        <span className="font-bold ml-1 w-fit">{comment.user}<span className="font-normal text-gray-600 ml-1">{comment.text}</span></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}