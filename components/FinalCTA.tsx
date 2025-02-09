import Image from 'next/image';
import CTAButton from './CTAButton';
import QuestionButton from './QuestionButton';

export default function FinalCTA (){
    return(
        <div className = "flex flex-col">
            <div className = "pt-24 text-3xl text-white text-center px-24">
                <p>Lock in Your Spot on the Lowest-Fee Highest-Reward Creator Platform and Earn More Alongside Incredible Creators</p>
            </div>
            <div className= "pt-4 pb-2 flex flex-row gap-12">
            <div className="relative w-[220px] h-[220px] mx-auto border-4 border-gray-500 rounded-full flex items-center justify-center">
                <div className="relative w-[210px] h-[210px] mx-auto border-2 border-black rounded-full flex items-center justify-center bg-black">
                        <Image
                            src="/Sumu-logo-vert.png"
                            alt="Sumu Logo"
                            width={200}
                            height={200}
                            className="logo-image absolute"  
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center"> {/* Added wrapper div */}
                    <div className = "">
                    <CTAButton />
                    </div>
                </div>
                <div className="relative w-[220px] h-[220px] mx-auto border-4 border-gray-500 rounded-full flex items-center justify-center">
                <div className="relative w-[210px] h-[210px] mx-auto border-2 border-black rounded-full flex items-center justify-center bg-black">
                        <Image
                            src="/Sumu-logo-vert.png"
                            alt="Sumu Logo"
                            width={200}
                            height={200}
                            className="logo-image absolute"  
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