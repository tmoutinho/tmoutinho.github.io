import React, { useState } from "react";
import { ethers } from "ethers";

export function WalletConnect() {
  let [userAccount, setUserAccount] = useState({
    isConnect: false,
    Account: "",
  });

  let isItConnect = async () => {
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let accounts = await provider.send("eth_requestAccounts", []);

    if (accounts.length > 0) {
      return {
        status: true,
        userAddress: accounts[0],
      };
    } else {
      return {
        status: false,
        userAddress: "",
      };
    }
  };

  let connect = async () => {
    let Status = await isItConnect();
    localStorage.setItem("isConnected", Status.status);
    setUserAccount((prev) => {
      return { ...prev, Account: Status.userAddress };
    });
  };

  window.ethereum.on("accountsChanged", async () => {
    localStorage.removeItem("isConnected");
    setUserAccount((prev) => {
      return { ...prev, Account: "" };
    });
    // connect();
  });

  // useEffect(() => {
  //   let status = localStorage.getItem("isConnected");
  //   if (status) {
  //     connect();
  //   }
  //   if (status === null) {
  //     if (window.ethereum.selectedAddress === null) {
  //       //console.log("welcome User!");
  //     } else {
  //       connect();
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      {userAccount.Account === "" && (
        <button
          onClick={connect}
          className="rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800 bg-slate-900 text-white hover:bg-slate-700 h-10 py-2 px-4"
        >
          Connect Wallet
        </button>
      )}
      {userAccount.Account !== "" && (
        <div>
          <p className="text-xs">CONNECTED</p>
          <p className="text-base font-semibold">
            {userAccount.Account.slice(0, 6)}...{userAccount.Account.slice(-4)}
          </p>
        </div>
      )}
    </>
  );
}
