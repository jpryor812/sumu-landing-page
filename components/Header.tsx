export default function Header() {
    return (
        <div className="flex flex-row justify-between align py-4 sm:px-4 md:px-5 lg:px-6 2xl:px-8">
                    {/*header container*/}


        <div className="flex flex-row items-center justify-bewtween gap-4" >
                    {/*left header*/}

            <div className ="flex flex-row font-medium text-white text-md underline gap-20 px-24">
            <p>Creators</p>
            <p>Pricing</p>
            <p>Features</p>
            <p>Why Create on Suum</p>
            </div>
        </div>

        <div className= "flex justify-end px-16">
                    {/*right header*/}

        <div className=" rounded-3xl py-3 px-6 text-black font-semibold bg-white">
            <button>Start Creating</button>
        </div>
        </div>
        </div>
    );
}