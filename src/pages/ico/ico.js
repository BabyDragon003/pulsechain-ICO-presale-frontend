import React from "react";
import { useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import Status from "../../components/Status";
import BuyCard from "../../components/BuyCard";
import { useContractStatus } from "../../hooks/useContractStatus";
import Connect from "../../components/Connect";
import Lottie from 'react-lottie';
import rocketAnimation from '../../assets/lottie/rocket.json'
import factoryAnimation from '../../assets/lottie/factory.json'
import './ico.css'

export default function IcoPage() {
    const [refresh, setRefresh] = useState(false)
    const {
        totalSoldAmount,
        totalFundsInUSD,
        roundNumber,
        currentTokenPrice,
        plsAmountFor1USD,
        nextRoundStartTime,
        tokenBuyAmount,
        projectTokenBalance,
        payTokenBalance,
        payTokenAllowance,
        ethBalance,
    } = useContractStatus(refresh)

    return (
        <div
            className=""
            id="header"
        >
            <div className="bg-header relative overflow-hidden">
                <div className="bg-fx"></div>
                <div className="rocket"></div>
                <div className="trail"></div>
                <div className="bg-clouds-top"></div>
                <div className="relative overflow-hidden">
                    <div className="relative pt-6 pb-5 sm:pb-10">
                        <div className="mt-5 mx-auto max-w-7xl lg:px-4 px-1">
                            <div className="flex flex-row justify-items-center lg:justify-between gap-3">
                                <div className="flex lg:flex-row lg:justify-items-right lg:gap-2">
                                    <img alt="img"
                                        src={"/image/rocket.png"}
                                        className="lg:max-w-lg"
                                    />
                                    <img alt="img"
                                        src={"/image/logo_string.png"}
                                        className="hidden lg:flex w-0 lg:w-auto py-5 mx-3"
                                    />
                                </div>
                                <Connect />
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative w-11/12 lg:w-5/6 mx-auto mt-0"
                    >
                        <Status
                            totalSoldAmount={totalSoldAmount}
                            totalFundsInUSD={totalFundsInUSD}
                            roundNumber={roundNumber}
                            currentTokenPrice={currentTokenPrice}
                            plsAmountFor1USD={plsAmountFor1USD}
                            tokenBuyAmount={tokenBuyAmount}
                            projectTokenBalance={projectTokenBalance}
                            nextRoundStartTime={nextRoundStartTime}
                        />
                        <div className="w-full flex lg:flex-row flex-col justify-between gap-5 items-center mx-auto lg:px-2 my-5 lg:mt-[20px]">
                            <div className="hidden lg:flex w-1/3 opacity-50">
                                <Lottie
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: rocketAnimation,
                                        rendererSettings: {
                                            preserveAspectRatio: "xMidYMid slice"
                                        }
                                    }}
                                    height={380}
                                    width={280}
                                />
                            </div>
                            <div className="">
                                <BuyCard
                                    setRefresh={setRefresh}
                                    refresh={refresh}
                                    payTokenBalance={payTokenBalance}
                                    payTokenAllowance={payTokenAllowance}
                                    ethBalance={ethBalance}
                                    nextRoundStartTime={nextRoundStartTime}
                                    roundNumber={roundNumber}
                                    totalSoldAmount={totalSoldAmount}
                                    currentTokenPrice={currentTokenPrice}
                                />
                            </div>
                            <div className="hidden lg:flex w-1/3 opacity-80">
                                <Lottie
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: factoryAnimation,
                                        rendererSettings: {
                                            preserveAspectRatio: "xMidYMid slice"
                                        }
                                    }}
                                    height={400}
                                    width={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
