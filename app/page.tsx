import PageTwoHeader from '@/components/PageTwoHeader'
import FeeChart from '@/components/FeeChart'
import LowFeeHighReward from '@/components/LowFeeHighReward';
import Leaderboard from '@/components/Leaderboard';
import RewardsExplanation from '@/components/RewardsExplanation';
import GrowthFeatures from '@/components/GrowthFeatures';
import MouseFollowingAura from '@/components/MouseFollowingAura';
import MainPage from '@/components/MainPage';
import StaticAura from '@/components/StaticAura';
import SubscriberChart from '@/components/SubscriberChart';
import ContentIdeasTicker from '@/components/ContentIdeasTicker';

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
          <LowFeeHighReward />
          <Leaderboard />
          <RewardsExplanation />
          <GrowthFeatures />
          <SubscriberChart />
          <ContentIdeasTicker />
      </div>
      </div>
      </StaticAura>

    </main>
  );
}