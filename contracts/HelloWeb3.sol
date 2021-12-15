// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HelloWeb3 {
    uint256 totalHellos;

    constructor() {
        console.log("Hello Web3");
    }

    function hello() public {
        totalHellos += 1;

        console.log("%s has said hello", msg.sender);
    }

    function getTotalHellos() public view returns (uint256) {
        console.log("We have %d total waves!", totalHellos);

        return totalHellos;
    }
}
