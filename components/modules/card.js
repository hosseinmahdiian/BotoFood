import React from "react";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import Link from "next/link";

const Card = (props) => {
  const { id, name, price, details, discount } = props;
  return (
    <div className="shadow-lg rounded-lg  border  lg:w-80 md:w-60 w-52 sm:w-52 xs:w-44 p-2 relative">
      <img src={`images/${id}.jpeg`} alt={name} className="rounded-lg" />
      {discount > 0 && (
        <p className="bg-red-500 md:px-2 md:py-1 absolute md:left-5 left-3 md:top-5 top-3 text-white border border-white md:text-base text-sm ">
          {discount} %
        </p>
      )}
      <div className="flex items-center gap-2 justify-between">
        <p className="text-lime-400 text-sm md:text-base ">{name}</p>
        <div className="flex items-center gap-2 w-fit text-gray-500">
          <p className="text-sm md:text-base">{details[0].Cuisine}</p>
          <Location />
        </div>
      </div>

      <div className="flex items-center gap-2 w-fit text-gray-500">
        <Dollar />
        {discount > 0 ? (
          <p className="text-red-500">{(price * (100 - discount)) / 100}$</p>
        ) : (
          <p>{price}$</p>
        )}
      </div>

      <Link
        href={`menu/${id}`}
        className="inline-block w-full text-white text-center rounded-md  py-2 bg-lime-400"
      >
        See Details
      </Link>
    </div>
  );
};

export default Card;
