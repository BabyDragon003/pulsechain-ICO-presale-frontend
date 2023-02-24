import { useEffect, useState } from "react";
import ContractABI from "../assets/abi/ico.json"
import { useAccount } from "wagmi";
import { multicall, fetchBalance } from '@wagmi/core'
import { global } from "../config/global";
import { formatUnits } from "viem";

export function useContractStatus(refresh) {
    const [data, setData] = useState({
        totalSoldAmount: 0,
        totalFundsInUSD: 0,
        roundNumber: 0,
        currentTokenPrice: 0,
        plsAmountFor1USD: 0,
        nextRoundStartTime: 0,
        tokenBuyAmount: 0,
        projectTokenBalance: 0,
        payTokenBalance: [],
        payTokenAllowance: [],
        ethBalance: 0,
    })
    const { address } = useAccount();

    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        const timerID = setInterval(() => {
            setRefetch((prevData) => {
                return !prevData;
            })
        }, global.REFETCH_INTERVAL);

        return () => {
            clearInterval(timerID);
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const contract = global.CONTRACTS.Main;

                const contracts = [
                    {
                        address: contract,
                        abi: ContractABI,
                        functionName: 'totalSoldAmount',
                    },
                    {
                        address: contract,
                        abi: ContractABI,
                        functionName: 'totalFundsInUSD',
                    },
                    {
                        address: contract,
                        abi: ContractABI,
                        functionName: 'getRoundNumber',
                    },
                    {
                        address: contract,
                        abi: ContractABI,
                        functionName: 'getCurrentTokenPrice',
                    },
                    {
                        address: contract,
                        abi: ContractABI,
                        functionName: 'getPaymentTokenAmount',
                        args: [global.TOKENS[0].address, 1000000],
                    }
                ]

                const tRound = global.totalRounds + 2;
                for (let idx = 1; idx <= tRound; idx++) {
                    contracts.push({
                        address: contract,
                        abi: ContractABI,
                        functionName: 'getRoundStartTime',
                        args: [idx],
                    })
                }

                if (address) {
                    contracts.push({
                        address: contract,
                        abi: ContractABI,
                        functionName: 'tokenBuyAmount',
                        args: [address],
                    })
                    contracts.push({
                        address: contract,
                        abi: ContractABI,
                        functionName: 'balanceOf',
                        args: [address, global.PROJECT_TOKEN.address],
                    })
                    global.TOKENS.map((value, key) => {
                        return contracts.push({
                            address: contract,
                            abi: ContractABI,
                            functionName: 'balanceOf',
                            args: [address, value.address],
                        })
                    })
                    global.TOKENS.map((value, key) => {
                        return contracts.push({
                            address: contract,
                            abi: ContractABI,
                            functionName: 'allowance',
                            args: [address, contract, value.address],
                        })
                    })
                }
                const _data = await multicall({
                    chainId: global.chain.id,
                    contracts
                })
                const ethBalance = address ? parseFloat((await fetchBalance({ address })).formatted) : 0
                const length = global.TOKENS.length
                const roundNumber = _data[2].status === "success" ? parseInt(_data[2].result) : 0;

                setData({
                    totalSoldAmount: _data[0].status === "success" ? parseFloat(formatUnits(_data[0].result, global.PROJECT_TOKEN.decimals)) : 0,
                    totalFundsInUSD: _data[1].status === "success" ? parseFloat(formatUnits(_data[1].result, global.usdDecimals)) : 0,
                    roundNumber,
                    currentTokenPrice: _data[3].status === "success" ? parseFloat(formatUnits(_data[3].result, global.usdDecimals)) : 0,
                    plsAmountFor1USD: _data[4].status === "success" ? parseFloat(formatUnits(_data[4].result, global.chain.nativeCurrency.decimals)) : 0,
                    nextRoundStartTime: _data[5 + roundNumber].status === "success" ? parseInt(_data[5 + roundNumber].result) : 0,
                    tokenBuyAmount: address && _data[5 + tRound].status === "success" ? parseFloat(formatUnits(_data[5 + tRound].result, global.PROJECT_TOKEN.decimals)) : 0,
                    projectTokenBalance: address && _data[6 + tRound].status === "success" ? _data[6 + tRound].result : 0,
                    payTokenBalance: address ? _data.slice(7 + tRound, 7 + tRound + length) : [],
                    payTokenAllowance: address ? _data.slice(7 + tRound + length, 7 + tRound + 2 * length) : [],
                    ethBalance,
                })
            } catch (error) {
                console.log('useContractStatus err', error)
            }
        };
        fetchData();
        // eslint-disable-next-line
    }, [address, refetch, refresh])

    return data
}
