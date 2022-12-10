import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMeal } from "../api";

import { Preloader } from "../components/Preloader";

const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);
    const { strMealThumb, strMeal, strInstructions } = recipe;
    const navigate = useNavigate();

    useEffect(() => {
        getMeal(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            <button className="btn" onClick={() => navigate(-1)}>
                Назад
            </button>

            {!recipe ? (
                <Preloader />
            ) : (
                <div className="card">
                    <div className="meal-main">
                        <img
                            style={{
                                display:'flex',
                                margin: '0 auto',
                                maxWidth: '100%',
                            }}
                            src={strMealThumb}
                            alt={strMeal}
                        />

                        <div className="meal-recipe">
                            <div className="meal-title">{strMeal}</div>
                            <p>{strInstructions}</p>
                        </div>
                    </div>
                    <div className="card-content" style={{ flexGrow: 1 }}>
                        <table className="centered">
                            <thead>
                                <tr>
                                    <th>Ingredients</th>
                                    <th>Mesure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(recipe).map((key) => {
                                    if (key.includes("Ingredient") && recipe[key]) {
                                        return (
                                            <tr key={key}>
                                                <td> {recipe[key]}</td>
                                                <td>
                                                    {" "}
                                                    {recipe[`strMeasure${key.slice(13)}`]}
                                                </td>
                                            </tr>
                                        );
                                    }
                                    return null;
                                })}
                            </tbody>
                        </table>

                        {recipe.strYoutube ? (
                            <div
                                className="row"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <h5> Video recipe</h5>
                                <iframe
                                    title={id}
                                    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                        -11
                                    )}`}
                                    allowFullScreen
                                />
                            </div>
                        ) : null}
                    </div>
                    <div className="card-action"></div>
                </div>
            )}
        </>
    );
};

export { Recipe };
