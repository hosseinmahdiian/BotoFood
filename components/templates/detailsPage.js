import { useRouter } from "next/router";
import React from "react";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

const DetailsPage = (props) => {
  const router = useRouter();
  const {
    id,
    name,
    price,
    details,
    discount,
    ingredients,
    recipe,
    introduction,
  } = props;
  console.log(props);

  return (
    <div className="px-4 container mx-auto ">
      <h1 className="font-semibold border-b-2 border-lime-400  w-fit">
        Details
      </h1>

      <div className="md:flex gap-4 md:max-w-2xl mb-4  mx-auto  items-center  child:w-full mt-8">
        <img src={`/images/${id}.jpeg`} className="rounded-lg  md:w-1/2" />
        <div className=" flex md:block items-center justify-between my-4 md:child:mb-6 border-b pb-2 md:border-b-0">
          <h2 className="text-lime-400 font-bold ">{name}</h2>
          <div className="flex items-center gap-2 w-fit text-gray-500 ">
            <Location />
            <p className="text-sm md:text-base">{details[0].Cuisine}</p>
          </div>

          <div className="flex items-center gap-2 w-fit text-gray-500">
            <Dollar />
            <p>{price} $</p>
          </div>
          {discount > 0 && (
            <p className="md:w-1/2 text-center text-white bg-red-500 px-2 rounded-md">
              {(price * (100 - discount)) / 100} $
            </p>
          )}
        </div>
      </div>

      <p className="text-justify my-2">{introduction}</p>

      <h2 className="text-lime-400 font-semibold text-xl inline-block mb-4 mt-8">
        Details
      </h2>
      <ul className="text-gray-500 text-justify md:text-lg px-4  ">
        {details.map((i, index) => (
          <li key={index} className="flex gap-2 list-disc ">
            <p className="text-black pr-1">{Object.keys(i)[0]}</p>:
            <p className="text-gray-400 pr-1">{Object.values(i)[0]}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-lime-400 font-semibold text-xl inline-block mb-4 mt-8">
        ingredients
      </h2>
      <ul className="text-gray-500 text-justify md:text-lg px-4  ">
        {ingredients.map((i, index) => (
          <li key={index} className="text-justify text-black list-disc ">
            {i}
          </li>
        ))}
      </ul>

      <h2 className="text-lime-400 font-semibold text-xl inline-block mb-4 mt-8">
        recipe
      </h2>
      <div className="text-gray-500 text-justify md:text-lg px-4  ">
        {recipe.map((i, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 text-justify ${
              index % 2 == 0 ? `bg-lime-200` : `bg-lime-100`
            }`}
          >
            <span className="text-black font-semibold text-2xl">
              {index + 1}
            </span>{" "}
            <p>{i}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsPage;
