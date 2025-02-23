'use client';

import { useState, useEffect } from 'react';
import { WaitlistButton } from './WaitlistButton';
import QuestionButton from './QuestionButton';

interface PlatformData {
  name: string;
  platformFee: string;
  transactionFee: string;
  feePerSubscriber: string;
  perMonth: string;
  perYear: string;
  lostIncome?: string;
  imageUrl: string;
}

const platforms: PlatformData[] = [
    {
        name: "Substack",
        platformFee: "10%",
        transactionFee: "3.6% + $0.30",
        feePerSubscriber: "",
        perMonth: "",
        perYear: "",
        imageUrl: "/substack-logo.png"
      },
  {
    name: "Patreon",
    platformFee: "8%",
    transactionFee: "3.4% + $0.30",
    feePerSubscriber: "",
    perMonth: "",
    perYear: "",
    imageUrl: "/patreon-logo.png"
  },
  {
    name: "Passes",
    platformFee: "10%",
    transactionFee: "$0.30",
    feePerSubscriber: "",
    perMonth: "",
    perYear: "",
    imageUrl: "/passses-logo.png"
  },
  {
    name: "Sumu",
    platformFee: "4.9%",
    transactionFee: "0%",
    feePerSubscriber: "",
    perMonth: "",
    perYear: "",
    imageUrl: "/Sumu-logo-round.png"
  },
];

const formatMoney = (amount: string, showDecimals: boolean = true) => {
  const number = parseFloat(amount.replace('$', ''));
  return `$${number.toLocaleString('en-US', { 
    minimumFractionDigits: showDecimals ? 2 : 0, 
    maximumFractionDigits: showDecimals ? 2 : 0 
  })}`;
};

const calculateFees = (subscribers: number, monthlyFee: number, platform: PlatformData) => {
  // Parse platform fee percentage
  const platformFeePercent = parseFloat(platform.platformFee.replace('%', '')) / 100;
  
  // Parse transaction fee
  let transactionFeePercent = 0;
  let transactionFeeFixed = 0;
  
  if (platform.transactionFee.includes('%')) {
    const percentMatch = platform.transactionFee.match(/(\d+\.?\d*)/);
    transactionFeePercent = percentMatch ? parseFloat(percentMatch[0]) / 100 : 0;
  }
  
  if (platform.transactionFee.includes('$')) {
    const fixedMatch = platform.transactionFee.match(/\$(\d+\.?\d*)/);
    transactionFeeFixed = fixedMatch ? parseFloat(fixedMatch[1]) : 0;
  }

  // Calculate per subscriber
  const grossPerSub = monthlyFee;
  const platformFeeAmount = grossPerSub * platformFeePercent;
  const transactionFeeAmount = (grossPerSub * transactionFeePercent) + transactionFeeFixed;
  const netPerSub = grossPerSub - platformFeeAmount - transactionFeeAmount;

  // Calculate monthly and yearly
  const monthlyNet = netPerSub * subscribers;
  const yearlyNet = monthlyNet * 12;
  const sumuYearlyNet = calculateSumuYearlyNet(subscribers, monthlyFee);

  return {
    feePerSubscriber: `$${netPerSub.toFixed(2)}`,
    perMonth: `$${monthlyNet.toFixed(0)}`,
    perYear: `$${yearlyNet.toFixed(0)}`,
    lostIncome: platform.name === "Sumu" ? "$0" : 
      `-$${Math.abs(yearlyNet - sumuYearlyNet).toLocaleString('en-US', { maximumFractionDigits: 0 })}`
  };
};

const calculateSumuYearlyNet = (subscribers: number, monthlyFee: number) => {
  const sumuPlatform = platforms.find(p => p.name === "Sumu");
  if (!sumuPlatform) return 0;
  
  const platformFeePercent = parseFloat(sumuPlatform.platformFee.replace('%', '')) / 100;
  const netPerSub = monthlyFee * (1 - platformFeePercent);
  return netPerSub * subscribers * 12;
};

