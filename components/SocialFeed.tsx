import Image from "next/image";
import { MessageCircle, HeartIcon, Repeat2 } from "lucide-react";

export default function SocialFeed() {
  const categories = [
    { name: "All", active: true },
    { name: "Art", active: false },
    { name: "Fashion", active: false },
    { name: "Finance", active: false },
    { name: "Gaming", active: false },
    { name: "Music", active: false },
    { name: "Tech", active: false },
    { name: "World Affairs", active: false },
  ];

  return (
    <div className="bg-black border-white border-2 rounded-lg w-full max-w-4xl mx-auto">
      {/* Categories Section */}
      <div className="w-full overflow-x-auto">
        <div className="flex flex-row gap-6 p-4 justify-start md:justify-center min-w-max">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`text-sm text-gray-300 whitespace-nowrap ${
                category.active ? "font-semibold border-b-2 border-pink-500" : "hover:text-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Post Container */}
      <div className="px-4 md:px-8 pb-6">
        <div className="bg-[#001405] border-gray-500 border-2 rounded-2xl w-full">
          {/* Post Header */}
          <div className="flex items-center gap-3 p-4">
            <Image
              src="/alex-profile.png"
              alt="alex Album Cover"
              height={32}
              width={32}
              className="rounded-full"
            />
            <div className="flex items-center gap-2 flex-grow">
              <span className="text-sm font-semibold text-gray-200">
                Alex Dethero
              </span>
              <span className="text-xs text-gray-500">6:45pm</span>
            </div>
          </div>

          {/* Post Content */}
          <div className="px-4 pb-2">
            <p className="text-md font-semibold text-gray-200">
              Listened to some classic jazz at work today and I'm feeling creative.
              Surprise live music making session tonight at 8:00pm est. for all of
              my fans! Looking forward to chatting with you all and making some
              hits!!
            </p>
          </div>

          {/* Post Image */}
          <div className="px-6 py-2">
            <div className="relative w-full aspect-[3/1]">
              <Image
                src="/alex-tweet-image.png"
                alt="alex post image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className="flex justify-center gap-12 md:gap-24 p-4">
            <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
              <MessageCircle size={20} />
              <span>9</span>
            </button>
            <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
              <Repeat2 size={20} />
              <span>5</span>
            </button>
            <button className="flex items-center gap-1 text-gray-300 hover:text-gray-100">
              <HeartIcon size={20} />
              <span>22</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}