import Image from 'next/image';
import Link from 'next/link'

interface BlogCardProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  date: string;
  title: string;
  description: string;
  isReversed?: boolean;
  link: string;
}

export default function BlogCard({ image, date, title, description, isReversed = false, link }: BlogCardProps) {
  return(
    <Link href={link} className="flex">
      <div className="w-full bg-gray-100 rounded-xl shadow-md">
        <div className={`flex flex-col ${isReversed ? 'flex-col-reverse' : ''}`}>
        <div className={`h-48 ${isReversed ? 'rounded-b-xl' : 'rounded-t-xl'}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={`w-full h-full object-cover ${
                isReversed ? 'rounded-b-xl' : 'rounded-t-xl'
              }`}
            />
          </div>
          {/* Text Content */}
          <div className="flex flex-col px-4 sm:px-6 md: px-8 py-4 sm:py-6">
            <div className="text-xs sm:text-sm text-gray-400">
              <p>{date}</p>
            </div>
            <div className="text-md sm:text-xl pr-2 md:pr-6 text-black font-semibold mt-2">
              <p>{title}</p>
            </div>
            <div className="text-sm sm:text-md text-gray-600 mt-2">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}