import RecommendationsPage from "./RecommendationsPage"
import SocialFeed from "./SocialFeed"

export default function () {
    return (
        <div className = "flex flex-row p-4">
            <div className = "flex flex-col px-8 w-1/2">
                <SocialFeed />
                <div className = "text-white text-2xl text-center font-semibold">
                    <p>A Native Social Feed to Promote Your Content to All Fans and Creators on Suum</p>
                </div>
            </div>
            <div className = "flex flex-col w-1/2">
                <RecommendationsPage />
                <div className = "text-white text-2xl text-center font-semibold">
                    <p>Get Recommended by Other Fans and Creators</p>
                </div>
            </div>
        </div>
    );
}