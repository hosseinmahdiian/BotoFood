import React from "react";
import Apple from "../icons/Apple";
import SpaceX from "../icons/SpaceX";
import Binance from "../icons/Binance";
import Tesla from "../icons/Tesla";

const Companies = () => {
  return (
    <div className="grid  lg:grid-cols-4 grid-cols-2 mx-auto w-fit child:w-40   items-center">
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
};

export default Companies;
