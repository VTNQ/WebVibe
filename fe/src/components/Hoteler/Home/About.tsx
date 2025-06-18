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
           
        </div>
    )
}
export default About;