import BlogCard from '@/components/BlogCard'
import QuestionButton from '@/components/QuestionButton'
import { WaitlistButton } from '@/components/WaitlistButton'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/const/blogPosts'

export default function BlogHomepage() {
    return(
        <div className = "flex flex-col">
        <div className="flex flex-row items-end justify-between mt-4 sm:mt-8 px-4 sm:px-8 md:px-10 lg:px-12">
            {/* Left group */}
            <div className="flex items-end gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <Link 
                href="/" >
                    <Image
                        src="/Sumu-logo.png"
                        alt="Sumu Logo"
                        width={360}
                        height={360}
                        className="w-[60px] sm:w-[80px]" 
                    />
            </Link>
                <Link 
                href="/" 
                className="hidden sm:inline text-gray-100 underline hover:text-blue-600 transition-colors cursor-pointer mb-1"
            >
                Home
            </Link>
            </div>

            {/* Right group */}
            <div className="flex items-end align-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                <div className="bg-[#4040FF] text-white font-semibold text-center text-xs sm:text-sm rounded-3xl py-1 sm:py-2 max-w-xs">
                    <WaitlistButton />
                </div>
            </div>
        </div>
        <div className = "text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl px-6 sm:px-10 md:px-16 lg:px-20 text-white font-semibold mt-8 sm:mt-20">
            <p>Blog</p>
        </div>
        <div className = "text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl px-8 sm:px-12 md:px-18 lg:px-24 text-white font-semibold mt-4 sm:mt-8">
            <p>Insights, Updates, and More</p>
        </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 md:px-16 lg:px-20 py-6 sm:py-8 md:py-10">
                {blogPosts.map((post, index) => (
                    <BlogCard
                    key={post.id}
                    image={post.image}
                    date={post.date}
                    title={post.title}
                    description={post.description}
                    isReversed={(index + 1) % 3 === 2} // Will be true for items 2, 5, 8, etc.
                    link={post.link}  
                    />
                ))}
                </div>
        </div>
    )
}