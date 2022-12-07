import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMeal } from "../api";
import { Recipe } from "../components/Recipe";
import { Preloader } from "../components/Preloader";

const Meal = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMeal(id)
      .then((data) => setRecipe(data.meals))
      .finally(() => console.log(...recipe));
  }, [id]);

  return (
    <>
      <h3> {recipe.length ? recipe[0].strMeal : id} </h3>
      <button className="btn" onClick={() => navigate(-1)}>
        Назад
      </button>

      {!recipe.length ? <Preloader /> : <Recipe {...recipe[0]} />}
    </>
  );
};

export { Meal };
