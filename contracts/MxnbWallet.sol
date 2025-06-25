// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MxnbWallet {
    address public owner;

    event Deposit(address indexed from, uint256 amount);
    event Transfer(address indexed to, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    function transferMXNB(address payable to) external payable {
        require(msg.value > 0, "Amount must be greater than zero");
        to.transfer(msg.value);
        emit Transfer(to, msg.value);
    }
}
