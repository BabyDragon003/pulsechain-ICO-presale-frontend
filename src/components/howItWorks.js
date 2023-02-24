export default function HowItWorks() {
    return (
        <div className="py-20 bg-white" id="how-it-works">
            <div className="p-2 md:p-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2
                        className="py-2 text-center text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-red-500 via-yellow-400 to-red-400 bg-clip-text text-transparent leading-8"
                    >
                        How does Rocket Pool work?
                    </h2>
                    <p
                        className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto font-semibold"
                    >
                        Rocket Pool is the first truly decentralised Ethereum staking
                        pool.
                    </p>
                </div>
                <div className="mt-10">
                    <dl
                        className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
                    >
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-20 w-20 rounded-full border-2 border-yellow-200 text-red-500"
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
                                <p
                                    className="ml-24 text-lg leading-6 font-semibold text-gray-900"
                                >
                                    Liquid Staking
                                </p>
                            </dt>
                            <dd className="mt-2 ml-24 text-base text-gray-500">
                                Innovative liquid staking token that accrues while using
                                an increasing exchange rate, rather than rebasing which is
                                better for DeFi and better for tax reporting.
                            </dd>
                        </div>
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-20 w-20 rounded-full border-2 border-yellow-200 text-red-500"
                                >
                                    <svg
                                        className="svg-inline--fa fa-file-lines fa-3x h-10 w-10"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="file-lines"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                    >
                                        <path
                                            className=""
                                            fill="currentColor"
                                            d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                                        ></path>
                                    </svg>
                                </div>
                                <p
                                    className="ml-24 text-lg leading-6 font-semibold text-gray-900"
                                >
                                    Smart Contracts
                                </p>
                            </dt>
                            <dd className="mt-2 ml-24 text-base text-gray-500">
                                Open source, audited smart contracts ensure funds are
                                never in the custody of node operators.
                            </dd>
                        </div>
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-20 w-20 rounded-full border-2 border-yellow-200 text-red-500"
                                >
                                    <svg
                                        className="svg-inline--fa fa-server fa-3x h-10 w-10"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="server"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            className=""
                                            fill="currentColor"
                                            d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <p
                                    className="ml-24 text-lg leading-6 font-semibold text-gray-900"
                                >
                                    Smart Nodes
                                </p>
                            </dt>
                            <dd className="mt-2 ml-24 text-base text-gray-500">
                                With our custom node software any user/business/group can
                                run a node on our network, stake their own ETH for free
                                and generate a higher return.
                            </dd>
                        </div>
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-20 w-20 rounded-full border-2 border-yellow-200 text-red-500"
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
                                <p
                                    className="ml-24 text-lg leading-6 font-semibold text-gray-900"
                                >
                                    Minimised Penalty Risk
                                </p>
                            </dt>
                            <dd className="mt-2 ml-24 text-base text-gray-500">
                                Any losses that occur from bad nodes for stakers who
                                deposit ETH are socialised across the whole network to
                                minimise impacts on any single user.
                            </dd>
                        </div>
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-20 w-20 rounded-full border-2 border-yellow-200 text-red-500"
                                >
                                    <svg
                                        className="svg-inline--fa fa-sitemap fa-3x h-10 w-10"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="sitemap"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path
                                            className=""
                                            fill="currentColor"
                                            d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z"
                                        ></path>
                                    </svg>
                                </div>
                                <p
                                    className="ml-24 text-lg leading-6 font-semibold text-gray-900"
                                >
                                    Infrastructure
                                </p>
                            </dt>
                            <dd className="mt-2 ml-24 text-base text-gray-500">
                                Network redundancy and decentralisation are key pillars of
                                the Rocket Pool network. Any potential issues and their
                                effects are minimised using this technique.
                            </dd>
                        </div>
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-20 w-20 rounded-full border-2 border-yellow-200 text-red-500"
                                >
                                    <svg
                                        className="svg-inline--fa fa-rocket fa-3x h-10 w-10"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="rocket"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            className=""
                                            fill="currentColor"
                                            d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                        ></path>
                                    </svg>
                                </div>
                                <p
                                    className="ml-24 text-lg leading-6 font-semibold text-gray-900"
                                >
                                    Experience
                                </p>
                            </dt>
                            <dd className="mt-2 ml-24 text-base text-gray-500">
                                Rocket Pool was originally designed in late 2016 using the
                                Mauve Paper which was released by Vitalik. We've been in
                                the space now longer than most, and it shows.
                            </dd>
                        </div>
                    </dl>
                </div>
                <div
                    className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
                >
                    <h2
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        <span
                            className="block bg-gradient-to-r from-yellow-200 to-red-600 bg-clip-text text-transparent"
                        >Want to know more?</span>
                    </h2>
                    <div className="mt-8 flex-none md:flex justify-center">
                        <div className="block md:inline-flex mb-3 md:mb-0">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://medium.com/rocket-pool/rocket-pool-staking-protocol-part-1-8be4859e5fbd"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                            >
                                Explainer series
                            </a>
                        </div>
                        <div className="mb-3 block md:inline-flex md:ml-3 md:mb-0">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://docs.rocketpool.net/guides/"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                            >
                                {`Guides & documentation`}
                            </a>
                        </div>
                        <div className="mb-3 block md:inline-flex md:ml-3 md:mb-0">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://docs.rocketpool.net/developers/"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                            >
                                Developers
                            </a>
                        </div>
                        <div className="mb-3 block md:inline-flex md:ml-3 md:mb-0">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://medium.com/rocket-pool/rocket-pool-rpl-token-upgrade-new-addresses-e96c12c55adf"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-md text-white rp-button"
                            >
                                Token addresses
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
