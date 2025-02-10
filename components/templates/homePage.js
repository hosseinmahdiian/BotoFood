import React from "react";
import Banner from "../modules/banner";
import Attributes from "../modules/attributes";
import Definition from "../modules/definition";
import Companies from "../modules/companies";
import Insruuction from "../modules/insruuction";
import Guide from "../modules/guide";
import Restriction from "../modules/restriction";

const HomePage = () => {
  return (
    <div className="mx-auto container px-4 min-h-[calc(100vh-181px)] ">
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Insruuction />
      <Guide />
      <Restriction />
    </div>
  );
};

export default HomePage;
