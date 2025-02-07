import Header from '@/components/Header';
import SuumHeader from '@/components/SuumHeader';
import HeroText from '@/components/HeroText';
import SubHeroText from '@/components/SubHeroText';
import CTAButton from '@/components/CTAButton';
import SubText from '@/components/SubText';
import PageTwoHeader from '@/components/PageTwoHeader'
import FeeChart from '@/components/FeeChart'
import CreatorPlatformText from '@/components/CreatorPlatformText'
import LowFeeHighReward from '@/components/LowFeeHighReward';
import Leaderboard from '@/components/Leaderboard';
import RewardsExplanation from '@/components/RewardsExplanation';
import ChargeForContent from '@/components/ChargeForContent'
import CreatorPage from '@/components/CreatorPage';
import GrowthFeatures from '@/components/GrowthFeatures';
import AnimatedBackground from '@/components/AnimatedBackground';
import VideoBackground from '@/components/VideoBackground';
import MouseFollowingAura from '@/components/MouseFollowingAura';
import WaveBackground from '@/components/WaveBackground';
import FloatingBackground from '@/components/FloatingBackground';
import MainPage from '@/components/MainPage';

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
      <FloatingBackground>
      <div className="min-h-screen">
        <div className="relative z-10">
          <PageTwoHeader />
          <CreatorPlatformText />
          <FeeChart />
          <LowFeeHighReward />
          <Leaderboard />
          <RewardsExplanation />
          <ChargeForContent />
          <GrowthFeatures />
        </div>
      </div>
      </FloatingBackground>
    </main>
  );
}