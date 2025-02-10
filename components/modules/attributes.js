import React from "react";
import Fast from "../icons/Fast";
import Clock from "../icons/Clock";
import Choice from "../icons/Choice";
import Food from "../icons/Food";

const Attributes = () => {
  return (
    <div className="mt-10">
      <h2 className="text-lime-400 font-semibold text-xl inline-block mb-8">
        Why Us?
      </h2>
      <div className="grid sm:grid-cols-4 grid-cols-2 items-center w-fit mx-auto gap-4">
        <div className="text-lime-400 border shadow-lg rounded-md  text-center md:w-40 md:h-40 w-32 h-32 md:pt-8 pt-5 ">
          <Fast />
          <p className="text-black md:text-lg font-semibold mt-2">Fast</p>
        </div>

        <div className="text-lime-400 border shadow-lg rounded-md  text-center md:w-40 md:h-40 w-32 h-32 md:pt-8 pt-5 ">
          <Food />
          <p className="text-black md:text-lg font-semibold mt-2">
            Best Restaurans
          </p>
        </div>
        <div className="text-lime-400 border shadow-lg rounded-md  text-center md:w-40 md:h-40 w-32 h-32 md:pt-8 pt-5 ">
          <Choice />
          <p className="text-black md:text-lg font-semibold mt-2">
            your Choice
          </p>
        </div>
        <div className="text-lime-400 border shadow-lg rounded-md  text-center md:w-40 md:h-40 w-32 h-32 md:pt-8 pt-5 ">
          <Clock />
          <p className="text-black md:text-lg font-semibold mt-2">24 - 7</p>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
