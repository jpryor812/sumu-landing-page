import Image from "next/image";
import { MessageCircle, HeartIcon, Repeat2 } from "lucide-react"


export default function SocialFeed (){
    return (
        <div className = "gradient-bg border-white border-4 rounded-lg pb-6 px-12">
            <div className = "flex flex-col">
                <div className = "flex flex-row gap-6 p-4 align-center justify-center text-sm text-[#001405]">
                    <p className="font-semibold border-b-2 border-pink-500 text-[#001405]">All</p>
                    <p>Art</p>
                    <p>Fashion</p>
                    <p>Finance</p>
                    <p>Gaming</p>
                    <p>Music</p>
                    <p>Tech</p>
                    <p>World Affairs</p>
                </div>
                <div className = "flex justify-center mx-auto w-10/12 bg-[#001405] border-gray-500 border-2 rounded-2xl p-2">
                    <div className= "flex flex-col">
                        <div className = "flex flex-row px-6 gap-2 py-2">
                            <Image
                            src="/alex-profile.png"
                            alt="alex Album Cover"
                            height={32}
                            width={32}
                            />
                            <div className = "text-sm font-semibold text-gray-200">
                                <p>Alex Dethero</p>
                            </div>
                            <div className = "text-xs text-gray-500">
                                <p>6:45pm</p>
                            </div>
                        </div>
                        <div className ="text-md font-semibold text-gray-200 px-8 pb-2">
                            <p>Listened to some classic jazz at work today and I'm feeling creative. Surprise live music making session tonight at 8:00pm est. for all of my fans! Looking forward to chatting with you all and making some hits!!</p>
                        </div>
                        <div className ="mx-auto px-6 py-2">
                        <Image
                            src="/alex-tweet-image.png"
                            alt="alex post image"
                            height={100}
                            width={400}
                            />
                        </div>
                        <div className = "flex flex-row gap-24 px-24 py-2">
                        <div className="flex items-center gap-1 text-gray-300">
                                <MessageCircle size={20} />
                                <span>9</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-300">
                                <Repeat2 size={20} />
                                <span>5</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-300">
                                <HeartIcon size={20} />
                                <span>22</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}