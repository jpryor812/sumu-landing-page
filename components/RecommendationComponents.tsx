import { FC } from 'react';

interface RecommendationData {
  creator: string;
  creatorImage: string;
  description: string;
  recCreator1: string;
  recCreator2?: string;
  recommendation: string;
}

interface RecommendationCardProps extends RecommendationData {}

const RecommendationCard: FC<RecommendationCardProps> = ({
  creator,
  creatorImage,
  description,
  recCreator1,
  recCreator2,
  recommendation,
}) => {
  return (
    <div className= "py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={creatorImage} alt={creator} className="w-12 h-12 rounded-full" />
          <div>
            <h3 className="font-semibold text-gray-800 text-md">{creator}</h3>
            <p className="text-gray-600 text-sm px-4">{description}</p>
          </div>
        </div>
        <div className="ml-4 flex items-start">
          <button className="w-24 px-3 py-2 rounded-full bg-[#4040FF] text-sm font-semibold text-gray-100">
            View Page
          </button>
        </div>
      </div>
      <div className="mt-1 flex items-center gap-2">
        <div className="flex -space-x-2">
          <img src={recCreator1} alt="Recommender 1" className="w-8 h-8 rounded-full border-2 border-white" />
          {recCreator2 && (
            <img 
                src={recCreator2} 
                alt="Recommender 2" 
                className="w-8 h-8 rounded-full border-2 border-white" 
            />
            )}        
            </div>
        <p className="text-sm text-gray-800 font-semibold">{recommendation}</p>
      </div>
      </div>
  );
};

const RecommendationComponent: FC = () => {
  const data: RecommendationData[] = [
    {
      creator: 'Blockchain Bobby',
      creatorImage: '/profile2-500x500.png',
      description: "I'm a Web3 developer who teaches a course on building apps on the blockchain",
      recCreator1: '/alex-profile.png',
      recCreator2: '/profile_picture.jpg',
      recommendation: 'Recommended by Alex Dethero and Just-in Trades'
    },
    {
        creator: 'McStickies',
        creatorImage: '/mcStickies-1.png',
        description: "Creating custom stickers for teachers, animal lovers, and brands.",
        recCreator1: '/alex-profile.png',
        recCreator2: '/puja_picture.png',
        recommendation: 'Recommended by Alex Dethero and Healed by Heels'
    },
    {
        creator: 'Life Through Lenses',
        creatorImage: '/profile-800x800.png',
        description: "Photographer and digital artists documenting my journey throughout Europe.",
        recCreator1: '/profile_picture.jpg',
        recommendation: 'Recommended by Just-in Trades'
    },
  ];

  return (
    <div className = "bg-white rounded-xl p-1">
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-center text-xl text-gray-800 font-bold mb-6">Recommendations</h2>
      <div className="flex align-center justify-center gap-4 pb-2 border-b">
        <button className="px-4 py-2 rounded-full bg-[#4040FF] text-sm text-white font-semibold">
          By Creators You Follow
        </button>
        <button className="px-4 py-2 text-sm text-gray-400 font-semibold rounded-full border">
          By Mutual Fans
        </button>
      </div>
      <div className="divide-y">
        {data.map((item, index) => (
          <RecommendationCard key={index} {...item} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default RecommendationComponent;