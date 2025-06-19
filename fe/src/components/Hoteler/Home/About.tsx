import ContactForm from "./ContactForm";
import StatisticCounter from "./StatisticCounter";

const About = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="uppercase text-sm text-gray-500 tracking-widest">
          HOEXR HOTEL TEAM
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mt-2">
          Expert Team Persons
        </h1>
      </div>

      {/* Responsive grid for counters */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        <StatisticCounter number={20} label="Projects" />
        <StatisticCounter number={35} label="People" />
        <StatisticCounter number={40} label="Years" />
        <StatisticCounter number={30} label="Award Winner" />
      </div>

      <ContactForm />
    </div>
  );
};

export default About;
