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

export default function Home() {
  return (
    <main>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('/digital-art-background.png')] opacity-70 bg-cover" />
        <div className="relative z-10">
          <Header />
          <SuumHeader />
          <HeroText />
          <SubHeroText />
          <CTAButton />
          <SubText />
          </div>
          </div>
      <div className="min-h-screen relative">
        {/* Gradient background */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(120deg, rgb(179, 214, 255) 0%, rgb(173, 170, 255) 25%, rgb(235, 168, 255) 50%, rgb(255, 175, 189) 75%, rgb(255, 181, 137) 100%)'
        }} />
        {/* Content container with z-index */}
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