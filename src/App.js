import logo from "./apelaser.png";
import "./App.css";

// Web3 Wallet Connect Shit
// import Web3 from "web3";

// New SDK from NPM
import frame from "@conductiveai/conductive-sdk";
import React from "react";
// import { BlockHeader, Block } from 'web3-eth' // ex. package types

// Wallet connect function
// const web3 = new Web3('ws://localhost:3001');
// const web3 = new Web3("wss://ericlsung.com/AstroChimp");
// async function connect() {
//   if (window.ethereum) {
//     await window.ethereum.request({ method: "eth_requestAccounts" });
//     window.web3 = new Web3(window.ethereum);
//     const account = web3.eth.accounts;
//     //Get the current MetaMask selected/active wallet
//     const walletAddress = account.givenProvider.selectedAddress;
//     console.log(`Wallet: ${walletAddress}`);
//   } else {
//     console.log("No wallet");
//   }
// }

function App() {
  React.useEffect(() => {
    frame.init("pIoFHWz77KQIMIAPt7lTyMc_cSrcB2MmwDsaQTTaEn4", {
      api_host: "https://analytics.dev-conductive.ai",
      debug: true,
    });

    setTimeout(() => {
      if (window.frameUtils.frame_id) {
        document.getElementById("fingerprintId").innerHTML =
          window.frameUtils.frame_id;
      }

      if (window.frameUtils.distinct_id) {
        document.getElementById("distinctId").innerHTML =
          window.frameUtils.distinct_id;
      }
    }, 2000);

    // return () => {
    //   timeout.clearTimeout();
    // };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img id="NFT" src={logo} className="App-logo" alt="logo" />

        <p id="goham">
          {/* Testing NPM install of SDK 
          <br/>Pointed to QA analytics. 
          <br/>SDK-test project. */}
          New NPM Install New SDK
        </p>

        <ul>
          <li>
            <a href="https://ape.to/zwcjk">NPM Prod Campaign link </a>
          </li>
          <li>
            <a href="https://discord.ape.to/J3BPT9KsRJ">
              NPM Prod Discord Join{" "}
            </a>
          </li>
        </ul>

        <div>
          Fingerprint ID: <span id="fingerprintId">Loading...</span>
        </div>
        <div>
          Distinct ID: <span id="distinctId">Loading...</span>
        </div>

        {/* <input className="wconnect" type="button" value="Connect Wallet" onClick={connect}/> */}

        {/* <div className="wrapper">
          <a className="cta" href="#" onClick={connect}>
            <span>Connect Wallet</span>
          </a>
        </div> */}
      </header>
    </div>
  );
}

export default App;