exports.handleMint = async (event, toast, contract, state) => {
    event.preventDefault();
    toast("Minting in process...", {
        autoClose: 12000
    });
    
    const response = await contract.methods.mint(state.mintNFTs)
        .send({from: state.accounts[0], gas: 1000000});
    console.log(response);

    toast.success("Txn completed");
}

exports.handleReserveTokens = async (event, toast, contract, state) => {
    event.preventDefault();
    toast("Transaction in process...", {
        autoClose: 12000
    });
    
    const response = await contract.methods.reserveTokens(state.reserveNFTs)
        .send({from: state.accounts[0], gas: 1000000});
    console.log(response);

    toast.success("Txn completed");
}

exports.handleSetReleaseTime = async (event, toast, contract, state) => {
    event.preventDefault();
    toast("Transaction in process...", {
        autoClose: 12000
    });

    const response = await contract.methods.setReleaseTime(state.releaseTime)
        .send({from: state.accounts[0], gas: 1000000});
    console.log(response);

    toast.success("Txn completed");
}