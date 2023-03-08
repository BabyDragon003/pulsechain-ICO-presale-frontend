import { formatUnits } from "viem";
import { global } from "../config/global";
import { formatNumber } from "../utils/utils";

export default function TokenSelectModal(props) {
    return (
        <div id="default-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-300">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            {
                                props && props.payTokenBalance && global.TOKENS.map((value, index) => {
                                    return (
                                        <button
                                            key={index}
                                            data-modal-hide="default-modal"
                                            className="w-full bg-gray-200/[0.1] gap-1 px-2 py-1 flex flex-row justify-between text-center items-center"
                                            type="button"
                                            onClick={() => {
                                                props.setToken({
                                                    ...value,
                                                    index,
                                                    payTokenBalance: props.payTokenBalance[index]?.status === "success" ?
                                                        parseFloat(formatUnits(props.payTokenBalance[index].result, value.decimals)) : 0,
                                                    payTokenAllowance: props.payTokenAllowance[index]?.status === "success" ?
                                                        parseFloat(formatUnits(props.payTokenAllowance[index].result, value.decimals)) : 0
                                                })
                                            }}
                                        >
                                            <div className="w-full gap-1 px-2 py-1 flex flex-row justify-start text-center items-center" type="button">
                                                <img src={value.logo} width={35} height={35} alt='token' />
                                                <label className="">{value.name}</label>
                                            </div>
                                            <label className="">
                                                {props.payTokenBalance[index]?.status === "success" ?
                                                    `${formatNumber(parseFloat(formatUnits(props.payTokenBalance[index].result, value.decimals)))}` : 0}
                                            </label>
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}