import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useWallet } from "@solana/wallet-adapter-react";
import { getParsedNftAccountsByOwner } from "@nfteyez/sol-rayz";
import { CREATOR_ADDRESS } from "../config";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import Box from "../components/Box";

export interface NFTType {
  imgUrl: string;
  tokenId: string;
  description: string;
}

const Home: NextPage = () => {
  return (
    <main className="w-full">
      <img
        src="/img/background.png"
        className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-center bg-no-repeat bg-cover -z-10"
        alt=""
      />
      <div className="flex items-center justify-center min-h-[70vh] mx-auto lg:container my-10">
        <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
          <Box price={1.5} imgUrl="/img/box1.png" />
          <Box price={0} imgUrl="/img/box2.png" />
        </div>
      </div>
    </main>
  );
};

export default Home;
