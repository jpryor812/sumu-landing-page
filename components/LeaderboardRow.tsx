import Image from 'next/image';
import { LeaderboardEntry } from '@/const/leaderboardData';

type Props = {
  entry: LeaderboardEntry;
}

export default function LeaderboardRow({ entry }: Props) {
  return (
    <div className="bg-white rounded-xl px-2 w-full mx-auto"> 
      <div className="flex flex-row py-2 gap-4 md:gap-6 text-black text-lg font-semibold items-center">
        <div className="min-w-[40px] text-center">
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

        <div className="w-24 text-sm text-center">
          <p>{entry.username}</p>
        </div>

        <div className="w-24 text-md text-center">
          <p>{entry.previousSubs} subs</p>
        </div>

        <div className="w-24 text-center">
          <p className="text-blue-500">{entry.currentSubs} subs</p>
        </div>

        <div className="w-16 text-center">
          <p className="text-green-500">+{entry.growth}%</p>
        </div>

        <div className="w-48 flex justify-between green-text text-center items-center pr-4">
          <p>{entry.earnings} $SUMU</p>
          <div className="relative w-[32px] h-[32px] border-2 border-gray-500 rounded-full flex items-center justify-end bg-black">
            <Image
              src="/Sumu-logo-vert.png"
              alt="Sumu Logo"
              width={32}
              height={32}
              className="logo-image absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
}