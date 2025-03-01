import QuestionButton from '@/components/QuestionButton';
import { WaitlistButton } from '@/components/WaitlistButton';
import Image from 'next/image';
import Link from 'next/link'

export default function SumuExplained() {
    return (

        <div>
        <div className="flex justify-start items-end px-6 sm:px-8 md:px-12 lg:px-16 mt-4 sm:mt-8">
            <Link href="/">
                <Image
                    src="/Sumu-logo.png"
                    alt="Sumu Logo"
                    width={360}
                    height={360}
                    className="w-[60px] sm:w-[80px]" 
                />
            </Link>
        </div>
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


        <div className="text-white space-y-6 max-w-4xl sm:px-2 px-16">
            <p className="text-lg font-bold mb-8">
                Please read the following to understand how you will receive $SUMU, how it is valued, and how you can exchange it for real monetary value at a future event. This is by no means a binding agreement, but more of a plan of what we intend to do.
            </p>

            <p className="text-lg font-bold">But first…</p>

            <p className="text-lg">
                I hope you're excited about this opportunity to own a stake in the platform you're helping to build as I am. For some reason, startups don't make their users owners, when in most cases, much like is the case with Sumu, our platform would be nothing without its users. Therefore, to make you as loyal to Sumu as we are, we should treat you as owners and let you experience the upside for you contribution. Your earnings from fans or USDC rewards from us would not be enough to thank you for your early adoption in our platform. Equity, with its massive upside, is that way to thank you.
            </p>

            <p className="text-lg">
                We want to beat Patreon, and we can only do so if you make excellent content for your fans, work hard to grow, invite your creator friends, and stay with us for the long haul. If we do beat Patreon, it's reasonable to assume Sumu would have at least a $1,500,000,000 valuation, the last publicly disclosed valuation of Patreon as of this writing. If we do, there's a chance that hundreds of creators earn at least six figures worth of equity and thousands earn at least five figures. The earlier you join and build your brand, the better your chance to reach that millionaire potential on Sumu.
            </p>

            <p className="text-lg">
                For example, we plan to distribute about 0.05% of $SUMU per month, for about 0.6% total per year. If you are an early creator who contributes meaningfully to the platform early on and stays for many years, you have a reasonable chance to accrue at least 0.02% in Sumu. At a $1,500,000,000 valuation, your stake would be worth $300,000. Of course, we hope to blow past that valuation.
            </p>

            <p className="text-lg font-bold text-center my-8">
                LET'S MAKE IT HAPPEN!
            </p>

            <h2 className="text-2xl font-bold mb-4">Understanding $SUMU and Your Ownership in Sumu</h2>
            
            <h3 className="text-xl font-bold">What is $SUMU?</h3>
            <p className="text-lg">
                $SUMU is a virtual token that represents an ownership interest in Sumu, a private, for‑profit Nevada C‑Corporation. In simple terms, holding $SUMU gives you a stake in our company—much like owning shares in a traditional business. However, please note that $SUMU is currently a virtual currency and is not traded on public exchanges. Its value is nominal until a future liquidity event (such as a private investor round, like an investment from a venture capital firm, or an IPO) sets a market-based conversion price.
            </p>

            <h3 className="text-xl font-bold">How Does $SUMU Work?</h3>
            <h4 className="text-lg font-bold">How to Get $SUMU:</h4>
            <p className="text-lg">
                Each month, as part of our commitment to rewarding creators for growth, you will receive a certain amount of $SUMU directly related to how much revenue you contribute to the overall revenue of Sumu. $SUMU is treated as closely as possible to our private company stock. Creators become eligible to earn $SUMU at the beginning of their first full month on the platform. So, if you join March 28th or March 2nd, you'll have to wait until April 1st to begin earning rewards, as we will reward you for your full month contribution to the platform.
            </p>

            <h4 className="text-lg font-bold">Valuation and Conversion:</h4>
            <p className="text-lg">
                At the time of distribution, $SUMU is assigned a nominal value (for example, $0.01 per token or another rate determined at that time) purely for internal accounting and reward purposes. This initial value does not guarantee that $SUMU will always trade at that price. Instead, when a significant liquidity event occurs—such as when a venture capital firm invests in us or if we go public—the conversion price will be established based on that event's valuation.
            </p>

            <h3 className="text-xl font-bold">Important Disclosures</h3>
            <h4 className="text-lg font-bold">No Guaranteed Value:</h4>
            <p className="text-lg">
                The current nominal value of $SUMU is set solely for the purpose of facilitating our reward program. There is no guarantee that $SUMU will maintain that value, or that it will ever have a liquid market price. Its actual value will be determined only when an external liquidity event occurs.
            </p>

            <h4 className="text-lg font-bold">Risk Factors:</h4>
            <p className="text-lg">
                Investing in $SUMU means you are taking on the same risks as any early-stage equity investment. There is a risk that the company may not grow as expected, and as a result, the eventual conversion value of your $SUMU tokens may be less than anticipated.
            </p>

            <p className="text-lg mt-8">
                If you have any questions about how $SUMU works or what it means for your ownership in Sumu, please contact us at justin@getsumu.xyz.
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
        </div>
    );
}