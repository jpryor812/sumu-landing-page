import Image from 'next/image';

export default function FinalCTA (){
    return(
        <div className = "flex flex-col">
            <div className = "pt-8 text-3xl text-white text-center px-24">
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
                    <button className="bg-[#4040FF] text-white font-semibold text-3xl rounded-3xl px-8 py-3 hover:bg-[#3333EE] transition-colors">
                        Join The Waitlist
                    </button>
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
            <div className = "text-center text-xl text-white pt-2 pb-2">
                <p>Actually... I have a question</p>
            </div>
            <div className = "p-3 bg-white text-black justify-center mx-auto text-center text-md font-semibold rounded-2xl max-w-xs">
                        <button>Ask Us a Question</button>    
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