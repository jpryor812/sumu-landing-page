import RecommendationsPage from "./RecommendationsPage"
import SocialFeed from "./SocialFeed"
import RecommendationComponent from "./RecommendationComponents";

export default function () {
    return (
        <div className = "flex flex-row p-4 px-24 gap-16">
            <div className="px-6 pt-4 pb-4 rounded-xl bg-gradient-to-b from-[#003308] via-[#00BF63] to-[#003308] flex flex-col w-1/2">
            <SocialFeed />
            <div className = "text-white text-lg font-semibold mt-4">
                    <p>A Native Social Feed to Promote Your Content to all Fans and Creators in Sumu</p>
                </div>
                <div className = "text-white text-sm">
                    <p>This is a great opportunity to post snippets or teasers of your content to curious scrollers looking for something new</p>
                </div>
            </div>
            <div className="px-6 pt-4 pb-4 rounded-xl bg-gradient-to-b from-[#003308] via-[#00BF63] to-[#003308] flex flex-col w-1/2">
            <RecommendationComponent />
                <div className = "text-white text-lg font-semibold mt-4">
                    <p>Get Recommended by Other Fans and Creators</p>
                </div>
                <div className = "text-white text-sm">
                    <p>Fans can see which creators who creators they're subscribed to recommend. Or, fans who share a premium subscription to a creator can see what other creators that fan follows</p>
                </div>
            </div>
        </div>
    );
}