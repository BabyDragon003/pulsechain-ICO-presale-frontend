import React from "react";

import { ConnectWallet } from "./ConnectWallet";

export const Connect = function (props) {
  return (
    <React.Fragment>
      <div
        className="font-semibold uppercase lg:text-2xl text-xl hover:text-trumpos-fontLight text-center border-yellow-300 px-2 mx-auto lg:mx-0 my-auto py-2 bg-gray-200/[0.3] hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-yellow-300 items-center"
      >
        <ConnectWallet />
      </div>
    </React.Fragment>
  );
};

export default Connect;
