import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="md:flex gap-4 items-center child:md:w-1/2 child:w-full mt-20">
      <img src="images/banner.png" className="  " />
      <div>
        <h2 className="py-1 mb-2 text-2xl border-b-4 border-lime-400 font-semibold w-fit">
          Boto Food
        </h2>

        <p className="font-semibold text-xl">Foood Delivery and Takeout</p>
        <p className="text-gray-500 mt-4 text-justify">
          Boto Food is an online food ordering and delivery platform lunched by
          Uber in 2014. Meals are by couriers using cars ,scooters,bikes,or on
          foot
        </p>

        <Link
          href="/categories"
          className=" inline-block  w-fit mt-4 bg-lime-400 text-white px-4 py-2 rounded-lg"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default Banner;
