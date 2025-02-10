import React from "react";

const Insruuction = () => {
  return (
    <div className="mt-14">
      <h2 className="text-lime-400 font-semibold text-xl inline-block mb-4">
        How to Order?{" "}
      </h2>
      <ul className="text-gray-500 text-justify md:text-lg px-4  ">
        <li className="list-disc">
          Sign in (or create an account) and set your delivery address.
        </li>
        <li className="list-disc">
          Choose the restaurant you want to order from.
        </li>
        <li className="list-disc">Select your items and tap “Add to Cart”.</li>
        <li className="list-disc">
          To place your order, select “View cart” or “Checkout”.
        </li>
        <li className="list-disc">
          Review your order and tap “Place Order”...
        </li>
        <li className="list-disc">Track your order progress.</li>
      </ul>
    </div>
  );
};

export default Insruuction;
