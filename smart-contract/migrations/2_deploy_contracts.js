const NFTContract = artifacts.require("NFTContract");

module.exports = (deployer) => {
    deployer.deploy(NFTContract);
}