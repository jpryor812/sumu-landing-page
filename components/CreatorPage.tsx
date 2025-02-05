import Image from "next/image";
import CreatorPriceCardOne from "./CreatorPriceCardOne";
import CreatorPriceCardTwo from "./CreatorPriceCardTwo";

export default function CreatorPage() {
    return(
      <div className ="flex justify-center py-12 px-72">
        <div className = " border-white border-8 rounded-2xl">
            <div className = "flex flex-col">
                <div className = "height 1/5 w-min-full">
                    <Image
                    src = "/alex-YT-banner.png"
                    alt = "alex YT banner"
                    height={60}
                    width={2000}>
                    </Image>
                </div>
                <div className = "flex flex-row">
                <div className="w-1/3 aspect-square relative">
                    <Image
                        src="/alex-albumcover.png"
                        alt="alex Album Cover"
                        fill
                        className="object-cover"
                    />
                    </div>
                    <div className = "w-2/3 gradient-bg">
                        <div className = "flex flex-col">
                            <div className = "text-white text-sm font-semibold py-2 px-8">
                                <p>Hi! My name is Alex and I make lo-fi hip hop beats. I started it as a hobby in 2020, and it turned into a passion. I've made hundreds of songs, released six albums, and have even performed live a few times. I would love to connect with you all on a deeper level through my Suum account, and appreciate all of your support!!</p>
                            </div>
                            <div className = "text-white text-xl font-semibold text-center pb-1">
                                <p>Choose Your Membership</p>
                            </div>
                            <div className = "flex flex-row align-center justify-center gap-4">
                                <div className = "text-sm text-white font-semibold">
                                    <p>Monthly</p>
                                </div>
                                <div className="w-24 h-6 rounded-full bg-gray-300">
                                    <div className="w-12 h-6 rounded-full bg-white">
                                    </div>
                                </div>
                                <div className = "text-sm text-white font-semibold">
                                    <p>Annual</p>
                                </div>
                            </div>
                            <div className = "flex flex-row py-2 px-14 justify-between gap-6">
                                <CreatorPriceCardOne />
                                <CreatorPriceCardTwo />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
        
    );
}