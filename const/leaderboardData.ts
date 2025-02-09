export type LeaderboardEntry = {
    rank: number;
    rankColor: string;
    profilePic: string;
    username: string;
    previousSubs: number;
    currentSubs: number;
    growth: number;
    earnings: number;
  }
  
  export const leaderboardData: LeaderboardEntry[] = [
    {
      rank: 1,
      rankColor: "text-green-500",
      profilePic: "/profile_picture.jpg",
      username: "Just-in Trades",
      previousSubs: 168,
      currentSubs: 422,
      growth: 151,
      earnings: 1000
    },
    {
        rank: 2,
        rankColor: "text-blue-400",
        profilePic: "/puja_picture.png",
        username: "Healed By Heels",
        previousSubs: 123,
        currentSubs: 301,
        growth: 145,
        earnings: 750
      },
      {
        rank: 3,
        rankColor: "text-blue-400",
        profilePic: "/alex-profile.png",
        username: "Alex Dethero",
        previousSubs: 101,
        currentSubs: 263,
        growth: 141,
        earnings: 500
      },
      {
        rank: 4,
        rankColor: "text-blue-400",
        profilePic: "/profile2-500x500.png",
        username: "Blockchain Bobby",
        previousSubs: 201,
        currentSubs: 468,
        growth: 133,
        earnings: 400
      },
      {
        rank: 5,
        rankColor: "text-blue-400",
        profilePic: "/profile-800x800.png",
        username: "Life Through Lenses",
        previousSubs: 225,
        currentSubs: 490,
        growth: 118,
        earnings: 300
      },
  ];