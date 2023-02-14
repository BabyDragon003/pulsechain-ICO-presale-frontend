import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import { writeContract, prepareWriteContract, /* fetchFeeData,*/ waitForTransaction } from "@wagmi/core"
import { formatNumber, getDefaultGas, getMaxValue, isSupportedChain, ICO_BEFORE } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faChevronDown, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { formatUnits, parseUnits } from "viem";
import { global } from "../config/global";
import contractABI from '../assets/abi/ico.json'
import erc20ABI from '../assets/abi/token.json'
import TokenSelectModal from "./TokenSelectModal";
import { useAmount } from "../hooks/useAmount";
import { staticConfig } from "./static";

export default function BuyItem(props) {
    const [token, setToken] = useState({
        ...global.TOKENS[0],
        index: 0,
        payTokenBalance: props && props.payTokenBalance[0]?.status === "success" ?
            parseFloat(formatUnits(props.payTokenBalance[0].result, global.TOKENS[0].decimals)) : 0,
        payTokenAllowance: props && props.payTokenAllowance[0]?.status === "success" ?
            parseFloat(formatUnits(props.payTokenAllowance[0].result, global.TOKENS[0].decimals)) : 0
    })

    useEffect(() => {
        setToken((prev) => {
            return {
                ...prev,
                payTokenBalance: props?.payTokenBalance[prev.index]?.status === "success" ?
                    parseFloat(formatUnits(props.payTokenBalance[prev.index].result, prev.decimals)) : 0,
                payTokenAllowance: props?.payTokenAllowance[prev.index]?.status === "success" ?
                    parseFloat(formatUnits(props.payTokenAllowance[prev.index].result, prev.decimals)) : 0
            }
        })
    }, [props.payTokenAllowance, props.payTokenBalance])

    const [payTokenAmount, setPayTokenAmount] = useState('')
    const [outTokenAmount, setOutTokenAmount] = useState('')
    const [activeBox, setActiveBox] = useState('INPUT')

    const { contract, payAmountOut, tokenAmountOut } = useAmount(token, payTokenAmount, outTokenAmount, props.currentTokenPrice)

    useEffect(() => {
        if (activeBox === 'INPUT') {
            setOutTokenAmount(tokenAmountOut)
        } else if (activeBox === 'OUTPUT') {
            setPayTokenAmount(payAmountOut)
        }
    }, [activeBox, payAmountOut, tokenAmountOut])

    const { address } = useAccount()
    const { chain } = useNetwork()

    const [btnMsg, setBtnMsg] = useState("BUY NOW")
    const [pending, setPending] = useState(false)
    const [errMsg, setErrMsg] = useState(false)

    const [curTime, setCurTime] = useState(false)

    useEffect(() => {
        const timerID = setInterval(() => {
            const now = Math.round(Date.now() / 1000);
            setCurTime(now)
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!props) {
            setBtnMsg("LOADING...")
            setErrMsg("Please wait! Loading...")
            return
        }

        if (pending) {
            setBtnMsg("PENDING")
            setErrMsg("Please wait! Pending...")
            return
        }

        if (!address) {
            setBtnMsg("Connect")
            setErrMsg("Please connect wallet!")
            return
        }

        if (!isSupportedChain(chain)) {
            setBtnMsg("Wrong Network")
            setErrMsg(`Please connect wallet to ${chain.name}!`)
            return
        }

        if (props.ethBalance < getDefaultGas()) {
            setBtnMsg(`Insufficient ${global.chain.name}`)
            setErrMsg(`Insufficient ${global.chain.name}! Please buy more ${global.chain.name}!`)
            return
        }

        const validAmount = parseFloat(payTokenAmount)
        if (!validAmount || validAmount < 0) {
            setBtnMsg("Enter amount")
            setErrMsg(`Please enter valid ${token.name} amount!`)
            return
        }

        if (validAmount > getMaxValue(token.payTokenBalance, token.isNative)) {
            setBtnMsg(`Insufficient ${token.name}`)
            setErrMsg(`Insufficient ${token.name}! Please buy more ${token.name}!`)
            return
        }

        if (token.payTokenAllowance < validAmount + 1000000) {
            setBtnMsg('ENABLE')
            setErrMsg(``)
            return
        }

        if (props.icoStatus === ICO_BEFORE) {
            setBtnMsg(props.icoStatus)
            setErrMsg(`${props.icoStatusTitle} ${props.icoStatusDetail}`)
            return
        }

        setBtnMsg('BUY NOW')
    }, [address, chain, payTokenAmount, pending, props, curTime, token])

    const handleBtn = async () => {
        if (btnMsg === 'ENABLE' || btnMsg === 'BUY NOW') {
            setPending(true)
            try {
                // const feeData = await fetchFeeData()

                let data = {
                    chainId: chain.id,
                    // gasPrice: feeData.gasPrice ? feeData.gasPrice : undefined,
                }
                if (btnMsg === 'ENABLE') {
                    data = {
                        ...data,
                        address: token.address,
                        abi: erc20ABI,
                    }
                    try {
                        data = {
                            ...data,
                            functionName: 'increaseAllowance',
                            args: [contract, staticConfig.MAX_UINT256_HALF],
                        }
                        // const incApproveData = 
                        await prepareWriteContract(data)
                    } catch (error) {
                        data = {
                            ...data,
                            functionName: 'approve',
                            args: [contract, staticConfig.MAX_UINT256],
                        }
                    }
                } else {
                    data = {
                        ...data,
                        address: contract,
                        abi: contractABI,
                    }
                    if (token.isNative) {
                        if (activeBox === 'INPUT') {
                            data = {
                                ...data,
                                functionName: 'buyTokenExactInWithPLS',
                                value: parseUnits(payTokenAmount, token.decimals)
                            }
                        } else {
                            data = {
                                ...data,
                                functionName: 'buyTokenExactOutWithPLS',
                                args: [parseUnits(outTokenAmount, global.PROJECT_TOKEN.decimals)],
                                value: parseUnits(payTokenAmount, token.decimals)
                            }
                        }
                    } else {
                        if (activeBox === 'INPUT') {
                            data = {
                                ...data,
                                functionName: 'buyTokenExactIn',
                                args: [token.address, parseUnits(payTokenAmount, token.decimals)],
                            }
                        } else {
                            data = {
                                ...data,
                                functionName: 'buyTokenExactOut',
                                args: [token.address, parseUnits(outTokenAmount, global.PROJECT_TOKEN.decimals)],
                            }
                        }
                    }
                }

                const preparedData = await prepareWriteContract(data)

                const writeData = await writeContract(preparedData)

                const txPendingData = waitForTransaction(writeData)
                toast.promise(txPendingData, {
                    pending: "Waiting for pending... 👌",
                });

                const txData = await txPendingData;
                if (txData && txData.status === "success") {
                    if (btnMsg === 'ENABLE') {
                        toast.success(`Successfully enabled to buy! 👌`)
                    } else {
                        toast.success(`Successfully bought ${formatNumber(parseFloat(outTokenAmount))} ${global.PROJECT_TOKEN.name}! 👍`)
                    }
                } else {
                    toast.error("Error! Transaction is failed.");
                }

            } catch (error) {
                console.log(error)
                try {
                    if (error?.shortMessage) {
                        toast.error(error?.shortMessage);
                    } else {
                        toast.error("Unknown Error! Something went wrong.");
                    }
                } catch (error) {
                    toast.error("Error! Something went wrong.");
                }
            }
            try {
                if (props.setRefresh !== undefined && props.refresh !== undefined) {
                    props.setRefresh(!props.refresh)
                }
            } catch (error) { }
            setPending(false)
            return
        }

        toast.warn(errMsg)
    }

    return (
        <>
            {
                props && <div className="w-full lg:w-11/12 py-2 bg-gray-200/[0.1] h-[400px] flex flex-col justify-center items-center text-center px-2 my-3">
                    <div className="w-full lg:w-5/6 px-3 flex flex-row items-center justify-between text-lg text-center">
                        <label className="">You pay </label>
                    </div>
                    <div className="w-full lg:w-5/6 px-3 py-1 bg-gray-200/[0.1] flex flex-row items-center justify-between text-2xl text-center gap-2">
                        <input
                            className={`w-2/5 lg:w-3/5 bg-transparent border-0 focus:border-0 active:border-0 focus:outline-0 ${pending ? `text-gray-800` : `text-white`}`}
                            placeholder="0"
                            value={payTokenAmount}
                            disabled={pending}
                            onChange={(e) => {
                                const payTokenValue = e.target.value.length !== 0 ? parseFloat(e.target.value) : 0;
                                if (payTokenValue >= 0) {
                                    setPayTokenAmount(e.target.value)
                                }
                                if (activeBox !== 'INPUT') {
                                    setActiveBox('INPUT')
                                }
                            }}
                        />
                        <button
                            className="hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 w-auto bg-gray-200/[0.1] gap-1 px-2 py-1 flex flex-row justify-end text-center items-center"
                            disabled={pending}
                            data-modal-target="default-modal"
                            data-modal-toggle="default-modal"
                            type="button">
                            <img src={token.logo} width={35} height={35} alt='token' />
                            <label>{token.name}</label>
                            <FontAwesomeIcon icon={faChevronDown} size="sm" />
                        </button>
                    </div>
                    <div className="w-full lg:w-5/6 px-3 flex flex-row items-center justify-start text-sm text-center">
                        <div className="flex flex-row items-center justify-end gap-2 text-center">
                            <label>{`Balance: ${formatNumber(token.payTokenBalance)}`}</label>
                            <button
                                className={`${pending ? `text-yellow-800` : `text-yellow-400`}`}
                                disabled={pending}
                                onClick={(e) => {
                                    const maxValue = getMaxValue(token.payTokenBalance, token.isNative);
                                    if (maxValue >= 0) {
                                        setPayTokenAmount(maxValue.toString())
                                    }
                                    if (activeBox !== 'INPUT') {
                                        setActiveBox('INPUT')
                                    }
                                }}
                            >Max</button>
                        </div>
                    </div>
                    <div className="my-0">
                        <FontAwesomeIcon icon={faArrowCircleDown} size="2xl" />
                    </div>
                    <div className="w-full lg:w-5/6 px-3 flex flex-row items-center justify-between text-lg text-center">
                        <label className="">You receive </label>
                    </div>
                    <div className="w-full lg:w-5/6 px-3 py-1 bg-gray-200/[0.1] flex flex-row items-center justify-between text-2xl text-center gap-2">
                        <input
                            className={`w-2/5 lg:w-3/5 bg-transparent border-0 focus:border-0 active:border-0 focus:outline-0 ${pending ? `text-gray-800` : `text-white`}`}
                            placeholder="0"
                            value={outTokenAmount}
                            disabled={pending}
                            onChange={(e) => {
                                const outTokenValue = e.target.value.length !== 0 ? parseFloat(e.target.value) : 0;
                                if (outTokenValue >= 0) {
                                    setOutTokenAmount(e.target.value)
                                }
                                if (activeBox !== 'OUTPUT') {
                                    setActiveBox('OUTPUT')
                                }
                            }}
                        />
                        <button
                            disabled={pending}
                            className="w-auto bg-gray-200/[0.1] gap-1 px-2 py-1 flex flex-row justify-end text-center items-center"
                            type="button">
                            <img src={global.PROJECT_TOKEN.logo} width={35} height={35} alt='token' />
                            <label className="">{global.PROJECT_TOKEN.name}</label>
                        </button>
                    </div>
                    <button
                        className={`flex flex-row items-center justify-center gap-2 mt-10 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 w-1/2 h-[50px] bg-gray-200/[0.1] text-xl border-1 ${pending ? `bg-gray-200/[0.5] border-yellow-700 text-gray-800` : `border-yellow-500 text-white`}`}
                        disabled={pending}
                        onClick={handleBtn}
                    >
                        <div>
                            {btnMsg}
                        </div>
                        <div>
                            {pending ? <FontAwesomeIcon icon={faSpinner} size="sm" className="animate-spin" /> : <></>}
                        </div>
                    </button>
                    <TokenSelectModal payTokenBalance={props.payTokenBalance} payTokenAllowance={props.payTokenAllowance} setToken={setToken} />
                </div>
            }
        </>
    );
}
