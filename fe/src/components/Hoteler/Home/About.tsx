import ContactForm from "./ContactForm";
import StatisticCounter from "./StatisticCounter"

const About = () => {
    return (
        <div className="bg-white py-16 px-8">
            <div className="text-center mb-10">
                <h2 className="uppercase text-sm text-gray-500 tracking-widest">HOEXR HOTEL TEAM</h2>
                <h1 className="text-4xl font-serif text-gray-800 mt-2">Expert Team Persons</h1>
            </div>
            <div className="flex justify-center gap-16 mb-20">
                <StatisticCounter number={20} label="Projects" />
                <StatisticCounter number={35} label="People" />
                <StatisticCounter number={40} label="Years" />
                <StatisticCounter number={30} label="Award Winner" />
            </div>
            <ContactForm/>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {[
                    { name: 'Michael Dean', role: 'Office Manager', img: '/team1.jpg' },
                    { name: 'Frank Burton', role: 'Reservation Agent', img: '/team2.jpg' },
                    { name: 'Mya Mullins', role: 'Night Auditor', img: '/team3.jpg' },
                    { name: 'Ralph Nguyen', role: 'Guest Relations Officer', img: '/team4.jpg' },
                ].map((member, idx) => (
                    <div key={idx} className="text-center border p-4 hover:shadow-lg transition">
                        <img src={member.img} alt={member.name} className="w-full h-72 object-cover mb-4" />
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default About;