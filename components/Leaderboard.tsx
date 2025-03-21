import { leaderboardData } from '@/const/leaderboardData';
import LeaderboardRow from './LeaderboardRow';
import Link from 'next/link';

export default function Leaderboard() {

      const subs = [
        { text: '<50 fans', isHighlighted: false },
        { text: '<100 fans', isHighlighted: false },
        { text: '<250 fans', isHighlighted: true },  // This one will be blue
        { text: '<500 fans', isHighlighted: false },
        { text: '>1000 fans', isHighlighted: false },
      ];
    
      return(
        <div className="flex flex-col">
          <div className="text-3xl mx-auto sm:text-4xl md:text-5xl lg:text-5xl text-white font-semibold text-center pt-8 px-8 sm:pt-16 sm:px-16 md:pt-32 md:px-32">
            <h1>Plus a rewards system that gives back to the fastest-growing creators.</h1>
          </div>
          <div className="border-white rounded-2xl px-4 pt-4 sm:py-8 sm:px-12">
            {/* Change to column on smaller screens */}
            <div className="flex flex-col custom:flex-row justify-around items-center gap-2">
              {/* Add scaling container for the chart */}
              <div className="transform scale-[0.45] sm:scale-75 md:scale-90 lg:scale-100 origin-top -mb-48 sm:-mb-24 md:mb-2">
                <div className="flex flex-col border-4 border-white pb-4 rounded-2xl px-6">
                  <div className="flex flex-row justify-around pt-4 pb-8 gap-2">
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
                  <div className="space-y-3">
                    {leaderboardData.map((entry) => (
                      <LeaderboardRow key={entry.rank} entry={entry} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Text section */}
              <div className="flex flex-col justify-center p-2 sm:p-6">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center font-semibold">
                  <p>Sumu is the first platform to reward creators with <span className="underline decoration-3">equity</span></p>
                </div>
                <div className="text-sm sm:text-md text-white text-right font-semibold sm:pt-4 pb-6">
                <p>$SUMU represents ownership in Sumu the company, thereby making creators on Sumu, owners of Sumu. You can learn more about $SUMU{' '}
                <Link href="/SumuExplained" className="underline hover:text-gray-300">
                  here
                </Link>
                </p>                
              </div>
              </div>
            </div>
          </div>
        </div>  
      );
  }