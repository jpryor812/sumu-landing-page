import Image from 'next/image';
import { WaitlistButton } from '@/components/WaitlistButton';
import QuestionButton from './QuestionButton';
import { motion } from 'framer-motion';


export default function MainPage() {
    return (
    <div className = "flex flex-col">
    <div className = "flex flex-col animate-fade-in">
        <div className="flex justify-end items-center w-full pr-2 pl-56 sm:px-12 md:px-18 lg:px-24 py-4">
                    <div className = "flex flex-col">
                    <QuestionButton />
                    <div className = "text-center text-white text-xs">
                        <p>Typical Response Time: 30 minutes</p>
                    </div>
                    </div>
                </div>
            <div className="flex justify-center pb-2 sm:py-4"> {/* Added container for centering */}
                <Image
                    src="/Sumu-logo.png"
                    alt="Sumu Logo"
                    width={360}
                    height={360}
                    className="w-[240px] sm:w-[360px]" 
                />
            </div>
            <div className = "text-4xl sm:text-4xl md:text-5xl lg:text-6xl pb-8 px-6 text-white font-semibold text-center">
                <p>Create Together, Grow Together</p>
            </div>
            <div className="text-2xl sm:text-3xl text-white font-semibold text-center px-2 sm:px-24 md:px-48 lg:px-64">
                <p>
                    The first creator platform where{' '}
                    <span className="green-text">every</span>
                    {' '}creator is rewarded for the success of{' '}
                    <span className="green-text">all</span>
                    {' '}creators
                </p>
            </div>
            </div>
            <div className= "pt-6 pb-4 px-16 sm:px-2">
                <div className= "bg-[#4040FF] text-white font-semibold text-center text-xl sm:text-2xl md:text-3xl rounded-3xl mx-auto sm:py-4 sm:px-2 py-2 max-w-xs slideIn">
                    <WaitlistButton />
                </div>
            </div>
            <div className = "text-md text-white text-center pb-1 px-4 sm:px-24 md:px-48 lg:px-64 animate-fade-in">
                <p>Sign up to lock-in your industry-low 4.9% platform fee and be the first to receive $SUMU</p>
            </div>
            <div className = "text-md text-white text-center pb-8 sm:px-24 md:px-48 lg:px-64 animate-fade-in">
                <p>More information below 👇</p>
            </div>
    </div>

    );
}