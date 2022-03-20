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