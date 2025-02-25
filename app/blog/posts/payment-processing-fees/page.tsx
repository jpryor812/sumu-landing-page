import { WaitlistButton } from '@/components/WaitlistButton';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';


export const metadata: Metadata = {
  title: 'Why Transaction Fees Are Quietly Killing Your Earnings as a Creator',
  description:
    'Creators charging $5 or less for their content are lsing 10%+ in payment processing fees. With Sumu, that number goes to 0% no matter how much you charge for your content. In this blog post we tell you how that is possible and how much you could save.',
  keywords: [
    'transaction fees',
    'creator earnings',
    'Content Creator Platform fees',
    'Content Creator Platform Transaction Fees',
    'USDC',
    'payment processing',
    'Sumu',
    'creator economy',
    'digital payments'
  ],
  openGraph: {
    title: 'Why Transaction Fees Are Quietly Killing Your Earnings as a Creator',
    description:
    'Creators charging $5 or less for their content are lsing 10%+ in payment processing fees. With Sumu, that number goes to 0% no matter how much you charge for your content. In this blog post we tell you how that is possible and how much you could save.',
  }
};

export default function TransactionFeesKiller() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Why Transaction Fees Are Quietly Killing Your Earnings as a Creator
      </h1>

      <hr className="w-3/4 border-gray-300/30 my-6" />

      <p className="mb-8 md:text-lg lg:text-xl">
        People have come to expect that to sell content, you have to pay payment processing fees.
        The typical fees for domestic U.S. payments are 2.9% + $0.30, and for international payments,
        3.9% + $0.30. That might not seem like a lot, which is exactly why people haven’t woken up to the
        fact that reliable payment alternatives are available that cost you 0% + $0.00.
      </p>

      <p className="mb-8 md:text-lg lg:text-xl">
        Why should you care? Well, if you’re a creator selling $5 a month access to a group chat, for example,
        those payment processing fees are actually taking about 10% of your earnings, again for no reason.
        Think about that—a 10% tax on payments, which could be 0%!
      </p>

      <div className="my-8 flex justify-center">
        <Image
          src="/expected-v-actual-transaction.png" // Replace with your math image filename
          alt="Breakdown of transaction fees"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      <p className="mb-8 md:text-lg lg:text-xl">
        That means you’re losing $0.50 per fan to transaction fees, which, if you have 1,000 fans paying that per month,
        you’re losing $500 a month for no reason. Over the course of the year, you would lose $6,000 just to fees!
        Again, for no reason!
      </p>

      <p className="mb-8 md:text-lg lg:text-xl">
        Also, this doesn’t include the general 10% platform fees on other content platforms. If it were to include them,
        you’d lose 20% of your earnings per month! $5 goes to $4, $5,000 per month goes to $4,000 per month, and $60,000
        per year goes to $48,000 per year.
      </p>

      <p className="mb-8 md:text-lg lg:text-xl">
        That is why we use USDC as our default payment system at Sumu.
      </p>

      <div className="my-8 flex justify-center">
        <Image
          src="/usdc-circle.jpg" // Replace with your USDC image filename
          alt="USDC Logo"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      <h2 className="text-3xl font-bold mb-8">What is USDC?</h2>

      <p className="mb-8 md:text-lg lg:text-xl">
        USDC is a stablecoin, which is a digital currency pegged to some entity in value. For USDC, its value is pegged
        to the US Dollar. Therefore, every USDC is worth $1 and will always be worth $1, no matter how the dollar itself
        fluctuates in value.
      </p>

      <p className="mb-8 md:text-lg lg:text-xl">
        We use USDC as payment because it has &lt;$0.01 transaction fees (don’t worry, we pay them for you; 0% is 0%!),
        is near instant, can be used internationally with the same speed and cost as domestic payments would, and there are
        no middlemen—it is completely peer-to-peer.
      </p>

      <p className="mb-8 md:text-lg lg:text-xl">
        Sounds pretty great, right? We think so, too, which is why we encourage every user to use and accept USDC as payment.
        <strong> Of course, should you have fans who don’t want to pay in USDC, we will offer traditional payment methods,
        but the fans will have to pay the fees.</strong>
      </p>

      <p className="mb-8 md:text-lg lg:text-xl">
        Otherwise, they can take 60 seconds to set up their digital wallets to pay with USDC and never have to think about it
        again. Similarly, as a creator, if you’re new to stablecoins, we will help you set up your wallet in less than a minute
        and begin accepting fees instantly.
      </p>

      <h2 className="text-3xl font-bold mb-8">How Much Could You Earn with Sumu?</h2>

      <p className="mb-8 md:text-lg lg:text-xl">
        Since Sumu uses USDC as payment, there are 0% transaction fees, saving you the initial 10% in fees for that $5 group chat.
        You also pay only a 4.9% platform fee, so instead of paying 20% of your earnings to content platforms in this example,
        you pay only 4.9%.
      </p>

      <p className="mb-8 md:text-lg lg:text-xl">
        So, instead of taking home $4 per subscriber, you’re taking home $4.75; instead of taking home $4,000 per month,
        you’re taking home $4,750; and instead of taking home $48,000 a year, you’re taking home $57,000 a year.
      </p>

      <div className="my-8 flex justify-center">
        <Image
          src="/expected-v-actual-sumu-v-others.png" // Replace with your income difference image filename
          alt="Income difference illustration"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      <p className="mb-8 md:text-lg lg:text-xl">
        $9,000 in extra earnings just by switching to Sumu!
      </p>

      <p className="mb-8 md:text-lg lg:text-xl">
        Also, these savings don’t include our reward system, which rewards creators with bonus USDC every month, as well as
        actual ownership in Sumu, the company.
      </p>

      <p className="mb-8 md:text-lg lg:text-xl">
        So, if you want to wake up tomorrow and start saving $9,000 more per year, then join Sumu today!
      </p>

      <p className="mb-8 md:text-lg lg:text-xl">
        Feel free to play with our earnings calculator to see how much you could earn with our low fee and zero transaction fee
        system compared to older platforms.{' '}
        <Link href="/#earnings-comparison">
            <a className="text-blue-600 underline">Go to Earnings Comparison</a>
        </Link>
      </p>

      <div className="pt-6 mb-4 px-16 sm:px-2">
        <div className="bg-[#4040FF] text-white font-semibold text-center text-xl sm:text-2xl md:text-3xl rounded-3xl mx-auto sm:py-4 sm:px-2 py-2 max-w-xs">
          <WaitlistButton />
        </div>
      </div>
    </article>
  );
}
