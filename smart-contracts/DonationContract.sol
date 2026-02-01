```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 {
    address public owner;
    uint256 public totalDonations;

    constructor() {
        owner = msg.sender;
    }

    function donate() public payable {
        require(msg.value > 0, "Donasi harus lebih dari 0 ETH");
        totalDonations += msg.value;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdraw() public {
        require(msg.sender == owner, "Hanya owner yang bisa menarik dana");
        payable(owner).transfer(address(this).balance);
    }
}
