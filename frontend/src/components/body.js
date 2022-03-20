import {handleMint, handleReserveTokens, handleSetReleaseTime} from "../utils/helpers.js";

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

                <p>Max Suppky of NFTs: {state.totalTokens}</p>
                <p>NFTs available: {state.totalTokens - state.totalSupplied}</p>
                <p>Miniting of tokens allowed after: {new Date(state.mintingAllowedAfter * 1000).toISOString()}</p>


                <br />
                <br />

                <h2>Mint NFTs</h2>
                <form onSubmit={(event) => handleMint(event, toast, contract, state)}>
                <input placeholder="How many NFTs to mint?" type="text" onChange={(event) => {setState({...state, mintNFTs: event.target.value})}} /> <br />
                <button type='submit'>Mint</button>
                </form>

                <br />
                <br />

                <h2>Reserve NFTs (OnlyAdmin function)</h2>
                <form onSubmit={(event) => handleReserveTokens(event, toast, contract, state)}>
                <input placeholder="How many NFTs to reserve?" type="text" onChange={(event) => {setState({...state, reserveNFTs: event.target.value})}} /> <br />
                <button type='submit'>Reserve</button>
                </form>

                <br />
                <br />

                <h2>Set Release Time for Minting NFTs (OnlyAdmin function)</h2>
                <form onSubmit={(event) => handleSetReleaseTime(event, toast, contract, state)}>
                <input placeholder="Release Time for allowing minting?" type="text" onChange={(event) => {setState({...state, releaseTime: event.target.value})}} /> <br />
                <button type='submit'>Set Release Time</button>
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