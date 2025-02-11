import DetailsPage from "@/components/templates/detailsPage";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const MenuID = ({ food }) => {
  // console.log(food);
  const router = useRouter();

  // if (router.isFallback) {
  //   return <h2>Loading Page...</h2>;
  // }

  return <DetailsPage {...food} />;
};

export default MenuID;
export async function getStaticPaths() {
  const res = await fetch(`https://boto-food-api.vercel.app/data`);
  const json = await res.json();
  const data = json.slice(0, 10);
  const paths = data.map((food) => ({
    params: { menuID: food.id.toString() },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  try {
    const { params } = context;
    console.log(params.menuID);

    const res = await fetch(
      `https://boto-food-api.vercel.app/data/${params.menuID}`
    );
    const data = await res.json();

    if (!data.id) {
      return {
        notFound: true,
      };
    } else
      return {
        props: { food: data },
        revalidate: 60 * 60,
      };
  } catch (error) {
    return {
      notFound: true,
    };
  }
  // }
}
