import logo from "./apelaser.png";
import frame from "@conductiveai/conductive-sdk";
import React, { useEffect } from "react";
import { WalletConnect } from "./wallet-connect";

function App() {
  useEffect(() => {
    frame.init("16OG2oVu4GYg8CjfOQKHl_O7htLut7avxzjNbfLWyuc", {
      api_host: "https://analytics.dev-conductive.ai",
      debug: true,
      loaded: (frame) => {
        window.frame = frame;
      },
    });
  }, []);

  return (
    <div className="container max-w-xl my-4 mx-auto space-y-4">
      <header>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">SDK testing env</h1>
        </div>
      </header>

      <img
        id="NFT"
        src={logo}
        className="h-32 w-32 rounded-full ring-2 ring-black"
        alt="logo"
      />

      <div className="flex">
        <WalletConnect />
      </div>

      <div className="flex gap-2">
        <div className="flex mb-4">
          <a
            href="https://ape.to/zwcjk"
            className="rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800 bg-slate-100 text-slate-900 hover:bg-slate-200 h-10 py-2 px-4"
          >
            NPM Prod Campaign link
          </a>
        </div>

        <div className="flex">
          <a
            href="https://discord.ape.to/J3BPT9KsRJ"
            className="rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800 bg-slate-100 text-slate-900 hover:bg-slate-200 h-10 py-2 px-4"
          >
            NPM Prod Discord Join
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
