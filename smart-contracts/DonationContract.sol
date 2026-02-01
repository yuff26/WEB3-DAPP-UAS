// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DonationContract {
    uint256 public totalDonations;

    function donate() public payable {
        totalDonations += msg.value;
    }

    function getTotalDonations() public view returns (uint256) {
        return totalDonations;
    }
}
