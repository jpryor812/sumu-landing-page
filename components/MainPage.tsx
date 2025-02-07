import Image from 'next/image';

export default function MainPage() {
    return (
    <div className = "flex flex-col">
        <div className="flex flex-row justify-between align py-4 sm:px-4 md:px-5 lg:px-6 2xl:px-8">
                    {/*header container*/}
                    {/*left header*/}

            <div className ="flex flex-row font-medium text-white text-md underline space-between px-24">
                <div className ="text-white text-sm">
                    <p>What is $SUMU?</p>
                </div>
                <div className = "flex flex-col">
                    <p>Questions?</p>
                    <div className = "p-2 bg-white text-black text-sm font-semibold">
                        <button>Reach Out!</button>    
                    </div>  
                </div>
            </div>
        </div>
            <div className="flex justify-center"> {/* Added container for centering */}
                <Image
                    src="/Sumu-logo.png"
                    alt="Sumu Logo"
                    width={360}
                    height={360}
                    className="" // Changed from w-min-full to w-auto
                />
            </div>
            <div className = "text-6xl text-white font-semibold text-center">
                <p>Create Together, Grow Together</p>
            </div>

            <div className= "py-8">
                <div className= "bg-[#4040FF] text-white font-semibold text-center text-3xl rounded-3xl mx-auto py-4 px-2 max-w-xs">
                    <button>Join The Waitlist</button>
                </div>
            </div>
            <div className = "text-2xl text-white font-semibold text-center px-32">
                <p>The first creator platform where every creator is rewarded for the success of all creators</p>
            </div>
    </div>

    );
}