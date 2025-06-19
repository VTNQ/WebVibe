import CountUp from 'react-countup';

interface StatisticCounterProps {
  number: number;
  label: string;
}

const StatisticCounter: React.FC<StatisticCounterProps> = ({ number, label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl font-light text-[#d6c7b4]">
        <CountUp end={number} duration={2.5} />
      </div>
      <div className="text-sm sm:text-base md:text-lg text-gray-700 uppercase tracking-wide mt-2">
        {label}
      </div>
    </div>
  );
};

export default StatisticCounter;
