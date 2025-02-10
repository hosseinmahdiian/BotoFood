import React from "react";
import Card from "../modules/card";

const MenuPage = ({ data }) => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="py-1 mb-2 text-2xl border-b-4 border-lime-400 font-semibold w-fit">
        Menu
      </h2>
      <div className="grid  md:grid-cols-3 sm:grid-cols-2 w-fit gap-5 lg:gap-10 mx-auto py-4 ">
        {data.map((food) => (
          <Card key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
