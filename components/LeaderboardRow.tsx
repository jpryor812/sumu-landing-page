import Image from 'next/image';
import { LeaderboardEntry } from '@/const/leaderboardData';

type Props = {
  entry: LeaderboardEntry;
}

export default function LeaderboardRow({ entry }: Props) {
  return (
    <div className="bg-white rounded-xl px-2 w-11/12 mx-auto"> 
      <div className="flex flex-row py-2 gap-6 text-black text-lg font-semibold items-center justify-around">
      <div className="w-12 text-center">
          <p className={entry.rankColor}>#{entry.rank}</p>
        </div>

        <div className="w-12">
          <Image 
            src={entry.profilePic}
            alt={`${entry.username}'s profile`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="w-24 text-center">
          <p>{entry.username}</p>
        </div>

        <div className="w-24 text-center">
          <p>{entry.previousSubs} subs</p>
        </div>

        <div className="w-24 text-center">
          <p className="text-blue-500">{entry.currentSubs} subs</p>
        </div>

        <div className="w-16 text-center">
          <p className="text-green-500">+{entry.growth}%</p>
        </div>

        <div className="w-36 flex justify-center text-blue-400 text-center items-center gap-1">
          <p>{entry.earnings} USDC</p>
          <Image 
            src="/USDC_Logo.png"
            alt="USDC Logo"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}