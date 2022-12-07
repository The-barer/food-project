import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCategory } from "../api";
import { MealsList } from "../components/MealsList";
import { Preloader } from "../components/Preloader";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <h3> Category Page </h3>
      <button className="btn" onClick={() => navigate(-1)}>
        Назад
      </button>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  );
};

export { Category };
