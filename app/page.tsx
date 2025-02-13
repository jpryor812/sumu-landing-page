import PageTwoHeader from '@/components/PageTwoHeader'
import FeeChart from '@/components/FeeChart'
import Leaderboard from '@/components/Leaderboard';
import RewardsExplanation from '@/components/RewardsExplanation';
import GrowthFeatures from '@/components/GrowthFeatures';
import MouseFollowingAura from '@/components/MouseFollowingAura';
import MainPage from '@/components/MainPage';
import StaticAura from '@/components/StaticAura';
import SubscriberChart from '@/components/SubscriberChart';
import ContentIdeasTicker from '@/components/ContentIdeasTicker';
import FinalCTA from '@/components/FinalCTA';
import { WaitlistButton } from '@/components/WaitlistButton';
import PolicyAndService from '@/components/PolicyAndService';
import SocialMedia from '@/components/SocialMedia';

export default function Home() {
  return (
    <main className="relative">
      {/* First section with aura background */}
      <MouseFollowingAura>
        <div className="min-h-screen">
          <div className="relative z-10">
            <MainPage />
          </div>
        </div>
      </MouseFollowingAura>

      {/* Second section with scroll gradient */}
      <StaticAura>
      <div className="min-h-screen">
        <div className="relative z-10">
          <PageTwoHeader />
          </div>
      </div>
      </StaticAura>

      <StaticAura>
      <div className="min-h-screen fee-chart-section"> 
      <div className="relative z-10">
          <FeeChart />
          <Leaderboard />
          <RewardsExplanation />
          <div className= "pt-6 pb-4 px-16 sm:px-2">
                <div className= "bg-[#4040FF] text-white font-semibold text-center text-xl sm:text-2xl md:text-3xl rounded-3xl mx-auto sm:py-4 sm:px-2 py-2 max-w-xs">
                    <WaitlistButton />
                </div>
            </div>
          <GrowthFeatures />
          <SubscriberChart />
          <ContentIdeasTicker />
          <FinalCTA />
          <SocialMedia />
          <PolicyAndService />
      </div>
      </div>
      </StaticAura>

    </main>
  );
}