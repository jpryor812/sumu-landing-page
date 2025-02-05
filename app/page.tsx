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

export default function Home() {
  return (
    <main className="relative">
      {/* First section with video background */}
      <div className="relative min-h-screen">
        <VideoBackground />
        
        {/* Content for first section */}
        <div className="relative z-10">
          <Header />
          <SuumHeader />
          <HeroText />
          <SubHeroText />
          <CTAButton />
          <SubText />
        </div>
      </div>

      {/* Second section with animated background */}
      <div className="relative min-h-screen">
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
    </main>
  );
}