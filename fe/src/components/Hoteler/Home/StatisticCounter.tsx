import CountUp from 'react-countup';
interface StatisticCounterProps{
    number:number;
    label:string;
}
const StatisticCounter:React.FC<StatisticCounterProps>=({number,label})=>{
    return(
        <div className="text-center px-6">
            <div className="text-6xl font-light text-[#d6c7b4]">
                <CountUp end={number} duration={2.5}/>
            </div>
            <div className='text-lg text-gray-700 uppercase tracking-wide mt-2'>{label}</div>
        </div>
    )
}
export default StatisticCounter;