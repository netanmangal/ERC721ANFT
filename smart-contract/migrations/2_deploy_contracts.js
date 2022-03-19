const NFTContract = artifacts.require("NFTContract");

module.exports = (deployer) => {
    deployer.deploy(NFTContract, "Netizaq", "NTQ", 1647712593);
}