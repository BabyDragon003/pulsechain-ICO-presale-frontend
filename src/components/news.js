export default function News() {
    return (
        <div className="bg-white py-16 sm:py-24" id="news">
            <div className="relative sm:py-16">
                <div
                    className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
                >
                    <div>
                        <h2
                            className="py-2 text-center text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent leading-8"
                        >
                            Latest News
                        </h2>
                        <p
                            className="mt-4 text-center max-w-3xl text-xl text-gray-600 lg:mx-auto font-semibold"
                        >
                            Read more about what is happening with the protocol.
                        </p>
                    </div>
                    <div data-headlessui-state="open" className="mt-6 p-6 bg-gray-50">
                        <dt className="text-lg">
                            <button
                                id="headlessui-disclosure-button-1"
                                type="button"
                                aria-expanded="true"
                                aria-controls="headlessui-disclosure-panel-2"
                                data-headlessui-state="open"
                                className="text-left w-full flex justify-between items-start text-gray-400"
                            >
                                <span className="text-xl text-gray-600 font-semibold"
                                >2023
                                </span>
                                <span className="ml-6 h-7 flex items-center"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="-rotate-180 h-6 w-6 transform"
                                >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </dt>
                        <dd
                            id="headlessui-disclosure-panel-2"
                            data-headlessui-state="open"
                            className="mt-2 pr-12 bg-gray-50"
                        >
                            <div className="mt-2 pt-2 grid gap-8">
                                <div target="_blank" rel="noreferrer">
                                    <p className="text-sm text-indigo-600">
                                        <time datetime="4th March, 2023"
                                        >4th March, 2023</time>
                                    </p>
                                    <a
                                        href="https://medium.com/rocket-pool/rocket-pool-atlas-upgrade-7c69e39a3d5f"
                                        className="mt-2 block"
                                    ><p className="text-xl font-semibold text-gray-900">
                                            Rocket Pool — Atlas Upgrade
                                        </p>
                                        <p className="mt-3 text-base text-gray-500">
                                            Hello Rocket Poolers! Today we’re excited to
                                            officially announce the protocol’s next major
                                            upgrade, Atlas!
                                        </p></a>
                                    <div className="mt-3">
                                        <a
                                            href="https://medium.com/rocket-pool/rocket-pool-atlas-upgrade-7c69e39a3d5f"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                                        >
                                            Read full story
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </dd>
                    </div>
                    <div className="relative p-6">
                        <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true"
                        >
                            <div className="border-t border-gray-300 w-9/12 mx-auto"></div>
                        </div>
                    </div>
                    <div data-headlessui-state="" className="mt-6 p-6 bg-gray-50">
                        <dt className="text-lg">
                            <button
                                id="headlessui-disclosure-button-3"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                                className="text-left w-full flex justify-between items-start text-gray-400"
                            >
                                <span className="text-xl text-gray-600 font-semibold"
                                >2022</span><span className="ml-6 h-7 flex items-center"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="rotate-0 h-6 w-6 transform"
                                >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </dt>
                    </div>
                    <div className="relative p-6">
                        <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true"
                        >
                            <div className="border-t border-gray-300 w-9/12 mx-auto"></div>
                        </div>
                    </div>
                    <div data-headlessui-state="" className="p-6 bg-gray-50">
                        <dt className="text-lg">
                            <button
                                id="headlessui-disclosure-button-5"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                                className="text-left w-full flex justify-between items-start text-gray-400"
                            >
                                <span className="text-xl text-gray-600 font-semibold"
                                >2021</span><span className="ml-6 h-7 flex items-center"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="rotate-0 h-6 w-6 transform"
                                >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </dt>
                    </div>
                    <div className="relative p-6">
                        <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true"
                        >
                            <div className="border-t border-gray-300 w-9/12 mx-auto"></div>
                        </div>
                    </div>
                    <div data-headlessui-state="" className="p-6 bg-gray-50">
                        <dt className="text-lg">
                            <button
                                id="headlessui-disclosure-button-7"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                                className="text-left w-full flex justify-between items-start text-gray-400"
                            >
                                <span className="text-xl text-gray-600 font-semibold"
                                >2020</span><span className="ml-6 h-7 flex items-center"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="rotate-0 h-6 w-6 transform"
                                >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </dt>
                    </div>
                    <div className="relative p-6">
                        <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true"
                        >
                            <div className="border-t border-gray-300 w-9/12 mx-auto"></div>
                        </div>
                    </div>
                    <div data-headlessui-state="" className="p-6 bg-gray-50">
                        <dt className="text-lg">
                            <button
                                id="headlessui-disclosure-button-9"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                                className="text-left w-full flex justify-between items-start text-gray-400"
                            >
                                <span className="text-xl text-gray-600 font-semibold"
                                >2019</span><span className="ml-6 h-7 flex items-center"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="rotate-0 h-6 w-6 transform"
                                >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </dt>
                    </div>
                    <div className="relative p-6">
                        <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true"
                        >
                            <div className="border-t border-gray-300 w-9/12 mx-auto"></div>
                        </div>
                    </div>
                    <div data-headlessui-state="" className="p-6 bg-gray-50">
                        <dt className="text-lg">
                            <button
                                id="headlessui-disclosure-button-11"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                                className="text-left w-full flex justify-between items-start text-gray-400"
                            >
                                <span className="text-xl text-gray-600 font-semibold"
                                >2018</span><span className="ml-6 h-7 flex items-center"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="rotate-0 h-6 w-6 transform"
                                >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </dt>
                    </div>
                    <div className="relative p-6">
                        <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true"
                        >
                            <div className="border-t border-gray-300 w-9/12 mx-auto"></div>
                        </div>
                    </div>
                    <div data-headlessui-state="" className="p-6 bg-gray-50">
                        <dt className="text-lg">
                            <button
                                id="headlessui-disclosure-button-13"
                                type="button"
                                aria-expanded="false"
                                data-headlessui-state=""
                                className="text-left w-full flex justify-between items-start text-gray-400"
                            >
                                <span className="text-xl text-gray-600 font-semibold"
                                >2017</span><span className="ml-6 h-7 flex items-center"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="rotate-0 h-6 w-6 transform"
                                >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </dt>
                    </div>
                </div>
            </div>
        </div>
    );
}
