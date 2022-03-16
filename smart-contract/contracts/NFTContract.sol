// SPDX-License-Identifier: MIT
// Created By: Netan Mangal

pragma solidity ^0.8.4;

import "./ERC721A.sol";
import "./utils/AccessControl.sol";

contract NFTContract is ERC721A, AccessControl {
    constructor (string memory name_, string memory symbol_)
    ERC721A(name_, symbol_) {
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721A, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function mint(uint256 quantity) external payable {
        // _safeMint's second argument now takes in a quantity, not a tokenId.
        _safeMint(msg.sender, quantity);
    }
}