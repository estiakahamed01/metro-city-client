import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Plans = () => {
    return (
        <div>
            <SectionTitle liteHeading="Plans"></SectionTitle>
            <div className="flex flex-row justify-center items-center gap-5 w-4/5 mx-auto">
                <div className="p-4 border-2 border-green-300 rounded-2xl">
                    <h4 className="px-4 py-2 bg-green-300 rounded-2xl w-fit font-bold">Free For 1 Month</h4>
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-black font-bold text-xl">Premium Individual</h2>
                        <div className="flex flex-col items-end">
                            <h2 className="text-black font-bold text-lg">Free</h2>
                            <h2 className="text-gray-500 font-semibold">For 1 Month</h2>
                        </div>
                    </div>
                    <ul>
                        <li className="text-gray-800 font-semibold">• 1 Premium account </li>
                        <li className="text-gray-800 font-semibold">• Cancel anytime </li>
                        <li className="text-gray-800 font-semibold">• 15 hours/month of listening time from our audiobooks subscriber catalog</li>
                    </ul>
                    <br /><br /><br />
                    <button className="p-4 bg-green-300 w-full rounded-full font-bold">Try free for 1 month</button>
                    <h3 className="text-gray-800 font-semibold mt-6">Free for 1 month, then $10.99 per month after. Offer only available if you haven't tried Premium before. Terms apply. </h3>
                </div>

                <div className="p-4 border-2 border-red-300 rounded-2xl flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-black font-bold text-xl">Premium Duo </h2>
                        <div className="flex flex-col items-end">
                            <h2 className="text-black font-bold text-lg">$14.99 </h2>
                            <h2 className="text-gray-500 font-semibold">Per Month</h2>
                        </div>
                    </div>
                    <ul>
                        <li className="text-gray-800 font-semibold">• 2 Premium accounts  </li>
                        <li className="text-gray-800 font-semibold">• Cancel anytime </li>
                        <li className="text-gray-800 font-semibold">• 15 hours/month of listening time from our audiobooks subscriber catalog (plan manager only) </li>
                    </ul>
                    <br /><br /><br />
                    <button className="p-4 bg-red-300 w-full rounded-full font-bold">Get Premium Duo</button>
                    <h3 className="text-gray-800 font-semibold mt-6">For couples who reside at the same address. Terma apply. </h3>
                </div>

                <div className="p-4 border-2 border-sky-300 rounded-2xl flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-black font-bold text-xl">Premium Family </h2>
                        <div className="flex flex-col items-end">
                            <h2 className="text-black font-bold text-lg">$16.99 </h2>
                            <h2 className="text-gray-500 font-semibold">Per Month</h2>
                        </div>
                    </div>
                    <ul>
                        <li className="text-gray-800 font-semibold">• Up to 6 Premium or Kids accounts   </li>
                        <li className="text-gray-800 font-semibold">• Block explicit music  </li>
                        <li className="text-gray-800 font-semibold">• Access to Spotify Kids  </li>
                        <li className="text-gray-800 font-semibold">• Cancel anytime   </li>
                        <li className="text-gray-800 font-semibold">• 15 hours/month of listening time from our audiobooks subscriber catalog (plan manager only)  </li>
                    </ul>
                    <br /><br /><br />
                    <button className="p-4 bg-sky-300 w-full rounded-full font-bold">Get Premium Family</button>
                    <h3 className="text-gray-800 font-semibold items-stretch  mt-6">For up to 6 family members residing at the same address. Terms apply</h3>
                </div>
            </div>
        </div>
    );
};

export default Plans;