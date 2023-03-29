export default function StakingRunNode() {
    return (
        <div className="bg-staking" id="stake-run-node">
            <div
                className="p-2 md:p-0 max-w-7xl mx-auto bg-white pt-20 bg-staking relative grid gap-5 lg:grid-cols-2"
            >
                <div
                    className="py-16 px-4 sm:px-6 lg:py-10 lg:px-10 bg-gray-100 shadow rounded overflow-hidden"
                >
                    <div className="max-w-3xl mx-auto text-center pb-10">
                        <div className="flex justify-center">
                            <img alt="img"
                                src={"https://rocketpool.net/assets/services-panel-node-bab61c83.webp"}
                            />
                        </div>
                        <h2
                            className="py-10 text-center text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent leading-8"
                        >
                            Stake + Run Node
                        </h2>
                    </div>
                    <dl
                        className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 h-auto lg:h-80"
                    >
                        <div>
                            <dt>
                                <div className="flex justify-center">
                                    <div
                                        className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-b from-red-500 to-yellow-400 text-white"
                                    >
                                        <svg
                                            className="svg-inline--fa fa-network-wired fa-3x h-10 w-10"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="network-wired"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512"
                                        >
                                            <path
                                                className=""
                                                fill="currentColor"
                                                d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <p
                                    className="mt-5 text-lg leading-6 font-semibold text-gray-900 text-center"
                                >
                                    Permissionless
                                </p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500 text-center">
                                Anyone can join the Rocket Pool decentralised node
                                operator network.
                            </dd>
                        </div>
                        <div>
                            <dt>
                                <div className="flex justify-center">
                                    <div
                                        className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-b from-red-500 to-yellow-400 text-white"
                                    >
                                        <svg
                                            className="svg-inline--fa fa-ethereum fa-3x h-10 w-10"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="ethereum"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                        >
                                            <path
                                                className=""
                                                fill="currentColor"
                                                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <p
                                    className="mt-5 text-lg leading-6 font-semibold text-gray-900 text-center"
                                >
                                    Only 8 ETH
                                </p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500 text-center">
                                Stake with less than 32 ETH.
                            </dd>
                        </div>
                        <div>
                            <dt>
                                <div className="flex justify-center">
                                    <div
                                        className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-b from-red-500 to-yellow-400 text-white"
                                    >
                                        <svg
                                            className="svg-inline--fa fa-dollar-sign fa-3x h-10 w-10"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="dollar-sign"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                        >
                                            <path
                                                className=""
                                                fill="currentColor"
                                                d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <p
                                    className="mt-5 text-lg leading-6 font-semibold text-gray-900 text-center"
                                >
                                    Higher ROI
                                </p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500 text-center">
                                Earn commission from staking pool ETH and RPL rewards from
                                providing RPL collateral.
                            </dd>
                        </div>
                    </dl>
                    <div className="mt-20 pb-10 sm:pb-16">
                        <div className="relative">
                            <div className="absolute inset-0 h-1/2"></div>
                            <div
                                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                            >
                                <div className="max-w-5xl mx-auto">
                                    <dl
                                        className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-2"
                                    >
                                        <div
                                            className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
                                        >
                                            <dt
                                                className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                                            >
                                                ETH Rewards
                                            </dt>
                                            <dd
                                                className="order-1 text-5xl sm:text-2xl font-bold purple-gradient bg-clip-text text-transparent tracking-tight"
                                            >
                                                ≈ 7.10% APR
                                            </dd>
                                            <div
                                                className="hidden slider-target slider-ltr slider-horizontal slider-txt-dir-ltr"
                                            >
                                                <div className="slider-base">
                                                    <div className="slider-connects">
                                                        <div
                                                            className="slider-connect"
                                                            style={{ transform: "translate(0%, 0px) scale(1, 1)" }}
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className="slider-origin"
                                                        style={{ transform: "translate(0%, 0px);z-index: 4;" }}
                                                    >
                                                        <div
                                                            className="slider-handle slider-handle-lower"
                                                            data-handle="0"
                                                            tabindex="0"
                                                            role="slider"
                                                            aria-orientation="horizontal"
                                                            aria-valuemin="9000000.0"
                                                            aria-valuemax="20000000.0"
                                                            aria-valuenow="20000000.0"
                                                            aria-valuetext="20.0m ETH"
                                                        >
                                                            <div className="slider-touch-area"></div>
                                                            <div
                                                                className="slider-tooltip slider-tooltip-top"
                                                            >
                                                                20.0m ETH
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
                                        >
                                            <dt
                                                className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                                            >
                                                Variable
                                            </dt>
                                            <dd
                                                className="order-1 text-5xl sm:text-2xl font-bold purple-gradient bg-clip-text text-transparent tracking-tight"
                                            >
                                                + RPL Rewards
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
                    >
                        <div className="rounded-md shadow">
                            <a
                                href="https://rocketpool.net/node-operators"
                                target="_blank" rel="noreferrer"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button md:py-5 md:text-3xl md:px-10"
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="p-2 md:p-0 py-16 px-4 sm:px-6 lg:py-10 lg:px-10 bg-gray-100 shadow rounded overflow-hidden"
                >
                    <div className="max-w-3xl mx-auto text-center pb-10">
                        <div className="flex justify-center">
                            <img alt="img"
                                src="https://rocketpool.net/assets/services-panel-stake-e2d9b9e2.webp"
                            />
                        </div>
                        <h2
                            className="py-10 text-center text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent leading-8"
                        >
                            Stake ETH
                        </h2>
                    </div>
                    <dl
                        className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 h-auto lg:h-80"
                    >
                        <div>
                            <dt>
                                <div className="flex justify-center">
                                    <div
                                        className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-b from-red-500 to-yellow-400 text-white"
                                    >
                                        <svg
                                            className="svg-inline--fa fa-ethereum fa-3x h-10 w-10"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fab"
                                            data-icon="ethereum"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                        >
                                            <path
                                                className=""
                                                fill="currentColor"
                                                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <p
                                    className="mt-5 text-lg leading-6 font-semibold text-gray-900 text-center"
                                >
                                    Liquid
                                </p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500 text-center">
                                Deposit as little as 0.01 ETH and receive the rETH liquid
                                staking token. rETH accrues staking rewards over time.
                            </dd>
                        </div>
                        <div>
                            <dt>
                                <div className="flex justify-center">
                                    <div
                                        className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-b from-red-500 to-yellow-400 text-white"
                                    >
                                        <svg
                                            className="svg-inline--fa fa-users fa-3x h-10 w-10"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="users"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512"
                                        >
                                            <path
                                                className=""
                                                fill="currentColor"
                                                d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <p
                                    className="mt-5 text-lg leading-6 font-semibold text-gray-900 text-center"
                                >
                                    Decentralised
                                </p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500 text-center">
                                A decentralised network of node operators earn rewards for
                                rETH holders.
                            </dd>
                        </div>
                        <div>
                            <dt>
                                <div className="flex justify-center">
                                    <div
                                        className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-b from-red-500 to-yellow-400 text-white"
                                    >
                                        <svg
                                            className="svg-inline--fa fa-lock fa-3x h-10 w-10"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="lock"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path
                                                className=""
                                                fill="currentColor"
                                                d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <p
                                    className="mt-5 text-lg leading-6 font-semibold text-gray-900 text-center"
                                >
                                    Non-custodial
                                </p>
                            </dt>
                            <dd className="mt-2 text-base text-gray-500 text-center">
                                Node operators do not handle funds. Any penalties incurred
                                by node operators are taken from their earnings rather
                                than rETH holders.
                            </dd>
                        </div>
                    </dl>
                    <div className="mt-20 pb-10 sm:pb-16">
                        <div className="relative">
                            <div className="absolute inset-0 h-1/2"></div>
                            <div
                                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                            >
                                <div className="max-w-3xl mx-auto">
                                    <dl
                                        className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-1"
                                    >
                                        <div
                                            className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
                                        >
                                            <dt
                                                className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                                            >
                                                Based on 7 day average
                                            </dt>
                                            <dd
                                                className="order-1 text-5xl sm:text-2xl font-bold purple-gradient bg-clip-text text-transparent tracking-tight"
                                            >
                                                ≈ 3.03% APR
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
                    >
                        <div className="rounded-md shadow">
                            <a
                                href="https://stake.rocketpool.net/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button md:py-5 md:text-3xl md:px-10"
                            >
                                Stake
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
