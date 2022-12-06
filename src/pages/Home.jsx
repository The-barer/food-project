import { useEffect, useState } from "react";
import { getAllCategories } from "../api";

export const Home = () => {
  const [categories, setCategories] = useState([]);
  //   const [meal, setMeal] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data.categories);
    });
  }, []);

  return (
    <>
      <h3> Home Page </h3>
      {categories.length}
      {/* <p> {meal} </p> */}
    </>
  );
};
