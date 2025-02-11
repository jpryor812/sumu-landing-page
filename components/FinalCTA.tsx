import Image from 'next/image';
import QuestionButton from './QuestionButton';
import { WaitlistButton } from './WaitlistButton';

export default function FinalCTA (){
    return(
        <div className = "flex flex-col">
            <div className = "pt-24 text-3xl text-white text-center px-6 sm:px-24">
                <p>Lock in Your Spot on the Lowest-Fee Highest-Reward Creator Platform and Earn More Alongside Incredible Creators</p>
            </div>
            <div className= "pt-4 pb-2 flex flex-row justify-center items-center gap-4 md:gap-12">
            <div className="relative w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] mx-auto border-4 border-gray-500 rounded-full flex items-center justify-center">
                <div className="relative w-[110px] h-[110px] md:w-[170px] md:h-[170px] lg:w-[210px] lg:h-[210px] mx-auto border-2 border-black rounded-full flex items-center justify-center bg-black">
                    <Image
                        src="/Sumu-logo-vert.png"
                        alt="Sumu Logo"
                        width={200}
                        height={200}
                        className="logo-image absolute w-[100px] h-[100px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px]"  
                    />
                </div>
            </div>
                <div className="flex items-center justify-center bg-[#4040FF] text-white font-semibold py-2 sm:py-4 text-center text-md md:text-3xl rounded-3xl mx-auto"> {/* Added wrapper div */}
                    <WaitlistButton />
                </div>
                <div className="relative w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] mx-auto border-4 border-gray-500 rounded-full flex items-center justify-center">
                <div className="relative w-[110px] h-[110px] md:w-[170px] md:h-[170px] lg:w-[210px] lg:h-[210px] mx-auto border-2 border-black rounded-full flex items-center justify-center bg-black">
                    <Image
                        src="/Sumu-logo-vert.png"
                        alt="Sumu Logo"
                        width={200}
                        height={200}
                        className="logo-image absolute w-[100px] h-[100px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px]"  
                    />
                </div>
            </div>
            </div>
            <div className = "text-center text-xl font-semibold text-white pt-2 pb-2">
                <p>Actually... I have a question</p>
            </div>
            <div className = "bg-white text-black justify-center mx-auto text-center text-md font-semibold rounded-2xl max-w-xs">
                        <QuestionButton/>   
            </div>
            <div className="flex justify-center py-8"> {/* Added container for centering */}
                <Image
                    src="/Sumu-logo.png"
                    alt="Sumu Logo"
                    width={240}
                    height={240}
                    className="" // Changed from w-min-full to w-auto
                />
            </div>
        </div>
        
    );
}