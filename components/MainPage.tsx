import Image from 'next/image';

export default function MainPage() {
    return (
    <div className = "flex flex-col">
        <div className="flex justify-between items-center w-full px-4 sm:px-12 md:px-18 lg:px-24 py-4">

            <div className="text-white text-md font-semibold underline">
            <p>What is $SUMU?</p>
                </div>
                    <div className = "p-3 bg-white text-black text-md font-semibold rounded-2xl">
                        <button>Ask Us a Question</button>    
                    </div>
                </div>
            <div className="flex justify-center py-4"> {/* Added container for centering */}
                <Image
                    src="/Sumu-logo.png"
                    alt="Sumu Logo"
                    width={360}
                    height={360}
                    className="" // Changed from w-min-full to w-auto
                />
            </div>
            <div className = "text-6xl pb-8 text-white font-semibold text-center">
                <p>Create Together, Grow Together</p>
            </div>
            <div className="text-3xl text-white font-semibold text-center sm:px-24 md:px-48 lg:px-64">
                <p>
                    The first creator platform where{' '}
                    <span className="green-text">every</span>
                    {' '}creator is rewarded for the success of{' '}
                    <span className="green-text">all</span>
                    {' '}creators
                </p>
            </div>
            <div className= "pt-8 pb-4">
                <div className= "bg-[#4040FF] text-white font-semibold text-center text-3xl rounded-3xl mx-auto py-4 px-2 max-w-xs">
                    <button>Join The Waitlist</button>
                </div>
            </div>
            <div className = "text-md text-white text-center pb-1 sm: px-24 md:px-48 lg:px-64">
                <p>Sign up to lock-in your industry-low 4.9% platform fee and be the first to receive $SUMU</p>
            </div>
            <div className = "text-md text-white text-center pb-8 sm: px-24 md:px-48 lg:px-64">
                <p>More information below 👇</p>
            </div>
    </div>

    );
}