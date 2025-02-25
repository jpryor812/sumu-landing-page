import { WaitlistButton } from '@/components/WaitlistButton';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Patreon vs. Sumu Fees for a Large YouTube Channel: A Case Study',
    description: 'How you could retain 95-105% of your premium content earnings on Sumu instead of 85% with Patreon? We explain with an example using the popular YouTube channel Asianometry...',
    keywords: [
        'creator platform fees',
        'Patreon alternatives',
        'Sumu platform',
        'creator economy',
        'content monetization',
        'platform comparison',
        'Asianometry',
        'YouTube monetization',
        'creator earnings',
        'platform transaction fees'
      ],
    openGraph: {
      title: 'Patreon vs. Sumu Fees for a Large YouTube Channel: A Case Study',
      description: 'How you could retain 95-105% of your premium content earnings on Sumu instead of 85% with Patreon? We explain with an example using the popular YouTube channel Asianometry...',
    }
};

export default function SumuFeesVsPatreon() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Patreon vs. Sumu Fees for a Large YouTube Channel: A Case Study
      </h1>

      <hr className="w-3/4 border-gray-300/30 my-6" />

      <p className="mb-4 md:text-lg lg:text-xl">
        Maybe you&apos;ve heard of Asianometry, one of the most popular, and my personal favorite, YouTube channels.
      </p>

      <div className="my-8 align-center flex justify-center">
        <Image
          src="/asianometry.png"
          alt="Asianometry YouTube Channel"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      <p className="mb-8 md:text-lg lg:text-xl">
        Since it&apos;s incredibly difficult to earn a living wage from YouTube payouts, Jon, the creator of Asianometry, created a Patreon channel where he charges fans $6 for early access to his videos. He likely pays the 8% platform fee to Patreon, though he could be paying up to 12%, and pays 2.9% + $0.30 for U.S. payments and 3.9% + $0.30 for international payments.
      </p>

      <div className="my-8 flex flex-row gap-4 justify-center">
            <Image
                src="/patreon-fees.png"
                alt="Patreon Fees"
                width={400} 
                height={400}
                className="rounded-lg shadow-md w-1/2"
            />
            <Image
                src="/patreon-payment-fees.png"
                alt="Patreon Payment Fees"
                width={400}  
                height={400}
                className="rounded-lg shadow-md w-1/2"
            />
        </div>

      <p className="mb-8 md:text-lg lg:text-xl">
        Let&apos;s assume a 50/50 split in his fans in terms of international and U.S.-based to say, on average, Jon pays 8% + 3.4% + $0.30 per subscriber per month to Patreon and payment processing companies. Therefore, on a $6-a-month transaction, Jon is losing about $0.98 of his earnings per transaction, close to 17%!
      </p>

      <p className="mb-8 md:text-lg lg:text-xl">
        So, despite Patreon marketing an 8% platform fee, creators who charge a low price for their content could lose around 17% of their earnings! So, if Jon wanted to make $72,000 a year for his content, he would&apos;t need 1,000 fans paying $6 a month; he would actually need about 1,200 fans paying $6 a month! That means about 200 of those 1200 fans are paying Patreon and payment processing companies—not Jon.
      </p>

      <div className="my-8 flex flex-row gap-4 justify-center">
            <Image
                src="/expected-v-actual.png"
                alt="Earnings after Patreon Fees"
                width={400} 
                height={400}
                className="rounded-lg shadow-md w-1/2"
            />
            <Image
                src="/expected_fans-v-actual.png"
                alt="Fans needed to earn deserved amount on Patreon"
                width={400}  
                height={400}
                className="rounded-lg shadow-md w-1/2"
            />
        </div>

      <p className="mb-8 md:text-lg lg:text-xl">
        Instead, Jon should use Sumu and retain more of his earnings.
      </p>

      <div className="mb-8 md:text-lg lg:text-xl">
        <p className="font-bold">
          First, Sumu&apos;s platform fee is 4.9%, with 0% transaction fees in the U.S. and internationally. Therefore, if Jon were to use Sumu with 1,000 fans paying $6 a month, he would save almost $10,000 just from fees. Think about what you could do with $10,000, especially without having to do any extra work!
        </p>
        </div>

      <div className="my-8 flex justify-center">
        <Image
          src="/sumu-v-patreon.png"
          alt="Sumu vs Patreon Comparison"
          width={400}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      <p className="mb-8 md:text-lg lg:text-xl">
        Also, Sumu rewards top creators with actual USDC back, up to $100s a month, and even gives creators ownership in Sumu itself. Therefore, as the company becomes more valuable, creators&pos; shares in Sumu similarly get more valuable! If Jon were to join as an early creator and the platform were to become as successful as Patreon, that $72,000 he was shooting for from his fans could be dwarfed by his actual ownership in Sumu. Plus, this ownership is of no cost to him; it is purely a reward for being on Sumu.
      </p>

      <div className="my-8 flex justify-center">
        <Image
          src="/patreon-earnings-flow.png"
          alt="Patreon Earnings Flow"
          width={400}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="my-8 flex justify-center">
        <Image
          src="/suum-earnings-flow-percent.png"
          alt="Sumu Earnings Flow"
          width={800}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      <p className="text-lg font-semibold md:text-lg lg:text-xl">
        If you&apos;re a creator like Jon, whether as big as Asianometry or not, I encourage you to sign up for Sumu to retain more of your earnings and reap the rewards of a vibrant creator ecosystem built around the collective growth of all creators.
      </p>
      <div className= "pt-6 mb-4 px-16 sm:px-2">
                <div className= "bg-[#4040FF] text-white font-semibold text-center text-xl sm:text-2xl md:text-3xl rounded-3xl mx-auto sm:py-4 sm:px-2 py-2 max-w-xs">
                    <WaitlistButton />
                </div>
            </div>
            <p className="text-xs text-center">
                Note: Jon is not actually a creator on Sumu; I used his channel purely as a mock example. Although, maybe after seeing this, he will join 😊 
            </p>
    </article>
  );
}