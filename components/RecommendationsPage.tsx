export default function RecommendationsPage () {
    return(
        <div className = "gradient-bg border-white border-4 rounded-lg pb-6 px-12">
            <div className = "flex flex-col bg-gray-100 border-r-2 border-l-2">
                <div className = "text-black text-xl font-semibold text-center">
                    <p>Recommendations</p>
                </div>
                <div className = "flex flex-row align-center justify-center gap-24 px-24 py-2">
                    <div className = "bg-blue-400 border-2 p-2 border-gray-400 text-center rounded-full max-w-40 text-white text-md font-semibold">
                        <p>Made By Creators You Follow</p>
                    </div>
                    <div className = "bg-white border-2 max-w-40 border-gray-400 p-2 rounded-full text-center text-black text-md font-semibold">
                        <p>Made By Mutual Fans</p>
                    </div>
                </div>
                {/* insert component for reccomendation block */}

        </div>
            </div>        
    );
}