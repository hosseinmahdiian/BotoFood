import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../modules/card";

const CategoriesPage = ({ data }) => {
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: "", time: "" });
  console.log(router.query);

  useEffect(() => {
    const { difficulty, time } = router.query;
    if (difficulty != query.difficulty || time != query.time) {
      setQuery(router.query);
    }
  }, []);
  const chengeHnadeler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className=" md:flex justify-between md:mx-0 mx-auto gap-4 px-4 child:mt-4  mb-4 child:md:mt-0  max-w-lg ">
        <select
          value={query.difficulty}
          name="difficulty"
          className="border outline-none text-lime-400 rounded-lg px-2 w-full h-10 md:w-60  block  "
          onChange={(e) => chengeHnadeler(e)}
        >
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select
          value={query.time}
          name="time"
          className="border outline-none text-lime-400 rounded-lg px-2 w-full h-10 md:w-60  block  "
          onChange={(e) => chengeHnadeler(e)}
        >
          <option value="">Vookiing Time</option>
          <option value="more">More thane 30 min</option>
          <option value="less">less than 30 min</option>
        </select>

        <button
          onClick={() =>
            router.push({
              pathname: "/categories",
              query,
            })
          }
          className="border bg-lime-400 text-white rounded-lg w-full h-10 md:w-60  block  "
        >
          Search
        </button>
      </div>

      {data.length == 0 ? (
        <img
          src="/images/search.png"
          alt="search"
          className="w-40 md:w-fit  mt-10 mx-auto
              "
        />
      ) : (
        <div className="grid  md:grid-cols-3 xs:grid-cols-2 gap-5 lg:gap-10 mx-auto py-4 w-fit ">
          {data.map((food) => (
            <Card key={food.id} {...food} />
          ))}
        </div>
      )}
    </>
  );
};

export default CategoriesPage;
