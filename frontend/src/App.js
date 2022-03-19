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
    tokenSymbol: ""
  });

  useEffect(() => {
    toast.success("Welcome!!!");

    const init = async () => {
      setState({
        ...state,
        tokenName: await contract.methods.name().call(),
        tokenSymbol: await contract.methods.symbol().call(),
        accounts: await web3.eth.getAccounts()
      });

      console.log(state);
    }
    
    const checkMetamask = async () => {
      if (typeof web3 !== 'undefined') {
        if (web3?.currentProvider?.isMetaMask === true) {
          setState({
            ...state,
            isMetamaskInstalled: true
          });
          init();

          if (state.accounts.length === 0) {
            await window.ethereum.enable();
          }
        } else {
          toast.error("Kindly install metamask!!! - 1");
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

        <ToastContainer style={{fontSize: "1rem", width: "30rem"}} position="top-right" theme="dark" autoClose={3000} />
      </div>
    </div>
  );
}

export default App;