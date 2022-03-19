// SPDX-License-Identifier: MIT
// Created By: Netan Mangal

pragma solidity ^0.8.4;

import "./ERC721A.sol";
import "./utils/AccessControl.sol";

contract NFTContract is ERC721A, AccessControl {
    uint256 public mintingAllowedAfter;
    uint256 public maxPurchase = 20;
    uint256 public totalTokens = 200;

    constructor (string memory name_, string memory symbol_, uint256 mintingAllowedAfter_)
    ERC721A(name_, symbol_) {
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
        mintingAllowedAfter = mintingAllowedAfter_;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721A, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function mint(uint256 quantity) external payable {
        // _safeMint's second argument now takes in a quantity, not a tokenId.
        require(block.timestamp >= mintingAllowedAfter, "NFTContract Error: Minting not allowed yet.");
        require(
            quantity <= maxPurchase, 
            string(
                abi.encodePacked(
                    "NFTContract Error: Can't mint more than ",
                    Strings.toString(maxPurchase),
                    " NFTs"
                )
            )
        );
        require(totalSupply() + quantity <= totalTokens, "NFTContract Error: Cannot mint these many tokens.");
        _safeMint(msg.sender, quantity);
    }

    function setReleaseTime(uint256 mintingAllowedAfter_) public onlyRole(DEFAULT_ADMIN_ROLE) {
        mintingAllowedAfter = mintingAllowedAfter_;
    }

    function reserveTokens(uint256 quantity_) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(totalSupply() + quantity_ <= totalTokens, "NFTContract Error: Cannot mint these many tokens.");
        _safeMint(msg.sender, quantity_);
    }
}