import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getCategory } from "../api";
import { MealsList } from "../components/MealsList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const Category = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const [filtredCatalog, setFiltredCatalog] = useState([]);
    const navigate = useNavigate();
    const { pathname, search } = useLocation();

    const handelSearch = (str, type = "") => {
        if (str.length === 0) {
            setFiltredCatalog(meals);
            navigate({ pathname });
        } else {
            setFiltredCatalog(
                meals.filter((item) =>
                    item.strMeal.toLowerCase().includes(str.toLowerCase())
                )
            );

            navigate({
                pathname,
                search: `search=${str}`,
            });
        }
    };

    useEffect(() => {
        getCategory(name).then((data) => {
          setMeals(data.meals)
          setFiltredCatalog(
            search
                ? data.meals.filter((item) =>
                      item.strMeal
                          .toLowerCase()
                          .includes(search.split("=")[1].toLowerCase())
                  )
                : data.meals
        );
        });
    }, [name, search]);

    return (
        <>
            <h3> Category {name} </h3>
            <Search cb={handelSearch} />
            <button className="btn" onClick={() => navigate(-1)}>
                Назад
            </button>
            {!meals.length ? <Preloader /> : <MealsList meals={filtredCatalog} />}
        </>
    );
};

export { Category };
