import Image from 'next/image';
import { WaitlistButton } from '@/components/WaitlistButton';
import QuestionButton from './QuestionButton';
import Link from 'next/link';

export default function MainPage() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col animate-fade-in">
                {/* Navigation Bar */}
                <div className="flex flex-row items-center justify-between px-4 py-4 sm:px-12 md:px-18 lg:px-24">
                    {/* Left side links */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10">
                        <Link 
                            href="/SumuExplained" 
                            className="text-gray-100 font-semibold underline hover:text-blue-600 transition-colors cursor-pointer text-sm md:text-base"
                        >
                            What is $SUMU?
                        </Link>
                        <Link 
                            href="/blog" 
                            className="text-gray-100 font-semibold underline hover:text-blue-600 transition-colors cursor-pointer text-sm md:text-base"
                        >
                            Blog
                        </Link>
                    </div>
                    
                    {/* Right side question button */}
                    <div className="flex flex-col w-1/3 sm:w-auto">
                        <QuestionButton />
                        <div className="text-center text-white text-xs">
                            <p>Typical Response Time: 30 minutes</p>
                        </div>
                    </div>
                </div>

                {/* Logo */}
                <div className="flex justify-center pb-2 sm:py-4">
                    <Image
                        src="/Sumu-logo.png"
                        alt="Sumu Logo"
                        width={360}
                        height={360}
                        className="w-[240px] sm:w-[360px]" 
                    />
                </div>

                {/* Main Headings */}
                <div className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl pb-8 px-6 text-white font-semibold text-center">
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

                {/* Waitlist Button */}
                <div className="pt-6 pb-4 px-16 sm:px-2">
                    <div className="bg-[#4040FF] text-white font-semibold text-center text-xl sm:text-2xl md:text-3xl rounded-3xl mx-auto sm:py-4 sm:px-2 py-2 max-w-xs slideIn">
                        <WaitlistButton />
                    </div>
                </div>

                {/* Footer Text */}
                <div className="text-md text-white text-center pb-1 px-4 sm:px-24 md:px-48 lg:px-64 animate-fade-in">
                    <p>Sign up to lock-in your industry-low 4.9% platform fee and be the first to receive $SUMU</p>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl mt-4 font-semibold text-white text-center pb-8 sm:px-24 md:px-48 lg:px-64 animate-fade-in">
                    <p>So How Does It Work??? 👇</p>
                </div>
            </div>
        </div>
    );
}