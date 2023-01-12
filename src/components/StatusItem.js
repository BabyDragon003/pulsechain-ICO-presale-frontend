import { global } from "../config/global";
import { formatNumber } from "../utils/utils";

export default function StatusItem(props) {
    return (
        <>
            <div className="hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 w-1/2 bg-gray-200/[0.1] text-xl border-1 border-yellow-500 text-white lg:w-1/5 w-full flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-3">
                <div className="flex flex-col items-center">
                    <label className="text-3xl sm:text-4xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                        {`$${props.currentTokenPrice ? formatNumber(props.currentTokenPrice) : 0}`}
                    </label>
                    <label className="text-1xl sm:text-3xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                        {`(${formatNumber(props.currentTokenPrice * props.plsAmountFor1USD)} ${global.TOKENS[0].name})`}
                    </label>
                </div>
                <label className="font-semibold uppercase text-gray-50 text-lg">{`${global.PROJECT_TOKEN.name} Price`}</label>
            </div>
            <div className="hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 w-1/2 bg-gray-200/[0.1] text-xl border-1 border-yellow-500 text-white lg:w-1/5 w-full flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-3">
                <div className="flex flex-col items-center">
                    <label className="text-3xl sm:text-4xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                        {`$${props.totalFundsInUSD ? formatNumber(props.totalFundsInUSD) : 0}`}
                    </label>
                    <label className="text-1xl sm:text-3xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                        {`(${formatNumber(props.totalFundsInUSD * props.plsAmountFor1USD)} ${global.TOKENS[0].name})`}
                    </label>
                </div>
                <label className="font-semibold uppercase text-gray-50 text-lg">Total Raised</label>
            </div>
            <div className="hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 w-1/2 bg-gray-200/[0.1] text-xl border-1 border-yellow-500 text-white lg:w-1/5 w-full flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-3">
                <div className="flex flex-col items-center">
                    <label className="text-3xl sm:text-4xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                        {`${props.totalSoldAmount ? formatNumber(props.totalSoldAmount) : 0} ${global.PROJECT_TOKEN.name}`}
                    </label>
                    <label className="text-1xl sm:text-3xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                        {`(${formatNumber(props.totalSoldAmount * 100 / global.totalVolume)} %)`}
                    </label>
                </div>
                <label className="font-semibold uppercase text-gray-50 text-lg">Total Sold</label>
            </div>
            <div className="hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 w-1/2 bg-gray-200/[0.1] text-xl border-1 border-yellow-500 text-white lg:w-1/5 w-full flex lg:flex-col flex-row lg:justify-center justify-between items-center text-center px-2 py-3">
                <div className="flex flex-col items-center">
                    <label className="text-3xl sm:text-4xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                        {`${props.tokenBuyAmount ? formatNumber(props.tokenBuyAmount) : 0} ${global.PROJECT_TOKEN.name}`}
                    </label>
                    <label className="text-1xl sm:text-3xl font-bold block bg-gradient-to-r from-pink-100 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                        {`(${props.totalSoldAmount ? formatNumber(props.tokenBuyAmount * 100 / props.totalSoldAmount) : 0} %)`}
                    </label>
                </div>
                <label className="font-semibold uppercase text-gray-50 text-lg">My Allocation</label>
            </div>
        </>
    );
}
