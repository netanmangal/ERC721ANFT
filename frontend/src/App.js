import { useState, useEffect } from 'react';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import logo from './logo.png';
import './App.css';
import Body from "./components/body.js";
import web3 from "./web3.js";
import contract from "./contract.js";

function App() {
  let [state, setState] = useState({
    isMetamaskInstalled: false,
    accounts: [],
    tokenName: "",
    tokenSymbol: "",
    totalTokens: 0,
    totalSupplied: 0,
    mintingAllowedAfter: 0,
    mintNFTs: 0,
    reserveNFTs: 0,
    releaseTime: 0
  });

  useEffect(() => {
    toast.success("Welcome!!!");

    const init = async () => {
      const _accounts = await web3.eth.getAccounts();
      const _tokenName = await contract.methods.name().call();
      const _tokenSymbol = await contract.methods.symbol().call();
      const _totalTokens = await contract.methods.totalTokens().call();
      const _totalSupplied = await contract.methods.totalSupply().call();
      const _mintingAllowedAfter = await contract.methods.mintingAllowedAfter().call();
      setState({
        ...state,
        isMetamaskInstalled: true,
        accounts: _accounts,
        tokenName: _tokenName,
        tokenSymbol: _tokenSymbol,
        totalTokens: parseInt(_totalTokens),
        totalSupplied: parseInt(_totalSupplied),
        mintingAllowedAfter: parseInt(_mintingAllowedAfter)
      });
    }
    
    const checkMetamask = async () => {
      if (typeof web3 !== 'undefined') {
        if (web3?.currentProvider?.isMetaMask === true) {
          if (state.accounts.length === 0) {
            await window.ethereum.enable();
          }

          init();
        } else {
          toast.error("Kindly install metamask!!!");
        }
      } else {
        toast.error("Kindly install metamask!!!");
      }
    }

    checkMetamask();
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        <img style={{marginTop: "50px"}} src={logo} className="App-logo" alt="logo" />
        <h5>Made By: <a href="https://www.linkedin.com/in/netanmangal" target="_blank" rel="noreferrer noopener">Netan Mangal</a></h5>

        <h6>Use Chain: <b>BSC - Testnet</b></h6>

        <Body state={state} contract={contract} setState={setState} toast={toast} />

        <ToastContainer style={{fontSize: "1rem", width: "30rem"}} position="top-right" theme="dark" autoClose={3000} />
      </div>
    </div>
  );
}

export default App;