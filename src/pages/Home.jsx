import { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoriesList } from "../components/CategoriesList";

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
      {!categories.length ? (
        <Preloader />
      ) : (
        <CategoriesList categories={categories} />
      )}
    </>
  );
};