export default function EarningsComparison() {
  const [subscribers, setSubscribers] = useState<number>(500);
  const [monthlyFee, setMonthlyFee] = useState<number>(10);
  const [platformsData, setPlatformsData] = useState<PlatformData[]>(platforms);

  const displayValue = (value: number) => value === 0 ? '' : value.toString();

  useEffect(() => {
    const updatedPlatforms = platforms.map(platform => ({
      ...platform,
      ...calculateFees(subscribers, monthlyFee, platform)
    }));
    setPlatformsData(updatedPlatforms);
  }, [subscribers, monthlyFee]);

  return (
    <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-2 sm:px-8 md:px-16 lg:px-48 flex flex-col gap-2 sm:gap-4 justify-center items-center">
      <div className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold px-2">
        <p>Enter your numbers to see how much you could save with Sumu!</p>
      </div>
      
      <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
        <div className="flex flex-col w-full sm:w-auto">
          <label className="text-white font-semibold px-2 mb-1 sm:mb-2 text-sm sm:text-base">Number of Subscribers</label>
          <input
            type="number"
            value={displayValue(subscribers)}
            onChange={(e) => setSubscribers(Number(e.target.value || 0))}
            className="p-2 rounded-2xl bg-white text-black border-2 sm:border-4 border-purple-500 font-semibold text-base sm:text-lg"
            min="1"
          />
        </div>
        <div className="flex flex-col w-full sm:w-auto">
          <label className="text-white font-semibold px-2 mb-1 sm:mb-2 text-sm sm:text-base">Monthly Price ($)</label>
          <input
            type="number"
            value={displayValue(monthlyFee)}
            onChange={(e) => setMonthlyFee(Number(e.target.value || 0))}
            className="p-2 rounded-2xl bg-white text-black border-2 sm:border-4 border-purple-500 font-semibold text-base sm:text-lg"
            min="1"
            step="0.01"
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl border-4 border-purple-500 table-fixed border-separate border-spacing-0 overflow-hidden">
          <thead>
            <tr>
              <th className="text-center p-2 sm:p-4 text-black w-1/4 border-b border-r border-green-200 text-xs sm:text-base lg:text-lg"></th>
              {platformsData.map((platform, index) => (
                <th 
                  key={platform.name} 
                  className={`text-center p-2 sm:p-4 text-black font-semibold text-xs sm:text-base lg:text-lg w-[18.75%] border-b border-green-200
                    ${index !== platformsData.length - 1 ? 'border-r border-green-200' : ''}
                    ${platform.name === "Sumu" ? 'bg-green-50/60' : ''}`}
                >
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <img 
                      src={platform.imageUrl} 
                      alt={platform.name} 
                      className="w-3 h-3 sm:w-6 sm:h-6 object-contain"
                    />
                    {platform.name}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 sm:p-4 font-semibold text-black border-b border-r border-green-200 text-xs sm:text-base lg:text-lg w-1/4">Platform Fees</td>
              {platformsData.map((platform, index) => (
                <td 
                  key={platform.name} 
                  className={`p-2 sm:p-4 text-center font-semibold text-xs sm:text-base lg:text-lg border-b border-green-200
                    ${index !== platformsData.length - 1 ? 'border-r border-green-200' : ''}
                    ${platform.name === "Sumu" ? 'bg-green-50/60 text-green-600' : 'text-black'}`}
                >
                  {platform.platformFee}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-2 sm:p-4 font-semibold text-black border-b border-r border-green-200 text-xs sm:text-base lg:text-lg">Transaction Fees</td>
              {platformsData.map((platform, index) => (
                <td 
                  key={platform.name} 
                  className={`p-2 sm:p-4 text-center font-semibold text-xs sm:text-base lg:text-lg border-b border-green-200
                    ${index !== platformsData.length - 1 ? 'border-r border-green-200' : ''}
                    ${platform.name === "Sumu" ? 'bg-green-50/60 text-green-600' : 'text-black'}`}
                >
                  {platform.transactionFee}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-2 sm:p-4 font-semibold text-black border-b border-r border-green-200 text-xs sm:text-base lg:text-lg">Earnings per subscriber</td>
              {platformsData.map((platform, index) => (
                <td 
                  key={platform.name} 
                  className={`p-2 sm:p-4 text-center font-semibold text-xs sm:text-base lg:text-lg border-b border-green-200
                    ${index !== platformsData.length - 1 ? 'border-r border-green-200' : ''}
                    ${platform.name === "Sumu" ? 'bg-green-50/60 text-green-600' : 'text-black'}`}
                >
                  {formatMoney(platform.feePerSubscriber)}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-2 sm:p-4 font-semibold text-black border-b border-r border-green-200 text-xs sm:text-base lg:text-lg">Earnings per month</td>
              {platformsData.map((platform, index) => (
                <td 
                  key={platform.name} 
                  className={`p-2 sm:p-4 text-center font-semibold text-xs sm:text-base lg:text-lg border-b border-green-200
                    ${index !== platformsData.length - 1 ? 'border-r border-green-200' : ''}
                    ${platform.name === "Sumu" ? 'bg-green-50/60 text-green-600' : 'text-black'}`}
                >
                  {formatMoney(platform.perMonth, false)}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-2 sm:p-4 font-semibold text-black border-b border-r border-green-200 text-xs sm:text-base lg:text-lg">Earnings per year</td>
              {platformsData.map((platform, index) => (
                <td 
                  key={platform.name} 
                  className={`p-2 sm:p-4 text-center font-semibold text-xs sm:text-base lg:text-lg border-b border-green-200
                    ${index !== platformsData.length - 1 ? 'border-r border-green-200' : ''}
                    ${platform.name === "Sumu" ? 'bg-green-50/60 text-green-600' : 'text-black'}`}
                >
                  {formatMoney(platform.perYear, false)}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-2 sm:p-4 font-semibold text-black border-b border-r border-green-200 bg-red-50/60 text-xs sm:text-base lg:text-lg">Lost Income</td>
              {platformsData.map((platform, index) => (
                <td 
                  key={platform.name} 
                  className={`p-2 sm:p-4 text-center font-semibold text-xs sm:text-base lg:text-lg border-b border-green-200
                    ${index !== platformsData.length - 1 ? 'border-r border-green-200' : ''}
                    ${platform.name === "Sumu" ? 'bg-green-50/60 text-green-600' : 'bg-red-50/60 text-red-600'}`}
                >
                  {platform.name === "Sumu" ? "None" : platform.lostIncome}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-2 sm:p-4 font-semibold text-black border-b border-r border-green-200 text-xs sm:text-base lg:text-lg">Monthly Rewards</td>
              {platformsData.map((platform, index) => (
                <td 
                  key={platform.name} 
                  className={`p-2 sm:p-4 text-center font-semibold text-xs sm:text-base lg:text-lg border-b border-green-200
                    ${index !== platformsData.length - 1 ? 'border-r border-green-200' : ''}
                    ${platform.name === "Sumu" ? 'bg-green-50/60 text-green-600' : 'text-black'}`}
                >
                  {platform.name === "Sumu" ? "✅" : "❌"}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-2 sm:p-4 font-semibold text-black border-b border-r border-green-200 text-xs sm:text-base lg:text-lg">Ownership in Platform</td>
              {platformsData.map((platform, index) => (
                <td 
                  key={platform.name} 
                  className={`p-2 sm:p-4 text-center font-semibold text-xs sm:text-base lg:text-lg border-b border-green-200
                    ${index !== platformsData.length - 1 ? 'border-r border-green-200' : ''}
                    ${platform.name === "Sumu" ? 'bg-green-50/60 text-green-600' : 'text-black'}`}
                >
                  {platform.name === "Sumu" ? "✅" : "❌"}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pt-2 text-center text-white">
        <div className="text-3xl sm:text-5xl lg:text-7xl italic font-semibold">
          <p>Sumu creators earn the most!</p>
        </div>
      </div>

      <div className="pt-2 pb-4 px-4 sm:px-8 md:px-16 w-full sm:w-auto">
        <div className="bg-[#4040FF] text-white font-semibold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-3xl mx-auto py-2 sm:py-4 px-2 max-w-xs">
          <WaitlistButton />
        </div>
      </div>

      <div className="pt-2 px-4 sm:px-8">
        <div className="text-center text-white text-lg sm:text-xl lg:text-2xl italic font-semibold">
          <p>Already on one of these platforms? Let us know and we'll help you port your content and subscribers to Sumu!</p>
        </div>
        <div className="flex justify-center w-full sm:w-1/2 mx-auto pt-4">
          <QuestionButton />
        </div>
      </div>
    </div>
  );
}