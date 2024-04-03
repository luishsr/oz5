// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract HelloWorld is Initializable, OwnableUpgradeable {
    string private greeting;

    function initialize(string memory _greeting) public initializer {
        __Ownable_init(msg.sender);
        greeting = _greeting;
    }

    function setGreeting(string memory _greeting) public onlyOwner {
        greeting = _greeting;
    }

    function sayHello() public view returns (string memory) {
        return greeting;
    }
}
