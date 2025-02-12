import QuestionButton from '@/components/QuestionButton';
import { WaitlistButton } from '@/components/WaitlistButton';
import Image from 'next/image';

export default function SumuExplained() {
    return (

        <div className="relative flex flex-col items-center">
        {/* Top Image */}
        <div className="w-full flex justify-center mb-8">
        <div className="relative w-[100px] h-[100px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] mx-auto border-4 border-gray-500 rounded-full flex items-center justify-center">
                <div className="relative w-[90px] h-[90px] md:w-[170px] md:h-[170px] lg:w-[210px] lg:h-[210px] mx-auto border-2 border-black rounded-full flex items-center justify-center bg-black">
                    <Image
                        src="/Sumu-logo-vert.png"
                        alt="Sumu Logo"
                        width={200}
                        height={200}
                        className="logo-image absolute w-[80px] h-[80px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px]"  
                    />
                </div>
            </div>
            </div>


        <div className="text-white space-y-6 max-w-4xl sm:px-2 px-16"> {/* space-y-6 adds vertical spacing between paragraphs */}
            <p className="text-lg">
                Every month, the fastest-growing creators on Sumu will be rewarded for their growth. Now, creators can choose to receive USDC for their reward, be rewarded in $SUMU, or a combination of both. $SUMU represents ownership in Sumu, a private, for-profit Nevada-C Corp. $SUMU will not be tradable until a major liquidity event, such as a large purchase of $SUMU by VC firm, an ICO or IPO, or a full sale of the company. There is no guarantee that $SUMU will ever be worth anything, and its initial price will be nominal. Though, like an early-stage startup investment, should Sumu grow and become a successful company, you could receive a significant financial outcome by being an early adopter. Therefore, you should consider $SUMU an investment in Sumu, the company, at the expense of the USDC you would otherwise have received as bonus reward payments.
            </p>

            <p className="text-lg">
                Initially, $SUMU will have no price associated with it. You will receive a certain amount of tokens in place of USDC, but receiving 1,000 $SUMU instead of 100 $USDC does not mean one $SUMU is worth $0.10. As a reminder, $SUMU will not have any monetary value until a major investment event. Should a future investor invest $1,000,000 by purchasing 10,000,000 $SUMU in a private transaction, your $SUMU would then be worth $0.10 each, at which point you would have the opportunity to sell or continue to hold your $SUMU. Should an investor purchase 10,000,000 $SUMU by paying $10,000,000, then each $SUMU would be worth $1.00, at which point you would have another opportunity to sell or continue holding.
            </p>

            <p className="text-lg">
                To further compensate you for your belief in our platform, $SUMU holders will receive a quarterly dividend of bonus $SUMU, the amount of which will be dependent on how much $SUMU you hold at that moment, with larger holders receiving more. This holding agreement is otherwise known as staking.
            </p>

            <p className="text-lg">
                I hope you consider the opportunity to accept all or at least some of your monthly rewards in $SUMU. As I said, I want creators within the community to feel a part of a collective pursuit in helping build an incredible platform that creators and fans love. By owning $SUMU, I believe you will feel that ownership more while receiving the opportunity for significant financial outcomes, just as anyone on the actual Sumu team would feel, should the platform become successful. That being said, I will be perfectly content should you choose to accept all your rewards in USDC and none in $SUMU—whatever makes you happier for being on our platform.
            </p>

            <p className="text-lg">
                Our collective success is in each of your hands. Grow your channel, refer your friends, and $SUMU will have an increasing chance of being successful. I hope you choose to be an owner alongside me!
            </p>

            <p className="text-lg">
                If you have any questions, feel free to send me an email, and I will get back to you quickly.
            </p>
        </div>

             <div className= "pt-6 mb-4 px-16 sm:px-2">
                <div className= "bg-[#4040FF] text-white font-semibold text-center text-xl sm:text-2xl md:text-3xl rounded-3xl mx-auto sm:py-4 sm:px-2 py-2 max-w-xs">
                    <WaitlistButton />
                </div>
            </div>
            <div className = "bg-white text-black justify-center mx-auto text-center text-md font-semibold rounded-2xl max-w-xs">
                        <QuestionButton />   
            </div>

        <div className="w-full flex justify-center mt-8">
        <div className="relative w-[100px] h-[100px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] mx-auto border-4 border-gray-500 rounded-full flex items-center justify-center">
                <div className="relative w-[90px] h-[90px] md:w-[170px] md:h-[170px] lg:w-[210px] lg:h-[210px] mx-auto border-2 border-black rounded-full flex items-center justify-center bg-black">
                    <Image
                        src="/Sumu-logo-vert.png"
                        alt="Sumu Logo"
                        width={200}
                        height={200}
                        className="logo-image absolute w-[80px] h-[80px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px]"  
                    />
                </div>
            </div>
            </div>
        </div>
    );
}