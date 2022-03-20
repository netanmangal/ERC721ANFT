import {handleMint} from "../utils/helpers.js";

function Body ({state, contract, setState, toast}) {
    if (state.isMetamaskInstalled) {
        return (
            <div style={{paddingBottom: "50px"}}>
                <p>You are connected via address: <b>{state.accounts[0]}</b></p>
                <p>Contract address: <b>{contract.options.address}</b></p>
                <p>Chain: <b>BSC - Testnet</b></p>


                <br />

                <h2>ERC721 Token Details</h2>
                <p>Name: {state.tokenName}</p>
                <p>Symbol: {state.tokenSymbol}</p>

                <br />
                <br />

                <h2>Mint NFTs</h2>
                <form onSubmit={(event) => handleMint(event, toast, contract, state)}>
                <input placeholder="How many NFTs to mint?" type="text" onChange={(event) => {setState({...state, mintNFTs: event.target.value})}} /> <br />
                <button type='submit'>Mint</button>
                </form>
                
            </div>
        );
    }

    return (
        <div>

        </div>
    );
}

export default Body;