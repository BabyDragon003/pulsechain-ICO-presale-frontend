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
