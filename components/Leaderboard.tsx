import { leaderboardData } from '@/const/leaderboardData';
import LeaderboardRow from './LeaderboardRow';

export default function Leaderboard() {
    
    const categories = [
        { text: 'Tech', isHighlighted: false },
        { text: 'Finance', isHighlighted: false },
        { text: 'Art', isHighlighted: true },  // This one will be blue
        { text: 'Music', isHighlighted: false },
        { text: 'Gaming', isHighlighted: false },
        { text: 'Fashion', isHighlighted: false },
        { text: 'Politics', isHighlighted: false },
      ];

      const subs = [
        { text: '<50 fans', isHighlighted: false },
        { text: '<100 fans', isHighlighted: false },
        { text: '<250 fans', isHighlighted: true },  // This one will be blue
        { text: '<500 fans', isHighlighted: false },
        { text: '>1000 fans', isHighlighted: false },
      ];
    
    return(
      <div className = "border-white rounded-2xl py-8 px-12">
        <div className = "flex flex-row justify-around">
            <div className = "flex flex-col border-4 border-white pb-4 rounded-2xl px-6">
            <div className = "flex flex-row justify-around pt-4 pb-8 gap-2">
            {subs.map((sub) => (
                <div 
                    key={sub.text} 
                    className={`px-5 py-2 border-white border-2 rounded-3xl ${
                    sub.isHighlighted 
                        ? 'bg-[#00BF63] text-white font-semibold' 
                        : 'bg-white text-black font-semibold'
                    }`}
                >
                    <p>{sub.text}</p>
                </div>
                ))}
            </div>
            {/*
            <div className = "flex flex-row justify-around p-4 gap-4">
              {categories.map((category) => (
                <div 
                key={category.text} 
                className={`px-5 py-2 rounded-3xl ${
                category.isHighlighted 
                    ? 'bg-blue-500 text-white font-semibold' 
                    : 'bg-white text-black font-semibold'
                }`}
            >
                <p>{category.text}</p>
                </div>
              ))}
            </div>
            */}
            <div className="space-y-3">
      {leaderboardData.map((entry) => (
        <LeaderboardRow key={entry.rank} entry={entry} />
      ))}
            </div>
            </div>
            <div className = "flex flex-col justify-center p-6">
                <div className = "text-7xl text-white text-center font-semibold">
                    <p>Earn $100s worth of $SUMU every month</p>
                </div>
                <div className = "text-md text-white text-right font-semibold pt-4">
                    <p>You can learn more about $SUMU below 👇</p>
                </div>
            </div>
        </div>

      </div>  
    );
}