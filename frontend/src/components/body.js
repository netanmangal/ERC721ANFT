import {handleMint} from "../utils/helpers.js";

function Body ({state, contract}) {
    if (state.isMetamaskInstalled) {
        return (
            <div style={{paddingBottom: "50px"}}>
                <p>You are connected via address: <b>{state.accounts[0]}</b></p>
                <p>Contract address: <b>{contract.options.address}</b> on chain: <b>{contract.options.address}</b></p>

                <br />

                <h2>ERC721 Token Details</h2>
                <p>Name: {state.tokenName}</p>
                <p>Symbol: {state.tokenSymbol}</p>

                <br />
                <br />

                <h2>Mint tokens</h2>
                
            </div>
        );
    }

    return (
        <div>

        </div>
    );
}

export default Body;