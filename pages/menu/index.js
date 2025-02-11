import MenuPage from "@/components/templates/menuPage";
import React from "react";

const menu = ({ data }) => {
  return <MenuPage data={data} />;
};

export default menu;

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60 * 60, //second
  };
}
