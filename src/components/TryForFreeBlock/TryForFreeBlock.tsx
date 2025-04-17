import logo from '/plantin.svg';
import tryForFreeBack from '@/assets/tryForFreeBack.png';

export const TryForFreeBlock: React.FC = () => {
    return (
        <div className="col-span-12 my-8 bg-[#04BF9429] p-6 rounded-xl relative">
            <div className="flex gap-1 items-center">
                <img src={logo} alt="logo" />
                <p className="font-bold text-[1.5rem]">PlantIn</p>
            </div>
            <h3 className="mt-6 text-[1.5rem] md:text-[2rem] font-semibold text-[#04BF94]">
                Get unlimited access to exclusive articles
            </h3>
            <p className="mt-2 text-[1rem] md:text-[1.5rem]">Get rid of limits and read everything you wish</p>
            <button className="mt-4 bg-[#04BF94] text-white px-8 py-2 rounded-lg text-[1rem]">Try For Free</button>
            <img
                src={tryForFreeBack}
                alt="try for free"
                className="hidden md:block absolute bottom-0 right-0 w-[21rem] h-[16.313rem]"
            />
        </div>
    );
};
